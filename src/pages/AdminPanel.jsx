import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ExpedientesTab from "../components/admin/ExpedientesTab";
import PolizasTab from "../components/admin/PolizasTab";
import AvisosRenovacion from "../components/admin/AvisosRenovacion";
import "./AdminPanel.css";

function AdminPanel() {
  const { session, perfil, cerrarSesion } = useAuth();
  const [tab, setTab] = useState("expedientes");

  return (
    <div className="adminPanel">
      <header className="adminPanelHeader">
        <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
        <div className="adminPanelHeaderRight">
          <span>
            {session?.user?.email}
            {perfil?.rol && (
              <span className="adminRolBadge">{perfil.rol}</span>
            )}
          </span>
          <button onClick={cerrarSesion} className="adminLogoutBtn">
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="adminPanelContent">
        <h1>Panel interno</h1>

        <AvisosRenovacion />

        <div className="adminTabs">
          <button
            className={tab === "expedientes" ? "activo" : ""}
            onClick={() => setTab("expedientes")}
          >
            Expedientes
          </button>
          <button
            className={tab === "polizas" ? "activo" : ""}
            onClick={() => setTab("polizas")}
          >
            Pólizas
          </button>
        </div>

        {tab === "expedientes" ? <ExpedientesTab /> : <PolizasTab />}
      </main>
    </div>
  );
}

export default AdminPanel;
