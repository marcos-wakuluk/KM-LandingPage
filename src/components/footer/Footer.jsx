import React from "react";
import { Container, Grid, Group, Image, Text, Title, Center, rem } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { KMWhite } from "../../utils/Constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", paddingTop: rem(32), paddingBottom: rem(32) }}>
      <Container size="xl">
        <Grid align="center" justify="space-between">
          {/* Contact Info */}
          <Grid.Col span={6} lg={6}>
            <Center>
              <div>
                <Title order={3} style={{ fontSize: rem(24), textTransform: "capitalize" }}>
                  contacto
                </Title>
                <Group mt="md" justify="center">
                  <a
                    href="https://wa.me/message/EH4X57L5P2LPF1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ marginRight: rem(16) }} />
                  </a>
                  <a
                    href="https://www.facebook.com/Kmprofitness"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" style={{ marginRight: rem(16) }} />
                  </a>
                  <a
                    href="https://www.instagram.com/kmprofitness"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </Group>
              </div>
            </Center>
          </Grid.Col>

          {/* Logo & Copyright */}
          <Grid.Col span={6} lg={6}>
            <Center style={{ flexDirection: "column" }}>
              <Image src={KMWhite} alt="Logo KM" w="33%" fit="contain" />
              <Text size="sm" mt="md" ta="center">
                &copy; KM Pro Fitness {currentYear} - Todos los derechos reservados.
              </Text>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
