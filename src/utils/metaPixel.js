// src/utils/metaPixel.js
import { META_PIXEL_ID } from "../config/metaPixel";

let cargado = false;

// Inyecta el Píxel de Meta (Facebook/Instagram Ads) en la página. Solo debe
// llamarse después de que el usuario haya aceptado las cookies analíticas,
// igual que hacemos con Google Analytics.
export function cargarMetaPixel() {
  if (cargado || !META_PIXEL_ID || META_PIXEL_ID === "TU_PIXEL_ID_AQUI") return;
  cargado = true;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  /* eslint-enable */

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

// Registra una conversión (por ejemplo, al enviar el formulario de contacto
// o hacer clic en "Solicitar estudio gratuito"). No hace nada si el píxel
// todavía no se ha cargado (usuario no ha aceptado cookies).
export function registrarEventoMetaPixel(evento, datos) {
  if (!cargado || !window.fbq) return;
  window.fbq("track", evento, datos);
}
