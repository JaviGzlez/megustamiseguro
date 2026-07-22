import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../context/AuthContext";

const ESTADOS = ["NUEVO", "CONTACTADO", "CERRADO"];

function ExpedientesTab({ onCambio }) {
  const { perfil } = useAuth();
  const esAdmin = perfil?.rol === "admin";

  const [expedientes, setExpedientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState("TODOS");
  const [busqueda, setBusqueda] = useState("");

  const cargarExpedientes = async () => {
    setCargando(true);
    const { data, error } = await supabase
      .from("expedientes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setExpedientes(data);
    setCargando(false);
  };

  useEffect(() => {
    cargarExpedientes();
  }, []);

  const cambiarEstado = async (id, nuevoEstado) => {
    setExpedientes((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, estado: nuevoEstado } : exp))
    );

    const { error } = await supabase
      .from("expedientes")
      .update({ estado: nuevoEstado })
      .eq("id", id);

    if (error) {
      alert("No se pudo actualizar el estado. Inténtalo de nuevo.");
      cargarExpedientes();
    }
    onCambio?.();
  };

  const borrarExpediente = async (id, nombre) => {
    const confirmado = window.confirm(
      `¿Seguro que quieres borrar el expediente de "${nombre}"? Esta acción no se puede deshacer.`
    );
    if (!confirmado) return;

    const { error } = await supabase.from("expedientes").delete().eq("id", id);

    if (error) {
      alert("No se pudo borrar el expediente.");
      return;
    }

    setExpedientes((prev) => prev.filter((exp) => exp.id !== id));
    onCambio?.();
  };

  const expedientesFiltrados = expedientes.filter((exp) => {
    const pasaEstado = filtroEstado === "TODOS" || exp.estado === filtroEstado;
    const texto = busqueda.trim().toLowerCase();
    const pasaBusqueda =
      !texto ||
      exp.nombre?.toLowerCase().includes(texto) ||
      exp.email?.toLowerCase().includes(texto) ||
      exp.telefono?.toLowerCase().includes(texto) ||
      exp.referencia?.toLowerCase().includes(texto) ||
      exp.seguro?.toLowerCase().includes(texto);
    return pasaEstado && pasaBusqueda;
  });

  return (
    <>
      <div className="adminPanelToolbar">
        <input
          type="text"
          placeholder="Buscar por nombre, email, teléfono o referencia..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="adminFiltroEstados">
          {["TODOS", ...ESTADOS].map((estado) => (
            <button
              key={estado}
              className={filtroEstado === estado ? "activo" : ""}
              onClick={() => setFiltroEstado(estado)}
            >
              {estado}
            </button>
          ))}
        </div>

        <button className="adminRefreshBtn" onClick={cargarExpedientes}>
          ⟳ Actualizar
        </button>
      </div>

      {cargando ? (
        <p className="adminPanelVacio">Cargando expedientes...</p>
      ) : expedientesFiltrados.length === 0 ? (
        <p className="adminPanelVacio">No hay expedientes que coincidan.</p>
      ) : (
        <div className="adminTableWrapper">
          <table className="adminTable">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Seguro</th>
                <th>Página</th>
                <th>Referencia</th>
                <th>Estado</th>
                {esAdmin && <th></th>}
              </tr>
            </thead>
            <tbody>
              {expedientesFiltrados.map((exp) => (
                <tr key={exp.id}>
                  <td>
                    {new Date(exp.created_at).toLocaleDateString("es-ES")}{" "}
                    <span className="adminHora">
                      {new Date(exp.created_at).toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                  <td>{exp.nombre}</td>
                  <td>{exp.telefono}</td>
                  <td>{exp.email}</td>
                  <td>{exp.seguro}</td>
                  <td>{exp.pagina}</td>
                  <td className="adminReferencia">{exp.referencia}</td>
                  <td>
                    <select
                      value={exp.estado}
                      onChange={(e) => cambiarEstado(exp.id, e.target.value)}
                      className={`adminEstado adminEstado-${exp.estado}`}
                    >
                      {ESTADOS.map((estado) => (
                        <option key={estado} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                  </td>
                  {esAdmin && (
                    <td>
                      <button
                        className="adminBorrarBtn"
                        onClick={() => borrarExpediente(exp.id, exp.nombre)}
                        title="Borrar expediente"
                      >
                        🗑
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ExpedientesTab;
