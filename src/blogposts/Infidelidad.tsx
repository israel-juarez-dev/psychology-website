import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, MessageOutlined,  QuestionCircleOutlined } from "@ant-design/icons";
import { Helmet } from 'react-helmet-async';

const Infidelidad = () => {
  return (
    <><Helmet>
    <title>Cómo enfrentar una infidelidad desde la psicología | Creciendo Psicología</title>
    <meta name="description" content="Reflexiones psicológicas sobre el proceso emocional después de una traición y cómo iniciar un proceso de sanación." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-800 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Cómo enfrentar una infidelidad desde la psicología
            </h1>
            <p className="text-green-100 text-lg md:text-xl opacity-90">
              Reflexiones psicológicas sobre el proceso emocional después de una traición
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Vivir una infidelidad puede ser una de las experiencias más dolorosas dentro de una relación de pareja. Más allá del hecho en sí, implica una ruptura de confianza, cuestionamientos sobre el valor propio y muchas veces una profunda confusión emocional.
            </p>
          </section>

          {/* Why it hurts section */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              {/* <className="text-red-500 text-2xl mr-3" /> */}
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Por qué duele tanto una infidelidad?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              El dolor no solo surge del engaño, sino de lo que significa para la persona traicionada: sentirse reemplazado, dudar de su propia valía, o pensar que todo lo vivido fue una mentira. La mente necesita encontrar explicaciones, aunque muchas veces no las haya.
            </p>
          </section>

          {/* How to process section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
              <QuestionCircleOutlined className="mr-3 text-green-600" />
              ¿Cómo procesar lo que ocurrió?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-3">Permitir sentir</h3>
                <p className="text-gray-700 text-sm">
                  Tristeza, rabia, incredulidad... no hay emociones correctas o incorrectas. Date permiso para experimentar lo que surja.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-3">Evitar decisiones impulsivas</h3>
                <p className="text-gray-700 text-sm">
                  En el calor del momento, es mejor esperar antes de tomar decisiones importantes sobre la relación.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-3">Buscar apoyo emocional</h3>
                <p className="text-gray-700 text-sm">
                  Amistades, grupos de apoyo o terapia profesional pueden ser fundamentales en este proceso.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-3">Reflexionar profundamente</h3>
                <p className="text-gray-700 text-sm">
                  ¿Qué quiero a partir de ahora? ¿Necesito respuestas o cerrar un ciclo? Tómate tu tiempo para pensar.
                </p>
              </div>
            </div>
          </section>

          {/* Therapy section */}
          <section className="mb-10 bg-emerald-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              ¿Terapia para qué?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La terapia no borra lo ocurrido, pero puede ayudarte a:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Explorar tu dolor sin sentirte juzgado/a</span>
              </li>
              <li className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Reconstruir tu autoestima</span>
              </li>
              <li className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Comprender patrones relacionales y tomar decisiones desde la calma</span>
              </li>
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="mb-10 italic text-gray-600 border-l-4 border-green-300 pl-4 py-2 bg-gray-50 rounded-r-lg">
            <p>
              Este artículo es informativo y no reemplaza la atención profesional. Si estás atravesando un proceso difícil, hablar con un psicólogo puede ayudarte a encontrar claridad.
            </p>
          </div>

          {/* CTA Box */}
          <div className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl shadow-sm">
            <div className="flex items-start">
              <MessageOutlined className="text-green-600 text-2xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">¿Te gustaría hablar con un psicólogo?</h3>
                <p className="mb-4 text-gray-700">La primera conversación es informativa, sin compromiso y sin costo. Puedes contactarme por WhatsApp.</p>
                <a
                  href="https://wa.me/527357965576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Volver al blog
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-green-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
};

export default Infidelidad;