import "./Blog.css";
import { Helmet } from "react-helmet-async";

function ArticuloSeguroHogar() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Qué cubre realmente un seguro de hogar | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Continente, contenido, responsabilidad civil y coberturas importantes de un seguro de hogar explicadas con claridad."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/que-cubre-realmente-un-seguro-de-hogar" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Qué cubre realmente un seguro de hogar | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Continente, contenido, responsabilidad civil y coberturas importantes de un seguro de hogar explicadas con claridad." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/que-cubre-realmente-un-seguro-de-hogar" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qué cubre realmente un seguro de hogar | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Continente, contenido, responsabilidad civil y coberturas importantes de un seguro de hogar explicadas con claridad." />
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
          <a href="/mi-cuenta">Mi cuenta</a>
        </nav>

        <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="articleHero">
        <p>Seguro de Hogar</p>

        <h1>Qué cubre realmente un seguro de hogar</h1>

        <span>
          Descubre las coberturas más importantes y evita sorpresas cuando más
          lo necesites.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Muchas personas contratan un seguro de hogar sin conocer exactamente
          qué está cubierto. Entender las garantías incluidas en la póliza es
          fundamental para proteger correctamente tu vivienda y tus bienes.
        </p>

        <h2>1. Continente y contenido</h2>

        <p>
          El continente hace referencia a la propia vivienda: paredes,
          instalaciones, techos, suelos y elementos estructurales. El contenido
          incluye muebles, electrodomésticos, ropa, equipos electrónicos y
          objetos personales.
        </p>

        <h2>2. Daños por agua</h2>

        <p>
          Es una de las coberturas más utilizadas. Puede cubrir fugas,
          filtraciones, rotura de tuberías y los daños ocasionados tanto en tu
          vivienda como en terceros.
        </p>

        <h2>3. Incendio y explosión</h2>

        <p>
          Una cobertura básica pero imprescindible. Protege frente a daños
          ocasionados por incendios, explosiones y fenómenos relacionados.
        </p>

        <h2>4. Robo y vandalismo</h2>

        <p>
          Dependiendo de la póliza, pueden estar cubiertos los daños por robo,
          intento de robo y actos vandálicos dentro de la vivienda.
        </p>

        <h2>5. Responsabilidad civil</h2>

        <p>
          Si causas daños involuntarios a terceros, esta cobertura puede asumir
          los gastos de indemnización. Es una de las garantías más importantes
          de cualquier seguro de hogar.
        </p>

        <h2>Conclusión</h2>

        <p>
          No todos los seguros de hogar ofrecen las mismas coberturas. Revisar
          las condiciones y adaptar la póliza a tus necesidades es la mejor
          forma de proteger tu vivienda y tu tranquilidad.
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-hogar">Seguro de Hogar</a>.
        </p>

        <div className="articleCta">
          <h3>¿Buscas un seguro de hogar?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a comparar opciones y encontrar la
            cobertura adecuada para tu vivienda.
          </p>

          <a href="/#contacto">
            Solicitar estudio gratuito
          </a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroHogar;