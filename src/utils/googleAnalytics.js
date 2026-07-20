// src/utils/googleAnalytics.js
import { GA_MEASUREMENT_ID } from "../config/analytics";

let cargado = false;

// Inyecta el script de Google Analytics en la página. Solo debe llamarse
// después de que el usuario haya aceptado las cookies analíticas.
export function cargarGoogleAnalytics() {
  if (cargado || !GA_MEASUREMENT_ID) return;
  cargado = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
