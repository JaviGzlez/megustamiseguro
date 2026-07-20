import "./TransporteMercancia.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function TransporteMercancia() {
  return (
    <main className="cargoPage">
      <Helmet>
        <title>Seguro de Transporte y Mercancía | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Seguros para transportistas y mercancías: responsabilidad civil del transportista, mercancías en tránsito y flotas. Asesoramiento sin compromiso."
        />
              <link rel="canonical" href="https://megustamiseguro.es/transporte-mercancia" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de Transporte y Mercancía | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Seguros para transportistas y mercancías: responsabilidad civil del transportista, mercancías en tránsito y flotas. Asesoramiento sin compromiso." />
        <meta property="og:url" content="https://megustamiseguro.es/transporte-mercancia" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de Transporte y Mercancía | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Seguros para transportistas y mercancías: responsabilidad civil del transportista, mercancías en tránsito y flotas. Asesoramiento sin compromiso." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="cargoHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="cargoHeaderLogo"
          />
        </a>

        <nav className="cargoNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="cargoHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="cargoHero">
        <div className="cargoHeroInner">
          <div>
            <p className="cargoBreadcrumb">
              Seguros · Transporte y Mercancía
            </p>

            <h1>Tu mercancía, protegida en cada trayecto.</h1>

            <p className="cargoHeroText">
              Tanto si eres transportista autónomo como si gestionas una
              flota o una empresa de logística, te ayudamos a encontrar la
              cobertura adecuada para tu actividad y las mercancías que
              transportas, en trayectos nacionales e internacionales.
            </p>

            <div className="cargoButtons">
              <a href="#contacto" className="cargoPrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="TransporteMercancia-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="cargoHeroBadges">
              <span>Nacional</span>
              <span>Internacional</span>
              <span>Flotas</span>
            </div>
          </div>

          <div className="cargoHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85"
              alt="Camión de transporte de mercancías"
            />

            <div className="cargoHeroNote">
              <strong>¿Transportas mercancía por cuenta propia o ajena?</strong>
              <span>
                Analizamos tu actividad y te ayudamos a encontrar una
                cobertura clara, adaptada a tus rutas y a lo que transportas.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cargoTrustBar">
        <div className="cargoTrustBarGrid">
          <div className="cargoTrustBarItem">
            <span>✓</span> Transportistas autónomos
          </div>

          <div className="cargoTrustBarItem">
            <span>✓</span> Empresas de logística
          </div>

          <div className="cargoTrustBarItem">
            <span>✓</span> Flotas de vehículos
          </div>

          <div className="cargoTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="cargoSection">
        <div className="cargoSectionInner">
          <h2 className="cargoSectionTitle">
            ¿Qué cubre un seguro de transporte y mercancía?
          </h2>

          <p className="cargoSectionSubtitle">
            Cada actividad de transporte tiene riesgos distintos. Te ayudamos
            a valorar qué coberturas tienen sentido para tu negocio.
          </p>

          <div className="cargoCoverageGrid">
            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Responsabilidad Civil del Transportista</h3>
              <p>
                Cubre los daños o pérdidas de la mercancía de la que eres
                responsable durante el transporte.
              </p>
            </div>

            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Mercancías en Tránsito</h3>
              <p>
                Protección del valor de la mercancía transportada ante daños,
                pérdida o accidente.
              </p>
            </div>

            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Seguro de Flota</h3>
              <p>
                Gestión conjunta de todos los vehículos de tu empresa de
                transporte bajo una misma póliza.
              </p>
            </div>

            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Robo y Extravío</h3>
              <p>
                Cobertura ante la sustracción o pérdida de la mercancía
                durante el trayecto.
              </p>
            </div>

            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Rotura y Manipulación</h3>
              <p>
                Daños producidos durante la carga, descarga o manipulación de
                la mercancía.
              </p>
            </div>

            <div className="cargoCoverageCard">
              <span>✓</span>
              <h3>Transporte Internacional</h3>
              <p>
                Coberturas adaptadas a trayectos fuera de España, con la
                normativa de transporte internacional (CMR).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tipos" className="cargoTypesSection">
        <div className="cargoSectionInner">
          <h2 className="cargoSectionTitle">
            Soluciones para cada tipo de transporte
          </h2>

          <div className="cargoTypesGrid">
            <div className="cargoTypeCard">
              <small>Autónomos</small>
              <h3>Transportista independiente</h3>
              <p>
                Pensada para quien trabaja con su propio vehículo, cubriendo
                su responsabilidad frente a la mercancía transportada.
              </p>
            </div>

            <div className="cargoTypeCard">
              <small>Empresas</small>
              <h3>Logística y distribución</h3>
              <p>
                Soluciones para empresas que gestionan el transporte de
                mercancías de terceros de forma habitual.
              </p>
            </div>

            <div className="cargoTypeCard">
              <small>Flotas</small>
              <h3>Varios vehículos</h3>
              <p>
                Gestión centralizada para empresas con varios camiones o
                furgonetas en su flota de transporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cargoContactSection" id="contacto">
        <div className="cargoContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y revisaremos las necesidades aseguradoras de
            tu actividad de transporte.
          </p>

          <LeadForm
            seguroInicial="Transporte y Mercancía"
            mostrarSelector={false}
            mostrarEmpresa={true}
            pagina="TransporteMercancia"
            className="cargoContactForm"
          />
        </div>
      </section>

      <footer className="cargoFooter">
        <div className="cargoFooterContainer">
          <div className="cargoFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="cargoFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="cargoFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="cargoFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="cargoFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal
        pagina="TransporteMercancia-Flotante"
        floating={true}
      />
    </main>
  );
}

export default TransporteMercancia;
