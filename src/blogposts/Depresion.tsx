import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function Depresion() {
  return (<><Helmet>
    <title>¿Qué es la depresión y cómo tratarla? | Creciendo Psicología</title>
    <meta name="description" content="Conoce los síntomas de la depresión, sus causas y cómo abordarla desde un enfoque psicológico práctico y humano." />
  </Helmet>
  
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Depresión: más allá de estar triste
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            Comprendiendo la complejidad de esta condición emocional
          </p>
        </div>

        {/* Article content */}
        <div className="p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              La depresión no es simplemente "estar triste". Es una condición emocional compleja que puede afectar profundamente cómo pensamos, sentimos y actuamos. Muchas veces, desde fuera, no se nota. La persona sigue trabajando, sonriendo, conviviendo… pero por dentro está luchando cada día por mantenerse en pie.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              ¿Qué es realmente la depresión?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Es un trastorno del estado de ánimo que implica una pérdida de interés, energía y motivación en distintas áreas de la vida. Puede generar sensación de vacío, desesperanza, dificultad para concentrarse, alteraciones del sueño, pérdida o aumento del apetito, pensamientos autocríticos, y en algunos casos, pensamientos sobre la muerte.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A diferencia de una tristeza común que suele tener una causa clara y temporal, la depresión puede instalarse de forma más profunda, persistente y a veces sin un detonante evidente.
            </p>
          </section>

          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué causa la depresión?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No hay una única causa. La depresión suele ser el resultado de una combinación de factores:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Factores biológicos:</strong> desequilibrios químicos en el cerebro, predisposición genética, alteraciones hormonales.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Factores psicológicos:</strong> estilo de pensamiento negativo, baja autoestima, trauma emocional, vivencias no resueltas.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700"><strong>Factores sociales:</strong> aislamiento, relaciones conflictivas, desempleo, crisis económicas o pérdida de seres queridos.</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              En muchos casos, la persona no sabe "por qué" se siente así, y eso puede generar culpa o incomprensión. Pero sentirte mal sin una causa visible no lo hace menos válido.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              ¿Cómo identificarla?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Algunas señales comunes de depresión incluyen:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Síntomas emocionales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Tristeza constante o sensación de vacío
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Pérdida de interés por actividades
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Pensamientos de inutilidad o culpa
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Síntomas físicos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Cansancio extremo
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Cambios en el apetito o sueño
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Dificultad para concentrarse
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              No todas las personas experimentan todos los síntomas, ni con la misma intensidad. Algunas personas con depresión pueden parecer funcionales externamente, pero estar profundamente afectadas internamente.
            </p>
          </section>

          {/* More sections... */}

          <section className="mb-10 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué hacer si sospecho que tengo depresión?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lo más importante es no enfrentarlo en soledad. Algunas recomendaciones clave:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-600 mb-2">Habla con alguien</h3>
                <p className="text-gray-700 text-sm">Un amigo, familiar o terapeuta. Expresar lo que sientes puede ser un gran alivio.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-600 mb-2">Busca ayuda profesional</h3>
                <p className="text-gray-700 text-sm">Un psicólogo puede ayudarte a entender lo que estás atravesando.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-600 mb-2">No te exijas de más</h3>
                <p className="text-gray-700 text-sm">Cuando estás deprimido, tareas simples pueden sentirse pesadas.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-blue-600 mb-2">Evita el aislamiento</h3>
                <p className="text-gray-700 text-sm">Intenta mantener algo de contacto social, aunque no tengas ganas.</p>
              </div>
            </div>
          </section>

          {/* Conclusion section */}
          <section className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              La depresión es una experiencia dura, pero no define quién eres. No eres débil, ni perezoso, ni menos valioso por sentirte así. Pedir ayuda no es rendirse, es el primer paso hacia la recuperación. Si estás pasando por esto, mereces apoyo, escucha y herramientas reales. No estás solo. Hay salida.
            </p>
          </section>
        </div>

        {/* Back button */}
        <div className="px-8 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeftOutlined className="mr-2" />
            Regresar a la lista de posts
          </Link>
        </div>
      </article>
    </main></>
  );
}