import "./EmpresasAutonomos.css";
import { Helmet } from "react-helmet-async";
import OrganizationSchema from "../components/OrganizationSchema";
import LeadForm from "../components/LeadForm";
import QuickContactModal from "../components/QuickContactModal";
import SocialLinks from "../components/SocialLinks";

function EmpresasAutonomos() {
  return (
    <main className="businessPage">
      <Helmet>
        <title>Seguros para Empresas y Autónomos | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Seguros pensados para autónomos y empresas. Te ayudamos a encontrar la cobertura adecuada para tu actividad, con asesoramiento personalizado."
        />
              <link rel="canonical" href="https://megustamiseguro.es/empresas-autonomos" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguros para Empresas y Autónomos | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Seguros pensados para autónomos y empresas. Te ayudamos a encontrar la cobertura adecuada para tu actividad, con asesoramiento personalizado." />
        <meta property="og:url" content="https://megustamiseguro.es/empresas-autonomos" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguros para Empresas y Autónomos | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Seguros pensados para autónomos y empresas. Te ayudamos a encontrar la cobertura adecuada para tu actividad, con asesoramiento personalizado." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <OrganizationSchema />

      <header className="businessHeader">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Me Gusta Mi Seguro"
            className="businessHeaderLogo"
          />
        </a>

        <nav className="businessNav">
          <a href="/">Inicio</a>
          <a href="#coberturas">Coberturas</a>
          <a href="#tipos">Tipos</a>
          <a href="/blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="headerAcciones">
          <a href="#contacto" className="businessHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="businessHero">
        <div className="businessHeroInner">
          <div>
            <p className="businessBreadcrumb">
              Seguros · Empresas y Autónomos
            </p>

            <h1>Protege tu negocio con tranquilidad.</h1>

            <p className="businessHeroText">
              Te ayudamos a encontrar soluciones aseguradoras adaptadas a tu
              actividad profesional, tu empresa o tu negocio. Analizamos tus
              necesidades para que puedas centrarte en lo importante: seguir
              creciendo.
            </p>

            <div className="businessButtons">
              <a href="#contacto" className="businessPrimaryBtn">
                Solicitar estudio gratuito
              </a>

              <QuickContactModal
                pagina="EmpresasAutonomos-Hero"
                floating={false}
                className="whatsappHeroBtn"
              />
            </div>

            <div className="businessHeroBadges">
              <span>Autónomos</span>
              <span>Pymes</span>
              <span>Empresas</span>
            </div>
          </div>

          <div className="businessHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=85"
              alt="Empresa moderna"
            />

            <div className="businessHeroNote">
              <strong>¿Quieres revisar tus seguros?</strong>
              <span>
                Analizamos tu actividad y te ayudamos a encontrar una cobertura
                clara, sencilla y adaptada a tu negocio.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="businessTrustBar">
        <div className="businessTrustBarGrid">
          <div className="businessTrustBarItem">
            <span>✓</span> Autónomos
          </div>

          <div className="businessTrustBarItem">
            <span>✓</span> Comercios
          </div>

          <div className="businessTrustBarItem">
            <span>✓</span> Empresas
          </div>

          <div className="businessTrustBarItem">
            <span>✓</span> Sin compromiso
          </div>
        </div>
      </section>

      <section id="coberturas" className="businessSection">
        <div className="businessSectionInner">
          <h2 className="businessSectionTitle">
            ¿Qué seguros puede necesitar una empresa?
          </h2>

          <p className="businessSectionSubtitle">
            Cada actividad tiene riesgos diferentes. Te ayudamos a valorar qué
            coberturas pueden tener sentido para tu negocio.
          </p>

          <div className="businessCoverageGrid">
            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Responsabilidad Civil</h3>
              <p>
                Protección ante daños que la actividad pueda causar a terceros.
              </p>
            </div>

            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Multirriesgo Comercio</h3>
              <p>
                Protección para locales, oficinas, comercios y negocios.
              </p>
            </div>

            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Ciberriesgo</h3>
              <p>
                Cada vez más importante para empresas que trabajan con datos o
                sistemas digitales.
              </p>
            </div>

            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Flotas</h3>
              <p>
                Soluciones para vehículos de empresa y equipos comerciales.
              </p>
            </div>

            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Convenio Colectivo</h3>
              <p>
                Coberturas exigidas en determinados sectores y convenios.
              </p>
            </div>

            <div className="businessCoverageCard">
              <span>✓</span>
              <h3>Accidentes</h3>
              <p>
                Protección adicional para autónomos, empleados o directivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="businessTypesSection">
        <div className="businessSectionInner">
          <h2 className="businessSectionTitle">
            Soluciones para cada actividad
          </h2>

          <div className="businessTypesGrid">
            <div className="businessTypeCard">
              <small>Autónomos</small>
              <h3>Protección profesional</h3>
              <p>
                Pensada para profesionales que quieren proteger su actividad y
                sus ingresos.
              </p>
            </div>

            <div className="businessTypeCard">
              <small>Comercios</small>
              <h3>Negocio protegido</h3>
              <p>
                Soluciones para locales comerciales, tiendas y establecimientos.
              </p>
            </div>

            <div className="businessTypeCard">
              <small>Empresas</small>
              <h3>Cobertura integral</h3>
              <p>
                Opciones más completas para compañías con necesidades
                específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="businessContactSection" id="contacto">
        <div className="businessContactContainer">
          <h2>Solicita tu estudio gratuito</h2>

          <p>
            Déjanos tus datos y revisaremos las necesidades aseguradoras de tu
            negocio.
          </p>

          <LeadForm
            seguroInicial="Empresas y Autónomos"
            mostrarSelector={false}
            mostrarEmpresa={true}
            pagina="EmpresasAutonomos"
            className="businessContactForm"
          />
        </div>
      </section>

      <footer className="businessFooter">
        <div className="businessFooterContainer">
          <div className="businessFooterColumn">
            <h3>Me Gusta Mi Seguro</h3>
            <p>Te ayudamos a elegir con tranquilidad.</p>
            <p>📞 643 727 346</p>
            <p>✉ info@megustamiseguro.es</p>
            <SocialLinks />
          </div>

          <div className="businessFooterColumn">
            <h4>Seguros</h4>
            <a href="/seguro-coche">Seguro de Coche</a>
            <a href="/seguro-hogar">Seguro de Hogar</a>
            <a href="/seguro-salud">Seguro de Salud</a>
            <a href="/seguro-vida">Seguro de Vida</a>
            <a href="/seguro-mascotas">Seguro de Mascotas</a>
            <a href="/empresas-autonomos">Empresas y Autónomos</a>
            <a href="/transporte-mercancia">Transporte y Mercancía</a>
          </div>

          <div className="businessFooterColumn">
            <h4>Empresa</h4>
            <a href="/">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="/blog">Blog</a>
          </div>

          <div className="businessFooterColumn">
            <h4>Legal</h4>
            <a href="/aviso-legal">Aviso Legal</a>
            <a href="/politica-privacidad">Política de Privacidad</a>
            <a href="/politica-cookies">Política de Cookies</a>
          </div>
        </div>

        <div className="businessFooterBottom">
          © 2026 Me Gusta Mi Seguro · Todos los derechos reservados
        </div>
      </footer>

      <QuickContactModal pagina="EmpresasAutonomos-Flotante" floating={true} />
    </main>
  );
}

export default EmpresasAutonomos;