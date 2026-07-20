import "./Blog.css";
import { Helmet } from "react-helmet-async";

function ArticuloSeguroMascotas() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Seguro para perros: qué debes tener en cuenta | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Responsabilidad civil, asistencia veterinaria y protección para tu mascota: todo lo que debes saber."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/seguro-para-perros-que-debes-tener-en-cuenta" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro para perros: qué debes tener en cuenta | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Responsabilidad civil, asistencia veterinaria y protección para tu mascota: todo lo que debes saber." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/seguro-para-perros-que-debes-tener-en-cuenta" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro para perros: qué debes tener en cuenta | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Responsabilidad civil, asistencia veterinaria y protección para tu mascota: todo lo que debes saber." />
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
        <p>Seguro de Mascotas</p>

        <h1>Seguro para perros: qué debes tener en cuenta</h1>

        <span>
          Responsabilidad civil, asistencia veterinaria y coberturas importantes
          antes de contratar.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Cada vez más familias buscan proteger también a sus mascotas. Un
          seguro para perros puede ayudar a cubrir imprevistos, asistencia
          veterinaria o responsabilidad civil frente a terceros.
        </p>

        <h2>1. Responsabilidad civil</h2>

        <p>
          Es una de las coberturas más importantes. Puede cubrir daños que tu
          perro cause a otras personas, animales o bienes. En algunos casos puede
          ser obligatoria según la normativa aplicable.
        </p>

        <h2>2. Asistencia veterinaria</h2>

        <p>
          Algunas pólizas permiten acceder a consultas, pruebas o servicios
          veterinarios con condiciones especiales. Conviene revisar bien qué está
          incluido y qué límites existen.
        </p>

        <h2>3. Accidentes y enfermedades</h2>

        <p>
          Dependiendo del seguro, puede existir cobertura para accidentes,
          enfermedades, cirugías o determinados tratamientos. No todas las
          pólizas cubren lo mismo.
        </p>

        <h2>4. Edad, raza y exclusiones</h2>

        <p>
          La edad de la mascota, su raza y su estado de salud pueden influir en
          las condiciones del seguro. Por eso es importante revisar cada caso de
          forma individual.
        </p>

        <h2>5. No fijarse solo en el precio</h2>

        <p>
          Un seguro más barato puede tener límites más bajos o menos coberturas.
          Lo importante es entender qué protección tendrá tu mascota cuando
          realmente lo necesite.
        </p>

        <h2>Conclusión</h2>

        <p>
          Un seguro para perros puede aportar tranquilidad, especialmente si
          quieres protegerte ante imprevistos veterinarios o posibles daños a
          terceros.
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-mascotas">Seguro de Mascotas</a>.
        </p>

        <div className="articleCta">
          <h3>¿Quieres proteger a tu mascota?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a comparar opciones y elegir una
            cobertura adaptada a tu perro o gato.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroMascotas;