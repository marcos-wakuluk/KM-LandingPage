import React, { useState } from "react";

const Legal = () => {
  const [showModal] = useState(true);

  if (!showModal) {
    return null;
  }

  return (
    <div className="inset-0 flex items-center justify-center z-50 text-left">
      <div className="absolute inset-0 bg-opacity-80"></div>
      <div className="bg-white p-4 rounded-md w-4/5 max-h-[80vh] overflow-y-auto z-10">
        <div className="items-center justify-center">
          <h1 className="text-2xl font-semibold mb-4">Aviso Legal</h1>
        </div>
        <h3 className="text-lg font-semibold mb-2">AVISO LEGAL IMPORTANTE</h3>
        <h3 className="text-lg font-semibold mb-2">RIESGOS DEL USO DEL PRODUCTO</h3>
        <p>
          El contenido de este sitio web no reemplaza a la atención médica ni al diagnóstico directo, personal y
          profesional. Ninguno de los planes de comidas o programas de ejercicios debe realizarse o usarse de otra
          manera sin la autorización previa de su médico o proveedor de atención médica. La información contenida en
          este documento no tiene la intención de proporcionar consejos específicos de salud física o mental, o
          cualquier otro consejo, para ninguna persona o empresa y no se debe confiar en ese aspecto. No somos
          profesionales médicos y nada en este sitio web debe malinterpretarse en el sentido contrario.
        </p>
        <p>
          Puede haber riesgos asociados con la participación en actividades mencionadas en nuestro sitio para personas
          con problemas de salud o con afecciones físicas o mentales preexistentes. Debido a que existen estos riesgos,
          no participará en ningún plan de comidas disponible de nosotros si tiene mala salud o tiene una condición
          mental o física preexistente. Si elige participar en estos riesgos, lo hace por su propia voluntad y acuerdo,
          asumiendo a sabiendas y voluntariamente todos los riesgos asociados con tales actividades dietéticas. Estos
          riesgos también pueden existir para aquellos que actualmente gozan de buena salud en este momento.
        </p>
        <p>
          Como con cualquier programa de ejercicios, usted asume ciertos riesgos para su salud y seguridad. Cualquier
          forma de programa de ejercicios puede causar lesiones, y nuestros programas no son una excepción. Es posible
          que se lastime haciendo los ejercicios en su programa, especialmente si los ejecuta con una mala forma o
          técnica. Aunque se incluye una instrucción completa en el formulario para cada ejercicio.
        </p>
        <p>
          Tenga en cuenta que nuestros programas (como cualquier otro programa de ejercicios) implican un riesgo de
          lesión. Si elige participar en estos riesgos, lo hace por su propia voluntad y acuerdo, asumiendo a sabiendas
          y voluntariamente todos los riesgos asociados con tales actividades de ejercicio. Estos riesgos también pueden
          existir para aquellos que actualmente gozan de buena salud en este momento.
        </p>
        <p>
          No somos médicos. Nuestros consejos, ya sea en nuestro sitio web, en nuestro plan de comidas, en nuestro
          programa de ejercicios o por correo electrónico, no pretende sustituir el asesoramiento médico. Debe consultar
          a su médico antes de comenzar CUALQUIER plan de comidas o programa de ejercicios, sin excepciones. Está
          utilizando nuestros planes, programas de entrenamientos y tutorías bajo su propio riesgo y no somos
          responsables de ninguna lesión o problema de salud que pueda experimentar o incluso la muerte como resultado
          del uso de nuestros programas.
        </p>
        <p>
          Se debe aclarar que no somos responsables de ninguna lesión o problema de salud que pueda experimentar o
          incluso la muerte como resultado del uso de cualquiera de nuestros productos o servicios.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">RESULTADOS GENERALMENTE ESPERADOS</h3>
        <p>
          Aunque nuestros productos y servicios están destinados a ser implementados en su totalidad, a veces no lo son,
          lo que podría resultar en una falta de progreso / resultados para el usuario. Si implementa correctamente
          nuestros productos y servicios, debería ver resultados satisfactorios, sin embargo, debe aclararse que incluso
          cuando los consumidores implementen todos nuestros productos o servicios, aun así es posible que no obtengan
          los resultados que podrían haber esperado y también es posible que no pierdan grasa ni ganan músculo ni tengan
          ningún resultado positivo de ningún tipo.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">RENUNCIA DE RESPONSABILIDAD TESTIMONIAL</h3>
        <p>
          Todas las transformaciones y testimonios son reales. Sin embargo, se aclara que estos testimonios no
          representan resultados típicos con nuestros planes de comidas y programas de entrenamiento. Están diseñados
          como una vitrina de lo que las personas más motivadas y dedicadas pueden lograr siguiendo nuestros planes de
          entrenamiento y plan de comidas personalizados. Tus resultados pueden variar y es posible que no obtengas los
          mismos resultados en comparación con otra persona cuando utiliza nuestros servicios debido a diferencias en su
          historial de ejercicio individual, genética y motivación / dedicación personal. Los resultados finales que
          obtenga dependerán del individuo y de cuanto esfuerzo ponga.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">
          INFORMACIÓN DE FACTURACIÓN DE LA SUSCRIPCIÓN RECURRENTE IMPORTANTE
        </h3>
        <p>
          Si compra nuestro programa, se le cobrará automáticamente cada periodo y continuará recibiendo nuevos planes
          de comidas y programas de entrenamiento actualizados durante el tiempo que elija seguir siendo cliente.
        </p>
        <p>
          El mínimo de permanencia es de 3 meses, ya que buscamos personas comprometidas que sean conscientes de que en
          1 sólo mes los resultados no van a ser tan notables. La idea es lograr tanto un cambio de hábitos como
          físicos, y para eso se requiere voluntad y compromiso.
        </p>
        <p>
          Si tiene alguna pregunta acerca de este proceso, ¡envíenos un email! Puede ponerse en contacto con nuestro
          equipo de atención al cliente en <strong>admin@nicomaggifitness.com</strong> y estaremos encantados de
          responder a cualquier consulta que pueda tener.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">POLÍTICA DE CANCELACIÓN Y REEMBOLSO</h3>
        <p>
          Puede cancelar su suscripción en cualquier momento. Las tarifas ya cobradas no son reembolsables, pero la
          cancelación se procesará para el siguiente ciclo de facturación. Recuerde que el compromiso mínimo es de 3
          meses.
        </p>
        <h3 className="text-lg font-semibold mb-2 mt-6">POLÍTICA DE PRIVACIDAD</h3>
        <p>
          Para más detalles sobre cómo tratamos sus datos personales, consulte nuestra{" "}
          <a href="/privacy-policy">Política de Privacidad</a>.
        </p>
      </div>
    </div>
  );
};

export default Legal;
