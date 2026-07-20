// src/providers/expedienteProvider.js
import { supabase } from "../lib/supabaseClient";

// Guarda el expediente en la base de datos. Si falla, no lanza un error
// que rompa el flujo (el email sigue siendo el aviso principal por ahora),
// pero avisa por consola para poder detectarlo.
export async function guardarExpedienteEnBD(expediente) {
  const { error } = await supabase.from("expedientes").insert({
    referencia: expediente.referencia,
    estado: expediente.estado,
    origen: expediente.origen,
    pagina: expediente.pagina,
    nombre: expediente.cliente.nombre,
    telefono: expediente.cliente.telefono,
    email: expediente.cliente.email,
    empresa: expediente.cliente.empresa,
    seguro: expediente.seguro,
    mensaje: expediente.mensaje,
  });

  if (error) {
    console.error("No se pudo guardar el expediente en Supabase:", error);
    return { ok: false, error };
  }

  return { ok: true, error: null };
}
