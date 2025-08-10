import React from "react";
import "../styles.css";
import portada from "../assets/images/portada.webp";

const HomeSection = () => {
  return (
    <section
      id="home"
      alt="portada-Integralis-psicologia"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-opacity-100 bg-center bg-no-repeat px-4 pt-24 overflow-hidden rounded-xl animate-zoomIn"
      style={{ backgroundImage: `url(${portada})` }} // ✅ Usar la imagen importada
    >
      {/* Text content */}
      <div className="relative text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white animate-fadeIn">
          Bienvenido a Integralis Psicología
        </h1>
        <p className="mt-6 text-lg text-white animate-fadeInDelayed">
          Acompañándote en tu camino de crecimiento personal y bienestar emocional.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
