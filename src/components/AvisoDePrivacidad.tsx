// src/pages/AvisoDePrivacidad.tsx (o donde tengas tus rutas de páginas)

import React from 'react';

const AvisoDePrivacidad = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Aviso de Privacidad</h1>
      <p className="mb-4">
        <strong>Creciendo Psicología</strong>, con domicilio en México, y representado por el Psic. Juan Perez, con cédula profesional número <strong>XXXXXXXX</strong>, es responsable del uso y protección de sus datos personales.
      </p>
      <p className="mb-4">
        Los datos personales que proporcione (nombre, correo electrónico, teléfono, y cualquier otra información sensible relacionada con su bienestar emocional) serán utilizados exclusivamente para fines de contacto profesional, agendar sesiones, seguimiento terapéutico y proporcionar servicios psicológicos en línea.
      </p>
      <p className="mb-4">
        Sus datos no serán compartidos con terceros sin su consentimiento, salvo que lo exija alguna autoridad legal o judicial.
      </p>
      <p className="mb-4">
        Usted tiene derecho de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO), conforme a lo establecido en la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>. Para ejercer estos derechos, puede comunicarse al correo: <a href="mailto:juan.perez.psic@gmail.com" className="text-green-700 underline">juan.perez.psic@gmail.com</a> o al número <a href="tel:+52XXXXXXXXXX" className="text-green-700 underline">+52 XXX XXX XXXX</a>.
      </p>
      <p className="mb-4">
        Este aviso de privacidad puede actualizarse en el futuro. Cualquier cambio será notificado en este mismo sitio web.
      </p>
      <p className="text-sm text-gray-600">Última actualización: julio de 2025.</p>
    </div>
  );
};

export default AvisoDePrivacidad;
