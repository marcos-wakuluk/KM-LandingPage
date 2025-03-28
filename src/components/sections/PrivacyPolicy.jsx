import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [showModal] = useState(true);

  if (!showModal) {
    return null;
  }

  return (
    <div className="inset-0 flex items-center justify-center z-50 text-left">
      <div className="absolute inset-0 bg-opacity-80"></div>
      <div className="bg-white p-6 rounded-md w-4/5 max-h-[80vh] overflow-y-auto z-10">
        <div className="items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">Política de Privacidad</h1>
        </div>

        <h3 className="text-lg font-semibold mb-2">Su Privacidad es Importante para Nosotros</h3>
        <p>
          Estamos comprometidos con la protección de la privacidad de nuestros usuarios. Valoramos y respetamos la
          importancia de la privacidad en línea. No compartiremos ni divulgaremos su información personal a terceros,
          excepto cuando sea necesario para prestarle un servicio (como el envío de productos, verificaciones de
          crédito, etc.), para fines de investigación interna, creación de perfiles, o cuando tengamos su consentimiento
          explícito.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Consentimiento</h3>
        <p>
          No venderemos, alquilaremos ni cederemos su nombre, dirección, correo electrónico, información de pago ni
          ninguna otra información personal a terceros, salvo que usted haya dado su consentimiento expreso para ello o
          en el caso de que utilicemos proveedores de servicios para cumplir con sus solicitudes (por ejemplo,
          procesadores de pagos).
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Comunicación y Marketing</h3>
        <p>
          Si realiza una compra en nuestro sitio, podremos enviarle actualizaciones sobre productos, ofertas y noticias
          especiales por correo electrónico. Siempre podrá optar por no recibir nuestras comunicaciones de marketing o
          las de terceros relacionados, modificando sus preferencias en su cuenta o en los correos electrónicos
          recibidos.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Uso de Cookies</h3>
        <p>
          Utilizamos cookies para mejorar su experiencia en nuestro sitio. Las cookies son pequeños archivos de datos
          que se almacenan en su dispositivo y que nos permiten reconocerlo cuando vuelva a visitarnos. Si no desea
          recibir cookies, puede configurar su navegador para rechazarlas, aunque esto podría afectar algunas funciones
          de nuestro sitio.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Remarketing de Google</h3>
        <p>
          Utilizamos el servicio de remarketing de Google AdWords para mostrar anuncios a usuarios que hayan visitado
          previamente nuestro sitio web. Este tipo de publicidad se basa en las interacciones pasadas con nuestro sitio.
          Puede modificar sus preferencias de anuncios a través de la página de preferencias de Google o inhabilitar
          completamente la publicidad basada en intereses.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Enlaces a Sitios de Terceros</h3>
        <p>
          Nuestro sitio puede contener enlaces hacia otros sitios web de terceros. Tenga en cuenta que estos sitios
          tienen sus propias políticas de privacidad y no nos hacemos responsables de ellas. Le recomendamos que lea las
          políticas de privacidad de cada sitio que visite.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Verificación de Sus Datos</h3>
        <p>
          Si desea verificar o modificar los datos que nos ha proporcionado, puede hacerlo poniéndose en contacto con
          nosotros a través de los medios proporcionados. En algunos casos, podemos solicitar una prueba de identidad
          antes de procesar su solicitud, con el fin de proteger su información personal.
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Contáctenos</h3>
        <p>
          Si tiene preguntas sobre esta política de privacidad o desea realizar alguna solicitud relacionada con sus
          datos personales, no dude en ponerse en contacto con nuestro equipo de atención al cliente. Estaremos
          encantados de ayudarle.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
