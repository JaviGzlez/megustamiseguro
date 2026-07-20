// src/utils/generarReferencia.js

export function generarReferencia(seguro) {
  const ahora = new Date();

  const timestamp = ahora
    .toISOString()
    .replace(/[-:.TZ]/g, "")
    .substring(0, 14);

  const tipoSeguro = seguro
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "-");

  return "MEGUSTAMISEGURO-" + tipoSeguro + "-" + timestamp;
}