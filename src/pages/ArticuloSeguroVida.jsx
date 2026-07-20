import "./Blog.css";
import { Helmet } from "react-helmet-async";

function ArticuloSeguroVida() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>¿Merece la pena contratar un seguro de vida? | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Cuándo tiene sentido contratar un seguro de vida y qué debes valorar antes de decidir."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/merece-la-pena-contratar-un-seguro-de-vida" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Merece la pena contratar un seguro de vida? | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Cuándo tiene sentido contratar un seguro de vida y qué debes valorar antes de decidir." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/merece-la-pena-contratar-un-seguro-de-vida" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Merece la pena contratar un seguro de vida? | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Cuándo tiene sentido contratar un seguro de vida y qué debes valorar antes de decidir." />
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

        <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="articleHero">
        <p>Seguro de Vida</p>

        <h1>¿Merece la pena contratar un seguro de vida?</h1>

        <span>
          Descubre cuándo puede ser una herramienta clave para proteger a tu familia.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          El seguro de vida es una de las pólizas más desconocidas y, al mismo
          tiempo, una de las más importantes para muchas familias. Su objetivo
          principal es ofrecer estabilidad económica a los beneficiarios en caso
          de fallecimiento o determinadas situaciones contempladas en la póliza.
        </p>

        <h2>¿Para quién está pensado?</h2>

        <p>
          Especialmente para personas con hijos, hipotecas o familiares que
          dependen económicamente de ellas. Un seguro de vida puede ayudar a
          mantener la tranquilidad financiera en momentos complicados.
        </p>

        <h2>¿Qué cubre normalmente?</h2>

        <p>
          La cobertura principal suele ser el fallecimiento del asegurado.
          Muchas pólizas también permiten incluir invalidez permanente absoluta
          y otras garantías complementarias.
        </p>

        <h2>¿Es obligatorio?</h2>

        <p>
          No es obligatorio por ley, aunque algunas entidades financieras lo
          ofrecen al contratar una hipoteca. En cualquier caso, el cliente es
          libre de elegir la compañía que prefiera.
        </p>

        <h2>¿Cuánto capital asegurar?</h2>

        <p>
          Dependerá de cada situación personal. Lo habitual es valorar ingresos,
          deudas pendientes, hijos a cargo y necesidades futuras de la familia.
        </p>

        <h2>Conclusión</h2>

        <p>
          Un seguro de vida no protege bienes materiales, sino la estabilidad
          económica de quienes más importan. Por eso conviene analizar cada caso
          de forma individual antes de contratar.
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-vida">Seguro de Vida</a>.
        </p>

        <div className="articleCta">
          <h3>¿Necesitas asesoramiento?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a encontrar la opción más adecuada
            para proteger a tu familia.
          </p>

          <a href="/#contacto">
            Solicitar estudio gratuito
          </a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroVida;