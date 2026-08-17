import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloSeguroHogarAlquiler() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Seguro de hogar en alquiler: ¿lo necesita el inquilino o el propietario? | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Quién debe contratar el seguro de hogar en una vivienda de alquiler, qué cubre cada modalidad y por qué al inquilino también le conviene tener uno."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/seguro-hogar-alquiler-inquilino-o-propietario" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro de hogar en alquiler: ¿lo necesita el inquilino o el propietario? | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Quién debe contratar el seguro de hogar en una vivienda de alquiler, qué cubre cada modalidad y por qué al inquilino también le conviene tener uno." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/seguro-hogar-alquiler-inquilino-o-propietario" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro de hogar en alquiler: ¿lo necesita el inquilino o el propietario? | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Quién debe contratar el seguro de hogar en una vivienda de alquiler, qué cubre cada modalidad y por qué al inquilino también le conviene tener uno." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Es obligatorio tener un seguro de hogar si vivo de alquiler?",
            answer:
              "No hay obligación legal general, pero muchos propietarios lo exigen como condición dentro del contrato de arrendamiento, especialmente un seguro de responsabilidad civil o de contenido a nombre del inquilino.",
          },
          {
            question: "¿Quién debe asegurar el continente y quién el contenido en un alquiler?",
            answer:
              "Lo habitual es que el propietario asegure el continente (la estructura de la vivienda) y el inquilino asegure su contenido (sus propios muebles y pertenencias) y su responsabilidad civil, aunque en la práctica depende de lo acordado en el contrato.",
          },
          {
            question: "¿Qué pasa si no tengo seguro y provoco un daño en la vivienda alquilada?",
            answer:
              "Sin un seguro de responsabilidad civil, tendrías que asumir tú el coste de los daños causados de tu propio bolsillo, lo que puede suponer un gasto importante frente a la prima relativamente baja de una póliza adecuada.",
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

        <h1>Seguro de hogar en alquiler: ¿lo necesita el inquilino o el propietario?</h1>

        <span>
          Quién debe asegurar qué en una vivienda de alquiler, y por qué al
          inquilino también le conviene tener su propia póliza.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Es una de las dudas más habituales al alquilar una vivienda: ¿el
          seguro de hogar le corresponde al propietario o al inquilino? La
          respuesta corta es que, en realidad, a los dos les interesa tener
          uno, aunque cada uno cubra cosas distintas.
        </p>

        <h2>1. Lo que suele cubrir el propietario</h2>

        <p>
          Lo habitual es que el propietario asegure el <strong>continente</strong>:
          la estructura de la vivienda, instalaciones, techos y paredes. Es
          su patrimonio, así que suele ser quien contrata esta cobertura.
        </p>

        <h2>2. Lo que le conviene asegurar al inquilino</h2>

        <p>
          Aunque no seas el propietario, tus muebles, electrodomésticos y
          pertenencias (el <strong>contenido</strong>) siguen siendo tuyos, y
          normalmente no están cubiertos por la póliza del propietario. Un
          seguro de contenido para inquilinos protege justamente eso.
        </p>

        <h2>3. La responsabilidad civil es clave para el inquilino</h2>

        <p>
          Esta es, probablemente, la cobertura más importante para quien
          vive de alquiler: si provocas un daño de forma involuntaria (por
          ejemplo, una fuga de agua que afecta al vecino de abajo), la
          responsabilidad civil cubre esos gastos. Sin ella, tendrías que
          asumirlos tú directamente.
        </p>

        <h2>4. Qué suelen exigir los propietarios en el contrato</h2>

        <p>
          Es cada vez más habitual que los propietarios incluyan como
          condición del contrato de alquiler que el inquilino contrate un
          seguro de hogar (normalmente de contenido y responsabilidad civil)
          antes de entregar las llaves.
        </p>

        <h2>5. ¿Y si el propietario ya tiene seguro?</h2>

        <p>
          Que el propietario tenga su propio seguro no te protege a ti como
          inquilino: cubre su vivienda, no tus pertenencias ni los daños que
          tú puedas causar involuntariamente. Por eso conviene tener tu
          propia póliza aunque exista otra sobre el inmueble.
        </p>

        <h2>Conclusión</h2>

        <p>
          En un alquiler, lo más habitual es que el propietario asegure la
          vivienda en sí y el inquilino su contenido y su responsabilidad
          civil. Antes de mudarte, conviene aclarar con el propietario qué
          cubre su póliza y qué necesitas cubrir tú por tu cuenta.
        </p>

        <p>
          ¿Quieres ver todas las opciones disponibles? Visita nuestra
          página de <a href="/seguro-hogar">Seguro de Hogar</a>.
        </p>

        <div className="articleCta">
          <h3>¿Vas a alquilar o ya vives de alquiler?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a encontrar la cobertura
            adecuada, seas inquilino o propietario, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroHogarAlquiler;
