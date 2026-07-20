import "./Blog.css";
import "../App.css";
import { Helmet } from "react-helmet-async";
import SocialLinks from "../components/SocialLinks";

function AvisoLegal() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Aviso Legal | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Aviso legal de Me Gusta Mi Seguro: información sobre el titular del sitio web y condiciones de uso."
        />
              <link rel="canonical" href="https://megustamiseguro.es/aviso-legal" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aviso Legal | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Aviso legal de Me Gusta Mi Seguro: información sobre el titular del sitio web y condiciones de uso." />
        <meta property="og:url" content="https://megustamiseguro.es/aviso-legal" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviso Legal | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Aviso legal de Me Gusta Mi Seguro: información sobre el titular del sitio web y condiciones de uso." />
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
          <a href="/mi-cuenta">Mi cuenta</a>
        </nav>

        <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="legalContent">
        <h1>Aviso Legal</h1>

        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del deber de información recogido en el artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico (LSSI-CE), se informa a los
          usuarios de los siguientes datos:
        </p>
        <ul>
          <li>Titular: José Carlos Ortiz Cervera</li>
          <li>CIF/NIF: 32056045W</li>
          <li>Domicilio social: Calle Higueras, 3, 11402 Jerez de la Frontera, Cádiz</li>
          <li>Correo electrónico: info@megustamiseguro.es</li>
          <li>Teléfono: 643 727 346</li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          El presente Aviso Legal regula el uso del sitio web
          megustamiseguro.es (en adelante, "el sitio web"), del que es
          titular José Carlos Ortiz Cervera. La navegación por el sitio
          web atribuye la condición de usuario del mismo e implica la
          aceptación plena de todas las disposiciones incluidas en este
          Aviso Legal.
        </p>

        <h2>3. Actividad del sitio web</h2>
        <p>
          Este sitio web tiene como finalidad la captación e información de
          solicitudes de estudio de seguros, actuando como portal de
          colaboración comercial. La actividad de mediación de seguros
          (asesoramiento, contratación y gestión de pólizas) es realizada
          por la correduría de seguros <strong>Draudimasgroup</strong>,
          entidad inscrita en el registro administrativo especial de
          mediadores de seguros de la Dirección General de Seguros y Fondos
          de Pensiones (DGSFP), quien dispone del seguro de responsabilidad
          civil y la capacidad financiera exigidos por la normativa vigente
          en materia de distribución de seguros.
        </p>

        <h2>4. Condiciones de uso</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos
          y servicios que se ofrecen a través del sitio web y a no
          emplearlos para incurrir en actividades ilícitas o contrarias a la
          buena fe y al ordenamiento legal; difundir contenidos o propaganda
          de carácter racista, xenófobo o que promuevan el terrorismo; o
          intentar acceder a las cuentas de correo electrónico de otros
          usuarios o a áreas restringidas de los sistemas informáticos.
        </p>

        <h2>5. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web (textos, imágenes, marcas,
          logotipos, diseño y estructura) son propiedad de [NOMBRE LEGAL DE
          LA EMPRESA] o de terceros que han autorizado su uso, y están
          protegidos por la normativa de propiedad intelectual e industrial.
          Queda prohibida su reproducción, distribución o transformación sin
          autorización expresa.
        </p>

        <h2>6. Exclusión de responsabilidad</h2>
        <p>
          José Carlos Ortiz Cervera no se hace responsable de los daños y
          perjuicios de cualquier naturaleza que pudieran derivarse de la
          falta de disponibilidad o continuidad del funcionamiento del sitio
          web, ni de la existencia de virus u otros elementos lesivos en el
          contenido.
        </p>

        <h2>7. Legislación aplicable</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española.
          Para cualquier controversia derivada del acceso o uso del sitio
          web, las partes se someten a los juzgados y tribunales del
          domicilio del usuario.
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

export default AvisoLegal;
