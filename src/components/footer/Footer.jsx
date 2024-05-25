import React from "react";
import { KMWhite } from "../../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white py-8">
      <div className="w-screen footer-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 sm:gap-y-0 items-center justify-center">
          <div className="contact-info text-center lg:text-left">
            <h3 className="text-3xl font-semibold capitalize">contacto</h3>
            <p>Dirección: Calle Principal #123, Ciudad, País</p>
            <a href="https://wa.me/message/EH4X57L5P2LPF1">
              Teléfono: +54 358 5138791
            </a>
            <p>Correo electrónico: info@personaltrainer.com</p>
            <div className="social-links mt-4">
              <a
                href="https://www.facebook.com/Kmprofitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl mr-4" />
              </a>
              <a
                href="https://www.twitter.com/personaltrainer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl mr-4" />
              </a>
              <a
                href="https://www.instagram.com/kmprofitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl mr-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-center justify-center">
            <div className="w-1/3">
              <img src={KMWhite} alt="Logo KM" />
            </div>
            <div className="copyright mt-8 text-center">
              <p className="text-sm">
                &copy; KM Pro Fitness 2024 - Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
