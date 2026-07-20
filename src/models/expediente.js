// src/models/expediente.js

import { generarReferencia } from "../utils/generarReferencia";

export function crearExpediente({
  nombre,
  telefono,
  email,
  empresa = "",
  seguro,
  mensaje,
  pagina,
}) {
  const ahora = new Date();

  const fecha = ahora.toLocaleDateString("es-ES");
  const hora = ahora.toLocaleTimeString("es-ES");

  const referencia = generarReferencia(seguro);

  return {
    referencia,

    estado: "NUEVO",

    origen: "WEB",

    fecha,

    hora,

    pagina,

    cliente: {
      nombre,
      telefono,
      email,
      empresa,
    },

    seguro,

    mensaje,
  };
}