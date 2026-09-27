import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloDesgravarSeguroSaludAutonomo() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>¿Puede desgravar un autónomo el seguro de salud? | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Sí, un autónomo puede deducirse el seguro de salud en la Renta. Te explicamos los requisitos, el límite de 500€ por persona y cómo aplicarlo."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/puede-desgravar-autonomo-seguro-de-salud" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Puede desgravar un autónomo el seguro de salud? | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Sí, un autónomo puede deducirse el seguro de salud en la Renta. Te explicamos los requisitos, el límite de 500€ por persona y cómo aplicarlo." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/puede-desgravar-autonomo-seguro-de-salud" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Puede desgravar un autónomo el seguro de salud? | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Sí, un autónomo puede deducirse el seguro de salud en la Renta. Te explicamos los requisitos, el límite de 500€ por persona y cómo aplicarlo." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Puede un autónomo desgravarse el seguro de salud?",
            answer:
              "Sí. Los autónomos en estimación directa pueden deducir como gasto de la actividad las primas de su seguro de salud, con un límite de 500€ anuales por persona cubierta (titular, cónyuge e hijos menores de 25 años que convivan con él), o 1.500€ si la persona cubierta tiene discapacidad reconocida.",
          },
          {
            question: "¿Y si tributo en módulos (estimación objetiva)?",
            answer:
              "No. La deducción del seguro de salud solo está disponible para autónomos en estimación directa, no para quienes tributan por estimación objetiva (módulos).",
          },
          {
            question: "¿Qué requisitos hay que cumplir para aplicar la deducción?",
            answer:
              "El seguro debe estar a nombre del autónomo, pagado por él, contabilizado y justificado con factura, y corresponder al ejercicio fiscal que se declara. Además, en el País Vasco esta deducción no está disponible para autónomos, a diferencia del resto de España y Navarra.",
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
        <p>Seguro de Salud · Autónomos</p>

        <h1>¿Puede desgravar un autónomo el seguro de salud?</h1>

        <span>
          Sí, y es una de las deducciones que más autónomos se olvidan de
          aplicar. Te contamos los límites y cómo hacerlo bien.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Si eres autónomo y tienes (o estás pensando en contratar) un
          seguro de salud privado, hay una buena noticia: Hacienda te
          permite deducirte parte de esa prima como gasto de tu actividad.
          Es una de las deducciones más desconocidas y, aun así, de las más
          fáciles de aplicar si cumples los requisitos.
        </p>

        <h2>1. La regla general: sí se puede desgravar</h2>

        <p>
          A diferencia de un trabajador por cuenta ajena, que no puede
          deducirse su seguro médico privado, un autónomo en{" "}
          <strong>estimación directa</strong> sí puede considerar la prima
          de su seguro de salud como un gasto deducible de su actividad
          económica, reduciendo así su base imponible en el IRPF.
        </p>

        <h2>2. El límite: 500€ por persona al año</h2>

        <p>
          La deducción no es ilimitada. Hacienda fija un tope de{" "}
          <strong>500€ anuales por cada persona cubierta</strong>: el propio
          autónomo, su cónyuge y sus hijos menores de 25 años que convivan
          con él. Si alguna de esas personas tiene reconocida una
          discapacidad, el límite sube a <strong>1.500€ por persona</strong>.
        </p>

        <p>
          Por ejemplo, si tienes una póliza de salud familiar que te cubre a
          ti, a tu pareja y a un hijo, podrías llegar a deducir hasta 1.500€
          en total (500€ por cada uno), aunque el coste real de la póliza
          sea superior: el exceso sobre esos 500€ por persona no es
          deducible.
        </p>

        <h2>3. Requisitos que debes cumplir</h2>

        <p>
          Para que la deducción sea válida, Hacienda exige que se cumplan
          varias condiciones:
        </p>

        <p>
          <strong>Estimación directa:</strong> si tributas por estimación
          objetiva (módulos), no puedes aplicar esta deducción.
        </p>

        <p>
          <strong>Titularidad y pago:</strong> el seguro debe estar a
          nombre del autónomo y ser abonado por él.
        </p>

        <p>
          <strong>Justificación:</strong> conviene guardar la factura o el
          recibo del seguro y reflejarlo correctamente en tu contabilidad o
          libro de gastos.
        </p>

        <p>
          <strong>Ejercicio correspondiente:</strong> solo se deduce la
          parte de la prima que corresponde al año que estás declarando.
        </p>

        <h2>4. Autónomo persona física vs. autónomo societario</h2>

        <p>
          Si trabajas como autónomo persona física, la prima del seguro se
          deduce directamente como gasto en tu declaración de la renta
          (dentro del rendimiento de tu actividad económica). Si en cambio
          operas a través de una sociedad y eres autónomo societario, el
          seguro de salud se trata como retribución en especie exenta (con
          el mismo límite de 500€ por persona), y es la empresa quien se
          deduce el gasto.
        </p>

        <h2>5. Una excepción: el País Vasco</h2>

        <p>
          Esta deducción aplica en todo el territorio común y en Navarra,
          pero <strong>no está disponible en el País Vasco</strong>, donde
          la normativa foral del IRPF no contempla esta deducción para
          autónomos.
        </p>

        <h2>Conclusión</h2>

        <p>
          Si eres autónomo en estimación directa y tienes un seguro de
          salud, no dejes pasar esta deducción: dentro de los límites de
          500€ (o 1.500€ con discapacidad) por persona, puede suponer un
          ahorro fiscal real cada año, simplemente asegurándote de
          contabilizar y justificar bien la prima.
        </p>

        <p>
          Si además quieres revisar otros seguros que también te
          convienen como autónomo, échale un vistazo a{" "}
          <a href="/blog/seguros-para-autonomos">
            seguros para autónomos: trabajar con más tranquilidad
          </a>
          .
        </p>

        <p>
          ¿Quieres ver todas las coberturas disponibles? Visita nuestra
          página de <a href="/seguro-salud">Seguro de Salud</a>.
        </p>

        <div className="articleCta">
          <h3>¿Buscas un seguro de salud como autónomo?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a comparar opciones y elegir
            una cobertura que también puedas aprovechar fiscalmente, sin
            compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloDesgravarSeguroSaludAutonomo;
