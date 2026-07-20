import { Helmet } from "react-helmet-async";

// Datos estructurados (Schema.org) para que Google entienda que somos
// una agencia/portal de seguros, con nuestros datos de contacto reales.
// Se incluye en las páginas principales (Inicio y las de producto).

function OrganizationSchema() {
  const datos = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Me Gusta Mi Seguro",
    url: "https://megustamiseguro.es",
    logo: "https://megustamiseguro.es/images/logo.png",
    image: "https://megustamiseguro.es/images/logo.png",
    telephone: "+34643727346",
    email: "info@megustamiseguro.es",
    priceRange: "Estudio gratuito",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Higueras, 3",
      postalCode: "11402",
      addressLocality: "Jerez de la Frontera",
      addressRegion: "Cádiz",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.instagram.com/megustamiseguro/",
      "https://www.facebook.com/profile.php?id=61587879299177",
      "https://www.linkedin.com/company/me-gusta-mi-seguro/",
    ],
    areaServed: "ES",
    description:
      "Portal de comparación y contratación de seguros de coche, hogar, salud, vida, mascotas, empresas y transporte de mercancía en España.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(datos)}</script>
    </Helmet>
  );
}

export default OrganizationSchema;
