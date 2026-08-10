import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloSeguroTransporte() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Seguro de transporte y mercancía: todo lo que necesitas saber | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Responsabilidad civil del transportista, mercancías en tránsito, flotas y transporte internacional. Te contamos qué cubre cada modalidad y cuál necesitas."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/seguro-transporte-mercancia-todo-lo-que-necesitas-saber" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de transporte y mercancía: todo lo que necesitas saber | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Responsabilidad civil del transportista, mercancías en tránsito, flotas y transporte internacional. Te contamos qué cubre cada modalidad y cuál necesitas." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/seguro-transporte-mercancia-todo-lo-que-necesitas-saber" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de transporte y mercancía: todo lo que necesitas saber | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Responsabilidad civil del transportista, mercancías en tránsito, flotas y transporte internacional. Te contamos qué cubre cada modalidad y cuál necesitas." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Es obligatorio un seguro de mercancías para transportistas?",
            answer:
              "El seguro de responsabilidad civil del vehículo sí es obligatorio, pero la cobertura específica de la mercancía transportada (RC del transportista o mercancías en tránsito) no siempre lo es por ley, aunque muchos clientes y cargadores la exigen contractualmente antes de confiarte su mercancía.",
          },
          {
            question: "¿Qué diferencia hay entre RC del transportista y mercancías en tránsito?",
            answer:
              "La RC del transportista cubre tu responsabilidad legal como transportista ante daños o pérdidas de la mercancía que llevas. El seguro de mercancías en tránsito protege el valor de la mercancía en sí, independientemente de quién sea responsable del daño, y suele ofrecer una cobertura más amplia.",
          },
          {
            question: "¿Necesito un seguro distinto para transporte internacional?",
            answer:
              "El transporte internacional por carretera se rige por el Convenio CMR, que establece límites de responsabilidad distintos a los del transporte nacional. Conviene contar con una póliza adaptada a esa normativa si haces trayectos fuera de España.",
          },
        ]}
      />

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
        <p>Seguro de Transporte y Mercancía</p>

        <h1>Seguro de transporte y mercancía: todo lo que necesitas saber</h1>

        <span>
          Responsabilidad civil del transportista, mercancías en tránsito y
          cómo elegir la cobertura adecuada para tu actividad.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Ya seas transportista autónomo, gestiones una flota o te dediques a
          la logística y distribución, un solo incidente con la mercancía
          puede suponer un coste muy superior al de la propia póliza. Aquí te
          explicamos qué cubre realmente un seguro de transporte y mercancía
          y cómo elegir la modalidad adecuada para tu negocio.
        </p>

        <h2>1. Responsabilidad civil del transportista</h2>

        <p>
          Es la cobertura más habitual y cubre los daños o pérdidas de la
          mercancía de la que eres responsable legalmente durante el
          transporte. Si trabajas para terceros (cargadores, empresas de
          logística), es muy probable que te la exijan antes de confiarte su
          mercancía.
        </p>

        <h2>2. Mercancías en tránsito</h2>

        <p>
          A diferencia de la RC del transportista, esta cobertura protege
          directamente el valor de la mercancía transportada ante daños,
          pérdida o accidente, con independencia de quién sea el responsable
          del siniestro. Suele ofrecer una protección más amplia.
        </p>

        <h2>3. Seguro de flota</h2>

        <p>
          Si gestionas varios camiones o furgonetas, agrupar todos los
          vehículos bajo una misma póliza de flota simplifica la gestión
          administrativa y suele salir más económico que asegurar cada
          vehículo por separado.
        </p>

        <h2>4. Robo, extravío, rotura y manipulación</h2>

        <p>
          Más allá de los accidentes de tráfico, buena parte de los
          siniestros en transporte ocurren durante la carga, descarga o
          almacenamiento: sustracción de mercancía, extravíos o daños por
          manipulación. Conviene revisar si tu póliza los incluye.
        </p>

        <h2>5. Transporte internacional (Convenio CMR)</h2>

        <p>
          Si realizas trayectos fuera de España, el transporte internacional
          por carretera se rige por el Convenio CMR, con límites de
          responsabilidad distintos a los del transporte nacional. Es
          importante contar con una póliza adaptada a esta normativa
          específica.
        </p>

        <h2>¿Qué modalidad necesitas según tu actividad?</h2>

        <p>
          <strong>Transportista independiente:</strong> si trabajas con tu
          propio vehículo, lo habitual es centrarse en cubrir bien tu
          responsabilidad frente a la mercancía que transportas.
        </p>

        <p>
          <strong>Logística y distribución:</strong> si tu empresa gestiona
          el transporte de mercancías de terceros de forma habitual, conviene
          revisar coberturas más amplias que incluyan mercancías en tránsito.
        </p>

        <p>
          <strong>Flotas:</strong> con varios camiones o furgonetas, una
          póliza de flota centralizada facilita la gestión y el seguimiento
          de todos los vehículos.
        </p>

        <h2>Conclusión</h2>

        <p>
          El seguro adecuado depende de tu actividad concreta: no es lo mismo
          un transportista autónomo que una empresa de logística con flota
          propia. Lo importante es identificar los riesgos reales de tu
          negocio antes de contratar.
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de{" "}
          <a href="/transporte-mercancia">Seguro de Transporte y Mercancía</a>.
        </p>

        <div className="articleCta">
          <h3>¿Necesitas proteger tu actividad de transporte?</h3>

          <p>
            En Me Gusta Mi Seguro analizamos tu negocio y te ayudamos a
            encontrar la cobertura adecuada, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroTransporte;
