// supabase/functions/invitar-cliente/index.ts
//
// Recibe { email, nombre } desde el panel interno y, si quien llama
// es admin o gestor, invita al cliente por email para que cree su
// contraseña (usa la plantilla "Invite user" que ya tienes configurada
// en Authentication → Email Templates).
//
// Despliegue:
//   supabase functions deploy invitar-cliente
//
// Variables de entorno (ya vienen dadas por Supabase, no hay que
// crearlas a mano): SUPABASE_URL, SUPABASE_ANON_KEY,
// SUPABASE_SERVICE_ROLE_KEY

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // --- 1. Comprobar quién llama ---
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const supabaseCaller = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const {
      data: { user },
    } = await supabaseCaller.auth.getUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // --- 2. Comprobar que quien llama es admin o gestor ---
    const { data: perfilCaller } = await supabaseAdmin
      .from("perfiles")
      .select("rol")
      .eq("id", user.id)
      .single();

    if (!perfilCaller || !["admin", "gestor"].includes(perfilCaller.rol)) {
      return new Response(JSON.stringify({ error: "Sin permiso" }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // --- 3. Invitar al cliente ---
    const { email, nombre } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Falta el email" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
        data: { rol: "cliente", nombre: nombre || "" },
        redirectTo: "https://megustamiseguro.es/crear-contrasena",
      }
    );

    if (error) {
      // Si el cliente ya tenía cuenta, no lo tratamos como fallo real.
      // Supabase puede decir "already registered" o "already been
      // registered" según la versión, así que comprobamos ambas
      // palabras por separado en vez de la frase exacta.
      const mensaje = error.message?.toLowerCase() || "";
      const yaRegistrado =
        mensaje.includes("already") && mensaje.includes("registered");

      if (yaRegistrado) {
        return new Response(JSON.stringify({ ok: true, yaExistia: true }), {
          status: 200,
          headers: corsHeaders,
        });
      }
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ ok: true, data }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
