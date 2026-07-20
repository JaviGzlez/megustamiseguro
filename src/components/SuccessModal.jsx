import { FaCheckCircle, FaTimes } from "react-icons/fa";
import "./SuccessModal.css";

function SuccessModal({ referencia, onClose }) {
  return (
    <div className="successOverlay" onClick={onClose}>
      <div className="successModal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="successClose"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <FaTimes />
        </button>

        <FaCheckCircle className="successIcon" />

        <h3>¡Solicitud enviada!</h3>
        <p>Hemos recibido tu solicitud y te contactaremos lo antes posible.</p>

        {referencia && (
          <p className="successReferencia">
            Referencia: <strong>{referencia}</strong>
          </p>
        )}

        <button type="button" className="successCloseBtn" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
