import { Helmet } from "react-helmet-async";

// Datos estructurados (Schema.org) tipo FAQPage. Ayuda a que Google pueda
// mostrar las preguntas frecuentes como resultado enriquecido (desplegable)
// directamente en la búsqueda.
//
// Uso: <FaqSchema items={[{ question: "...", answer: "..." }, ...]} />
// El array "items" debe tener el mismo texto que se ve en la sección de FAQ.

function FaqSchema({ items }) {
  const datos = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(datos)}</script>
    </Helmet>
  );
}

export default FaqSchema;
