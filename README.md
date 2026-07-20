# Me Gusta Mi Seguro

Portal web de captación de clientes para **Me Gusta Mi Seguro**, en colaboración con la correduría **Draudimasgroup**. Permite a los usuarios solicitar información sobre distintos tipos de seguros, y centraliza esas solicitudes por email para su gestión.

🔗 [megustamiseguro.es](https://megustamiseguro.es)

## ¿Qué hace ahora mismo?

- **7 formularios de captación de leads** (Inicio + 6 páginas de seguros), que guardan cada solicitud como un "expediente" con referencia única y la envían por email.
- **Contacto rápido por WhatsApp**: un botón (flotante y en cada página) abre un formulario corto; al enviarlo, se manda un email de control a `info@megustamiseguro.es` y se abre WhatsApp con un mensaje ya redactado, listo para enviar al número real.
- **Blog con 6 artículos** sobre seguros, pensado para SEO.
- **Páginas legales** (Aviso Legal, Política de Privacidad, Política de Cookies) — con plantilla lista, pendiente de rellenar con los datos legales reales de la empresa antes de publicar.
- **SEO básico**: título y descripción únicos por página (`react-helmet-async`), `sitemap.xml` y `robots.txt`.
- **Redes sociales** enlazadas en el footer de todas las páginas.

## Stack técnico

- **React 19** + **Vite**
- **react-router-dom** — enrutado
- **EmailJS** (`@emailjs/browser`) — envío de emails desde el frontend, sin backend propio
- **react-helmet-async** — SEO (título/descripción por página)
- **react-icons** — iconografía

No hay backend ni base de datos todavía — todo lo que se "guarda" es en realidad un email enviado. Ese es el siguiente paso pendiente (ver más abajo).

## Cómo levantarlo en local

```bash
npm install --legacy-peer-deps
npm run dev
```

> ⚠️ Se usa `--legacy-peer-deps` porque `react-helmet-async` todavía no declara compatibilidad oficial con React 19, aunque funciona bien con ella.

Abre `http://localhost:5173`.

## Estructura del proyecto

```
src/
├── components/       # LeadForm, QuickContactModal, SuccessModal, SocialLinks...
├── pages/             # Una página por cada seguro, blog, artículos, legales
├── models/            # Modelo de "expediente" (lead)
├── services/          # Lógica de negocio (enviarExpediente)
├── providers/          # Conexión con EmailJS
├── config/            # Emails de contacto (info@ / correduría)
└── utils/              # Generador de referencias de expediente
```

## Configuración de contacto

En `src/config/contacto.js` se define a qué email llega la correduría en copia. El "To" y el "CC" reales de la plantilla se configuran directamente en el panel de [EmailJS](https://dashboard.emailjs.com) (plantilla `template_p5pdbve`).

## Pendiente antes de publicar

- [ ] Rellenar los datos reales en las 3 páginas legales (nombre legal, CIF, dirección, número de registro DGSFP)
- [ ] Configurar Google Analytics (requiere banner de consentimiento de cookies antes de activarlo, por normativa RGPD)

## Próximos pasos (roadmap)

- **Supabase**: base de datos para que los expedientes queden guardados de forma permanente (no solo por email), panel interno de administración, y área de cliente con acceso a sus pólizas.
- **Avisos de renovación**: notificación automática al cliente y a nosotros 2 meses antes de que caduque una póliza (requiere Supabase).

## Contacto interno

- Email: `info@megustamiseguro.es`
- Correduría: `soporte@draudimasgroup.com`
- WhatsApp: `+34 643 727 346`
