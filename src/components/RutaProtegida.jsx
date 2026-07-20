// src/components/RutaProtegida.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaProtegida({ children }) {
  const { session, cargando } = useAuth();

  if (cargando) {
    return (
      <div style={{ padding: 60, textAlign: "center" }}>Cargando...</div>
    );
  }

  if (!session) {
    return <Navigate to="/panel/login" replace />;
  }

  return children;
}

export default RutaProtegida;
