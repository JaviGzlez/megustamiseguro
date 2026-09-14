import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloCarenciasSeguroMedico() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>Carencias de un seguro médico: qué son y cuánto duran | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Qué es el periodo de carencia de un seguro de salud, cuánto dura según el tipo de cobertura y cómo puedes reducirlo o eliminarlo."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/carencias-seguro-medico-que-son-cuanto-duran" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carencias de un seguro médico: qué son y cuánto duran | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Qué es el periodo de carencia de un seguro de salud, cuánto dura según el tipo de cobertura y cómo puedes reducirlo o eliminarlo." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/carencias-seguro-medico-que-son-cuanto-duran" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carencias de un seguro médico: qué son y cuánto duran | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Qué es el periodo de carencia de un seguro de salud, cuánto dura según el tipo de cobertura y cómo puedes reducirlo o eliminarlo." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Qué es el periodo de carencia de un seguro médico?",
            answer:
              "Es el tiempo que transcurre desde que contratas el seguro hasta que puedes acceder a determinadas coberturas, como cirugías, hospitalización o el parto. Durante ese periodo, esos servicios no están cubiertos.",
          },
          {
            question: "¿Cuánto dura la carencia de hospitalización o cirugía?",
            answer:
              "Lo más habitual es entre 6 y 8 meses, aunque puede variar según la aseguradora y la modalidad de la póliza. Algunos servicios más específicos pueden tener carencias más largas.",
          },
          {
            question: "¿Se puede eliminar la carencia al cambiar de aseguradora?",
            answer:
              "En muchos casos sí, si vienes de otra póliza de salud con al menos un año de antigüedad y aportas la documentación que lo acredite. La carencia del parto suele ser la excepción y se mantiene igualmente.",
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
        <p>Seguro de Salud</p>

        <h1>Carencias de un seguro médico: qué son y cuánto duran</h1>

        <span>
          El detalle que más sorpresas da al contratar un seguro de salud, y
          que conviene revisar antes de firmar.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Contratas un seguro médico pensando que ya tienes acceso a todo
          desde el primer día, y luego descubres que hay coberturas que
          tardan meses en activarse. Eso es el periodo de carencia, y es uno
          de los aspectos que más conviene revisar antes de contratar.
        </p>

        <h2>1. Qué es exactamente la carencia</h2>

        <p>
          El periodo de carencia es el tiempo que transcurre desde que
          contratas el seguro hasta que puedes acceder a determinadas
          coberturas. No afecta a todos los servicios por igual: algunos
          están disponibles desde el primer día, y otros requieren esperar.
        </p>

        <h2>2. Qué servicios no suelen tener carencia</h2>

        <p>
          La medicina general, las urgencias y las consultas con
          especialistas habitualmente están disponibles desde el primer
          día, sin ningún periodo de espera.
        </p>

        <h2>3. Cuánto dura la carencia según el tipo de cobertura</h2>

        <p>
          Los plazos varían según la aseguradora y la póliza, pero estas son
          las referencias más habituales en el mercado español:
        </p>

        <p>
          <strong>3 a 6 meses:</strong> pruebas diagnósticas avanzadas
          (resonancias, TAC) e intervenciones quirúrgicas sin hospitalización.
        </p>

        <p>
          <strong>6 a 8 meses:</strong> hospitalización de cualquier tipo y
          cirugías programadas.
        </p>

        <p>
          <strong>8 a 10 meses:</strong> embarazo, parto o cesárea, y
          tratamientos de infertilidad.
        </p>

        <p>
          En situaciones de urgencia vital, todas las aseguradoras están
          obligadas a prestar cobertura inmediata, independientemente de si
          estás en periodo de carencia.
        </p>

        <h2>4. Cómo reducir o eliminar las carencias</h2>

        <p>
          Si ya tienes un seguro de salud activo y cambias de aseguradora,
          muchas compañías eliminan las carencias (excepto, casi siempre, la
          del parto) si aportas documentación que acredite tu antigüedad en
          la póliza anterior, normalmente al menos un año. Si estás
          planificando un embarazo, conviene contratar con bastante
          antelación para que la carencia ya haya finalizado cuando lo
          necesites.
        </p>

        <h2>Conclusión</h2>

        <p>
          Antes de contratar un seguro médico, no basta con mirar el precio
          y las coberturas: pregunta también por los periodos de carencia de
          cada una, especialmente si tienes algo concreto en mente a corto
          plazo, como una intervención o un embarazo.
        </p>

        <p>
          Si buscas un seguro para toda la familia, te interesa también{" "}
          <a href="/blog/seguro-medico-familiar-como-elegir-el-mejor-plan">
            seguro médico familiar: cómo elegir el mejor plan
          </a>
          .
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-salud">Seguro de Salud</a>.
        </p>

        <div className="articleCta">
          <h3>¿Quieres revisar las carencias de tu seguro médico?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a comparar opciones con
            carencias claras, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloCarenciasSeguroMedico;
