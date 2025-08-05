import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const countryCodes = [
  { code: "+52", label: "🇲🇽 México" },
  { code: "+1", label: "🇺🇸 USA" },
  { code: "+57", label: "🇨🇴 Colombia" },
  { code: "+34", label: "🇪🇸 España" },
  // Add more countries if needed
];
// Add this at the top of your component file
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


const ContactSection = () => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+52");
  const [userNumber, setUserNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const fullUserNumber = countryCode.replace("+", "") + userNumber;
    const phone = "52XXXXXXXXXX"; // Your number
    const text = `Hola, soy ${name}. Mi número de WhatsApp es ${countryCode} ${userNumber}. Me gustaría hablar sobre: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // Google Ads Conversion Tracking
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17323172301/fi4_CKzpvewaEM3DqsRA'
      });
    }

    //AW-17323172301
    window.open(url, "_blank");
  };

  return (
    <> <Helmet>
      <title>Contacto | Creciendo Psicología</title>
      <meta
        name="description"
        content="¿Quieres agendar una sesión de terapia psicológica? Contáctanos por WhatsApp o llena el formulario. Atención cercana, confidencial y sin compromiso inicial."
      />
      <meta property="og:title" content="Contacto | Creciendo Psicología" />
      <meta
        property="og:description"
        content="Escríbenos por WhatsApp o deja tus datos en el formulario. Atención psicológica desde casa con un enfoque empático y profesional."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.creciendopsicologia.com/contacto" />
      <meta property="og:image" content="https://www.creciendopsicologia.com/og-contacto.jpg" />
      <link rel="canonical" href="https://www.creciendopsicologia.com/contacto" />
    </Helmet>
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">

          <h1>¿Te gustaría hablar con un psicólogo?</h1>
          <p>Puedes escribirme por WhatsApp para contarme brevemente tu motivo de consulta. La primera conversación es informativa, sin compromiso y sin costo.</p>

          <p> 💬 Haz clic en el botón o completa el formulario para enviarme un mensaje directo por WhatsApp. Estoy aquí para ayudarte.</p>



          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendToWhatsApp();
            }}
            className="mt-8 space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-lg p-3"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border border-gray-300 rounded-lg p-3"
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.label} ({country.code})
                  </option>
                ))}
              </select>

              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg p-3"
                placeholder="Tu número (solo dígitos)"
                value={userNumber}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10); // Limit to 10 digits
                  setUserNumber(digitsOnly);
                }}
                required
              />
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-lg p-3"
              rows={4}
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp logo
                  alt="WhatsApp logo"
                  className="h-5 w-5" // Adjust size of the logo
                />
                Enviar por WhatsApp
              </button>
            </div>
          </form>
          <p>Tu información está protegida. La comunicación es completamente privada y confidencial.</p>
        </div>
      </section></>
  );
};

export default ContactSection;
