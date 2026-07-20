import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AdminLogin.css";

function AdminLogin() {
  const { session, iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  if (session) {
    return <Navigate to="/panel" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEnviando(true);

    const { error } = await iniciarSesion(email, password);

    setEnviando(false);

    if (error) {
      setError("Email o contraseña incorrectos.");
      return;
    }

    navigate("/panel");
  };

  return (
    <div className="adminLoginPage">
      <form className="adminLoginCard" onSubmit={handleSubmit}>
        <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
        <h1>Panel interno</h1>
        <p>Accede con tu usuario para gestionar los expedientes.</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="adminLoginError">{error}</p>}

        <button type="submit" disabled={enviando}>
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
