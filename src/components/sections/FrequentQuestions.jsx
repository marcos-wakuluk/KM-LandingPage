import React, { useState } from "react";
import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";

const Questions = [
  {
    question: "¿En que nos diferenciamos de otros programas?",
    response:
      "Resultados, profesionalismo, eficiencia, eficacia, experiencia en carne propia, atención personalizada y acompañamiento son puntos clave en los que nos sentimos muy identificados. Como integrante del team de kmprofitness aprenderás a comer y entrenar de manera óptima para promover los cambios que tu salud necesita, para ello tendrás un equipo de profesionales a tu disposición diariamente para brindarte la ayuda necesaria; evaluaremos la ejecución de los ejercicios y lo que comes día a día si crees necesario.",
  },
  {
    question: "¿Como funciona?",
    response:
      "Después de realizar el pago y proporcionar tus datos, te brindaremos acceso exclusivo a nuestra aplicación, donde encontrarás una sección llamada Primer Paso. Aquí, tendrás a tu disposición una ficha técnica para completar con tus datos personales. Este paso es crucial, ya que nos permitirá conocer todo lo necesario sobre ti para personalizar tu programa fitness de manera única. Este proceso de recopilación de información tiene una estimación de 4 días hábiles. Una vez que hayamos elaborado cuidadosamente tus planificaciones, podrás visualizarlas directamente en la pantalla principal (Home) de la aplicación desde tu dispositivo móvil. Aquí, encontrarás un enlace directo que te conectará con tu entrenador o nutricionista asignado para resolver cualquier duda que pueda surgir durante tu viaje hacia la salud y la forma física. Nuestra meta es brindarte una experiencia personalizada, eficiente y respaldada por profesionales, asegurándonos de que cada paso que tomes te acerque a tus objetivos de bienestar. ¡Estamos aquí para guiarte en cada paso del camino!",
  },
  {
    question: "¿Cómo recibo mi programa?",
    response:
      "Tardamos 4 días hábiles una vez que llenas el cuestionario con todos tus datos, para acceder al programa tenes que entrar en la app la cual te llega por email al inscribirte.",
  },
  {
    question: "¿Es este un programa de suscripción?",
    response:
      "Sí, elegí estructurarlo de esta manera para asegurar que puedas mantener y avanzar en tu progreso, ya que el mantenimiento es esencial. Ofrecemos la flexibilidad de una suscripción mensual, lo que implica actualizaciones regulares en tus programas de entrenamiento y nutrición, diseñados específicamente para ti según el plan seleccionado. Además, contarás con mi apoyo constante y el respaldo de mi equipo a lo largo de tu trayecto.",
  },
  {
    question: "¿Cómo puedo cancelar mi suscripción?",
    response:
      " Para cancelar tu suscripción, simplemente envía un correo electrónico con al menos 7 días de antelación a la fecha de cobro. Es importante tener en cuenta que el periodo mínimo de permanencia es de 3 meses, ya que este tiempo es esencial para lograr un progreso significativo. Ten en cuenta que al cancelar, perderás el acceso tanto a la aplicación como a toda la ayuda con nuestros profesionales. Nuestro objetivo es asegurar un compromiso significativo para optimizar tus resultados.",
  },
  {
    question: "¿Para quien esta creado?",
    response:
      "Nuestro enfoque único se adapta a una variedad de audiencias: desde aquellos que dan sus primeros pasos en el mundo del fitness hasta deportistas ávidos que buscan llevar su rendimiento al siguiente nivel. Este programa no tiene límites de género ni restricciones de edad; es para hombres y mujeres de todas las edadesPara aquellos que dan sus primeros pasos, te brindamos una introducción amigable y personalizada al mundo del fitness. Si eres un deportista en busca de mejorar tu rendimiento, nuestras estrategias personalizadas te llevarán a nuevas alturas. Imagina un programa diseñado no solo para obtener resultados, sino para hacerlo de manera sostenible y adaptada a tu estilo de vida. No importa si eres principiante o experimentado, si buscas mejorar tu forma física o alcanzar metas deportivas específicas, nuestro enfoque integral se ajusta a tus necesidades. No esperes más para unirte a nuestra comunidad de transformación. ¡Eleva tu bienestar, desata tu potencial y descubre lo que realmente significa vivir en tu mejor versión! Este programa es para todos, ¡y eso incluye a TI!",
  },
  {
    question: "Soy nuevo en el gimnasio, ¿es bueno para principiantes?",
    response:
      "Si eres nuevo en el gimnasio, ¡llegaste al lugar perfecto! Nuestros entrenamientos están diseñados para adaptarse completamente a ti y a tus objetivos, especialmente si estás dando tus primeros pasos en el mundo del fitness. Te proporcionaremos un programa personalizado que se ajusta a tu nivel de condición física actual. No te preocupes por elegir pesas, te guiaremos para seleccionar las adecuadas y te ayudaremos a aumentar gradualmente la intensidad. Con nosotros, no solo estarás en buenas manos, sino que también maximizarás tu tiempo y evitas gastos innecesarios. ¡Bienvenido a una nueva etapa en tu viaje hacia la salud y la forma física!",
  },
  {
    question: "¿Funciona el asesoramiento?",
    response:
      "Si, Descubre la eficacia de nuestro asesoramiento fitness consultando nuestros perfiles, donde hemos cosechado más de 3000 resultados en estos 7 años de dedicación. Te garantizamos que, al seguir tus planificaciones y aprovechar la experiencia de nuestros profesionales, experimentarás resultados constantes. Confía en nuestro historial de éxito y haz de tu viaje fitness una experiencia transformadora. ¡Los resultados hablan por sí mismos!",
  },
  {
    question: "¿Como se realizan los chequeos mensuales?",
    response:
      "Dentro de la app kmpro vas a encontrar un apartado en donde podrás dejaros tus medidas, peso e imágenes corporales. Estos datos van a conservarse y veremos a largo plazo tus progresos. También te dejaremos una devolución y aconsejaremos.",
  },
];

const FrequentQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const togglePregunta = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex bg-background justify-center items-center">
      <div className="w-2/3 bg-black bg-opacity-50 p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Preguntas frecuentes:
        </h2>
        <div className="overflow-hidden border border-blue-500 rounded-lg">
          <table className="w-full">
            <tbody>
              {Questions.map((question, index) => (
                <tr key={index} className="border-b border-blue-500">
                  <td className="p-4">
                    <button
                      className="flex items-center text-white focus:outline-none"
                      onClick={() => togglePregunta(index)}
                    >
                      <span className="mr-2">
                        {openQuestion === index ? (
                          <ChevronDoubleUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDoubleDownIcon className="w-5 h-5" />
                        )}
                      </span>
                      {question.question}
                    </button>
                    <p
                      className={`mt-2 text-white overflow-hidden ${openQuestion === index ? "max-h-full" : "max-h-0"
                        }`}
                    >
                      {question.response}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
