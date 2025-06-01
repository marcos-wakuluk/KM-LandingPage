import React from "react";
import { Title, Text, Group, Stack, Divider } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCookieBite, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const APP_NAME = "KM PRO FITNESS";

const PrivacyPolicy = () => (
  <Stack gap="md">
    <Group>
      <InformationCircleIcon style={{ width: 24, height: 24, color: "#228be6" }} />
      <Title order={4}>Tu privacidad es nuestra prioridad</Title>
    </Group>
    <Text>
      En <b>{APP_NAME}</b>, tu confianza es fundamental. Protegemos tu información personal y la usamos solo para
      mejorar tu experiencia y brindarte nuestros servicios de manera segura y personalizada.
    </Text>

    <Divider label="Consentimiento" />

    <Text>
      Nunca venderemos, alquilaremos ni compartiremos tu información personal con terceros sin tu consentimiento
      explícito. Solo colaboramos con proveedores de confianza para procesar pagos o gestionar pedidos, garantizando
      siempre la seguridad de tus datos.
    </Text>

    <Divider label="Comunicación y Marketing" />

    <Text>
      Si compras o te registras en <b>{APP_NAME}</b>, podremos enviarte novedades, ofertas y actualizaciones relevantes.
      Puedes darte de baja de nuestras comunicaciones en cualquier momento desde tu cuenta o los enlaces en nuestros
      correos.
    </Text>

    <Divider
      label={
        <Group gap={4}>
          <FontAwesomeIcon icon={faCookieBite} />
          Uso de Cookies
        </Group>
      }
    />

    <Text>
      Utilizamos cookies para personalizar tu experiencia y analizar el uso del sitio. Puedes gestionar tus preferencias
      de cookies desde la configuración de tu navegador. Desactivar cookies puede limitar algunas funcionalidades de{" "}
      <b>{APP_NAME}</b>.
    </Text>

    <Divider label="Publicidad y Remarketing" />

    <Text>
      Usamos servicios de remarketing, como <FontAwesomeIcon icon={faGoogle} /> Google Ads, para mostrarte anuncios
      relevantes según tus visitas previas a <b>{APP_NAME}</b>. Puedes ajustar tus preferencias de anuncios en la
      configuración de Google o desactivar la publicidad personalizada.
    </Text>

    <Divider
      label={
        <Group gap={4}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          Enlaces Externos
        </Group>
      }
    />

    <Text>
      Nuestro sitio puede contener enlaces a páginas de terceros. <b>{APP_NAME}</b> no se responsabiliza por las
      políticas de privacidad de estos sitios. Te recomendamos revisar sus políticas antes de proporcionar cualquier
      información personal.
    </Text>

    <Divider label="Acceso y Modificación de Datos" />

    <Text>
      Puedes solicitar acceso, corrección o eliminación de tus datos personales contactándonos. Para proteger tu
      privacidad, podríamos requerir verificación de identidad antes de procesar tu solicitud.
    </Text>

    <Divider
      label={
        <Group gap={4}>
          <FontAwesomeIcon icon={faEnvelope} />
          Contacto
        </Group>
      }
    />

    <Text>
      ¿Tienes preguntas sobre nuestra política de privacidad o el uso de tus datos? Escríbenos a{" "}
      <a href="mailto:soporte@km-pro-fitness.com">soporte@km-pro-fitness.com</a> y nuestro equipo te ayudará con gusto.
    </Text>
  </Stack>
);

export default PrivacyPolicy;
