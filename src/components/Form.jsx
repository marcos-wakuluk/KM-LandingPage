import React, { useEffect, useState } from "react";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Legal from "./Legal";
import { Countries } from "../utils/Constants";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  country: "",
  region: "",
  privacyPolicies: false,
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  useEffect(() => {
    initMercadoPago("TEST-f12eaf28-149e-4e77-8664-6bb2783ff29c", {
      locale: "es-AR",
    });
  }, []);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3100/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("🚀 ~ handleSubmit ~ response:", response);
      if (response.ok) {
        alert("Email enviado");
        setFormData(initialState);
      } else {
        alert(
          "Ocurrio un error al enviar el email de recuperacion de contraseña"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-black">
        <img
          src="/assets/KM-white.png"
          className="mt-10"
          style={{ display: "inline", width: "10%" }}
          alt=""
        />
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
                <label
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setPrivacyModalOpen(true)}
                >
                  Política de Privacidad{" "}
                </label>
                y el{" "}
                <label
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setLegalModalOpen(true)}
                >
                  Aviso Legal
                </label>
                .
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
        <Wallet initialization={{ preferenceId: "<PREFERENCE_ID>" }} />

        {privacyModalOpen && (
          <PrivacyPolicy onClose={handleClosePrivacyModal} />
        )}

        {legalModalOpen && <Legal onClose={handleCloseLegalModal} />}
      </div>
    </>
  );
};

export default Form;
