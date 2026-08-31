import "./Blog.css";
import { Helmet } from "react-helmet-async";
import FaqSchema from "../components/FaqSchema";

function ArticuloSeguroSubidaPrecioSinPartes() {
  return (
    <main className="blogPage">
      <Helmet>
        <title>¿Por qué ha subido mi seguro si no he dado partes? | Me Gusta Mi Seguro</title>
        <meta
          name="description"
          content="Tu seguro sube aunque no hayas dado ningún parte. Te explicamos los motivos más habituales y qué puedes hacer al respecto."
        />
              <link rel="canonical" href="https://megustamiseguro.es/blog/por-que-ha-subido-mi-seguro-sin-dar-partes" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="¿Por qué ha subido mi seguro si no he dado partes? | Me Gusta Mi Seguro" />
        <meta property="og:description" content="Tu seguro sube aunque no hayas dado ningún parte. Te explicamos los motivos más habituales y qué puedes hacer al respecto." />
        <meta property="og:url" content="https://megustamiseguro.es/blog/por-que-ha-subido-mi-seguro-sin-dar-partes" />
        <meta property="og:image" content="https://megustamiseguro.es/og-image.jpg" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="Me Gusta Mi Seguro" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="¿Por qué ha subido mi seguro si no he dado partes? | Me Gusta Mi Seguro" />
        <meta name="twitter:description" content="Tu seguro sube aunque no hayas dado ningún parte. Te explicamos los motivos más habituales y qué puedes hacer al respecto." />
        <meta name="twitter:image" content="https://megustamiseguro.es/og-image.jpg" />
      </Helmet>

      <FaqSchema
        items={[
          {
            question: "¿Puede subir mi seguro aunque no haya dado ningún parte?",
            answer:
              "Sí. El precio de la renovación no depende solo de tu propia siniestralidad: también influyen la inflación en el coste de las reparaciones, cambios en tu perfil de riesgo (edad, antigüedad del vehículo o la vivienda) y la siniestralidad general de la aseguradora.",
          },
          {
            question: "¿Tengo que aceptar la subida de precio de mi seguro?",
            answer:
              "No. Si la aseguradora te comunica una subida con menos de 2 meses de antelación, puedes rechazarla devolviendo el recibo. Si te avisó a tiempo, puedes aceptarla, negociarla o buscar otra compañía antes de que se renueve.",
          },
          {
            question: "¿Por qué las aseguradoras suben el precio aunque no haya siniestralidad?",
            answer:
              "Porque el precio se calcula en base a factores colectivos, no solo individuales: el coste medio de las reparaciones, la inflación, y la siniestralidad conjunta de todos los asegurados de un perfil similar al tuyo, no únicamente tu propio historial.",
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
        <p>Renovación y Cambio de Compañía</p>

        <h1>¿Por qué ha subido mi seguro si no he dado partes?</h1>

        <span>
          No haber reclamado nada no significa que el precio se quede
          congelado. Estos son los motivos más habituales.
        </span>
      </section>

      <article className="articleContent">
        <p className="articleIntro">
          Llega la carta de renovación y el precio ha subido, sin que hayas
          tenido ni un solo parte en todo el año. Es una de las quejas más
          habituales entre asegurados, y tiene su explicación: el precio de
          tu seguro no depende únicamente de tu propia siniestralidad.
        </p>

        <h2>1. La inflación en el coste de las reparaciones</h2>

        <p>
          Reparar un coche o una vivienda cuesta cada año más: piezas,
          materiales y mano de obra suben de precio. Las aseguradoras
          ajustan sus tarifas para cubrir ese incremento, aunque tú
          personalmente no hayas tenido ningún siniestro.
        </p>

        <h2>2. Cambios en tu propio perfil de riesgo</h2>

        <p>
          Aunque no hayas dado ningún parte, tu perfil puede haber cambiado:
          el vehículo tiene un año más de antigüedad, tu vivienda ha
          cumplido más años, o has entrado en un nuevo tramo de edad. Todos
          estos factores influyen en el cálculo del precio.
        </p>

        <h2>3. La siniestralidad general de la aseguradora, no solo la tuya</h2>

        <p>
          Las compañías fijan precios en base a estadísticas de grupos de
          riesgo, no solo de forma individual. Si la siniestralidad general
          de personas con un perfil parecido al tuyo ha subido, es habitual
          que el precio se ajuste para todo ese grupo, aunque tú
          personalmente no hayas reclamado nada.
        </p>

        <h2>4. Revalorización según el IPC u otros índices</h2>

        <p>
          Algunas pólizas incluyen cláusulas de revalorización automática
          vinculadas a índices como el IPC, que ajustan el precio cada año
          de forma independiente a tu siniestralidad personal.
        </p>

        <h2>5. Qué puedes hacer al respecto</h2>

        <p>
          Lo primero es revisar cuándo te llegó la comunicación de la
          subida: si fue con menos de 2 meses de antelación a la
          renovación, tienes derecho a rechazarla devolviendo el recibo (te
          contamos más sobre estos plazos en{" "}
          <a href="/blog/cuanta-antelacion-cambiar-de-seguro">
            ¿con cuánta antelación puedo cambiar de seguro?
          </a>
          ). Si el aviso fue correcto, siempre puedes comparar con otras
          compañías antes de aceptar la renovación tal cual.
        </p>

        <h2>Conclusión</h2>

        <p>
          Que tu seguro suba sin haber tenido ningún parte no es un error ni
          algo excepcional: responde a factores generales del mercado y de
          tu perfil, no solo a tu propio historial. Aun así, no tienes por
          qué aceptar la subida sin más: comparar antes de la renovación
          suele merecer la pena.
        </p>

        <p>
          ¿Quieres comparar opciones antes de que llegue tu renovación?
          Visita nuestra página de <a href="/#seguros">Seguros</a>.
        </p>

        <div className="articleCta">
          <h3>¿Te ha subido el seguro este año?</h3>

          <p>
            En Me Gusta Mi Seguro te ayudamos a comparar opciones y ver si
            puedes conseguir mejores condiciones, sin compromiso.
          </p>

          <a href="/#contacto">Solicitar estudio gratuito</a>
        </div>
      </article>
    </main>
  );
}

export default ArticuloSeguroSubidaPrecioSinPartes;
