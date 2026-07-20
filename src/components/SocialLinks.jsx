import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./SocialLinks.css";

const REDES = [
  {
    nombre: "Instagram",
    url: "https://www.instagram.com/megustamiseguro/",
    Icono: FaInstagram,
  },
  {
    nombre: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61587879299177",
    Icono: FaFacebook,
  },
  {
    nombre: "LinkedIn",
    url: "https://www.linkedin.com/company/me-gusta-mi-seguro/",
    Icono: FaLinkedin,
  },
];

function SocialLinks() {
  return (
    <div className="socialLinks">
      {REDES.map(({ nombre, url, Icono }) => (
        <a
          key={nombre}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={nombre}
          className="socialLinkIcon"
        >
          <Icono />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
