import React, { useState } from "react";

const PrivacyPolicy = ({ onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) {
      onClose();
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-left">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      <div className="bg-white p-4 rounded-md w-4/5 max-h-[80vh] overflow-y-auto z-10">
        <div className="items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">Política de Privacidad</h1>
        </div>
        <h3 className="text-lg font-semibold mb-2">SU PRIVACIDAD ES IMPORTANTE</h3>
        <p>
          Estamos totalmente comprometidos con la protección de la privacidad de los visitantes y clientes de nuestro sitio, apreciamos y respetamos plenamente la importancia de la privacidad en Internet. No divulgaremos información sobre nuestros clientes a terceros, excepto en el caso de que sea parte de un servicio para usted, por ejemplo. organizar el envío de un producto, realizar comprobaciones de crédito y otros controles de seguridad. Para fines de investigación y creación de perfiles de los clientes, o cuando tengamos su permiso expreso para hacerlo.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">TU CONSENTIMIENTO</h3>
        <p>
          No venderemos su nombre, dirección, dirección de correo electrónico, información de su tarjeta de crédito o información personal a ningún tercero (excluyendo a los socios a los que usted pueda haber vinculado a nuestro sitio) sin su permiso.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">COMUNICACIÓN Y MARKETING</h3>
        <p>
          Si ha realizado una compra en mi tienda, es posible que ocasionalmente le envíe actualizaciones de nuestros nuevos productos, noticias y ofertas especiales por correo electrónico. Todos nuestros clientes tienen la opción de optar por no recibir comunicaciones de marketing de parte mia y / o terceros seleccionados. Si no desea continuar recibiendo promociones de mi parte y / o de terceros seleccionados al finalizar la compra.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">COOKIES</h3>
        <p>
          Una cookie es un pequeño archivo de información que se envía a su computadora y se almacena en su disco duro. Si se ha registrado con nosotros, su computadora almacenará una cookie de identificación que le ahorrará tiempo cada vez que vuelva a visitar nuestro sitio, al recordar su dirección de correo electrónico. Puede cambiar la configuración de su navegador para evitar que las cookies se almacenen en su computadora sin su consentimiento explícito.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">REMARKETING DE GOOGLE</h3>
        <p>
          Este sitio web utiliza el servicio de remarketing de Google AdWords para anunciarse en sitios web de terceros (incluido Google) a los visitantes anteriores de nuestro sitio. Podría significar que anunciamos a visitantes anteriores que no completaron una tarea en nuestro sitio, por ejemplo, utilizando el formulario de contacto para realizar una consulta. Esto podría ser una publicidad en la página de resultados de búsqueda de Google o un sitio en la Red de Display de Google. Los proveedores de terceros, incluido Google, usan cookies para publicar anuncios basados en las visitas anteriores de alguien a nuestro sitio. Por supuesto, cualquier información recopilada se usará de acuerdo con nuestra propia política de privacidad y la política de privacidad de Google.
        </p>
        <p>
          Puede establecer preferencias sobre cómo Google le anuncia mediante la página de preferencias de anuncios de Google y, si lo desea, puede optar por excluirse de la publicidad basada en intereses por completo mediante la configuración de cookies o utilizando permanentemente un complemento de navegador.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">SITIOS DE TERCEROS</h3>
        <p>
          Este sitio puede contener enlaces hacia y desde los sitios web de nuestras redes asociadas, anunciantes y otros terceros. Si sigue un enlace a cualquiera de estos sitios web, tenga en cuenta que tienen sus propias políticas de privacidad y que no aceptamos responsabilidad alguna por estas políticas. Consulte estas políticas antes de enviar datos personales a estos sitios web.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">VERIFICANDO TUS DETALLES</h3>
        <p>
          Si desea verificar los detalles que nos ha enviado, puede hacerlo comunicándose con nosotros a través de la dirección de correo electrónico que se indica a continuación. Nuestros procedimientos de seguridad significan que podemos solicitar una prueba de identidad antes de revelar información. Esta prueba de identidad se basará en su dirección de correo electrónico y contraseña enviada al registrarse. Por lo tanto, debe mantener esta información segura ya que será responsable de cualquier acción que tomemos en respuesta a una solicitud de alguien que utilice su correo electrónico y contraseña. Recomendamos encarecidamente que no utilice la función de memoria de contraseña del navegador, ya que permitiría a otras personas que usan su terminal acceder a su información personal.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">CONTACTENOS</h3>
        <p>
          Siempre nos complace escuchar a mis clientes (¡incluso si es una queja!). Siempre estamos agradecidos por el tiempo que nos dedica, brindándonos el conocimiento que necesitamos para asegurar que nuestros clientes estén completamente satisfechos. Queremos que regrese al sitio y nos recomiende a sus amigos y familiares. Si tiene alguna pregunta o comentario sobre esta declaración, o si desea que dejemos de procesar su información, no dude en ponerse en contacto con el servicio de atención al cliente, quien estará encantado de responder cualquier pregunta que pueda tener.
        </p>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
            onClick={handleClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;