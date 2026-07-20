// src/pages/CrearContrasena.jsx
//
// A esta página llega el cliente cuando pulsa "Crear mi contraseña"
// en el email de invitación (o "Crear nueva contraseña" en el de
// recuperación). Supabase, al detectar el enlace especial en la URL,
// ya deja al cliente con una sesión temporal automáticamente — aquí
// solo hace falta pedirle la contraseña y guardarla.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import "./CrearContrasena.css";

function CrearContrasena() {
  const { session, cargando } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (password !== confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setEnviando(true);
    const { error: errorUpdate } = await supabase.auth.updateUser({
      password,
    });
    setEnviando(false);

    if (errorUpdate) {
      setError("No se pudo guardar la contraseña. Vuelve a pulsar el enlace del email e inténtalo de nuevo.");
      return;
    }

    navigate("/mi-cuenta/polizas");
  };

  if (cargando) {
    return <div className="crearContrasenaPage">Cargando...</div>;
  }

  // Si alguien llega aquí sin venir de un enlace de invitación/recuperación
  // (o el enlace ya caducó), no tiene sesión — le mandamos al login normal.
  if (!session) {
    return (
      <div className="crearContrasenaPage">
        <div className="crearContrasenaCard">
          <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
          <h1>Este enlace ya no es válido</h1>
          <p>
            Puede que haya caducado (dura 24 horas) o que ya hayas creado tu
            contraseña antes. Si es así, entra directamente con tu email y
            contraseña.
          </p>
          <a href="/mi-cuenta" className="crearContrasenaBtn">
            Ir a iniciar sesión
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="crearContrasenaPage">
      <form className="crearContrasenaCard" onSubmit={handleSubmit}>
        <img src="/images/logo.png" alt="Me Gusta Mi Seguro" />
        <h1>Crea tu contraseña</h1>
        <p>Solo una vez, y ya podrás consultar tu póliza cuando quieras.</p>

        <input
          type="password"
          placeholder="Nueva contraseña (mínimo 8 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Repite la contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />

        {error && <p className="crearContrasenaError">{error}</p>}

        <button type="submit" disabled={enviando}>
          {enviando ? "Guardando..." : "Crear contraseña y entrar"}
        </button>
      </form>
    </div>
  );
}

export default CrearContrasena;
