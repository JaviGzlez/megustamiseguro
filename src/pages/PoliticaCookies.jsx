import "./Blog.css";
import "../App.css";
import { Helmet } from "react-helmet-async";
import SocialLinks from "../components/SocialLinks";

function PoliticaCookies() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Política de Cookies | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Política de cookies de Me Gusta Mi Seguro: qué cookies utilizamos y cómo puedes gestionarlas."
        />
              <link rel="canonical" href="https://megustamiseguro.es/politica-cookies" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de Cookies | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Política de cookies de Me Gusta Mi Seguro: qué cookies utilizamos y cómo puedes gestionarlas." />
        <meta property="og:url" content="https://megustamiseguro.es/politica-cookies" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Cookies | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Política de cookies de Me Gusta Mi Seguro: qué cookies utilizamos y cómo puedes gestionarlas." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <header className="blogHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="blogLogo"
          />
        </a>

        <nav className="blogNav">
          <a href="/">Inicio</a>
          <a href="/#seguros">Seguros</a>
          <a href="/blog">Blog</a>
          <a href="/#contacto">Contacto</a>
        </nav>

        <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="legalContent">
        <h1>Política de Cookies</h1>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web
          almacenan en tu dispositivo cuando los visitas. Se utilizan para
          recordar información sobre tu visita, facilitar la navegación y,
          en algunos casos, analizar cómo se utiliza el sitio.
        </p>

        <h2>2. Cookies que utilizamos</h2>
        <p>Este sitio web puede utilizar los siguientes tipos de cookies:</p>
        <ul>
          <li>
            <strong>Cookies técnicas o necesarias:</strong> imprescindibles
            para el funcionamiento básico del sitio web. No requieren
            consentimiento.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> utilizamos Google Analytics
            para conocer cómo interactúan los usuarios con el sitio (páginas
            visitadas, tiempo de permanencia, origen del tráfico), con el
            fin de mejorar nuestros contenidos y servicios. Estas cookies
            solo se instalan si aceptas el banner de cookies que aparece al
            entrar en el sitio; puedes rechazarlas sin que ello afecte al
            funcionamiento de la web.
          </li>
        </ul>

        <h2>3. Base legal</h2>
        <p>
          De acuerdo con la normativa vigente (LSSI-CE y RGPD), las cookies
          no exentas de consentimiento solo se instalarán en tu dispositivo
          tras obtener tu consentimiento expreso a través del banner de
          cookies del sitio web.
        </p>

        <h2>4. Cómo gestionar las cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu
          equipo mediante la configuración de las opciones del navegador que
          utilices. A continuación, algunos enlaces de ayuda de los
          navegadores más comunes:
        </p>
        <ul>
          <li>Google Chrome: chrome://settings/cookies</li>
          <li>Mozilla Firefox: configuración de privacidad y seguridad</li>
          <li>Safari: preferencias de privacidad</li>
          <li>Microsoft Edge: configuración de cookies y permisos del sitio</li>
        </ul>

        <h2>5. Más información</h2>
        <p>
          Si tienes dudas sobre esta política de cookies, puedes
          contactarnos en info@megustamiseguro.es.
        </p>

        <p className="legalUpdated">Última actualización: julio de 2026</p>
      </section>

      <footer className="footer">
        <div className="footerContainer">
          <div className="footerColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉️ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="footerColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
          </div>

          <div className="footerColumn">
            <h4>Empresa</h4>
            <a href="/#nosotros">Sobre Nosotros</a>
            <a href="/#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="footerColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="footerBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}

export default PoliticaCookies;
