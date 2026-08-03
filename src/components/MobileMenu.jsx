import { useState, useEffect } from "react";
import "./MobileMenu.css";

// Menú hamburguesa reutilizable para móvil/tablet (aparece por debajo de
// 1100px, que es el punto en el que los headers de las páginas ocultan el
// <nav> de escritorio). Se le pasan los enlaces de navegación propios de
// cada página mediante la prop "links".
//
// Uso:
// <MobileMenu
//   links={[
//     { href: "/", label: "Inicio" },
//     { href: "#coberturas", label: "Coberturas" },
//     { href: "/blog", label: "Blog" },
//     { href: "#contacto", label: "Contacto" },
//   ]}
// />

function MobileMenu({ links = [], ctaHref = "#contacto", ctaLabel = "Solicitar estudio gratuito" }) {
  const [open, setOpen] = useState(false);

  // Evita que la página haga scroll por detrás mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobileMenuToggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? "isOpen" : ""} />
        <span className={open ? "isOpen" : ""} />
        <span className={open ? "isOpen" : ""} />
      </button>

      <div className={`mobileMenuOverlay ${open ? "isOpen" : ""}`}>
        <nav className="mobileMenuNav">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobileMenuActions">
          <a
            href={ctaHref}
            className="mobileMenuCta"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </a>

          <a
            href="/mi-cuenta"
            className="mobileMenuAccount"
            onClick={() => setOpen(false)}
          >
            Mi cuenta
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
