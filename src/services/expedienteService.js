// src/services/expedienteService.js

import { crearExpediente } from "../models/expediente";
import { enviarEmail } from "../providers/emailProvider";
import { guardarExpedienteEnBD } from "../providers/expedienteProvider";
import { EMAIL_CORREDURIA } from "../config/contacto";

export async function enviarExpediente({
  nombre,
  telefono,
  email,
  empresa = "",
  seguro,
  mensaje,
  pagina,
  ccCorreduria = false,
}) {
  const expediente = crearExpediente({
    nombre,
    telefono,
    email,
    empresa,
    seguro,
    mensaje,
    pagina,
  });

  const datosEmail = {
    lead_id: expediente.referencia,
    nombre: expediente.cliente.nombre,
    telefono: expediente.cliente.telefono,
    email: expediente.cliente.email,
    empresa: expediente.cliente.empresa,
    seguro: expediente.seguro,
    mensaje: expediente.mensaje,
    fecha: `${expediente.fecha} ${expediente.hora}`,
    pagina: expediente.pagina,
    estado: expediente.estado,
    origen: expediente.origen,
    cc_email: ccCorreduria ? EMAIL_CORREDURIA : "",
  };

  // Se guarda en la base de datos primero (así queda un registro permanente
  // incluso si el envío del email fallara por cualquier motivo).
  await guardarExpedienteEnBD(expediente);

  const resultado = await enviarEmail(datosEmail);

  return {
    ok: resultado.ok,
    expediente,
    error: resultado.error || null,
  };
}