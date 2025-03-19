import React from "react";
import { KMBlack2 } from "../../utils/Constants";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-custom-black">
      <div className="content-container md:w-2/3 w-full text-white py-4 px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-2 uppercase mt-20 relative" style={{ zIndex: 1 }}>
          Imaginate tener todo en un sólo lugar
        </h2>
        <h2 className="text-3xl font-bold mb-2 uppercase  relative" style={{ zIndex: 1 }}>
          Cuando elegís nuestra asesoría, accedés a un servicio integral respaldado por un equipo de profesionales:
        </h2>

        <ul className="pl-5">
          <li>
            <h3 className="text-2xl font-semibold mb-4 mt-10 relative">
              <strong>Equipo multidisciplinario:</strong> Nutricionista, licenciado en educación física y entrenador
              personal trabajando en conjunto para tu éxito.
            </h3>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-4 relative">
              <strong>📱 App móvil:</strong> Encontrá todo en un solo lugar para una organización eficiente:
              entrenamientos, registros y guías de alimentación.
            </h3>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-4 relative">
              <strong>📋 Método PPR:</strong> Diseñado para mantener tu constancia y sentar bases sólidas para un cambio
              real y sostenible.
            </h3>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-4  relative">
              <strong>🤝 Acompañamiento constante:</strong> Estamos siempre disponibles para guiarte y apoyarte durante
              el proceso.
            </h3>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-4  relative">
              <strong>🏋️ Experiencia comprobada:</strong> Más de 2000 transformaciones exitosas nos respaldan.
            </h3>
          </li>
          <li>
            <h3 className="text-2xl font-semibold mb-4  relative">
              <strong>💯 Compromiso con tu cambio:</strong> Nuestra misión es verte lograr tus objetivos de forma
              sostenible y saludable.
            </h3>
          </li>
        </ul>
        <h3 className="text-2xl font-light mb-4 mt-20 relative" style={{ zIndex: 1 }}>
          Una vez que completes el pago de tu membresía, recibirás un correo con acceso a nuestra APP, junto con
          nuestros números de contacto y el enlace a nuestro grupo de WhatsApp.
        </h3>

        <h3 className="text-2xl font-semibold mb-4 mt-20 relative" style={{ zIndex: 1 }}>
          Dentro de la APP encontrarás la primera fase de nuestro método, donde nos conoceremos a fondo y diseñaremos un
          plan de entrenamiento y alimentación completamente personalizado. Este plan se ajustará progresivamente según
          tus avances y nuestras evaluaciones a medida que avances en las distintas fases del método.
        </h3>

        <h3 className="text-2xl mb-4 mt-20 relative font-light leading-relaxed animate-pulse" style={{ zIndex: 1 }}>
          Contarás con apoyo diario en una comunidad activa, exclusivo para miembros y nuestro wsp personal para cuando
          necesites.
        </h3>
      </div>
      <div className="image-container w-full md:w-1/3 flex items-center justify-center relative">
        <img
          src={KMBlack2}
          alt="Logo"
          className="w-auto h-64 object-contain hidden md:block"
          style={{
            filter: "drop-shadow(2px 4px 6px rgb(59 130 246)",
          }}
        />
      </div>

      <div
        className="content-container w-full text-white py-4 px-6 md:px-8 md:hidden absolute flex flex-col justify-center h-full "
        style={{
          backgroundImage: `url(${KMBlack2})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(2px 4px 6px rgb(59 130 246)",
          width: "90%",
        }}
      ></div>
    </div>
  );
};

export default Section4;
