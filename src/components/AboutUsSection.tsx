// src/pages/Nosotros.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

const Nosotros = () => {
  return (
    <>
      <Helmet>
        <title>¿Quiénes somos? | Creciendo Psicología</title>
        <meta
          name="description"
          content="Conoce al equipo de Creciendo Psicología y nuestra visión terapéutica centrada en la evidencia y el bienestar humano."
        />
      </Helmet>

      <section className="py-24 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
            ¿Quiénes somos?
          </h1>

          <p className="text-lg leading-relaxed mb-6">
            En <strong>Creciendo Psicología</strong>, llevamos más de tres años brindando acompañamiento psicoterapéutico a personas que desean mejorar su bienestar emocional y calidad de vida. Nuestro enfoque integra la <strong>terapia cognitivo-conductual</strong> y la <strong>terapia humanista</strong>, lo que nos permite ofrecer un espacio flexible, empático y basado en evidencia científica.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            El responsable del proyecto es el psicólogo <strong>Psic. Israel Juárez Rodríguez</strong> (Cédula profesional: <strong>13693414</strong>), egresado de una universidad privada con incorporación a la <strong>Universidad Nacional Autónoma de México (UNAM)</strong>. Esta formación garantiza una base académica sólida y reconocida oficialmente por una de las instituciones más prestigiosas del país.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Nos especializamos en brindar <strong>atención cercana y personalizada</strong>, cuidando que cada persona se sienta escuchada, comprendida y acompañada con respeto. Nuestro propósito es ayudarte a encontrar nuevas formas de comprender tu historia, gestionar tus emociones y desarrollar herramientas para vivir con mayor equilibrio y plenitud.
          </p>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
