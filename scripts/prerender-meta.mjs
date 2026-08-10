// Prerenderizado ligero de metaetiquetas por ruta.
//
// Por qué existe este script:
// Esta web es una SPA de React (Vite) sin servidor de renderizado (SSR).
// El HTML que Vercel sirve para CUALQUIER ruta es siempre el mismo
// "cascarón" (dist/index.html) con el <title> y las metaetiquetas de la
// página de Inicio; el título/descripción de cada página en realidad solo
// se insertan después, cuando el navegador ejecuta el JavaScript (React +
// react-helmet-async).
//
// Google sí ejecuta JavaScript al rastrear, así que esto no afecta al SEO.
// Pero herramientas que NO ejecutan JavaScript para generar una vista previa
// (WhatsApp, Facebook, Twitter/X, Slack...) sí ven el HTML "en crudo", y por
// tanto mostrarían siempre el título/imagen de Inicio en vez de los del
// artículo o página compartida.
//
// Qué hace este script:
// Después de "vite build", genera una copia de dist/index.html por cada
// ruta listada abajo, con el <title> y las metaetiquetas ya sustituidos por
// los de esa página en concreto, y la guarda en dist/<ruta>/index.html.
// Vercel sirve archivos estáticos que coinciden exactamente con la URL
// ANTES de aplicar el rewrite genérico hacia index.html, así que estas
// rutas quedarán con las metaetiquetas correctas incluso sin ejecutar
// JavaScript. El bundle de React sigue cargando con normalidad después, así
// que para cualquier persona navegando la web no cambia nada.
//
// Cómo añadir una página nueva a este sistema:
// Añade un objeto más al array ROUTES de abajo con su path, title y
// description (los mismos valores que ya tienes en el <Helmet> de esa
// página).

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const SITE_URL = "https://megustamiseguro.es";

const DEFAULTS = {
  title: "Me Gusta Mi Seguro",
  description:
    "Te ayudamos a elegir con tranquilidad. Comparamos seguros de coche, hogar, salud, vida, mascotas y empresas.",
  ogTitle:
    "Me Gusta Mi Seguro | Compara seguros de coche, hogar, salud, vida y mascotas",
  ogDescription:
    "Te ayudamos a elegir con tranquilidad. Comparamos seguros de coche, hogar, salud, vida, mascotas y empresas para que encuentres la mejor opción, sin compromiso.",
  canonical: `${SITE_URL}/`,
};

// Rutas a prerenderizar. "/" no hace falta: ya coincide con dist/index.html
// (el cascarón por defecto ya lleva las metaetiquetas de Inicio).
const ROUTES = [
  {
    path: "/seguro-coche",
    title: "Seguro de Coche | Compara y ahorra | Me Gusta Mi Seguro",
    description:
      "Compara seguros de coche y encuentra la cobertura que mejor se adapta a ti. Asesoramiento personalizado y sin compromiso.",
  },
  {
    path: "/seguro-hogar",
    title: "Seguro de Hogar | Protege tu casa | Me Gusta Mi Seguro",
    description:
      "Encuentra el seguro de hogar que mejor protege tu vivienda y tus enseres. Comparamos coberturas para que decidas con tranquilidad.",
  },
  {
    path: "/seguro-salud",
    title: "Seguro Médico y de Salud | Con o sin Copago | Me Gusta Mi Seguro",
    description:
      "Compara seguros médicos y de salud, con y sin copago, y encuentra la cobertura médica que mejor se adapta a ti y a tu familia.",
  },
  {
    path: "/seguro-vida",
    title: "Seguro de Vida | Protege a tu familia | Me Gusta Mi Seguro",
    description:
      "Descubre si merece la pena contratar un seguro de vida y qué cobertura necesitas para proteger a las personas que dependen de ti.",
  },
  {
    path: "/seguro-mascotas",
    title: "Seguro de Mascotas | Perros y gatos | Me Gusta Mi Seguro",
    description:
      "Seguros para tu mascota con responsabilidad civil y asistencia veterinaria. Compara y elige la mejor protección para tu perro o gato.",
  },
  {
    path: "/empresas-autonomos",
    title: "Seguros para Empresas y Autónomos | Me Gusta Mi Seguro",
    description:
      "Seguros pensados para autónomos y empresas. Te ayudamos a encontrar la cobertura adecuada para tu actividad, con asesoramiento personalizado.",
  },
  {
    path: "/transporte-mercancia",
    title: "Seguro de Transporte y Mercancía | Me Gusta Mi Seguro",
    description:
      "Seguros para transportistas y mercancías: responsabilidad civil del transportista, mercancías en tránsito y flotas. Asesoramiento sin compromiso.",
  },
  {
    path: "/blog",
    title: "Blog de Seguros | Consejos y guías | Me Gusta Mi Seguro",
    description:
      "Guías claras sobre seguros de coche, hogar, salud, vida, mascotas y autónomos para que elijas con más información y tranquilidad.",
  },
  {
    path: "/blog/como-elegir-seguro-coche-2026",
    title: "Cómo elegir un seguro de coche en 2026 | Me Gusta Mi Seguro",
    description:
      "Claves para comparar coberturas, precio y asistencia antes de contratar tu seguro de coche.",
  },
  {
    path: "/blog/seguro-coche-todo-riesgo-vs-terceros",
    title:
      "Seguro de coche a todo riesgo vs terceros: ¿cuál te conviene? | Me Gusta Mi Seguro",
    description:
      "Diferencias reales entre el seguro a todo riesgo y a terceros, cuánto cuesta cada uno y cómo saber cuál te conviene según tu coche y tu forma de conducir.",
  },
  {
    path: "/blog/que-cubre-realmente-un-seguro-de-hogar",
    title: "Qué cubre realmente un seguro de hogar | Me Gusta Mi Seguro",
    description:
      "Continente, contenido, responsabilidad civil y coberturas importantes de un seguro de hogar explicadas con claridad.",
  },
  {
    path: "/blog/seguro-salud-con-copago-o-sin-copago",
    title: "Seguro de salud con copago o sin copago | Me Gusta Mi Seguro",
    description:
      "Diferencias principales entre seguros de salud con copago y sin copago, y cuándo puede interesarte cada modalidad.",
  },
  {
    path: "/blog/merece-la-pena-contratar-un-seguro-de-vida",
    title: "¿Merece la pena contratar un seguro de vida? | Me Gusta Mi Seguro",
    description:
      "Cuándo tiene sentido contratar un seguro de vida y qué debes valorar antes de decidir.",
  },
  {
    path: "/blog/seguro-para-perros-que-debes-tener-en-cuenta",
    title: "Seguro para perros: qué debes tener en cuenta | Me Gusta Mi Seguro",
    description:
      "Responsabilidad civil, asistencia veterinaria y protección para tu mascota: todo lo que debes saber.",
  },
  {
    path: "/blog/seguro-para-gatos-que-debes-tener-en-cuenta",
    title: "Seguro para gatos: qué debes tener en cuenta | Me Gusta Mi Seguro",
    description:
      "¿Buscas un seguro para tu gato? Te contamos qué cubre, cuánto cuesta y cómo elegir la mejor póliza de seguro de mascotas para gatos.",
  },
  {
    path: "/blog/seguros-para-autonomos",
    title: "Seguros para autónomos: trabajar con más tranquilidad | Me Gusta Mi Seguro",
    description:
      "Responsabilidad civil, accidentes, comercio, salud y protección profesional para autónomos.",
  },
  {
    path: "/blog/seguro-transporte-mercancia-todo-lo-que-necesitas-saber",
    title: "Seguro de transporte y mercancía: todo lo que necesitas saber | Me Gusta Mi Seguro",
    description:
      "Responsabilidad civil del transportista, mercancías en tránsito, flotas y transporte internacional. Te contamos qué cubre cada modalidad y cuál necesitas.",
  },
];

function buildHtml(template, route) {
  const url = `${SITE_URL}${route.path}`;

  let html = template;

  html = html.replaceAll(`<title>${DEFAULTS.title}</title>`, `<title>${route.title}</title>`);
  html = html.replaceAll(DEFAULTS.description, route.description);
  html = html.replaceAll(DEFAULTS.ogTitle, route.title);
  html = html.replaceAll(DEFAULTS.ogDescription, route.description);
  html = html.replaceAll(DEFAULTS.canonical, url);

  return html;
}

function run() {
  let template;
  try {
    template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");
  } catch (err) {
    console.error(
      "[prerender-meta] No se encontró dist/index.html. ¿Se ejecutó 'vite build' antes que este script?"
    );
    process.exit(1);
  }

  for (const route of ROUTES) {
    const html = buildHtml(template, route);
    const outDir = join(DIST_DIR, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html, "utf-8");
    console.log(`[prerender-meta] ${route.path} -> OK`);
  }

  console.log(`[prerender-meta] Listo: ${ROUTES.length} rutas prerenderizadas.`);
}

run();
