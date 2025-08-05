import React from "react";
import { Helmet } from 'react-helmet-async';
const Autoestima = () => {
  return (<> <Helmet>
    <title>¿Qué es la autoestima y cómo fortalecerla? | Creciendo Psicología</title>
    <meta
      name="description"
      content="Comprende qué es la autoestima, cómo se forma y aprende herramientas prácticas desde la psicología para fortalecerla."
    />
  </Helmet>
    <article className="max-w-3xl mx-auto px-6 py-36 text-gray-800 bg-white shadow-xl rounded-2xl">
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-extrabold text-green-700 mb-3">
          ¿Qué es la autoestima y cómo fortalecerla?
        </h1>
        <p className="text-gray-600 text-lg">
          Comprendiendo la autoestima desde una perspectiva psicológica y práctica
        </p>
      </header>

      <section className="space-y-8 leading-relaxed text-lg">
        <p>
          La autoestima no es simplemente "sentirse bien con uno mismo". Es la forma en que evaluamos nuestro valor personal, y está profundamente influenciada por nuestras experiencias, creencias y relaciones.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">¿De dónde viene la autoestima?</h2>
        <p>
          Nuestra autoestima comienza a formarse en la infancia, influenciada por la forma en que nos trataron figuras significativas. Las palabras, acciones, comparaciones y expectativas que recibimos dejan una huella profunda en cómo nos percibimos.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">Señales de una autoestima frágil</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Dificultad para aceptar cumplidos.</li>
          <li>Compararse constantemente con los demás.</li>
          <li>Buscar aprobación externa para sentirse valioso/a.</li>
          <li>Miedo intenso al rechazo o al fracaso.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-800">¿Cómo fortalecerla?</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><span className="font-medium">Identifica creencias limitantes:</span> muchos pensamientos negativos se arrastran desde el pasado.</li>
          <li><span className="font-medium">Cuida tu diálogo interno:</span> háblate como lo harías con alguien que amas.</li>
          <li><span className="font-medium">Celebra pequeños logros:</span> la autoestima se construye paso a paso.</li>
          <li><span className="font-medium">Rodeate de personas que te valoren:</span> las relaciones nutren o desgastan.</li>
        </ul>

        <p className="mt-8 italic text-gray-600 border-l-4 border-green-300 pl-4">
          Fortalecer la autoestima no es un destino, sino un proceso constante de conciencia y práctica. Y no hay nada de malo en buscar apoyo para hacerlo.
        </p>

        <div className="mt-12 bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2 text-green-800">¿Te gustaría hablar con un psicólogo?</h3>
          <p className="mb-4">La primera conversación es informativa, sin compromiso y sin costo. Puedes contactarme por WhatsApp.</p>
          <a
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
          <p>Publicado por <span className="font-semibold text-green-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
        </footer>
      </section>
    </article></>
  );
};

export default Autoestima;
