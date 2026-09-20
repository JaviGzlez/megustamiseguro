import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloContinenteContenido() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Continente y contenido en el seguro de hogar: diferencias con ejemplos | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Qué es el continente y qué es el contenido en un seguro de hogar, con ejemplos claros, y por qué confundirlos puede dejarte mal asegurado."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/continente-y-contenido-diferencias-con-ejemplos" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Continente y contenido en el seguro de hogar: diferencias con ejemplos | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Qué es el continente y qué es el contenido en un seguro de hogar, con ejemplos claros, y por qué confundirlos puede dejarte mal asegurado." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/continente-y-contenido-diferencias-con-ejemplos" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Continente y contenido en el seguro de hogar: diferencias con ejemplos | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Qué es el continente y qué es el contenido en un seguro de hogar, con ejemplos claros, y por qué confundirlos puede dejarte mal asegurado." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Qué es el continente en un seguro de hogar?",
            answer:
              "El continente es la estructura fija de la vivienda: paredes, techos, suelos, instalaciones fijas (fontanería, electricidad) y elementos como la cocina empotrada o los armarios fijos.",
          },
          {
            question: "¿Qué es el contenido en un seguro de hogar?",
            answer:
              "El contenido son los bienes muebles de la vivienda: mobiliario, electrodomésticos, ropa, electrónica y objetos personales, es decir, todo lo que te llevarías contigo si te mudaras.",
          },
          {
            question: "¿Qué pasa si aseguro mal el valor del contenido?",
            answer:
              "Si infravaloras el contenido (aseguras menos de lo que realmente tienes), la aseguradora puede aplicar la regla proporcional y pagarte menos de lo que corresponde en caso de siniestro, aunque el límite contratado sea suficiente en apariencia.",
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
        <p>Seguro de Hogar</p>

        <h1>Continente y contenido: diferencias con ejemplos</h1>

        <span>
          Dos términos que se confunden fácilmente, pero que marcan la
          diferencia a la hora de estar bien asegurado.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          "Continente" y "contenido" son de las palabras que más se repiten
          al contratar un seguro de hogar, y también de las que más
          confusión generan. Entender bien la diferencia es clave para no
          quedarte mal asegurado.
        </p>

        <h2>1. El continente: la estructura de la vivienda</h2>

        <p>
          El continente es, literalmente, lo que "contiene" tu hogar: las
          paredes, el techo, el suelo, las ventanas, la puerta de entrada,
          las instalaciones fijas de fontanería y electricidad, y elementos
          incorporados como la cocina empotrada o los armarios fijos.
        </p>

        <p>
          <strong>Ejemplo:</strong> si una tubería empotrada en la pared se
          rompe y daña el suelo, eso afecta al continente.
        </p>

        <h2>2. El contenido: todo lo que hay dentro</h2>

        <p>
          El contenido son los bienes muebles: el sofá, la televisión, la
          ropa, los electrodomésticos, la vajilla, el ordenador, las joyas.
          En resumen: todo lo que te llevarías contigo si te mudases de
          casa.
        </p>

        <p>
          <strong>Ejemplo:</strong> si esa misma fuga de agua estropea tu
          sofá y tu televisor, esos daños corresponden al contenido, no al
          continente.
        </p>

        <h2>3. Por qué importa la diferencia</h2>

        <p>
          Muchas pólizas permiten (o exigen) asegurar continente y
          contenido con límites distintos. Si solo aseguras uno de los dos,
          o infravaloras alguno, puedes acabar sin cobertura suficiente
          precisamente en el tipo de daño que sufras.
        </p>

        <h2>4. El riesgo de infravalorar el contenido</h2>

        <p>
          Si declaras un valor de contenido inferior al real, la
          aseguradora puede aplicar la conocida como "regla proporcional":
          en caso de siniestro, te indemniza en la misma proporción en que
          está infravalorado, aunque el límite parezca suficiente sobre el
          papel. Por eso conviene calcular con cuidado el valor real de tus
          bienes.
        </p>

        <h2>5. ¿Quién asegura qué si vivo de alquiler?</h2>

        <p>
          En un alquiler, lo habitual es que el propietario asegure el
          continente y el inquilino su propio contenido. Lo explicamos con
          más detalle en{" "}
          <a href="/blog/seguro-hogar-alquiler-inquilino-o-propietario">
            seguro de hogar en alquiler: ¿inquilino o propietario?
          </a>
          .
        </p>

        <h2>Conclusión</h2>

        <p>
          Continente y contenido no son sinónimos: cubren cosas distintas, y
          ambos importan. Antes de contratar, calcula bien el valor real de
          tus pertenencias y confirma que tu póliza cubre correctamente
          ambos aspectos de tu vivienda.
        </p>

        <p>
          Para conocer el resto de coberturas habituales, lee también{" "}
          <a href="/blog/que-cubre-realmente-un-seguro-de-hogar">
            qué cubre realmente un seguro de hogar
          </a>{" "}
          y, si te preocupan los daños por agua,{" "}
          <a href="/blog/seguro-hogar-cubre-fuga-de-agua">
            si tu seguro cubre una fuga de agua
          </a>
          .
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-hogar">Seguro de Hogar</a>.
        </p>

        <div className="articleCta">
          <h3>¿Quieres asegurar bien tu vivienda?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a calcular y comparar
            coberturas de continente y contenido, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloContinenteContenido;
