import React, { useState } from "react";

const Country = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    country: "",
    region: "",
    privacyPolicies: false,
  });
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="bg-black">
        <img src="/assets/KM-white.png" className="mt-10" style={{ display: 'inline', width: '10%' }} alt="" />
      </div>
      <div className="bg-black h-12"></div>
      <div className="w-2/3 mx-auto mt-6 divide-y">
        <h2 className="text-2xl font-bold mb-4">Detalles de contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2 mb-4 mt-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="lastName" className="block font-semibold mb-1">
                Apellido:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Confirmar email:
              </label>
              <input
                type="email"
                id="emailConfirm"
                name="emailConfirm"
                value={formData.emailConfirm}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="country" className="block font-semibold mb-1">
                País:
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Selecciona un país</option>
                {Country.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>

            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="region" className="block font-semibold mb-1">
                Región:
              </label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <input
                type="checkbox"
                id="privacyPolicies"
                name="privacyPolicies"
                checked={formData.privacyPolicies}
                onChange={handleChange}
                className="form-checkbox text-blue-500 border-blue-500 rounded-md focus:ring-blue-500 mr-2"
                required
              />
              <label>
                He leído, entendido y aceptado la{' '}
                <a
                  className="text-blue-500"
                  onClick={() => setPrivacyModalOpen(true)}
                >
                  Política de Privacidad{' '}
                </a>
                y el{' '}
                <a
                  className="text-blue-500"
                  onClick={() => setLegalModalOpen(true)}
                >
                  Aviso Legal
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </form>

        {privacyModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 text-left">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80" onClick={() => setLegalModalOpen(false)}></div>
            <div className="bg-white p-4 rounded-md w-4/5 max-h-[80vh] overflow-y-auto z-10">
              <div className="flex items-center justify-center">
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
                  onClick={() => setPrivacyModalOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}

        {legalModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Aviso Legal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                tellus sed augue semper porta.
              </p>
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600"
                onClick={() => setLegalModalOpen(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
