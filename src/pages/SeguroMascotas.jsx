import "./SeguroMascotas.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function SeguroMascotas() {
  return (
    <main className="petPage">
      <Helmet>
        <title>Seguro de Mascotas | Perros y gatos | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Seguros para tu mascota con responsabilidad civil y asistencia veterinaria. Compara y elige la mejor protección para tu perro o gato."
        />
              <link rel="canonical" href="https://megustamiseguro.es/seguro-mascotas" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de Mascotas | Perros y gatos | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Seguros para tu mascota con responsabilidad civil y asistencia veterinaria. Compara y elige la mejor protección para tu perro o gato." />
        <meta property="og:url" content="https://megustamiseguro.es/seguro-mascotas" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de Mascotas | Perros y gatos | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Seguros para tu mascota con responsabilidad civil y asistencia veterinaria. Compara y elige la mejor protección para tu perro o gato." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="petHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="petHeaderLogo"
          />
        </a>

        <nav className="petNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="petHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="petHero">
        <div className="petHeroInner">
          <div>
            <p className="petBreadcrumb">Seguros · Mascotas</p>

            <h1>Tu mascota también merece estar protegida.</h1>

            <p className="petHeroText">
              Te ayudamos a encontrar un seguro para tu perro o gato adaptado a
              sus necesidades. Comparamos opciones para que puedas cuidar de tu
              mascota con más tranquilidad.
            </p>

            <div className="petButtons">
              <a href="#contacto" className="petPrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="SeguroMascotas-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="petHeroBadges">
              <span>Perros y gatos</span>
              <span>Atención veterinaria</span>
              <span>Sin compromiso</span>
            </div>
          </div>

          <div className="petHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1400&q=85"
              alt="Mascota protegida"
            />

            <div className="petHeroNote">
              <strong>¿Quieres proteger a tu mascota?</strong>
              <span>
                Revisamos contigo las opciones disponibles para encontrar una
                cobertura clara, sencilla y adaptada a ella.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="petTrustBar">
        <div className="petTrustBarGrid">
          <div className="petTrustBarItem">
            <span>✓</span> Perros y gatos
          </div>

          <div className="petTrustBarItem">
            <span>✓</span> Asesoramiento personalizado
          </div>

          <div className="petTrustBarItem">
            <span>✓</span> Atención veterinaria
          </div>

          <div className="petTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="petSection">
        <div className="petSectionInner">
          <h2 className="petSectionTitle">
            ¿Qué puede cubrir un seguro para mascotas?
          </h2>

          <p className="petSectionSubtitle">
            Las coberturas pueden variar según la compañía y la modalidad. Te
            ayudamos a revisar qué opción puede encajar mejor con tu mascota y
            con tu forma de cuidarla.
          </p>

          <div className="petCoverageGrid">
            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Asistencia veterinaria</h3>
              <p>
                Consultas, revisiones o servicios veterinarios según la póliza
                contratada.
              </p>
            </div>

            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Accidentes</h3>
              <p>
                Ayuda ante situaciones inesperadas que puedan afectar a tu perro
                o gato.
              </p>
            </div>

            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Enfermedades</h3>
              <p>
                Algunas modalidades pueden incluir atención ante determinadas
                enfermedades.
              </p>
            </div>

            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Responsabilidad civil</h3>
              <p>
                Cobertura importante ante posibles daños que tu mascota pueda
                causar a terceros.
              </p>
            </div>

            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Pruebas y tratamientos</h3>
              <p>
                Determinadas pólizas pueden incluir pruebas diagnósticas o
                tratamientos específicos.
              </p>
            </div>

            <div className="petCoverageCard">
              <span>✓</span>
              <h3>Servicios adicionales</h3>
              <p>
                Algunas opciones pueden incluir orientación veterinaria u otros
                servicios complementarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="petTypesSection" id="tipos">
        <div className="petSectionInner">
          <h2 className="petSectionTitle">Tipos de seguro para mascotas</h2>

          <p className="petSectionSubtitle">
            No todas las mascotas necesitan lo mismo. Te ayudamos a elegir una
            modalidad coherente según edad, raza, hábitos y necesidades.
          </p>

          <div className="petTypesGrid">
            <div className="petTypeCard">
              <small>Opción básica</small>
              <h3>Responsabilidad civil</h3>
              <p>
                Pensada para cubrir daños que tu mascota pueda causar a otras
                personas, animales o bienes.
              </p>

              <ul>
                <li>Daños a terceros</li>
                <li>Protección legal</li>
                <li>Especialmente útil en perros</li>
              </ul>
            </div>

            <div className="petTypeCard">
              <small>Más protección</small>
              <h3>Veterinario</h3>
              <p>
                Modalidad orientada a cubrir parte de los gastos veterinarios de
                tu mascota.
              </p>

              <ul>
                <li>Consultas</li>
                <li>Pruebas</li>
                <li>Tratamientos según póliza</li>
              </ul>
            </div>

            <div className="petTypeCard">
              <small>Cobertura completa</small>
              <h3>Accidentes y enfermedad</h3>
              <p>
                Una alternativa para quienes buscan una protección más amplia
                ante imprevistos importantes.
              </p>

              <ul>
                <li>Accidentes</li>
                <li>Enfermedades</li>
                <li>Mayor tranquilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="petMidCta">
        <div className="petMidCtaBox">
          <div>
            <h2>¿No sabes qué seguro necesita tu mascota?</h2>
            <p>
              Te escuchamos, revisamos tu caso y te ayudamos a elegir una opción
              clara y adaptada.
            </p>
          </div>

          <a href="#contacto" className="petPrimaryBtn">
            Quiero que me asesoren
          </a>
        </div>
      </section>

      <section className="petSection">
        <div className="petSectionInner">
          <h2 className="petSectionTitle">
            ¿Por qué elegir Me Gusta Mi Seguro?
          </h2>

          <p className="petSectionSubtitle">
            Te acompañamos para que puedas proteger a tu mascota sin perderte
            entre condiciones, límites y letra pequeña.
          </p>

          <div className="petWhyGrid">
            <div className="petWhyCard">
              <span>✓</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="petWhyCard">
              <span>✓</span>
              <h3>Revisamos coberturas</h3>
            </div>

            <div className="petWhyCard">
              <span>✓</span>
              <h3>Atención por WhatsApp</h3>
            </div>

            <div className="petWhyCard">
              <span>✓</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="petSection">
        <div className="petDifferenceBox">
          <h2>No somos una comparadora automática.</h2>

          <p>
            Nos gusta escuchar, entender tu situación y ayudarte a elegir con
            tranquilidad. Porque proteger a tu mascota no debería depender solo
            del precio, sino de saber qué atención tendrá cuando la necesite.
          </p>

          <a href="#contacto" className="petPrimaryBtn">
            Solicitar estudio gratuito
          </a>
        </div>
      </section>

      <section className="petFaqSection">
        <div className="petSectionInner">
          <h2 className="petSectionTitle">Preguntas frecuentes</h2>

          <div className="petFaqList">
            <div className="petFaqItem">
              <h3>¿Es obligatorio tener seguro para mascotas?</h3>
              <p>
                En algunos casos puede ser obligatorio contar con responsabilidad
                civil. Además, puede ser recomendable para evitar gastos
                imprevistos.
              </p>
            </div>

            <div className="petFaqItem">
              <h3>¿Cubre cualquier enfermedad?</h3>
              <p>
                Depende de la póliza, la edad de la mascota, las condiciones y
                posibles exclusiones. Te ayudamos a revisarlo antes de
                contratar.
              </p>
            </div>

            <div className="petFaqItem">
              <h3>¿Puedo contratar desde cualquier lugar de España?</h3>
              <p>
                Sí. Trabajamos de forma online y telefónica, por lo que podemos
                ayudarte independientemente de dónde vivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="petContactSection" id="contacto">
        <div className="petContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y nos pondremos en contacto contigo para revisar
            el seguro de tu mascota.
          </p>

          <LeadForm
            seguroInicial="Seguro de Mascotas"
            mostrarSelector={false}
            pagina="SeguroMascotas"
            className="petContactForm"
          />
        </div>
      </section>

      <footer className="petFooter">
        <div className="petFooterContainer">
          <div className="petFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="petFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="petFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="petFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="petFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="SeguroMascotas-Flotante" floating={true} />
    </main>
  );
}

export default SeguroMascotas;