import { useState, useEffect } from "react";
import { cargarGoogleAnalytics } from "../utils/googleAnalytics";
import { cargarMetaPixel } from "../utils/metaPixel";
import "./CookieConsentBanner.css";

const CLAVE_STORAGE = "cookieConsent"; // "accepted" | "rejected"

function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const decision = localStorage.getItem(CLAVE_STORAGE);

    if (decision === "accepted") {
      cargarGoogleAnalytics();
      cargarMetaPixel();
    } else if (decision !== "rejected") {
      // Todavía no ha decidido nada -> mostramos el banner
      setVisible(true);
    }
  }, []);

  const aceptar = () => {
    localStorage.setItem(CLAVE_STORAGE, "accepted");
    cargarGoogleAnalytics();
    cargarMetaPixel();
    setVisible(false);
  };

  const rechazar = () => {
    localStorage.setItem(CLAVE_STORAGE, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookieBanner">
      <p className="cookieBannerText">
        Usamos cookies propias necesarias para el funcionamiento de la web y,
        si nos das tu permiso, cookies analíticas para entender cómo se usa
        el sitio. Puedes leer más en nuestra{" "}
        <a href="/politica-cookies">Política de Cookies</a>.
      </p>

      <div className="cookieBannerButtons">
        <button
          type="button"
          className="cookieBannerReject"
          onClick={rechazar}
        >
          Rechazar
        </button>
        <button
          type="button"
          className="cookieBannerAccept"
          onClick={aceptar}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
