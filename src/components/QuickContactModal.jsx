import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import LeadForm from "./LeadForm";
import "./QuickContactModal.css";

const WHATSAPP_NUMERO = "34643727346";

function construirMensajeWhatsapp(expediente) {
  const { nombre, telefono, email } = expediente.cliente;
  const seguro = expediente.seguro;

  const texto = [
    `Hola, soy ${nombre}.`,
    "",
    `Me interesa: ${seguro}`,
    "",
    `- Teléfono: ${telefono}`,
    `- Email: ${email}`,
    "",
    `Referencia: ${expediente.referencia}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

// Al enviar el formulario corto ocurren dos cosas:
// 1) Se manda un email a info@megustamiseguro.es con los datos, para
//    que quede constancia y control de la solicitud aunque no gestionemos
//    directamente el WhatsApp (sin copia a la correduría).
// 2) Se abre WhatsApp con un mensaje ya redactado, para que la conversación
//    real siga sucediendo ahí, como hasta ahora.

function QuickContactModal({ pagina = "Web", floating = true, className = "" }) {
  const [abierto, setAbierto] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const abrir = () => {
    setEnviado(false);
    setAbierto(true);
  };

  const cerrar = () => setAbierto(false);

  const manejarExito = () => {
    setEnviado(true);
  };

  const botonClass =
    className || (floating ? "quickContactFloat" : "quickContactBtn");

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className={botonClass}
        style={{
          cursor: "pointer",
          font: "inherit",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
        aria-label="Contactar rápido"
      >
        <FaWhatsapp />
        {!floating && <span>Hablar por WhatsApp</span>}
      </button>

      {abierto && (
        <div className="quickContactOverlay" onClick={cerrar}>
          <div
            className="quickContactModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="quickContactClose"
              onClick={cerrar}
              aria-label="Cerrar"
            >
              <FaTimes />
            </button>

            {enviado ? (
              <div className="quickContactSuccess">
                <h3>¡Perfecto!</h3>
                <p>
                  Hemos abierto WhatsApp con tu mensaje listo para enviar.
                  También hemos guardado tu solicitud.
                </p>
              </div>
            ) : (
              <>
                <h3>Cuéntanos qué necesitas</h3>
                <p>
                  Rellena tus datos y te abriremos WhatsApp con el mensaje
                  ya preparado.
                </p>

                <LeadForm
                  pagina={pagina}
                  mostrarSelector={true}
                  mostrarMensaje={false}
                  ccCorreduria={false}
                  mostrarPopupExito={false}
                  className="quickContactForm"
                  onSuccess={manejarExito}
                  abrirVentanaTrasEnviar={true}
                  construirUrlVentana={construirMensajeWhatsapp}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default QuickContactModal;
