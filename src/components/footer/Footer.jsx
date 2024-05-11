import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-8">
      <div className="footer-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-0">
          <div className="contact-info">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <p>Dirección: Calle Principal #123, Ciudad, País</p>
            <p>Teléfono: +123 456 789</p>
            <p>Correo electrónico: info@personaltrainer.com</p>
            <div className="social-links mt-4">
              <a
                href="https://www.facebook.com/personaltrainer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-xl mr-4"></i>
              </a>
              <a
                href="https://www.twitter.com/personaltrainer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl mr-4"></i>
              </a>
              <a
                href="https://www.instagram.com/personaltrainer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          <div className="additional-links">
            <h3 className="text-lg font-semibold">Enlaces adicionales</h3>
            <ul className="mt-4">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-300 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/precios" className="text-gray-300 hover:text-white">
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="/testimonios"
                  className="text-gray-300 hover:text-white"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright mt-8 text-center">
        <p className="text-sm">
          &copy; 2024 Personal Trainer. Todos los derechos reservados.
        </p>
        <p className="text-sm">
          <a href="/privacidad" className="text-gray-300 hover:text-white">
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
