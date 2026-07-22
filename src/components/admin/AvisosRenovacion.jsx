// src/components/admin/AvisosRenovacion.jsx
//
// Banner que sale automáticamente arriba del panel (para admin y
// gestores) mostrando las pólizas que vencen en los próximos 60
// días. Para cada una se puede:
//  - Registrar un intento de contacto (si contestó, si le mandamos
//    WhatsApp, y una nota), quedando guardado con fecha y hora.
//  - Marcar como renovada, actualizando la fecha de vencimiento —
//    en cuanto la nueva fecha cae fuera de los 60 días, desaparece
//    sola de este aviso.

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import "./AvisosRenovacion.css";

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const venc = new Date(fecha);
  return Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
}

function formatoFechaHora(fechaISO) {
  const f = new Date(fechaISO);
  return (
    f.toLocaleDateString("es-ES") +
    " " +
    f.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
  );
}

function AvisosRenovacion() {
  const [avisos, setAvisos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [seguimientos, setSeguimientos] = useState({});
  const [abiertoId, setAbiertoId] = useState(null);
  const [renovandoId, setRenovandoId] = useState(null);
  const [historialAbiertoId, setHistorialAbiertoId] = useState(null);
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [formContacto, setFormContacto] = useState({
    contactado: true,
    whatsapp_enviado: false,
    notas: "",
  });
  const [guardando, setGuardando] = useState(false);

  const cargarAvisos = async () => {
    setCargando(true);
    const hoy = new Date();
    const en60dias = new Date();
    en60dias.setDate(hoy.getDate() + 60);

    const { data, error } = await supabase
      .from("polizas")
      .select(
        "id, cliente_nombre, cliente_telefono, tipo_seguro, fecha_vencimiento"
      )
      .eq("estado", "ACTIVA")
      .gte("fecha_vencimiento", hoy.toISOString().slice(0, 10))
      .lte("fecha_vencimiento", en60dias.toISOString().slice(0, 10))
      .order("fecha_vencimiento", { ascending: true });

    if (!error && data) {
      setAvisos(data);
      if (data.length > 0) {
        const ids = data.map((p) => p.id);
        const { data: registros } = await supabase
          .from("seguimientos_poliza")
          .select("*")
          .in("poliza_id", ids)
          .order("fecha_hora", { ascending: false });

        const agrupado = {};
        (registros || []).forEach((r) => {
          if (!agrupado[r.poliza_id]) agrupado[r.poliza_id] = [];
          agrupado[r.poliza_id].push(r);
        });
        setSeguimientos(agrupado);
      }
    }
    setCargando(false);
  };

  useEffect(() => {
    cargarAvisos();
  }, []);

  const abrirRegistro = (id) => {
    setAbiertoId(abiertoId === id ? null : id);
    setRenovandoId(null);
    setFormContacto({ contactado: true, whatsapp_enviado: false, notas: "" });
  };

  const abrirRenovar = (id) => {
    setRenovandoId(renovandoId === id ? null : id);
    setAbiertoId(null);
    setNuevaFecha("");
  };

  const guardarContacto = async (polizaId) => {
    setGuardando(true);
    const { error } = await supabase.from("seguimientos_poliza").insert({
      poliza_id: polizaId,
      contactado: formContacto.contactado,
      whatsapp_enviado: formContacto.whatsapp_enviado,
      notas: formContacto.notas || null,
    });
    setGuardando(false);

    if (error) {
      alert("No se pudo guardar el registro de contacto.");
      return;
    }
    setAbiertoId(null);
    cargarAvisos();
  };

  const guardarRenovacion = async (polizaId) => {
    if (!nuevaFecha) {
      alert("Elige la nueva fecha de vencimiento.");
      return;
    }
    setGuardando(true);
    const { error } = await supabase
      .from("polizas")
      .update({ fecha_vencimiento: nuevaFecha })
      .eq("id", polizaId);
    setGuardando(false);

    if (error) {
      alert("No se pudo actualizar la póliza.");
      return;
    }
    setRenovandoId(null);
    cargarAvisos();
  };

  if (cargando || avisos.length === 0) return null;

  return (
    <div className="avisosRenovacion">
      <div className="avisosRenovacionTitulo">
        ⚠️ {avisos.length}{" "}
        {avisos.length === 1 ? "póliza vence pronto" : "pólizas vencen pronto"}{" "}
        — llama al cliente para renovar antes de que caduque
      </div>
      <div className="avisosRenovacionLista">
        {avisos.map((p) => {
          const dias = diasHasta(p.fecha_vencimiento);
          const urgente = dias <= 30;
          const historial = seguimientos[p.id] || [];
          const ultimo = historial[0];

          return (
            <div
              key={p.id}
              className={`avisoItem ${urgente ? "avisoItem-urgente" : ""}`}
            >
              <div className="avisoFilaPrincipal">
                <span className="avisoCliente">{p.cliente_nombre}</span>
                <span className="avisoTipo">{p.tipo_seguro}</span>
                {p.cliente_telefono && (
                  <span className="avisoTelefono">📞 {p.cliente_telefono}</span>
                )}
                <span className="avisoDias">
                  {dias === 0 ? "vence hoy" : `${dias} días`}
                </span>
              </div>

              {ultimo && (
                <div className="avisoUltimoContacto">
                  Último intento: {formatoFechaHora(ultimo.fecha_hora)} —{" "}
                  {ultimo.contactado ? "contestó" : "no contestó"}
                  {ultimo.whatsapp_enviado && " — WhatsApp enviado"}
                  {ultimo.notas && ` — "${ultimo.notas}"`}
                  {historial.length > 1 && (
                    <button
                      className="avisoVerHistorialBtn"
                      onClick={() =>
                        setHistorialAbiertoId(
                          historialAbiertoId === p.id ? null : p.id
                        )
                      }
                    >
                      {historialAbiertoId === p.id
                        ? "Ocultar historial"
                        : `Ver historial completo (${historial.length})`}
                    </button>
                  )}
                </div>
              )}

              {historialAbiertoId === p.id && (
                <div className="avisoHistorialCompleto">
                  {historial.map((h) => (
                    <div key={h.id} className="avisoHistorialFila">
                      <span className="avisoHistorialFecha">
                        {formatoFechaHora(h.fecha_hora)}
                      </span>
                      <span
                        className={
                          h.contactado
                            ? "avisoHistorialEstado avisoHistorialEstado-ok"
                            : "avisoHistorialEstado avisoHistorialEstado-no"
                        }
                      >
                        {h.contactado ? "Contestó" : "No contestó"}
                      </span>
                      {h.whatsapp_enviado && (
                        <span className="avisoHistorialWhatsapp">
                          WhatsApp enviado
                        </span>
                      )}
                      {h.notas && (
                        <span className="avisoHistorialNota">
                          "{h.notas}"
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="avisoAcciones">
                <button
                  className="avisoAccionBtn"
                  onClick={() => abrirRegistro(p.id)}
                >
                  📞 Registrar llamada
                </button>
                <button
                  className="avisoAccionBtn avisoAccionBtnRenovar"
                  onClick={() => abrirRenovar(p.id)}
                >
                  🔄 Marcar como renovada
                </button>
              </div>

              {abiertoId === p.id && (
                <div className="avisoFormulario">
                  <label className="avisoRadioLabel">
                    <input
                      type="radio"
                      checked={formContacto.contactado === true}
                      onChange={() =>
                        setFormContacto((f) => ({ ...f, contactado: true }))
                      }
                    />
                    Contestó
                  </label>
                  <label className="avisoRadioLabel">
                    <input
                      type="radio"
                      checked={formContacto.contactado === false}
                      onChange={() =>
                        setFormContacto((f) => ({ ...f, contactado: false }))
                      }
                    />
                    No contestó
                  </label>
                  <label className="avisoCheckLabel">
                    <input
                      type="checkbox"
                      checked={formContacto.whatsapp_enviado}
                      onChange={(e) =>
                        setFormContacto((f) => ({
                          ...f,
                          whatsapp_enviado: e.target.checked,
                        }))
                      }
                    />
                    Le envié un WhatsApp para que nos escriba
                  </label>
                  <textarea
                    placeholder="Nota (opcional)"
                    value={formContacto.notas}
                    onChange={(e) =>
                      setFormContacto((f) => ({ ...f, notas: e.target.value }))
                    }
                    rows={2}
                  />
                  <div className="avisoFormularioBotones">
                    <button
                      onClick={() => setAbiertoId(null)}
                      className="avisoCancelarBtn"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => guardarContacto(p.id)}
                      disabled={guardando}
                      className="avisoGuardarBtn"
                    >
                      {guardando ? "Guardando..." : "Guardar"}
                    </button>
                  </div>
                </div>
              )}

              {renovandoId === p.id && (
                <div className="avisoFormulario">
                  <label className="avisoFechaLabel">
                    Nueva fecha de vencimiento
                    <input
                      type="date"
                      value={nuevaFecha}
                      onChange={(e) => setNuevaFecha(e.target.value)}
                    />
                  </label>
                  <div className="avisoFormularioBotones">
                    <button
                      onClick={() => setRenovandoId(null)}
                      className="avisoCancelarBtn"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => guardarRenovacion(p.id)}
                      disabled={guardando}
                      className="avisoGuardarBtn"
                    >
                      {guardando ? "Guardando..." : "Confirmar renovación"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvisosRenovacion;
