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
  const resultadoBD = await guardarExpedienteEnBD(expediente);

  const resultadoEmail = await enviarEmail(datosEmail);

  // Consideramos que el lead se ha capturado correctamente si al menos UNO
  // de los dos sistemas ha funcionado (BD o email), no solo el email. Así,
  // si falla la base de datos pero llega el email (o al revés), el cliente
  // sigue viendo el mensaje de éxito y el lead no se pierde silenciosamente
  // sin que quede ningún rastro en ningún sitio.
  const ok = resultadoBD.ok || resultadoEmail.ok;

  if (!resultadoBD.ok || !resultadoEmail.ok) {
    console.warn("Aviso: uno de los dos sistemas de captura de leads falló.", {
      referencia: expediente.referencia,
      bd_ok: resultadoBD.ok,
      email_ok: resultadoEmail.ok,
    });
  }

  return {
    ok,
    expediente,
    error: ok ? null : (resultadoBD.error || resultadoEmail.error),
  };
}