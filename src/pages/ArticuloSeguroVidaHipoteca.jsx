import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloSeguroVidaHipoteca() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>¿Cuánto seguro de vida necesito si tengo hipoteca? | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Cómo calcular el capital de un seguro de vida vinculado a la hipoteca, diferencias entre seguro decreciente y constante, y si conviene el del banco o uno propio."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/cuanto-seguro-de-vida-necesito-con-hipoteca" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Cuánto seguro de vida necesito si tengo hipoteca? | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Cómo calcular el capital de un seguro de vida vinculado a la hipoteca, diferencias entre seguro decreciente y constante, y si conviene el del banco o uno propio." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/cuanto-seguro-de-vida-necesito-con-hipoteca" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Cuánto seguro de vida necesito si tengo hipoteca? | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Cómo calcular el capital de un seguro de vida vinculado a la hipoteca, diferencias entre seguro decreciente y constante, y si conviene el del banco o uno propio." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Es obligatorio tener un seguro de vida al pedir una hipoteca?",
            answer:
              "No es obligatorio por ley, aunque muchos bancos lo ofrecen (y a veces lo incentivan con una mejora en el diferencial) al contratar la hipoteca. El cliente tiene derecho a elegir libremente la compañía que prefiera, no está obligado a contratarlo con el propio banco.",
          },
          {
            question: "¿Qué diferencia hay entre un seguro de vida decreciente y uno constante?",
            answer:
              "El seguro decreciente reduce el capital asegurado a medida que baja la deuda pendiente de la hipoteca, por lo que suele ser más económico. El seguro con capital constante mantiene la misma cobertura durante toda la póliza, independientemente de cuánto quede por pagar.",
          },
          {
            question: "¿Puedo cambiar el seguro de vida de mi hipoteca a otra compañía?",
            answer:
              "Sí, siempre que el nuevo seguro cumpla unas condiciones mínimas equivalentes a las exigidas por el banco. Muchas personas contratan uno fuera del banco porque suele salir más económico que el ofrecido directamente por la entidad financiera.",
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
        <p>Seguro de Vida</p>

        <h1>¿Cuánto seguro de vida necesito si tengo hipoteca?</h1>

        <span>
          Cómo calcular el capital adecuado y qué diferencia hay entre las
          principales modalidades.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Si tienes una hipoteca, seguramente te hayas planteado si necesitas
          un seguro de vida y, sobre todo, por cuánto capital. Es una de las
          decisiones que más dudas genera, así que vamos a verlo con
          claridad.
        </p>

        <h2>1. Por qué se vincula el seguro de vida a la hipoteca</h2>

        <p>
          La idea es sencilla: si el titular de la hipoteca falleciera, el
          seguro de vida se encarga de pagar (total o parcialmente) la deuda
          pendiente, para que la familia no tenga que asumir esas cuotas o
          perder la vivienda.
        </p>

        <h2>2. Cómo calcular el capital que necesitas</h2>

        <p>
          Lo más habitual es tomar como referencia el capital pendiente de la
          hipoteca en el momento de contratar el seguro. Algunas personas
          añaden un margen adicional para cubrir también otros gastos o
          necesidades de la familia más allá de la propia deuda.
        </p>

        <h2>3. Seguro decreciente vs. seguro con capital constante</h2>

        <p>
          El <strong>seguro decreciente</strong> reduce el capital asegurado
          a medida que baja la deuda pendiente de la hipoteca, y suele ser
          la opción más económica. El <strong>seguro con capital
          constante</strong> mantiene la misma cobertura durante toda la
          póliza, lo que puede interesar si quieres que la familia reciba
          siempre la misma cantidad, no solo lo que quede de hipoteca.
        </p>

        <h2>4. ¿El seguro del banco o uno por tu cuenta?</h2>

        <p>
          El banco suele ofrecer su propio seguro de vida al firmar la
          hipoteca, a veces con una mejora en las condiciones del préstamo si
          lo contratas con ellos. Sin embargo, no estás obligado a
          contratarlo ahí: puedes elegir una compañía distinta, siempre que
          cumpla unas condiciones mínimas equivalentes, y suele salir más
          económico contratarlo por tu cuenta.
        </p>

        <h2>5. Qué revisar antes de contratar</h2>

        <p>
          Además del capital y la modalidad (decreciente o constante),
          conviene revisar si incluye invalidez permanente absoluta, los
          periodos de carencia, y si el capital se ajusta automáticamente
          según vayas amortizando la hipoteca.
        </p>

        <h2>Conclusión</h2>

        <p>
          El capital adecuado depende de tu deuda pendiente y de las
          necesidades de tu familia más allá de la propia hipoteca. No hace
          falta quedarse con la primera oferta del banco: comparar varias
          opciones puede suponer un ahorro notable sin perder protección.
        </p>

        <p>
          Si quieres una visión más general antes de decidir, lee{" "}
          <a href="/blog/merece-la-pena-contratar-un-seguro-de-vida">
            ¿merece la pena contratar un seguro de vida?
          </a>.
        </p>

        <p>
          ¿Quieres ver todas las opciones disponibles? Visita nuestra
          página de <a href="/seguro-vida">Seguro de Vida</a>.
        </p>

        <div className="articleCta">
          <h3>¿Tienes hipoteca y quieres comparar tu seguro de vida?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a calcular el capital adecuado
            y a comparar opciones, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroVidaHipoteca;
