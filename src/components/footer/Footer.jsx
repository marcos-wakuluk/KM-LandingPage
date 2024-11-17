import React from "react";
import { KMWhite } from "../../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-black text-white py-8">
      <div className="w-screen footer-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 sm:gap-y-0 items-center justify-center">
          <div className="contact-info text-center lg:text-left">
            <h3 className="text-3xl font-semibold capitalize">contacto</h3>
            <div className="ml-7 lg:ml-0 mt-4">
              <a href="https://wa.me/message/EH4X57L5P2LPF1" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl mr-4" />
              </a>
              <a href="https://www.facebook.com/Kmprofitness" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FontAwesomeIcon icon={faFacebook} className="text-xl mr-4" />
              </a>
              <a href="https://www.instagram.com/kmprofitness" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FontAwesomeIcon icon={faInstagram} className="text-xl mr-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-center justify-center">
            <div className="w-1/3">
              <img src={KMWhite} alt="Logo KM" />
            </div>
            <div className="copyright mt-8 text-center">
              <p className="text-sm">&copy; KM Pro Fitness {currentYear} - Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
