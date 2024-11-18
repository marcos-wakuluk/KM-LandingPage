import React, { useEffect, useRef, useState } from "react";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Legal from "./Legal";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Stack, TextInput, Checkbox, Button, Modal, Title, Paper, Text, Space } from "@mantine/core";
import PackageSelector from "../PackageSelector";
import { KMWhite, planUrls } from "../utils/Constants";

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
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleEmailButtonClick = () => {
    const emailParam = encodeURIComponent(formData.email);
    const currentPath = window.location.pathname;
    const newUrl = `${currentPath}?email=${emailParam}`;
    window.history.pushState({}, "", newUrl);

    if (!showConfirmation) {
      fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      })
        .then((response) => (response.ok ? response.json() : Promise.reject()))
        .then(() => setShowConfirmation(true))
        .catch(console.error);
    }
  };

  const handlePaymentButtonClick = () => {
    if (isFormValid()) {
      const planUrl = planUrls[planName]?.[selectedMonths];
      if (planUrl) {
        window.location.href = planUrl;
      } else {
        alert("No se ha encontrado un plan válido.");
      }
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get("email");

    if (email) {
      fetch("http://localhost:3000/send-email", {
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
        })
        .catch(console.error);
    }
  }, []);

  return (
    <>
      <div className="bg-black py-5 flex justify-center">
        <img src={KMWhite} className="w-1/5 md:w-1/12" alt="" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto my-10 px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        {!showConfirmation ? (
          <>
            <form>
              <Grid justify="center">
                <Grid.Col span={{ base: 10, sm: 6, lg: 3 }}>
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
                          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setPrivacyModalOpen(true)}>
                            Política de Privacidad
                          </span>{" "}
                          y el{" "}
                          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setLegalModalOpen(true)}>
                            Aviso Legal
                          </span>
                          .
                        </>
                      }
                      checked={formData.privacyPolicies}
                      onChange={handleChange}
                      required
                    />
                    <Button className="w-80" ref={paymentButtonRef} disabled={!isFormValid()} onClick={handlePaymentButtonClick}>
                      Suscribirme
                    </Button>
                    <Button disabled={!formData.email} onClick={handleEmailButtonClick}>
                      Probar Envío de Email
                    </Button>
                  </Stack>
                </Grid.Col>
              </Grid>
            </form>
          </>
        ) : (
          <Paper padding="md" style={{ textAlign: "center", marginTop: "20px" }}>
            <Title order={2} color="teal">
              ¡Bienvenido!
            </Title>
            <Text size="lg">Se ha enviado un email a {formData.email}.</Text>
          </Paper>
        )}

        <Modal opened={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} title="Política de Privacidad">
          <PrivacyPolicy />
        </Modal>

        <Modal opened={legalModalOpen} onClose={() => setLegalModalOpen(false)} title="Aviso Legal">
          <Legal />
        </Modal>
      </div>
    </>
  );
};

export default Form;
