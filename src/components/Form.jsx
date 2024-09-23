import React, { useEffect, useState } from "react";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Legal from "./Legal";
import { Countries, Plans } from "../utils/Constants";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  country: "Argentina",
  privacyPolicies: false,
};

const Form = () => {
  const { planName } = useParams();
  const selectedPlan = Plans[planName];
  const [formData, setFormData] = useState(initialState);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");

  useEffect(() => {
    const mercadoPagoKey = process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY;

    initMercadoPago(mercadoPagoKey, {
      locale: "es-AR",
    });

    const fetchPreferenceId = async () => {
      try {
        const response = await fetch("http://localhost:3100/create-preference", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: [{ title: selectedPlan.title, unit_price: selectedPlan.unit_price, quantity: 1 }] }),
        });

        const data = await response.json();
        setPreferenceId(data.data.id);
      } catch (error) {
        console.error("Error fetching preferenceId:", error);
      }
    };

    fetchPreferenceId();
  }, [selectedPlan]);

  const isFormValid = () => {
    return formData.email && formData.emailConfirm && formData.email === formData.emailConfirm && formData.privacyPolicies && !emailError && !confirmEmailError;
  };

  const handleClosePrivacyModal = () => {
    setPrivacyModalOpen(false);
  };

  const handleCloseLegalModal = () => {
    setLegalModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    if (name === "email") {
      validateEmail(value);
    }

    if (name === "emailConfirm") {
      validateConfirmEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Por favor, introduce un email válido.");
    } else {
      setEmailError("");
    }
  };

  const validateConfirmEmail = (emailConfirm) => {
    if (emailConfirm !== formData.email) {
      setConfirmEmailError("Los emails no coinciden.");
    } else {
      setConfirmEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return; // Si el formulario no es válido, no se envía
    }

    try {
      const response = await fetch("http://localhost:3100/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email enviado");
        setFormData(initialState);
      } else {
        alert("Ocurrió un error al enviar el email.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isPaymentButtonDisabled = !isFormValid();

  return (
    <>
      <div className="bg-black">
        <img src="/assets/KM-white.png" className="mt-10" style={{ display: "inline", width: "10%" }} alt="" />
      </div>
      <div className="bg-black h-12"></div>
      <div className="w-2/3 mx-auto mt-6 divide-y">
        <h2 className="text-2xl font-bold mb-4">Detalles de contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2 mb-4 mt-6">
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
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${emailError ? "border-red-500" : ""}`}
                required
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>} {/* Mensaje de error */}
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="emailConfirm" className="block font-semibold mb-1">
                Confirmar email:
              </label>
              <input
                type="email"
                id="emailConfirm"
                name="emailConfirm"
                value={formData.emailConfirm}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${confirmEmailError ? "border-red-500" : ""}`}
                required
              />
              {confirmEmailError && <p className="text-red-500 text-sm">{confirmEmailError}</p>} {/* Mensaje de error */}
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
                {Countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
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
                He leído, entendido y aceptado la{" "}
                <span className="text-blue-500 cursor-pointer" onClick={() => setPrivacyModalOpen(true)}>
                  Política de Privacidad{" "}
                </span>
                y el{" "}
                <span className="text-blue-500 cursor-pointer" onClick={() => setLegalModalOpen(true)}>
                  Aviso Legal
                </span>
                .
              </label>
            </div>
          </div>
        </form>

        {preferenceId && !isPaymentButtonDisabled && <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: "smart_option" } }} />}

        {privacyModalOpen && <PrivacyPolicy onClose={handleClosePrivacyModal} />}
        {legalModalOpen && <Legal onClose={handleCloseLegalModal} />}
      </div>
    </>
  );
};

export default Form;
