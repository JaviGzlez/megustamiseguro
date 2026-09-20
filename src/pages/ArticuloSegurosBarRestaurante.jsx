import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloSegurosBarRestaurante() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Qué seguros necesita un bar o restaurante | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Responsabilidad civil, seguro de local, pérdida de beneficios y accidentes: las coberturas que necesita un bar o restaurante para operar tranquilo."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/que-seguros-necesita-un-bar-o-restaurante" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Qué seguros necesita un bar o restaurante | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Responsabilidad civil, seguro de local, pérdida de beneficios y accidentes: las coberturas que necesita un bar o restaurante para operar tranquilo." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/que-seguros-necesita-un-bar-o-restaurante" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qué seguros necesita un bar o restaurante | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Responsabilidad civil, seguro de local, pérdida de beneficios y accidentes: las coberturas que necesita un bar o restaurante para operar tranquilo." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Es obligatorio tener seguro para abrir un bar o restaurante?",
            answer:
              "La responsabilidad civil no siempre es obligatoria por ley con carácter general, pero muchos ayuntamientos y comunidades autónomas la exigen para conceder la licencia de apertura de un local de hostelería.",
          },
          {
            question: "¿Qué cubre la responsabilidad civil de un bar o restaurante?",
            answer:
              "Cubre los daños que puedan sufrir clientes o terceros por tu actividad, como una caída en el local o una intoxicación alimentaria, así como los daños materiales que puedas causar involuntariamente.",
          },
          {
            question: "¿Qué pasa si tengo que cerrar el local por una avería o un siniestro?",
            answer:
              "Para eso existe la cobertura de pérdida de beneficios o cese de actividad, que compensa los ingresos que dejas de facturar mientras el local permanece cerrado por un siniestro cubierto por la póliza.",
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
        <p>Seguros para Autónomos</p>

        <h1>Qué seguros necesita un bar o restaurante</h1>

        <span>
          Las coberturas clave para operar un negocio de hostelería con
          tranquilidad.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Un bar o restaurante tiene riesgos muy concretos: clientes en el
          local, manipulación de alimentos, personal trabajando en cocina.
          Estas son las coberturas que conviene revisar antes de abrir o
          renovar tu seguro de hostelería.
        </p>

        <h2>1. Responsabilidad civil de explotación</h2>

        <p>
          Es la cobertura más importante para cualquier negocio de
          hostelería: cubre los daños que puedan sufrir tus clientes o
          terceros por tu actividad, como una caída en el local, un objeto
          que se desprende o similares.
        </p>

        <h2>2. Responsabilidad civil por productos (alimentaria)</h2>

        <p>
          Cubre específicamente los daños derivados de los alimentos o
          bebidas que sirves, como una intoxicación alimentaria. Es una
          cobertura distinta de la responsabilidad civil general y conviene
          confirmar que tu póliza la incluye expresamente.
        </p>

        <h2>3. Seguro del local: continente y contenido</h2>

        <p>
          El local en sí (paredes, instalaciones) y todo lo que hay dentro
          (mobiliario, maquinaria de cocina, cámaras frigoríficas,
          existencias) necesitan estar cubiertos frente a incendio, robo o
          daños por agua, igual que en cualquier seguro de local comercial.
        </p>

        <h2>4. Pérdida de beneficios o cese de actividad</h2>

        <p>
          Si tienes que cerrar temporalmente por un siniestro cubierto (un
          incendio, una avería grave), esta cobertura compensa los ingresos
          que dejas de facturar mientras dura el cierre, algo que muchos
          negocios pasan por alto hasta que lo necesitan.
        </p>

        <h2>5. Accidentes de trabajo del personal</h2>

        <p>
          Si tienes empleados, además de tus obligaciones con la Seguridad
          Social, conviene valorar coberturas adicionales de accidentes
          para el personal, dado el tipo de riesgos habituales en cocina y
          sala.
        </p>

        <h2>Conclusión</h2>

        <p>
          Un seguro de hostelería bien planteado no es solo "un seguro de
          local": combina responsabilidad civil, protección del negocio y
          de tus ingresos. Revisar estas 5 coberturas antes de contratar
          evita sorpresas caras el día que las necesites de verdad.
        </p>

        <p>
          Si quieres profundizar en la responsabilidad civil como
          autónomo, lee también{" "}
          <a href="/blog/seguro-responsabilidad-civil-autonomos">
            seguro de responsabilidad civil para autónomos: qué cubre
          </a>
          .
        </p>

        <p>
          ¿Quieres ver todas las opciones disponibles? Visita nuestra
          página de{" "}
          <a href="/empresas-autonomos">Seguros para Empresas y Autónomos</a>.
        </p>

        <div className="articleCta">
          <h3>¿Tienes un bar o restaurante?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a encontrar la cobertura
            adecuada para tu negocio de hostelería, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSegurosBarRestaurante;
