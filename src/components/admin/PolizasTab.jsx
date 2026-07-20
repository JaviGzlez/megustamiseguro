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

const FORM_VACIO = {
  cliente_nombre: "",
  cliente_email: "",
  cliente_telefono: "",
  tipo_seguro: TIPOS_SEGURO[0],
  compania: "",
  numero_poliza: "",
  fecha_inicio: "",
  fecha_vencimiento: "",
  notas: "",
};

function diasHastaVencimiento(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const venc = new Date(fecha);
  const dias = Math.ceil((venc - hoy) / (1000 * 60 * 60 * 24));
  return dias;
}

function PolizasTab() {
  const { session } = useAuth();

  const [polizas, setPolizas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);
  const [form, setForm] = useState(FORM_VACIO);
  const [guardando, setGuardando] = useState(false);

  const cargarPolizas = async () => {
    setCargando(true);
    const { data, error } = await supabase
      .from("polizas")
      .select("*")
      .order("fecha_vencimiento", { ascending: true, nullsFirst: false });

    if (!error) setPolizas(data);
    setCargando(false);
  };

  useEffect(() => {
    cargarPolizas();
  }, []);

  const handleChange = (campo) => (e) =>
    setForm((prev) => ({ ...prev, [campo]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGuardando(true);

    const { error } = await supabase.from("polizas").insert({
      ...form,
      fecha_inicio: form.fecha_inicio || null,
      fecha_vencimiento: form.fecha_vencimiento || null,
      creado_por: session?.user?.id,
    });

    setGuardando(false);

    if (error) {
      alert("No se pudo guardar la póliza. Revisa los datos e inténtalo de nuevo.");
      return;
    }

    setForm(FORM_VACIO);
    setMostrarForm(false);
    cargarPolizas();
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

        <button
          className="adminNuevaPolizaBtn"
          onClick={() => setMostrarForm(true)}
        >
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
                <th>Contacto</th>
                <th>Tipo de seguro</th>
                <th>Compañía</th>
                <th>Nº póliza</th>
                <th>Vencimiento</th>
                <th>Estado</th>
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
                    <td>
                      {p.cliente_telefono}
                      {p.cliente_telefono && p.cliente_email && " · "}
                      {p.cliente_email}
                    </td>
                    <td>{p.tipo_seguro}</td>
                    <td>{p.compania || "—"}</td>
                    <td>{p.numero_poliza || "—"}</td>
                    <td>
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
                    <td>
                      <span className={`adminEstadoPoliza adminEstadoPoliza-${p.estado}`}>
                        {p.estado}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {mostrarForm && (
        <div className="adminModalOverlay" onClick={() => setMostrarForm(false)}>
          <form
            className="adminModal"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <h2>Nueva póliza</h2>

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
                {guardando ? "Guardando..." : "Guardar póliza"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default PolizasTab;
