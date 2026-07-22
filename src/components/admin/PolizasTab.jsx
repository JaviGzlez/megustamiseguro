import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/AuthContext";

const TIPOS_SEGURO = [
  "Seguro de Coche",
  "Seguro de Hogar",
  "Seguro de Salud",
  "Seguro de Vida",
  "Seguro de Mascotas",
  "Empresas y Autónomos",
  "Transporte y Mercancía",
];

const ESTADOS_POLIZA = ["ACTIVA", "VENCIDA", "CANCELADA"];

const FORM_VACIO = {
  cliente_nombre: "",
  cliente_email: "",
  cliente_telefono: "",
  tipo_seguro: TIPOS_SEGURO[0],
  compania: "",
  numero_poliza: "",
  fecha_inicio: "",
  fecha_vencimiento: "",
  estado: "ACTIVA",
  notas: "",
};

// A partir del email, sacamos un nombre corto para mostrar en la
// tabla y una clase CSS para colorear según quién sea (Belén,
// Carlos, admin, o cualquier otro perfil futuro).
function nombreCortoCreador(email) {
  if (!email) return "—";
  const usuario = email.split("@")[0];
  const primeraParte = usuario.split(/[._-]/)[0];
  return primeraParte.charAt(0).toUpperCase() + primeraParte.slice(1);
}

function claseColorCreador(email) {
  if (!email) return "adminCreadoPor-otro";
  if (email.startsWith("belen@")) return "adminCreadoPor-belen";
  if (email.startsWith("carlos@")) return "adminCreadoPor-carlos";
  if (email.includes("javier")) return "adminCreadoPor-admin";
  return "adminCreadoPor-otro";
}

function diasHastaVencimiento(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const venc = new Date(fecha);
  const dias = Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
  return dias;
}

function PolizasTab() {
  const { session, perfil } = useAuth();
  const esAdmin = perfil?.rol === "admin";

  const [polizas, setPolizas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [form, setForm] = useState(FORM_VACIO);
  const [guardando, setGuardando] = useState(false);
  const [emailOriginal, setEmailOriginal] = useState("");

  const cargarPolizas = async () => {
    setCargando(true);
    // El "creador:perfiles(email)" pide a Supabase que, además de la
    // póliza, traiga el email de quien la creó (usando la relación que
    // definimos con creado_por).
    const { data, error } = await supabase
      .from("polizas")
      .select("*, creador:perfiles(email)")
      .order("fecha_vencimiento", { ascending: true, nullsFirst: false });

    if (!error) setPolizas(data);
    setCargando(false);
  };

  useEffect(() => {
    cargarPolizas();
  }, []);

  const handleChange = (campo) => (e) =>
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  const abrirNueva = () => {
    setEditandoId(null);
    setForm(FORM_VACIO);
    setEmailOriginal("");
    setMostrarForm(true);
  };

  const abrirEdicion = (p) => {
    setEditandoId(p.id);
    setEmailOriginal(p.cliente_email || "");
    setForm({
      cliente_nombre: p.cliente_nombre || "",
      cliente_email: p.cliente_email || "",
      cliente_telefono: p.cliente_telefono || "",
      tipo_seguro: p.tipo_seguro || TIPOS_SEGURO[0],
      compania: p.compania || "",
      numero_poliza: p.numero_poliza || "",
      fecha_inicio: p.fecha_inicio || "",
      fecha_vencimiento: p.fecha_vencimiento || "",
      estado: p.estado || "ACTIVA",
      notas: p.notas || "",
    });
    setMostrarForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGuardando(true);

    const datos = {
      ...form,
      fecha_inicio: form.fecha_inicio || null,
      fecha_vencimiento: form.fecha_vencimiento || null,
    };

    const esNueva = !editandoId;

    const { error } = editandoId
      ? await supabase.from("polizas").update(datos).eq("id", editandoId)
      : await supabase
          .from("polizas")
          .insert({ ...datos, creado_por: session?.user?.id });

    if (error) {
      setGuardando(false);
      alert("No se pudo guardar la póliza. Revisa los datos e inténtalo de nuevo.");
      return;
    }

    // Invitamos al cliente en dos casos: (1) es una póliza nueva con
    // email, o (2) se ha editado y el email ha cambiado respecto al
    // que tenía antes (por ejemplo, para corregir un error de tecleo).
    // Si el email no ha cambiado, no hacemos nada — evita reenviar
    // invitaciones de más cada vez que se edita cualquier otro campo.
    const emailHaCambiado =
      !!editandoId &&
      !!datos.cliente_email &&
      datos.cliente_email.trim().toLowerCase() !==
        emailOriginal.trim().toLowerCase();

    if ((esNueva || emailHaCambiado) && datos.cliente_email) {
      const { error: errorInvite } = await supabase.functions.invoke(
        "invitar-cliente",
        { body: { email: datos.cliente_email, nombre: datos.cliente_nombre } }
      );
      if (errorInvite) {
        console.error("No se pudo invitar al cliente:", errorInvite);
        alert(
          "La póliza se guardó, pero no se pudo enviar el email de acceso al cliente. Puedes reintentarlo editando la póliza."
        );
      }
    }

    setGuardando(false);
    setForm(FORM_VACIO);
    setEmailOriginal("");
    setEditandoId(null);
    setMostrarForm(false);
    cargarPolizas();
  };

  const restablecerAcceso = async (email) => {
    if (!email) return;
    const confirmado = window.confirm(
      `¿Enviar un email a ${email} para que restablezca su contraseña?`
    );
    if (!confirmado) return;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://megustamiseguro.es/crear-contrasena",
    });

    if (error) {
      alert("No se pudo enviar el email de restablecimiento.");
      return;
    }

    alert(`Email de restablecimiento enviado a ${email}.`);
  };

  const borrarPoliza = async (id, nombre) => {
    const confirmado = window.confirm(
      `¿Seguro que quieres borrar la póliza de "${nombre}"? Esta acción no se puede deshacer.`
    );
    if (!confirmado) return;

    const { error } = await supabase.from("polizas").delete().eq("id", id);

    if (error) {
      alert("No se pudo borrar la póliza.");
      return;
    }

    setPolizas((prev) => prev.filter((p) => p.id !== id));
  };

  const polizasFiltradas = polizas.filter((p) => {
    const texto = busqueda.trim().toLowerCase();
    if (!texto) return true;
    return (
      p.cliente_nombre?.toLowerCase().includes(texto) ||
      p.cliente_email?.toLowerCase().includes(texto) ||
      p.numero_poliza?.toLowerCase().includes(texto) ||
      p.compania?.toLowerCase().includes(texto) ||
      p.tipo_seguro?.toLowerCase().includes(texto)
    );
  });

  return (
    <>
      <div className="adminPanelToolbar">
        <input
          type="text"
          placeholder="Buscar por cliente, compañía, nº de póliza..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button className="adminNuevaPolizaBtn" onClick={abrirNueva}>
          + Nueva póliza
        </button>

        <button className="adminRefreshBtn" onClick={cargarPolizas}>
          ⟳ Actualizar
        </button>
      </div>

      {cargando ? (
        <p className="adminPanelVacio">Cargando pólizas...</p>
      ) : polizasFiltradas.length === 0 ? (
        <p className="adminPanelVacio">
          No hay pólizas todavía. Pulsa "+ Nueva póliza" para dar de alta la
          primera.
        </p>
      ) : (
        <div className="adminTableWrapper">
          <table className="adminTable">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Tipo de seguro</th>
                <th>Compañía</th>
                <th>Nº póliza</th>
                <th>Vencimiento</th>
                <th>Estado</th>
                <th>Creada por</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {polizasFiltradas.map((p) => {
                const dias = diasHastaVencimiento(p.fecha_vencimiento);
                const proximaAVencer =
                  dias !== null && dias <= 60 && dias >= 0;
                const vencida = dias !== null && dias < 0;

                return (
                  <tr key={p.id}>
                    <td>{p.cliente_nombre}</td>
                    <td className="adminColCorta">{p.cliente_telefono || "—"}</td>
                    <td>{p.cliente_email || "—"}</td>
                    <td>{p.tipo_seguro}</td>
                    <td>{p.compania || "—"}</td>
                    <td>{p.numero_poliza || "—"}</td>
                    <td className="adminColCorta">
                      {p.fecha_vencimiento
                        ? new Date(p.fecha_vencimiento).toLocaleDateString(
                            "es-ES"
                          )
                        : "—"}
                      {proximaAVencer && (
                        <span className="adminAvisoVencimiento">
                          {" "}
                          ({dias} días)
                        </span>
                      )}
                      {vencida && (
                        <span className="adminAvisoVencido"> (vencida)</span>
                      )}
                    </td>
                    <td className="adminColCorta">
                      <span className={`adminEstadoPoliza adminEstadoPoliza-${p.estado}`}>
                        {p.estado}
                      </span>
                    </td>
                    <td
                      className={`adminCreadoPor ${claseColorCreador(
                        p.creador?.email
                      )}`}
                    >
                      {nombreCortoCreador(p.creador?.email)}
                    </td>
                    <td className="adminColCorta">
                      <div className="adminAccionesFila">
                        <button
                          className="adminEditarBtn"
                          onClick={() => abrirEdicion(p)}
                          title="Editar póliza"
                        >
                          ✎
                        </button>
                        {p.cliente_email && (
                          <button
                            className="adminResetBtn"
                            onClick={() => restablecerAcceso(p.cliente_email)}
                            title="Restablecer acceso del cliente"
                          >
                            🔑
                          </button>
                        )}
                        {esAdmin && (
                          <button
                            className="adminBorrarBtn"
                            onClick={() => borrarPoliza(p.id, p.cliente_nombre)}
                            title="Borrar póliza"
                          >
                            🗑
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {mostrarForm && (
        <div
          className="adminModalOverlay"
          onClick={() => setMostrarForm(false)}
        >
          <form
            className="adminModal"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <h2>{editandoId ? "Editar póliza" : "Nueva póliza"}</h2>

            <label>Nombre del cliente *</label>
            <input
              type="text"
              value={form.cliente_nombre}
              onChange={handleChange("cliente_nombre")}
              required
            />

            <div className="adminModalRow">
              <div>
                <label>Teléfono</label>
                <input
                  type="text"
                  value={form.cliente_telefono}
                  onChange={handleChange("cliente_telefono")}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={form.cliente_email}
                  onChange={handleChange("cliente_email")}
                />
              </div>
            </div>

            <label>Tipo de seguro *</label>
            <select value={form.tipo_seguro} onChange={handleChange("tipo_seguro")}>
              {TIPOS_SEGURO.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <div className="adminModalRow">
              <div>
                <label>Compañía aseguradora</label>
                <input
                  type="text"
                  value={form.compania}
                  onChange={handleChange("compania")}
                  placeholder="Ej. Mapfre, Allianz..."
                />
              </div>
              <div>
                <label>Nº de póliza</label>
                <input
                  type="text"
                  value={form.numero_poliza}
                  onChange={handleChange("numero_poliza")}
                />
              </div>
            </div>

            <div className="adminModalRow">
              <div>
                <label>Fecha de inicio</label>
                <input
                  type="date"
                  value={form.fecha_inicio}
                  onChange={handleChange("fecha_inicio")}
                />
              </div>
              <div>
                <label>Fecha de vencimiento</label>
                <input
                  type="date"
                  value={form.fecha_vencimiento}
                  onChange={handleChange("fecha_vencimiento")}
                />
              </div>
            </div>

            {editandoId && (
              <>
                <label>Estado</label>
                <select value={form.estado} onChange={handleChange("estado")}>
                  {ESTADOS_POLIZA.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label>Notas</label>
            <textarea
              rows="3"
              value={form.notas}
              onChange={handleChange("notas")}
            />

            <div className="adminModalBotones">
              <button
                type="button"
                className="adminModalCancelar"
                onClick={() => setMostrarForm(false)}
              >
                Cancelar
              </button>
              <button type="submit" disabled={guardando}>
                {guardando
                  ? "Guardando..."
                  : editandoId
                  ? "Guardar cambios"
                  : "Guardar póliza"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default PolizasTab;
