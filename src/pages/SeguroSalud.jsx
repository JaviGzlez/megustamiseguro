import "./SeguroSalud.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import FaqSchema from "../components/FaqSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function SeguroSalud() {
  return (
    <main className="healthPage">
      <Helmet>
        <title>Seguro Médico y de Salud | Con o sin Copago | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Compara seguros médicos y de salud, con y sin copago, y encuentra la cobertura médica que mejor se adapta a ti y a tu familia."
        />
              <link rel="canonical" href="https://megustamiseguro.es/seguro-salud" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro Médico y de Salud | Con o sin Copago | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Compara seguros médicos y de salud, con y sin copago, y encuentra la cobertura médica que mejor se adapta a ti y a tu familia." />
        <meta property="og:url" content="https://megustamiseguro.es/seguro-salud" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro Médico y de Salud | Con o sin Copago | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Compara seguros médicos y de salud, con y sin copago, y encuentra la cobertura médica que mejor se adapta a ti y a tu familia." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <FaqSchema
        items={[
          {
            question: "¿Qué son las carencias en un seguro de salud?",
            answer:
              "Son periodos de tiempo desde la contratación durante los cuales algunas coberturas pueden no estar disponibles. Te ayudamos a revisarlas antes de contratar.",
          },
          {
            question: "¿Qué diferencia hay entre copago y sin copago?",
            answer:
              "Con copago puedes pagar una cantidad por determinados servicios. Sin copago, normalmente pagas una prima más alta pero sin esos pagos adicionales por uso.",
          },
          {
            question: "¿Puedo contratar desde cualquier lugar de España?",
            answer:
              "Sí. Trabajamos de forma online y telefónica, por lo que podemos ayudarte independientemente de dónde vivas.",
          },
          {
            question: "¿Qué cobertura médica incluye un seguro de salud?",
            answer:
              "La cobertura médica varía según la compañía y la modalidad contratada, pero suele incluir medicina general, atención de especialistas, pruebas diagnósticas y, en muchos casos, urgencias y hospitalización.",
          },
        ]}
      />

      <header className="healthHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="healthHeaderLogo"
          />
        </a>

        <nav className="healthNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="healthHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="healthHero">
        <div className="healthHeroInner">
          <div>
            <p className="healthBreadcrumb">Seguros · Salud</p>

            <h1>Seguro médico y de salud, con la atención que mereces.</h1>

            <p className="healthHeroText">
              Te ayudamos a encontrar un seguro médico adaptado a ti, a tu
              familia y a tus necesidades reales. Comparamos opciones y
              cobertura médica para que elijas con tranquilidad.
            </p>

            <div className="healthButtons">
              <a href="#contacto" className="healthPrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="SeguroSalud-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="healthHeroBadges">
              <span>Atención privada</span>
              <span>Familias y particulares</span>
              <span>Sin compromiso</span>
            </div>
          </div>

          <div className="healthHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1400&q=85"
              alt="Atención médica profesional"
            />

            <div className="healthHeroNote">
              <strong>¿Quieres mejorar tu cobertura médica?</strong>
              <span>
                Revisamos tus necesidades y te ayudamos a encontrar una opción
                clara, sencilla y adaptada a ti.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="healthTrustBar">
        <div className="healthTrustBarGrid">
          <div className="healthTrustBarItem">
            <span>✓</span> Atención privada
          </div>

          <div className="healthTrustBarItem">
            <span>✓</span> Asesoramiento personalizado
          </div>

          <div className="healthTrustBarItem">
            <span>✓</span> Para familias y particulares
          </div>

          <div className="healthTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="healthSection">
        <div className="healthSectionInner">
          <h2 className="healthSectionTitle">
            ¿Qué puede incluir un seguro de salud?
          </h2>

          <p className="healthSectionSubtitle">
            Cada seguro puede variar según la compañía y la modalidad. Te
            ayudamos a revisar las coberturas para que sepas qué atención
            médica tendrás disponible.
          </p>

          <div className="healthCoverageGrid">
            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Medicina general</h3>
              <p>
                Acceso a consultas médicas para el seguimiento habitual de tu
                salud.
              </p>
            </div>

            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Especialistas</h3>
              <p>
                Atención con profesionales de diferentes especialidades según la
                modalidad contratada.
              </p>
            </div>

            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Pruebas diagnósticas</h3>
              <p>
                Radiografías, análisis, ecografías u otras pruebas según las
                condiciones de la póliza.
              </p>
            </div>

            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Hospitalización</h3>
              <p>
                Cobertura para ingresos hospitalarios cuando esté incluida en el
                seguro contratado.
              </p>
            </div>

            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Urgencias</h3>
              <p>
                Acceso a servicios de urgencia médica según la red asistencial
                disponible.
              </p>
            </div>

            <div className="healthCoverageCard">
              <span>✓</span>
              <h3>Dental y extras</h3>
              <p>
                Algunas pólizas pueden incluir servicios dentales u otras
                garantías adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="healthTypesSection" id="tipos">
        <div className="healthSectionInner">
          <h2 className="healthSectionTitle">Tipos de seguro de salud</h2>

          <p className="healthSectionSubtitle">
            No todas las personas necesitan lo mismo. Te ayudamos a elegir una
            modalidad que encaje contigo y con tu forma de cuidar tu salud.
          </p>

          <div className="healthTypesGrid">
            <div className="healthTypeCard">
              <small>Opción básica</small>
              <h3>Cuadro médico</h3>
              <p>
                Acceso a médicos y centros concertados dentro de la red de la
                compañía.
              </p>

              <ul>
                <li>Especialistas</li>
                <li>Pruebas médicas</li>
                <li>Atención concertada</li>
              </ul>
            </div>

            <div className="healthTypeCard">
              <small>Más libertad</small>
              <h3>Reembolso</h3>
              <p>
                Modalidad que puede permitir acudir a profesionales fuera del
                cuadro médico y recuperar parte del importe.
              </p>

              <ul>
                <li>Mayor flexibilidad</li>
                <li>Elección de médico</li>
                <li>Condiciones según póliza</li>
              </ul>
            </div>

            <div className="healthTypeCard">
              <small>Para familias</small>
              <h3>Seguro familiar</h3>
              <p>
                Una opción pensada para proteger a varios miembros de la familia
                bajo una misma solución.
              </p>

              <ul>
                <li>Atención para adultos y niños</li>
                <li>Servicios preventivos</li>
                <li>Gestión más sencilla</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="healthMidCta">
        <div className="healthMidCtaBox">
          <div>
            <h2>¿No sabes qué modalidad elegir?</h2>
            <p>
              Te escuchamos, revisamos tus necesidades y te ayudamos a elegir un
              seguro de salud con tranquilidad.
            </p>
          </div>

          <a href="#contacto" className="healthPrimaryBtn">
            Quiero que me asesoren
          </a>
        </div>
      </section>

      <section className="healthSection">
        <div className="healthSectionInner">
          <h2 className="healthSectionTitle">
            ¿Por qué elegir Me Gusta Mi Seguro?
          </h2>

          <p className="healthSectionSubtitle">
            Te acompañamos para que no tengas que comparar solo ni perder tiempo
            entre condiciones, copagos, carencias y letra pequeña.
          </p>

          <div className="healthWhyGrid">
            <div className="healthWhyCard">
              <span>✓</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="healthWhyCard">
              <span>✓</span>
              <h3>Revisamos coberturas y carencias</h3>
            </div>

            <div className="healthWhyCard">
              <span>✓</span>
              <h3>Atención por WhatsApp</h3>
            </div>

            <div className="healthWhyCard">
              <span>✓</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="healthSection">
        <div className="healthDifferenceBox">
          <h2>No somos una comparadora automática.</h2>

          <p>
            Nos gusta escuchar, entender tus necesidades y ayudarte a elegir con
            tranquilidad. Porque un buen seguro de salud no es solo cuestión de
            precio: también importa saber qué atención tendrás cuando la
            necesites.
          </p>

          <a href="#contacto" className="healthPrimaryBtn">
            Solicitar estudio gratuito
          </a>
        </div>
      </section>

      <section className="healthFaqSection">
        <div className="healthSectionInner">
          <h2 className="healthSectionTitle">Preguntas frecuentes</h2>

          <div className="healthFaqList">
            <div className="healthFaqItem">
              <h3>¿Qué son las carencias en un seguro de salud?</h3>
              <p>
                Son periodos de tiempo desde la contratación durante los cuales
                algunas coberturas pueden no estar disponibles. Te ayudamos a
                revisarlas antes de contratar.
              </p>
            </div>

            <div className="healthFaqItem">
              <h3>¿Qué diferencia hay entre copago y sin copago?</h3>
              <p>
                Con copago puedes pagar una cantidad por determinados servicios.
                Sin copago, normalmente pagas una prima más alta pero sin esos
                pagos adicionales por uso.
              </p>
            </div>

            <div className="healthFaqItem">
              <h3>¿Puedo contratar desde cualquier lugar de España?</h3>
              <p>
                Sí. Trabajamos de forma online y telefónica, por lo que podemos
                ayudarte independientemente de dónde vivas.
              </p>
            </div>

            <div className="healthFaqItem">
              <h3>¿Qué cobertura médica incluye un seguro de salud?</h3>
              <p>
                La cobertura médica varía según la compañía y la modalidad
                contratada, pero suele incluir medicina general, atención de
                especialistas, pruebas diagnósticas y, en muchos casos,
                urgencias y hospitalización. Te ayudamos a comparar la
                cobertura médica real de cada opción antes de que decidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="healthContactSection" id="contacto">
        <div className="healthContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y nos pondremos en contacto contigo para revisar
            tu seguro de salud.
          </p>

          <LeadForm
            seguroInicial="Seguro de Salud"
            mostrarSelector={false}
            pagina="SeguroSalud"
            className="healthContactForm"
          />
        </div>
      </section>

      <footer className="healthFooter">
        <div className="healthFooterContainer">
          <div className="healthFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="healthFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="healthFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="healthFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="healthFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="SeguroSalud-Flotante" floating={true} />
    </main>
  );
}

export default SeguroSalud;