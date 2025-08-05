import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="text-center">
        <p>Psic. Israel Juárez · Cédula profesional 13693414 · México
          &copy; {new Date().getFullYear()} Derechos reservados Creciendo Psicología.
        </p><a
  href="/aviso-de-privacidad"
  className="text-sm text-blue-600 hover:underline"
>
  Aviso de privacidad
</a>

      </div>
    </footer>
  );
};

export default Footer;
