import "./Blog.css";
import { Helmet } from "react-helmet-async";

function Blog() {
  const posts = [
    {
      title: "Cómo elegir un seguro de coche en 2026",
      text: "Claves para comparar coberturas, precio y asistencia antes de contratar.",
      url: "/blog/como-elegir-seguro-coche-2026",
    },
    {
      title: "Qué cubre realmente un seguro de hogar",
      text: "Continente, contenido, responsabilidad civil y coberturas importantes.",
      url: "/blog/que-cubre-realmente-un-seguro-de-hogar",
    },
    {
      title: "Seguro de salud con copago o sin copago",
      text: "Diferencias principales y cuándo puede interesarte cada modalidad.",
      url: "/blog/seguro-salud-con-copago-o-sin-copago",
    },
    {
      title: "¿Merece la pena contratar un seguro de vida?",
      text: "Cuándo tiene sentido y qué debes valorar antes de decidir.",
      url: "/blog/merece-la-pena-contratar-un-seguro-de-vida",
    },
    {
      title: "Seguro para perros: qué debes tener en cuenta",
      text: "Responsabilidad civil, asistencia veterinaria y protección para tu mascota.",
      url: "/blog/seguro-para-perros-que-debes-tener-en-cuenta",
    },
    {
      title: "Seguros para autónomos: trabajar con más tranquilidad",
      text: "Responsabilidad civil, accidentes, comercio, salud y protección profesional.",
      url: "/blog/seguros-para-autonomos",
    },
  ];

  return (
    <main className="blogPage">
      <Helmet>
        <title>Blog de Seguros | Consejos y guías | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Guías claras sobre seguros de coche, hogar, salud, vida, mascotas y autónomos para que elijas con más información y tranquilidad."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog de Seguros | Consejos y guías | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Guías claras sobre seguros de coche, hogar, salud, vida, mascotas y autónomos para que elijas con más información y tranquilidad." />
        <meta property="og:url" content="https://megustamiseguro.es/blog" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Seguros | Consejos y guías | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Guías claras sobre seguros de coche, hogar, salud, vida, mascotas y autónomos para que elijas con más información y tranquilidad." />
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
          <a href="/#contacto">Contacto</a>
          <a href="/mi-cuenta">Mi cuenta</a>
        </nav>

        <a href="/#contacto" className="blogHeaderBtn">
          Solicitar Estudio
        </a>
      </header>

      <section className="blogHero">
        <p>Blog</p>
        <h1>Consejos claros para elegir mejor tus seguros.</h1>
        <span>
          Guías sencillas sobre coche, hogar, salud, vida, mascotas y seguros
          para autónomos.
        </span>
      </section>

      <section className="blogList">
        {posts.map((post, index) => (
          <article className="blogCard" key={index}>
            <small>Guía de seguros</small>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <a href={post.url}>Leer artículo →</a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Blog;