import "./SeguroVida.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function SeguroVida() {
  return (
    <main className="lifePage">
      <Helmet>
        <title>Seguro de Vida | Protege a tu familia | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Descubre si merece la pena contratar un seguro de vida y qué cobertura necesitas para proteger a las personas que dependen de ti."
        />
              <link rel="canonical" href="https://megustamiseguro.es/seguro-vida" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de Vida | Protege a tu familia | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Descubre si merece la pena contratar un seguro de vida y qué cobertura necesitas para proteger a las personas que dependen de ti." />
        <meta property="og:url" content="https://megustamiseguro.es/seguro-vida" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de Vida | Protege a tu familia | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Descubre si merece la pena contratar un seguro de vida y qué cobertura necesitas para proteger a las personas que dependen de ti." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="lifeHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="lifeHeaderLogo"
          />
        </a>

        <nav className="lifeNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="lifeHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="lifeHero">
        <div className="lifeHeroInner">
          <div>
            <p className="lifeBreadcrumb">Seguros · Vida</p>

            <h1>Protege lo que más importa.</h1>

            <p className="lifeHeroText">
              Te ayudamos a encontrar un seguro de vida adaptado a tu situación,
              tu familia y tus responsabilidades. Una forma sencilla de dejar
              tranquilidad a quienes más quieres.
            </p>

            <div className="lifeButtons">
              <a href="#contacto" className="lifePrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="SeguroVida-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="lifeHeroBadges">
              <span>Familias</span>
              <span>Hipotecas</span>
              <span>Autónomos</span>
            </div>
          </div>

          <div className="lifeHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85"
              alt="Familia protegida"
            />

            <div className="lifeHeroNote">
              <strong>¿Quieres proteger a tu familia?</strong>
              <span>
                Revisamos tu situación y te ayudamos a encontrar una opción
                clara, sencilla y adaptada a tus necesidades.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeTrustBar">
        <div className="lifeTrustBarGrid">
          <div className="lifeTrustBarItem">
            <span>✓</span> Protección familiar
          </div>

          <div className="lifeTrustBarItem">
            <span>✓</span> Asesoramiento personalizado
          </div>

          <div className="lifeTrustBarItem">
            <span>✓</span> Adaptado a tu situación
          </div>

          <div className="lifeTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="lifeSection">
        <div className="lifeSectionInner">
          <h2 className="lifeSectionTitle">
            ¿Para qué sirve un seguro de vida?
          </h2>

          <p className="lifeSectionSubtitle">
            Un seguro de vida puede ayudar a proteger económicamente a tu familia
            o a las personas que dependen de ti si ocurre una situación grave.
          </p>

          <div className="lifeCoverageGrid">
            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Protección familiar</h3>
              <p>
                Ayuda económica para tus seres queridos en caso de fallecimiento.
              </p>
            </div>

            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Hipoteca</h3>
              <p>
                Puede ayudar a cubrir deudas pendientes como una hipoteca o
                préstamos importantes.
              </p>
            </div>

            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Invalidez</h3>
              <p>
                Algunas pólizas pueden incluir protección en caso de invalidez
                absoluta o permanente.
              </p>
            </div>

            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Autónomos</h3>
              <p>
                Una opción importante si tus ingresos dependen directamente de tu
                actividad profesional.
              </p>
            </div>

            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Tranquilidad</h3>
              <p>
                Una forma de dejar cierta estabilidad económica ante situaciones
                inesperadas.
              </p>
            </div>

            <div className="lifeCoverageCard">
              <span>✓</span>
              <h3>Capital adaptado</h3>
              <p>
                Te ayudamos a valorar qué capital asegurado puede tener sentido
                para tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeTypesSection" id="tipos">
        <div className="lifeSectionInner">
          <h2 className="lifeSectionTitle">Tipos de seguro de vida</h2>

          <p className="lifeSectionSubtitle">
            No existe una única solución para todo el mundo. Depende de tu edad,
            tus cargas familiares, tu hipoteca, tus ingresos y tus objetivos.
          </p>

          <div className="lifeTypesGrid">
            <div className="lifeTypeCard">
              <small>Protección básica</small>
              <h3>Vida riesgo</h3>
              <p>
                Una opción pensada para proteger económicamente a tus
                beneficiarios si ocurre algo grave.
              </p>

              <ul>
                <li>Capital asegurado</li>
                <li>Beneficiarios</li>
                <li>Prima adaptada</li>
              </ul>
            </div>

            <div className="lifeTypeCard">
              <small>Con hipoteca</small>
              <h3>Vida vinculado a deudas</h3>
              <p>
                Puede ayudar a cubrir deudas importantes para que tu familia no
                tenga que asumir esa carga.
              </p>

              <ul>
                <li>Hipoteca</li>
                <li>Préstamos</li>
                <li>Protección económica</li>
              </ul>
            </div>

            <div className="lifeTypeCard">
              <small>Mayor cobertura</small>
              <h3>Vida con invalidez</h3>
              <p>
                Modalidad que puede incluir protección adicional en caso de
                invalidez o incapacidad grave.
              </p>

              <ul>
                <li>Fallecimiento</li>
                <li>Invalidez</li>
                <li>Mayor tranquilidad</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeMidCta">
        <div className="lifeMidCtaBox">
          <div>
            <h2>¿No sabes qué capital asegurar?</h2>
            <p>
              Te escuchamos, revisamos tu situación familiar y económica, y te
              ayudamos a valorar una opción coherente.
            </p>
          </div>

          <a href="#contacto" className="lifePrimaryBtn">
            Quiero que me asesoren
          </a>
        </div>
      </section>

      <section className="lifeSection">
        <div className="lifeSectionInner">
          <h2 className="lifeSectionTitle">
            ¿Por qué elegir Me Gusta Mi Seguro?
          </h2>

          <p className="lifeSectionSubtitle">
            Te acompañamos para que puedas tomar una decisión importante con
            información clara, sin presión y sin comparadores impersonales.
          </p>

          <div className="lifeWhyGrid">
            <div className="lifeWhyCard">
              <span>✓</span>
              <h3>Asesoramiento personalizado</h3>
            </div>

            <div className="lifeWhyCard">
              <span>✓</span>
              <h3>Analizamos tu situación</h3>
            </div>

            <div className="lifeWhyCard">
              <span>✓</span>
              <h3>Atención por WhatsApp</h3>
            </div>

            <div className="lifeWhyCard">
              <span>✓</span>
              <h3>Sin compromiso</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeSection">
        <div className="lifeDifferenceBox">
          <h2>No somos una comparadora automática.</h2>

          <p>
            Nos gusta escuchar, entender tu situación y ayudarte a elegir con
            tranquilidad. Porque un seguro de vida no se contrata solo por
            precio: se contrata pensando en las personas que quieres proteger.
          </p>

          <a href="#contacto" className="lifePrimaryBtn">
            Solicitar estudio gratuito
          </a>
        </div>
      </section>

      <section className="lifeFaqSection">
        <div className="lifeSectionInner">
          <h2 className="lifeSectionTitle">Preguntas frecuentes</h2>

          <div className="lifeFaqList">
            <div className="lifeFaqItem">
              <h3>¿Cuándo merece la pena contratar un seguro de vida?</h3>
              <p>
                Puede tener sentido si tienes familia, hipoteca, deudas,
                personas a tu cargo o si tus ingresos son importantes para el
                equilibrio económico del hogar.
              </p>
            </div>

            <div className="lifeFaqItem">
              <h3>¿Qué capital debería asegurar?</h3>
              <p>
                Depende de tu situación personal: hipoteca, ingresos, hijos,
                gastos mensuales y responsabilidades económicas. Te ayudamos a
                valorarlo.
              </p>
            </div>

            <div className="lifeFaqItem">
              <h3>¿Puedo contratar desde cualquier lugar de España?</h3>
              <p>
                Sí. Trabajamos de forma online y telefónica, por lo que podemos
                ayudarte independientemente de dónde vivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeContactSection" id="contacto">
        <div className="lifeContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y nos pondremos en contacto contigo para revisar
            tu seguro de vida.
          </p>

          <LeadForm
            seguroInicial="Seguro de Vida"
            mostrarSelector={false}
            pagina="SeguroVida"
            className="lifeContactForm"
          />
        </div>
      </section>

      <footer className="lifeFooter">
        <div className="lifeFooterContainer">
          <div className="lifeFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="lifeFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="lifeFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="lifeFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="lifeFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="SeguroVida-Flotante" floating={true} />
    </main>
  );
}

export default SeguroVida;