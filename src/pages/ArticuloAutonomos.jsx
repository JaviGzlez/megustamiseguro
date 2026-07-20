import "./Blog.css";
import { Helmet } from "react-helmet-async";

function ArticuloAutonomos() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Seguros para autónomos: trabajar con más tranquilidad | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Responsabilidad civil, accidentes, comercio, salud y protección profesional para autónomos."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/seguros-para-autonomos" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguros para autónomos: trabajar con más tranquilidad | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Responsabilidad civil, accidentes, comercio, salud y protección profesional para autónomos." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/seguros-para-autonomos" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguros para autónomos: trabajar con más tranquilidad | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Responsabilidad civil, accidentes, comercio, salud y protección profesional para autónomos." />
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

        <div className="headerAcciones">
          <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
          </a>

          <a href="/mi-cuenta" className="miCuentaBtn">
          Mi cuenta
          </a>
        </div>
      </header>

      <section className="articleHero">
        <p>Autónomos</p>

        <h1>Seguros para autónomos: trabajar con más tranquilidad</h1>

        <span>
          Qué coberturas pueden ayudarte a proteger tu actividad, tus ingresos y
          tu responsabilidad profesional.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Ser autónomo implica tomar decisiones todos los días y asumir riesgos
          que muchas veces no se ven hasta que aparece un problema. Contar con
          los seguros adecuados puede ayudarte a trabajar con más tranquilidad.
        </p>

        <h2>1. Responsabilidad civil profesional</h2>

        <p>
          Es una de las coberturas más importantes para muchos autónomos. Puede
          ayudarte ante reclamaciones de terceros por daños derivados de tu
          actividad profesional.
        </p>

        <h2>2. Seguro de accidentes</h2>

        <p>
          Si tus ingresos dependen directamente de tu trabajo, una baja por
          accidente puede afectar seriamente a tu economía. Este tipo de seguro
          puede aportar una protección adicional.
        </p>

        <h2>3. Seguro de salud</h2>

        <p>
          Muchos autónomos valoran tener acceso rápido a especialistas, pruebas
          diagnósticas y asistencia privada para reducir tiempos de espera.
        </p>

        <h2>4. Multirriesgo para local u oficina</h2>

        <p>
          Si trabajas en un local, oficina, clínica o establecimiento, puede ser
          importante proteger el espacio, el contenido, equipos y posibles daños
          a terceros.
        </p>

        <h2>5. Ciberseguro</h2>

        <p>
          Cada vez más profesionales trabajan con datos, pagos online, webs,
          correos y sistemas digitales. Un ciberseguro puede ser útil ante
          incidentes informáticos.
        </p>

        <h2>Conclusión</h2>

        <p>
          No todos los autónomos necesitan los mismos seguros. Lo importante es
          analizar tu actividad, tus riesgos reales y qué protección puede darte
          más tranquilidad en el día a día.
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/empresas-autonomos">Empresas y Autónomos</a>.
        </p>

        <div className="articleCta">
          <h3>¿Quieres revisar tus seguros como autónomo?</h3>

          <p>
            En Me Gusta Mi Seguro analizamos tu actividad y te ayudamos a
            encontrar soluciones adaptadas a tu trabajo.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloAutonomos;