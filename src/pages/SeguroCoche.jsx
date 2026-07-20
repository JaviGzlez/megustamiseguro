import "./SeguroCoche.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function SeguroCoche() {
  return (
    <main className="carPage">
      <Helmet>
        <title>Seguro de Coche | Compara y ahorra | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Compara seguros de coche y encuentra la cobertura que mejor se adapta a ti. Asesoramiento personalizado y sin compromiso."
        />
              <link rel="canonical" href="https://megustamiseguro.es/seguro-coche" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de Coche | Compara y ahorra | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Compara seguros de coche y encuentra la cobertura que mejor se adapta a ti. Asesoramiento personalizado y sin compromiso." />
        <meta property="og:url" content="https://megustamiseguro.es/seguro-coche" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de Coche | Compara y ahorra | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Compara seguros de coche y encuentra la cobertura que mejor se adapta a ti. Asesoramiento personalizado y sin compromiso." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="carHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="carHeaderLogo"
          />
        </a>

        <nav className="carNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="carHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="carHero">
        <div className="carHeroInner">
          <div>
            <p className="carBreadcrumb">Seguros · Coche</p>

            <h1>Tu seguro de coche, sin complicaciones.</h1>

            <p className="carHeroText">
              Comparamos opciones y te ayudamos a encontrar una cobertura
              adaptada a ti, estés donde estés en España. Sin comparadores
              fríos, sin letra pequeña y con una atención cercana desde el
              primer momento.
            </p>

            <div className="carButtons">
              <a href="#contacto" className="carPrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="SeguroCoche-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="carHeroBadges">
              <span>Atención online</span>
              <span>Para toda España</span>
              <span>Sin compromiso</span>
            </div>
          </div>

          <div className="carHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=85"
              alt="SUV familiar en carretera"
            />

            <div className="carHeroNote">
              <strong>¿Renuevas pronto tu seguro?</strong>
              <span>
                Revisamos tu situación y te ayudamos a elegir una opción clara,
                sencilla y adaptada a tus necesidades.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="carTrustBar">
        <div className="carTrustBarGrid">
          <div className="carTrustBarItem">
            <span>✓</span> Atención en toda España
          </div>

          <div className="carTrustBarItem">
            <span>✓</span> Asesoramiento personalizado
          </div>

          <div className="carTrustBarItem">
            <span>✓</span> Tramitación sencilla
          </div>

          <div className="carTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="carSection">
        <div className="carSectionInner">
          <h2 className="carSectionTitle">
            ¿Qué puede cubrir un seguro de coche?
          </h2>

          <p className="carSectionSubtitle">
            Cada póliza puede variar según la compañía y el tipo de seguro.
            Nosotros te ayudamos a revisar las coberturas para que sepas
            exactamente qué estás contratando.
          </p>

          <div className="carCoverageGrid">
            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Responsabilidad civil</h3>
              <p>
                La cobertura básica obligatoria para poder circular con tu
                vehículo.
              </p>
            </div>

            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Asistencia en carretera</h3>
              <p>
                Ayuda en caso de avería, accidente o incidencia durante tus
                desplazamientos.
              </p>
            </div>

            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Lunas, robo e incendio</h3>
              <p>
                Protecciones habituales que pueden marcar la diferencia ante
                imprevistos.
              </p>
            </div>

            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Daños propios</h3>
              <p>Cobertura asociada normalmente a pólizas a todo riesgo.</p>
            </div>

            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Defensa jurídica</h3>
              <p>
                Apoyo legal relacionado con reclamaciones derivadas de la
                circulación.
              </p>
            </div>

            <div className="carCoverageCard">
              <span>✓</span>
              <h3>Vehículo de sustitución</h3>
              <p>
                Una garantía interesante si dependes del coche en tu día a día.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="carTypesSection" id="tipos">
        <div className="carSectionInner">
          <h2 className="carSectionTitle">Tipos de seguro de coche</h2>

          <p className="carSectionSubtitle">
            No todo el mundo necesita la misma póliza. Por eso revisamos contigo
            qué nivel de protección tiene sentido para tu caso.
          </p>

          <div className="carTypesGrid">
            <div className="carTypeCard">
              <small>Opción básica</small>
              <h3>Terceros</h3>
              <p>
                Una solución sencilla para cumplir con la cobertura obligatoria
                y protegerte ante daños a terceros.
              </p>

              <ul>
                <li>Responsabilidad civil</li>
                <li>Defensa jurídica</li>
                <li>Asistencia según póliza</li>
              </ul>
            </div>

            <div className="carTypeCard">
              <small>Más protección</small>
              <h3>Terceros ampliado</h3>
              <p>
                Una opción equilibrada para quienes quieren más cobertura sin
                llegar al todo riesgo.
              </p>

              <ul>
                <li>Lunas</li>
                <li>Robo</li>
                <li>Incendio</li>
              </ul>
            </div>

            <div className="carTypeCard">
              <small>Cobertura completa</small>
              <h3>Todo riesgo</h3>
              <p>
                Una alternativa pensada para quienes buscan una protección más
                completa para su vehículo.
              </p>

              <ul>
                <li>Daños propios</li>
                <li>Con o sin franquicia</li>
                <li>Mayor tranquilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="carMidCta">
        <div className="carMidCtaBox">
          <div>
            <h2>¿No sabes qué seguro necesitas?</h2>
            <p>
              No tienes que decidirlo solo. Te escuchamos, revisamos tu
              situación y te ayudamos a elegir con tranquilidad.
            </p>
          </div>

          <a href="#contacto" className="carPrimaryBtn">
            Quiero que me asesoren
          </a>
        </div>
      </section>

      <section className="carSection">
        <div className="carSectionInner">
          <h2 className="carSectionTitle">
            ¿Por qué elegir Me Gusta Mi Seguro?
          </h2>

          <p className="carSectionSubtitle">
            Te acompañamos en el proceso para que no tengas que comparar solo ni
            perder tiempo entre condiciones y letra pequeña.
          </p>

          <div className="carWhyGrid">
            <div className="carWhyCard">
              <span>✓</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="carWhyCard">
              <span>✓</span>
              <h3>Comparamos diferentes opciones</h3>
            </div>

            <div className="carWhyCard">
              <span>✓</span>
              <h3>Atención por WhatsApp</h3>
            </div>

            <div className="carWhyCard">
              <span>✓</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="carSection">
        <div className="carDifferenceBox">
          <h2>No somos una comparadora automática.</h2>

          <p>
            Nos gusta escuchar, entender tu situación y ayudarte a elegir con
            tranquilidad. Porque un buen seguro no es solo cuestión de precio:
            también importa saber qué estás contratando.
          </p>

          <a href="#contacto" className="carPrimaryBtn">
            Solicitar estudio gratuito
          </a>
        </div>
      </section>

      <section className="carFaqSection">
        <div className="carSectionInner">
          <h2 className="carSectionTitle">Preguntas frecuentes</h2>

          <div className="carFaqList">
            <div className="carFaqItem">
              <h3>¿Puedo cambiar de seguro de coche cuando quiera?</h3>
              <p>
                Normalmente hay que respetar los plazos de comunicación con la
                aseguradora. Nosotros podemos ayudarte a revisar tu situación
                antes de hacer cualquier cambio.
              </p>
            </div>

            <div className="carFaqItem">
              <h3>¿Me ayudáis si ya tengo una póliza contratada?</h3>
              <p>
                Sí. Puedes enviarnos la información de tu póliza actual y
                revisamos contigo si existen alternativas que encajen mejor con
                tus necesidades.
              </p>
            </div>

            <div className="carFaqItem">
              <h3>¿Puedo contratar desde cualquier lugar de España?</h3>
              <p>
                Sí. Trabajamos de forma online y telefónica, por lo que podemos
                ayudarte independientemente de dónde vivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="carContactSection" id="contacto">
        <div className="carContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y nos pondremos en contacto contigo para revisar
            tu seguro de coche.
          </p>

          <LeadForm
            seguroInicial="Seguro de Coche"
            mostrarSelector={false}
            pagina="SeguroCoche"
            className="carContactForm"
          />
        </div>
      </section>

      <footer className="carFooter">
        <div className="carFooterContainer">
          <div className="carFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="carFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="carFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="carFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="carFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="SeguroCoche-Flotante" floating={true} />
    </main>
  );
}

export default SeguroCoche;