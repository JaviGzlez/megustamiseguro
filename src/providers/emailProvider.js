import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_7az58ym";
const TEMPLATE_ID = "template_p5pdbve";
const PUBLIC_KEY = "cPZfxH95YnAwyDp2k";

export async function enviarEmail(datos) {
  try {
    const respuesta = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      datos,
      PUBLIC_KEY
    );

    return {
      ok: true,
      respuesta,
    };
  } catch (error) {
    console.error("EMAILJS ERROR");
    console.error(error);

    return {
      ok: false,
      error,
    };
  }
}