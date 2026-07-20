import "../App.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <main className="app">
      <Helmet>
        <title>Me Gusta Mi Seguro | Compara seguros de coche, hogar, salud, vida y mascotas</title>
        <meta
          name="description"
          content="Te ayudamos a elegir con tranquilidad. Comparamos seguros de coche, hogar, salud, vida, mascotas y empresas para que encuentres la mejor opción, sin compromiso."
        />
              <link rel="canonical" href="https://megustamiseguro.es/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Me Gusta Mi Seguro | Compara seguros de coche, hogar, salud, vida y mascotas" />
        <meta property="og:description" content="Te ayudamos a elegir con tranquilidad. Comparamos seguros de coche, hogar, salud, vida, mascotas y empresas para que encuentres la mejor opción, sin compromiso." />
        <meta property="og:url" content="https://megustamiseguro.es/" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Me Gusta Mi Seguro | Compara seguros de coche, hogar, salud, vida y mascotas" />
        <meta name="twitter:description" content="Te ayudamos a elegir con tranquilidad. Comparamos seguros de coche, hogar, salud, vida, mascotas y empresas para que encuentres la mejor opción, sin compromiso." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="header">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="headerLogo"
          />
        </a>

        <nav className="nav">
          <a href="/">Inicio</a>
          <a href="#seguros">Seguros</a>
          <a href="#nosotros">Nosotros</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="headerBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Me Gusta Mi Seguro</p>

          <h1>Tus seguros, en buenas manos.</h1>

          <h2>Te ayudamos a elegir con tranquilidad.</h2>

          <p className="heroText">
            Analizamos tus necesidades y te ayudamos a encontrar la solución que
            mejor se adapta a ti, a tu familia y a lo que más importa.
          </p>

          <div className="buttons">
            <a href="#contacto" className="primaryBtn">
              Solicitar estudio gratuito
            </a>

            <QuickContactModal
              pagina="Home-Hero"
              floating={false}
              className="whatsappHeroBtn"
            />
          </div>

          <div className="trustItems">
            <span>✔️ Asesoramiento personalizado</span>
            <span>✔️ Comparamos entre compañías</span>
            <span>✔️ Sin compromiso</span>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=80"
            alt="Familia protegida"
          />
        </div>
      </section>

      <section className="insuranceSection" id="seguros">
        <h2 className="sectionTitle">¿Qué seguro necesitas?</h2>

        <div className="insuranceGrid">
          <a href="/seguro-coche" className="insuranceCard">
            <span>🚗</span>
            <h3>Seguro de Coche</h3>
          </a>

          <a href="/seguro-hogar" className="insuranceCard">
            <span>🏠</span>
            <h3>Seguro de Hogar</h3>
          </a>

          <a href="/seguro-salud" className="insuranceCard">
            <span>❤️</span>
            <h3>Seguro de Salud</h3>
          </a>

          <a href="/seguro-vida" className="insuranceCard">
            <span>👨‍👩‍👧</span>
            <h3>Seguro de Vida</h3>
          </a>

          <a href="/seguro-mascotas" className="insuranceCard">
            <span>🐶</span>
            <h3>Seguro de Mascotas</h3>
          </a>

          <a href="/empresas-autonomos" className="insuranceCard">
            <span>🏢</span>
            <h3>Empresas y Autónomos</h3>
          </a>

          <a href="/transporte-mercancia" className="insuranceCard">
            <span>🚚</span>
            <h3>Transporte y Mercancía</h3>
          </a>
        </div>
      </section>

      <section className="trustSection" id="nosotros">
        <div className="trustContainer">
          <h2>Más que seguros. Confianza.</h2>

          <p>
            Sabemos que elegir un seguro puede resultar complicado. Por eso
            analizamos cada situación de forma personalizada para ayudarte a
            tomar una decisión informada y tranquila.
          </p>

          <div className="trustGrid">
            <div className="trustCard">
              <span>✔️</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="trustCard">
              <span>✔️</span>
              <h3>Comparación entre compañías</h3>
            </div>

            <div className="trustCard">
              <span>✔️</span>
              <h3>Atención cercana</h3>
            </div>

            <div className="trustCard">
              <span>✔️</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="processSection">
        <h2>¿Cómo trabajamos?</h2>

        <div className="processGrid">
          <div className="processCard">
            <span>1</span>
            <h3>Cuéntanos qué necesitas</h3>
          </div>

          <div className="processCard">
            <span>2</span>
            <h3>Analizamos tu situación</h3>
          </div>

          <div className="processCard">
            <span>3</span>
            <h3>Buscamos alternativas</h3>
          </div>

          <div className="processCard">
            <span>4</span>
            <h3>Tú eliges con tranquilidad</h3>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contacto">
        <div className="contactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>Déjanos tus datos y nos pondremos en contacto contigo.</p>

          <LeadForm pagina="Home" mostrarSelector={true} />
        </div>
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
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="footerColumn">
            <h4>Empresa</h4>
            <a href="#nosotros">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
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

      <QuickContactModal pagina="Home-Flotante" floating={true} />
    </main>
  );
}

export default Home;