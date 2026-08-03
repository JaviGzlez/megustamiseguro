import "./SeguroHogar.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";
import MobileMenu from "../components/MobileMenu";

function SeguroHogar() {
  return (
    <main className="homeInsurancePage">
      <Helmet>
        <title>Seguro de Hogar | Protege tu casa | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Encuentra el seguro de hogar que mejor protege tu vivienda y tus enseres. Comparamos coberturas para que decidas con tranquilidad."
        />
              <link rel="canonical" href="https://megustamiseguro.es/seguro-hogar" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de Hogar | Protege tu casa | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Encuentra el seguro de hogar que mejor protege tu vivienda y tus enseres. Comparamos coberturas para que decidas con tranquilidad." />
        <meta property="og:url" content="https://megustamiseguro.es/seguro-hogar" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de Hogar | Protege tu casa | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Encuentra el seguro de hogar que mejor protege tu vivienda y tus enseres. Comparamos coberturas para que decidas con tranquilidad." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="homeHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="homeHeaderLogo"
          />
        </a>

        <nav className="homeNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="homeHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>

        <MobileMenu
          links={[
            { href: "/", label: "Inicio" },
            { href: "#coberturas", label: "Coberturas" },
            { href: "#tipos", label: "Tipos" },
            { href: "/blog", label: "Blog" },
            { href: "#contacto", label: "Contacto" },
          ]}
        />
      </header>

      <section className="homeHero">
        <div className="homeHeroInner">
          <div>
            <p className="homeBreadcrumb">Seguros · Hogar</p>

            <h1>Tu hogar protegido, sin complicaciones.</h1>

            <p className="homeHeroText">
              Te ayudamos a encontrar un seguro de hogar adaptado a tu vivienda
              y a tu forma de vivir. Revisamos coberturas, resolvemos dudas y te
              acompañamos para que elijas con tranquilidad, estés donde estés en
              España.
            </p>

            <div className="homeButtons">
              <a href="#contacto" className="homePrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="SeguroHogar-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="homeHeroBadges">
              <span>Vivienda habitual</span>
              <span>Alquiler o propiedad</span>
              <span>Atención en toda España</span>
            </div>
          </div>

          <div className="homeHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1400&q=85"
              alt="Hogar familiar luminoso"
            />

            <div className="homeHeroNote">
              <strong>¿Quieres revisar tu seguro de hogar?</strong>
              <span>
                Analizamos tu situación y te ayudamos a encontrar una opción
                clara, sencilla y adaptada a tu vivienda.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="homeTrustBar">
        <div className="homeTrustBarGrid">
          <div className="homeTrustBarItem">
            <span>✓</span> Propietarios e inquilinos
          </div>

          <div className="homeTrustBarItem">
            <span>✓</span> Asesoramiento personalizado
          </div>

          <div className="homeTrustBarItem">
            <span>✓</span> Revisión de coberturas
          </div>

          <div className="homeTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="homeSection">
        <div className="homeSectionInner">
          <h2 className="homeSectionTitle">
            ¿Qué puede cubrir un seguro de hogar?
          </h2>

          <p className="homeSectionSubtitle">
            Cada vivienda es distinta. Por eso te ayudamos a revisar qué
            coberturas pueden tener sentido según si eres propietario, inquilino,
            tienes hipoteca o quieres proteger también tus pertenencias.
          </p>

          <div className="homeCoverageGrid">
            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Continente</h3>
              <p>
                Protección sobre la estructura de la vivienda: paredes, techos,
                suelos e instalaciones fijas.
              </p>
            </div>

            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Contenido</h3>
              <p>
                Cobertura para muebles, electrodomésticos, objetos personales y
                otros bienes del hogar.
              </p>
            </div>

            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Responsabilidad civil</h3>
              <p>
                Ayuda ante posibles daños que tú, tu vivienda o tu familia
                puedan causar a terceros.
              </p>
            </div>

            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Daños por agua</h3>
              <p>
                Una de las coberturas más habituales para averías, fugas o
                filtraciones en la vivienda.
              </p>
            </div>

            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Robo e incendio</h3>
              <p>
                Protecciones importantes para situaciones imprevistas que pueden
                afectar seriamente al hogar.
              </p>
            </div>

            <div className="homeCoverageCard">
              <span>✓</span>
              <h3>Asistencia en el hogar</h3>
              <p>
                Servicios de ayuda para pequeñas urgencias, reparaciones o
                necesidades del día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeTypesSection" id="tipos">
        <div className="homeSectionInner">
          <h2 className="homeSectionTitle">Tipos de seguro de hogar</h2>

          <p className="homeSectionSubtitle">
            No necesita lo mismo una vivienda en propiedad que una casa alquilada
            o una segunda residencia. Te ayudamos a elegir una opción coherente
            con tu situación.
          </p>

          <div className="homeTypesGrid">
            <div className="homeTypeCard">
              <small>Vivienda habitual</small>
              <h3>Hogar completo</h3>
              <p>
                Una opción pensada para proteger tanto la vivienda como lo que
                hay dentro de ella.
              </p>

              <ul>
                <li>Continente y contenido</li>
                <li>Responsabilidad civil</li>
                <li>Daños por agua</li>
              </ul>
            </div>

            <div className="homeTypeCard">
              <small>Para inquilinos</small>
              <h3>Seguro de alquiler</h3>
              <p>
                Ideal si vives de alquiler y quieres proteger tus pertenencias y
                tu responsabilidad civil.
              </p>

              <ul>
                <li>Contenido</li>
                <li>RC familiar</li>
                <li>Asistencia según póliza</li>
              </ul>
            </div>

            <div className="homeTypeCard">
              <small>Mayor tranquilidad</small>
              <h3>Segunda vivienda</h3>
              <p>
                Una alternativa para viviendas vacacionales o casas que no se
                usan todo el año.
              </p>

              <ul>
                <li>Robo e incendio</li>
                <li>Daños por agua</li>
                <li>Protección adaptada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="homeMidCta">
        <div className="homeMidCtaBox">
          <div>
            <h2>¿No sabes qué coberturas necesitas?</h2>
            <p>
              No tienes que decidirlo solo. Te escuchamos, revisamos tu vivienda
              y te ayudamos a elegir con tranquilidad.
            </p>
          </div>

          <a href="#contacto" className="homePrimaryBtn">
            Quiero que me asesoren
          </a>
        </div>
      </section>

      <section className="homeSection">
        <div className="homeSectionInner">
          <h2 className="homeSectionTitle">
            ¿Por qué elegir Me Gusta Mi Seguro?
          </h2>

          <p className="homeSectionSubtitle">
            Te acompañamos para que no tengas que comparar solo ni perder tiempo
            entre condiciones, exclusiones y letra pequeña.
          </p>

          <div className="homeWhyGrid">
            <div className="homeWhyCard">
              <span>✓</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="homeWhyCard">
              <span>✓</span>
              <h3>Revisamos tus coberturas</h3>
            </div>

            <div className="homeWhyCard">
              <span>✓</span>
              <h3>Atención por WhatsApp</h3>
            </div>

            <div className="homeWhyCard">
              <span>✓</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="homeDifferenceBox">
          <h2>No somos una comparadora automática.</h2>

          <p>
            Nos gusta escuchar, entender tu vivienda y ayudarte a elegir con
            tranquilidad. Porque un buen seguro de hogar no es solo cuestión de
            precio: también importa saber qué queda realmente protegido.
          </p>

          <a href="#contacto" className="homePrimaryBtn">
            Solicitar estudio gratuito
          </a>
        </div>
      </section>

      <section className="homeFaqSection">
        <div className="homeSectionInner">
          <h2 className="homeSectionTitle">Preguntas frecuentes</h2>

          <div className="homeFaqList">
            <div className="homeFaqItem">
              <h3>¿Es obligatorio tener seguro de hogar?</h3>
              <p>
                No siempre es obligatorio, aunque puede ser exigido si existe
                una hipoteca. En cualquier caso, puede ser muy recomendable para
                proteger la vivienda y evitar imprevistos.
              </p>
            </div>

            <div className="homeFaqItem">
              <h3>¿Qué diferencia hay entre continente y contenido?</h3>
              <p>
                El continente hace referencia a la estructura de la vivienda. El
                contenido son los bienes que tienes dentro, como muebles,
                electrodomésticos u objetos personales.
              </p>
            </div>

            <div className="homeFaqItem">
              <h3>¿Puedo contratar desde cualquier lugar de España?</h3>
              <p>
                Sí. Trabajamos de forma online y telefónica, por lo que podemos
                ayudarte independientemente de dónde vivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeContactSection" id="contacto">
        <div className="homeContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y nos pondremos en contacto contigo para revisar
            tu seguro de hogar.
          </p>

          <LeadForm
            seguroInicial="Seguro de Hogar"
            mostrarSelector={false}
            pagina="SeguroHogar"
            className="homeContactForm"
          />
        </div>
      </section>

      <footer className="homeFooter">
        <div className="homeFooterContainer">
          <div className="homeFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="homeFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="homeFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="homeFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="homeFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="SeguroHogar-Flotante" floating={true} />
    </main>
  );
}

export default SeguroHogar;