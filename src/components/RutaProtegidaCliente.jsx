// src/components/RutaProtegidaCliente.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaProtegidaCliente({ children }) {
  const { session, cargando } = useAuth();

  if (cargando) {
    return <div style={{ padding: 60, textAlign: "center" }}>Cargando...</div>;
  }

  if (!session) {
    return <Navigate to="/mi-cuenta" replace />;
  }

  return children;
}

export default RutaProtegidaCliente;
