import React from "react";
import { Title, Text, Stack, Divider, Anchor } from "@mantine/core";

const Legal = () => (
  <Stack gap="md" p="md">
    <Title order={2} color="blue" mb="xs">
      Aviso Legal
    </Title>

    <Divider label="Aviso Legal Importante" />

    <Text>
      El contenido de este sitio web no reemplaza la atención médica ni el diagnóstico profesional. Ninguno de los
      planes de comidas o programas de ejercicios debe realizarse sin la autorización previa de tu médico o proveedor de
      atención médica. La información aquí contenida no pretende proporcionar consejos específicos de salud física o
      mental para ninguna persona o empresa. No somos profesionales médicos y nada en este sitio debe interpretarse como
      tal.
    </Text>

    <Divider label="Riesgos del Uso del Producto" />

    <Text>
      Participar en actividades mencionadas en nuestro sitio puede implicar riesgos, especialmente para personas con
      problemas de salud o condiciones preexistentes. Si eliges participar, lo haces bajo tu propia responsabilidad y
      asumiendo todos los riesgos asociados. Estos riesgos también pueden existir para quienes actualmente gozan de
      buena salud.
    </Text>
    <Text>
      Como en cualquier programa de ejercicios, existe riesgo de lesiones. Es posible que te lastimes si ejecutas los
      ejercicios con mala técnica. Aunque incluimos instrucciones detalladas, debes consultar a tu médico antes de
      comenzar cualquier plan de comidas o ejercicios.
    </Text>
    <Text>
      No somos responsables de ninguna lesión, problema de salud o incluso la muerte que pueda resultar del uso de
      nuestros programas, productos o servicios.
    </Text>

    <Divider label="Resultados Esperados" />

    <Text>
      Nuestros productos y servicios están diseñados para ser implementados en su totalidad, pero los resultados pueden
      variar según el esfuerzo, la genética y la dedicación personal. Incluso siguiendo todos los pasos, es posible que
      no obtengas los resultados esperados.
    </Text>
    <Text>
      Los testimonios presentados son reales, pero no representan resultados típicos. Tus resultados pueden variar.
    </Text>

    <Divider label="Facturación y Suscripción" />

    <Text>
      Si compras nuestro programa, se te cobrará automáticamente cada periodo y recibirás nuevos planes y programas
      mientras sigas siendo cliente. El compromiso mínimo es de 3 meses, ya que buscamos personas comprometidas con su
      cambio de hábitos y físicos.
    </Text>
    <Text>
      Si tienes preguntas sobre este proceso, puedes contactarnos en{" "}
      <Anchor href="mailto:soporte@km-pro-fitness.com" target="_blank" rel="noopener noreferrer">
        soporte@km-pro-fitness.com
      </Anchor>
      .
    </Text>

    <Divider label="Política de Cancelación y Reembolso" />

    <Text>
      Puedes cancelar tu suscripción en cualquier momento. Las tarifas ya cobradas no son reembolsables, pero la
      cancelación se aplicará al siguiente ciclo de facturación. Recuerda que el compromiso mínimo es de 3 meses.
    </Text>

    <Divider label="Política de Privacidad" />

    <Text>
      Para más detalles sobre cómo tratamos tus datos personales, consulta nuestra{" "}
      <Anchor href="/privacy-policy" target="_blank" rel="noopener noreferrer">
        Política de Privacidad
      </Anchor>
      .
    </Text>
  </Stack>
);

export default Legal;
