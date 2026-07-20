// src/pages/ClientePanel.jsx
//
// Gracias a la política RLS "Cliente ve sus propias polizas", esta
// consulta ya devuelve solo las pólizas cuyo cliente_email coincide
// con el email de la cuenta que ha iniciado sesión. No hace falta
// filtrar nada a mano aquí.

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import "./ClientePanel.css";

function ClientePanel() {
  const { session, cerrarSesion } = useAuth();
  const [polizas, setPolizas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    supabase
      .from("polizas")
      .select("*")
      .order("fecha_vencimiento", { ascending: true, nullsFirst: false })
      .then(({ data, error }) => {
        if (!error) setPolizas(data);
        setCargando(false);
      });
  }, []);

  return (
    <div className="clientePanel">
      <header className="clientePanelHeader">
        <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
        <div className="clientePanelHeaderRight">
          <span>{session?.user?.email}</span>
          <button onClick={cerrarSesion} className="clienteLogoutBtn">
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="clientePanelContent">
        <h1>Mis pólizas</h1>

        {cargando ? (
          <p className="clientePanelVacio">Cargando...</p>
        ) : polizas.length === 0 ? (
          <p className="clientePanelVacio">
            Todavía no tenemos ninguna póliza asociada a esta cuenta. Si
            crees que es un error, escríbenos a{" "}
            <a href="mailto:info@megustamiseguro.es">
              info@megustamiseguro.es
            </a>
            .
          </p>
        ) : (
          <div className="clientePolizasGrid">
            {polizas.map((p) => (
              <div key={p.id} className="clientePolizaCard">
                <div className="clientePolizaTipo">{p.tipo_seguro}</div>

                <div className="clientePolizaFila">
                  <span>Compañía</span>
                  <strong>{p.compania || "—"}</strong>
                </div>
                <div className="clientePolizaFila">
                  <span>Nº de póliza</span>
                  <strong>{p.numero_poliza || "—"}</strong>
                </div>
                <div className="clientePolizaFila">
                  <span>Inicio</span>
                  <strong>
                    {p.fecha_inicio
                      ? new Date(p.fecha_inicio).toLocaleDateString("es-ES")
                      : "—"}
                  </strong>
                </div>
                <div className="clientePolizaFila">
                  <span>Vencimiento</span>
                  <strong>
                    {p.fecha_vencimiento
                      ? new Date(p.fecha_vencimiento).toLocaleDateString(
                          "es-ES"
                        )
                      : "—"}
                  </strong>
                </div>

                <span
                  className={`clienteEstadoPoliza clienteEstadoPoliza-${p.estado}`}
                >
                  {p.estado}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ClientePanel;
