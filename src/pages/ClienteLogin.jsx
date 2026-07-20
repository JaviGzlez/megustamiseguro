// src/pages/ClienteLogin.jsx
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./ClienteLogin.css";

function ClienteLogin() {
  const { session, iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  if (session) {
    return <Navigate to="/mi-cuenta/polizas" replace />;
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

    navigate("/mi-cuenta/polizas");
  };

  return (
    <div className="clienteLoginPage">
      <form className="clienteLoginCard" onSubmit={handleSubmit}>
        <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
        <h1>Área de clientes</h1>
        <p>Accede para consultar tu póliza cuando quieras.</p>

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

        {error && <p className="clienteLoginError">{error}</p>}

        <button type="submit" disabled={enviando}>
          {enviando ? "Entrando..." : "Entrar"}
        </button>

        <p className="clienteLoginAyuda">
          ¿Todavía no tienes contraseña? Revisa el email de bienvenida que te
          enviamos al dar de alta tu póliza, o escríbenos a{" "}
          <a href="mailto:info@megustamiseguro.es">info@megustamiseguro.es</a>
        </p>
      </form>
    </div>
  );
}

export default ClienteLogin;
