import React, { useEffect, useRef, useState } from "react";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Legal from "./Legal";
import { useParams } from "react-router-dom";
import { Grid, Stack, TextInput, Checkbox, Button, Modal, Title } from "@mantine/core";
import PackageSelector from "../PackageSelector";
import { planUrls } from "../utils/Constants";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  country: "Argentina",
  privacyPolicies: false,
  selectedPlan: "",
};

const initialErrors = {
  email: "",
  emailConfirm: "",
};

const Form = () => {
  const { planName } = useParams();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState(null);
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

    // Lógica de validación
    validateField(name, newValue);
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

  const handleButtonClick = () => {
    if (isFormValid()) {
      const planUrl = planUrls[planName]?.[selectedMonths];
      if (planUrl) {
        window.location.href = planUrl;
      } else {
        alert("No se ha encontrado un plan válido.");
      }
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "20px" }}>
        <img src="/assets/KM-white.png" style={{ display: "inline", width: "10%" }} alt="" />
      </div>
      <div style={{ height: "12px", backgroundColor: "black" }}></div>

      <div style={{ width: "80%", margin: "40px auto" }}>
        <Title order={2} style={{ marginBottom: "20px" }}>
          Detalles de contacto
        </Title>

        <form>
          <Grid>
            <Grid.Col xs={12} md={6}>
              <Stack spacing="md">
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
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
                  radius="md"
                  size="md"
                  error={errors.emailConfirm}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <PackageSelector onSelect={handlePlanSelect} />
            </Grid.Col>
          </Grid>

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

            <Button ref={paymentButtonRef} disabled={!isFormValid()} onClick={handleButtonClick}>
              Suscribirme
            </Button>
          </Stack>
        </form>

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
