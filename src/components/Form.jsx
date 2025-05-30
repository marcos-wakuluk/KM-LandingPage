import React, { useEffect, useRef, useState } from "react";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Legal from "./Legal";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid, Stack, TextInput, Checkbox, Button, Modal, Text, Container, Title } from "@mantine/core";
import PackageSelector from "../PackageSelector";
import { KMWhite, planUrls } from "../utils/Constants";

const URL = process.env.REACT_APP_URL_API || "";

const initialState = {
  email: "",
  emailConfirm: "",
  privacyPolicies: false,
  selectedPlan: "",
};

const initialErrors = {
  email: "",
  emailConfirm: "",
};

const Form = () => {
  const { planName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const paymentButtonRef = useRef(null);

  useEffect(() => {
    const loadMercadoPago = () => {
      const script = document.createElement("script");
      script.src = "https://secure.mlstatic.com/mptools/render.js";
      script.async = true;
      paymentButtonRef.current.appendChild(script);
    };

    loadMercadoPago();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");

    if (status === "success") {
      setPaymentStatus("success");
      setShowConfirmation(true);
    } else if (status === "failure") {
      setPaymentStatus("failure");
      setShowConfirmation(true);
    }
  }, [location.search]);

  useEffect(() => {
    if (!formData.email) {
      const storedEmail = localStorage.getItem("km_email");
      if (storedEmail) {
        setFormData((prevData) => ({ ...prevData, email: storedEmail }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFormValid = () => {
    return (
      formData.email &&
      formData.emailConfirm &&
      formData.email === formData.emailConfirm &&
      formData.privacyPolicies &&
      !errors.email &&
      !errors.emailConfirm &&
      selectedMonths
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value) ? "" : "Por favor, introduce un email válido.",
        }));
        break;
      case "emailConfirm":
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailConfirm: value === formData.email ? "" : "Los emails no coinciden.",
        }));
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handlePlanSelect = (plan) => {
    setSelectedMonths(plan);
    setFormData((prevData) => ({
      ...prevData,
      selectedPlan: plan,
    }));
  };

  const handlePaymentButtonClick = async () => {
    if (!isFormValid()) {
      return;
    }

    try {
      const response = await fetch(`${URL}/check-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        setErrorMessage(data.message);
        setErrorModalOpen(true);
        return;
      }

      localStorage.setItem("km_email", formData.email);

      const planUrl = planUrls[planName]?.[selectedMonths];
      if (planUrl) {
        window.location.href = planUrl;
      } else {
        alert("No se ha encontrado un plan válido.");
      }
    } catch (error) {
      console.error("Error al verificar el email:", error);
      alert("Hubo un problema al verificar el email. Por favor, inténtelo de nuevo.");
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get("email");

    if (email) {
      fetch(`${URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then(() => {
          setShowConfirmation(true);
          setFormData((prevData) => ({ ...prevData, email }));
          localStorage.removeItem("km_email");
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
        navigate("/");
        localStorage.removeItem("km_email");
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [showConfirmation, navigate]);

  useEffect(() => {
    if (paymentStatus === "success") {
      const emailToSend = formData.email || localStorage.getItem("km_email");
      if (emailToSend) {
        fetch(`${URL}/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailToSend }),
        }).catch(console.error);
        localStorage.removeItem("km_email");
      }
    }
  }, [paymentStatus, formData.email]);

  return (
    <>
      <div className="bg-black py-5 flex justify-center">
        <img
          src={KMWhite}
          className="w-1/5 md:w-1/12"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
      <Container size="lg" className="flex flex-col justify-center">
        <div className="w-full max-w-screen-xl mx-auto my-10 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
          {!showConfirmation ? (
            <form>
              <Grid justify="center">
                <Grid.Col span={{ base: 10, sm: 8, lg: 12 }}>
                  <Stack spacing="md">
                    <TextInput
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      radius="md"
                      size="md"
                      error={errors.email}
                    />

                    <TextInput
                      type="email"
                      id="emailConfirm"
                      name="emailConfirm"
                      label="Confirmar email"
                      value={formData.emailConfirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      radius="md"
                      size="md"
                      error={errors.emailConfirm}
                    />
                  </Stack>
                  <PackageSelector onSelect={handlePlanSelect} />
                  <Stack spacing="md" mt="md">
                    <Checkbox
                      id="privacyPolicies"
                      name="privacyPolicies"
                      label={
                        <>
                          He leído, entendido y aceptado la{" "}
                          <button
                            type="button"
                            style={{ color: "blue", cursor: "pointer", background: "none", border: "none", padding: 0 }}
                            onClick={() => setPrivacyModalOpen(true)}
                          >
                            Política de Privacidad
                          </button>{" "}
                          y el{" "}
                          <button
                            type="button"
                            style={{ color: "blue", cursor: "pointer", background: "none", border: "none", padding: 0 }}
                            onClick={() => setLegalModalOpen(true)}
                          >
                            Aviso Legal
                          </button>
                          .
                        </>
                      }
                      checked={formData.privacyPolicies}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      className="w-80"
                      ref={paymentButtonRef}
                      disabled={!isFormValid()}
                      onClick={handlePaymentButtonClick}
                    >
                      Suscribirme
                    </Button>
                  </Stack>
                </Grid.Col>
              </Grid>
            </form>
          ) : (
            <Modal opened={showConfirmation} onClose={() => setShowConfirmation(false)} centered size="md">
              {paymentStatus === "success" ? (
                <>
                  <Title order={2} color="teal">
                    ¡Bienvenido!
                  </Title>
                  <Text size="lg">
                    Se ha enviado un email a {formData.email} con los datos para ingresar a la app KM PRO FITNESS.
                  </Text>
                </>
              ) : (
                <>
                  <Title order={2} color="red">
                    Pago Rechazado
                  </Title>
                  <Text size="lg">El pago ha sido rechazado. Por favor, inténtelo de nuevo.</Text>
                </>
              )}
            </Modal>
          )}

          <Modal size="lg" opened={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} centered>
            <PrivacyPolicy />
          </Modal>

          <Modal size="lg" opened={legalModalOpen} onClose={() => setLegalModalOpen(false)} centered>
            <Legal />
          </Modal>

          <Modal
            size="md"
            opened={errorModalOpen}
            onClose={() => setErrorModalOpen(false)}
            centered
            title={
              <Title order={2} color="red">
                Error
              </Title>
            }
          >
            <Text size="lg">{errorMessage}</Text>
          </Modal>
        </div>
      </Container>
    </>
  );
};

export default Form;
