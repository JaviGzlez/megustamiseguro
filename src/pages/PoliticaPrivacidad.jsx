import "./Blog.css";
import "../App.css";
import { Helmet } from "react-helmet-async";
import SocialLinks from "../components/SocialLinks";

function PoliticaPrivacidad() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Política de Privacidad | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Política de privacidad de Me Gusta Mi Seguro: cómo tratamos tus datos personales conforme al RGPD."
        />
              <link rel="canonical" href="https://megustamiseguro.es/politica-privacidad" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de Privacidad | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Política de privacidad de Me Gusta Mi Seguro: cómo tratamos tus datos personales conforme al RGPD." />
        <meta property="og:url" content="https://megustamiseguro.es/politica-privacidad" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidad | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Política de privacidad de Me Gusta Mi Seguro: cómo tratamos tus datos personales conforme al RGPD." />
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
        <h1>Política de Privacidad</h1>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li>Responsable: José Carlos Ortiz Cervera</li>
          <li>CIF/NIF: 32056045W</li>
          <li>Domicilio: Calle Higueras, 3, 11402 Jerez de la Frontera, Cádiz</li>
          <li>Email de contacto: info@megustamiseguro.es</li>
        </ul>

        <h2>2. ¿Qué datos recogemos?</h2>
        <p>
          A través de los formularios de este sitio web recogemos los
          siguientes datos cuando el usuario los facilita voluntariamente:
          nombre y apellidos, teléfono, correo electrónico, tipo de seguro
          de interés y, en su caso, empresa o actividad profesional y
          mensaje adicional.
        </p>

        <h2>3. Finalidad del tratamiento</h2>
        <p>
          Los datos facilitados se utilizan para: gestionar y responder a
          las solicitudes de información o estudio de seguros; contactar
          contigo por teléfono, email o WhatsApp para ofrecerte
          asesoramiento; y, en su caso, gestionar la contratación y
          seguimiento de tus pólizas de seguro (incluidos avisos de
          próximas renovaciones o vencimientos).
        </p>

        <h2>4. Legitimación</h2>
        <p>
          La base legal para el tratamiento de tus datos es el
          consentimiento que prestas al enviar el formulario, así como, en
          su caso, la ejecución de la relación precontractual o contractual
          derivada de la mediación de seguros.
        </p>

        <h2>5. Destinatarios y encargados del tratamiento</h2>
        <p>
          Tus datos pueden ser comunicados a la correduría de seguros con la
          que colaboramos (Draudimasgroup), con el fin de
          gestionar tu solicitud. Asimismo, utilizamos proveedores externos
          que actúan como encargados del tratamiento para el envío de
          comunicaciones (como EmailJS) y, en su caso, para el
          almacenamiento de datos en base de datos (como Supabase), quienes
          tratan los datos únicamente siguiendo nuestras instrucciones.
        </p>

        <h2>6. Plazo de conservación</h2>
        <p>
          Los datos se conservarán mientras exista una relación con el
          usuario y, una vez finalizada, durante los plazos legalmente
          exigibles en materia de mediación de seguros y obligaciones
          fiscales.
        </p>

        <h2>7. Derechos de las personas interesadas</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad de tus datos
          escribiendo a info@megustamiseguro.es, indicando el derecho que
          deseas ejercer y adjuntando copia de tu documento de identidad.
          También puedes presentar una reclamación ante la Agencia Española
          de Protección de Datos (www.aepd.es) si consideras que el
          tratamiento no se ajusta a la normativa vigente.
        </p>

        <h2>8. Medidas de seguridad</h2>
        <p>
          Hemos adoptado las medidas técnicas y organizativas necesarias
          para garantizar la seguridad de tus datos personales y evitar su
          alteración, pérdida, tratamiento o acceso no autorizado.
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

export default PoliticaPrivacidad;
