import { useState } from "react";
import { enviarExpediente } from "../services/expedienteService";
import SuccessModal from "./SuccessModal";
import "./LeadForm.css";

function LeadForm({
  seguroInicial = "",
  pagina = "Web",
  mostrarSelector = true,
  mostrarEmpresa = false,
  mostrarMensaje = true,
  ccCorreduria = true,
  mostrarPopupExito = true,
  className = "contactForm",
  onSuccess,
  abrirVentanaTrasEnviar = false,
  construirUrlVentana,
}) {
  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState("");
  const [expedienteExito, setExpedienteExito] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    // Importante: la ventana de WhatsApp se abre AQUÍ, en el mismo instante
    // del clic, para que el navegador no la bloquee (los bloqueadores de
    // popups solo permiten ventanas abiertas de forma inmediata y directa
    // por una acción del usuario, no después de esperar al servidor).
    let ventana = null;
    if (abrirVentanaTrasEnviar) {
      ventana = window.open("", "_blank");
      // Mitigamos el riesgo de seguridad de no usar "noopener" cortando
      // la referencia inversa (la ventana nueva no puede acceder a esta).
      if (ventana) ventana.opener = null;
    }

    const datos = {
      nombre: form.nombre.value,
      telefono: form.telefono.value,
      email: form.email.value,
      empresa: mostrarEmpresa ? form.empresa.value : "",
      seguro: mostrarSelector ? form.seguro.value : seguroInicial,
      mensaje: mostrarMensaje ? form.mensaje.value : "",
      pagina,
      ccCorreduria,
    };

    setEnviando(true);
    setMensajeEstado("");

    const resultado = await enviarExpediente(datos);

    setEnviando(false);

    if (resultado.ok) {
      form.reset();

      if (ventana && construirUrlVentana) {
        ventana.location.href = construirUrlVentana(resultado.expediente);
      }

      if (mostrarPopupExito) {
        setExpedienteExito(resultado.expediente);
      } else {
        setMensajeEstado(
          `Solicitud enviada correctamente. Referencia: ${resultado.expediente.referencia}`
        );
      }
      if (onSuccess) onSuccess(resultado);
    } else {
      if (ventana) ventana.close();
      setMensajeEstado("Ha ocurrido un error. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre y apellidos"
        required
      />

      <input name="telefono" type="tel" placeholder="Teléfono" required />

      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        required
      />

      {mostrarEmpresa && (
        <input
          name="empresa"
          type="text"
          placeholder="Empresa o actividad"
          required
        />
      )}

      {mostrarSelector ? (
        <select name="seguro" defaultValue="" required>
          <option value="">¿Qué seguro te interesa?</option>
          <option>Seguro de Coche</option>
          <option>Seguro de Hogar</option>
          <option>Seguro de Salud</option>
          <option>Seguro de Vida</option>
          <option>Seguro de Mascotas</option>
          <option>Empresas y Autónomos</option>
          <option>Transporte y Mercancía</option>
        </select>
      ) : (
        <input type="hidden" name="seguro" value={seguroInicial} />
      )}

      {mostrarMensaje && (
        <textarea
          name="mensaje"
          rows="5"
          placeholder="Cuéntanos qué necesitas..."
        />
      )}

      <label className="consentimientoLabel">
        <input type="checkbox" name="consentimiento" required />
        <span>
          He leído y acepto la{" "}
          <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>
        </span>
      </label>

      <button type="submit" disabled={enviando}>
        {enviando ? "Enviando..." : "Solicitar estudio gratuito"}
      </button>

      {mensajeEstado && <p className="formStatus">{mensajeEstado}</p>}
    </form>

      {expedienteExito && (
        <SuccessModal
          referencia={expedienteExito.referencia}
          onClose={() => setExpedienteExito(null)}
        />
      )}
    </>
  );
}

export default LeadForm;