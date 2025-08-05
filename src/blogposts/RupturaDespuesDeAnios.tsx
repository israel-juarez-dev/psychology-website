import { Link } from 'react-router-dom';
import { HeartOutlined, ClockCircleOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function RupturaDespuesDeAnios() {
  return (<><Helmet>
    <title>Ruptura después de muchos años de relación: cómo afrontarla | Creciendo Psicología</title>
    <meta name="description" content="Desde la psicología, abordamos el impacto emocional de una separación prolongada y cómo reconstruirse después." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Ruptura después de muchos años: Cuando la vida cambia sin aviso
            </h1>
            <p className="text-blue-100 text-lg md:text-xl opacity-90">
              Guía psicológica para navegar el duelo y reconstruir tu identidad
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Terminar una relación larga es uno de los eventos más estresantes que puede experimentar una persona, comparable a la pérdida de un ser querido según la Escala de Estrés de Holmes y Rahe. Cuando la relación duró décadas, el proceso de duelo puede ser particularmente complejo, ya que no solo pierdes a tu pareja, sino toda una estructura de vida.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estudios muestran que las personas que terminan relaciones largas (10+ años) necesitan un promedio de 2-3 años para recuperar un sentido de normalidad, pero con las herramientas adecuadas este proceso puede ser más llevadero y transformador.
            </p>
          </section>

          {/* Duelo Específico */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                El Duelo Particular de una Ruptura Larga
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Pérdidas múltiples</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    La pareja como compañero/a de vida
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Sueños y proyectos compartidos
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Rutinas y tradiciones establecidas
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Redes sociales mutuas
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Retos emocionales</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Crisis de identidad ("¿Quién soy sin esta relación?")
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Miedo a la soledad después de tanto tiempo
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Dificultad para imaginar un futuro diferente
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Sentimientos contradictorios (alivio y dolor simultáneos)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Etapas del Proceso */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Etapas en la Reconstrucción después de una Ruptura Larga
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Impacto inicial (0-3 meses)</h3>
                  <p className="text-gray-700 text-sm">
                    Shock, negación, confusión extrema. Prioriza autocuidado básico y no tomes decisiones importantes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Duelo activo (3-12 meses)</h3>
                  <p className="text-gray-700 text-sm">
                    Ira, tristeza profunda, preguntas sin respuesta. Permítete sentir sin juzgarte.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reorganización (1-2 años)</h3>
                  <p className="text-gray-700 text-sm">
                    Pequeños pasos hacia una nueva rutina. Redescubrimiento de intereses personales.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Renacimiento (2+ años)</h3>
                  <p className="text-gray-700 text-sm">
                    Aceptación de la nueva realidad. Posibilidad de ver el crecimiento obtenido.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Estrategias de Afrontamiento */}
          <section className="mb-10 bg-teal-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-teal-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                7 Estrategias para Reconstruir tu Vida
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">1. Reconoce la magnitud</h3>
                <p className="text-gray-700 text-sm">
                  No minimices tu dolor. Una relación larga crea profundos lazos neuronales que tardan en reorganizarse.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">2. Crea nuevos rituales</h3>
                <p className="text-gray-700 text-sm">
                  Sustituye las rutinas compartidas por actividades que te conecten con tu identidad individual.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">3. Reconstruye tu red</h3>
                <p className="text-gray-700 text-sm">
                  Reconecta con amigos antiguos o haz nuevas conexiones. El aislamiento prolonga el dolor.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">4. Terapia narrativa</h3>
                <p className="text-gray-700 text-sm">
                  Reinterpreta tu historia de vida para incluir esta transición como parte de tu crecimiento.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">5. Pequeños logros</h3>
                <p className="text-gray-700 text-sm">
                  Celebra cada paso hacia la independencia, por pequeño que sea.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">6. Revisión de valores</h3>
                <p className="text-gray-700 text-sm">
                  ¿Qué es importante para ti ahora? Tus prioridades pueden haber cambiado.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">7. Paciencia radical</h3>
                <p className="text-gray-700 text-sm">
                  No compares tu proceso con el de otros. Cada duelo es único.
                </p>
              </div>
            </div>
          </section>

          {/* Cuando Buscar Ayuda */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <ClockCircleOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Cuándo considerar ayuda profesional?
              </h2>
            </div>
            
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si después de 6 meses no puedes realizar actividades básicas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Pensamientos suicidas o autodestructivos</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si recurres al alcohol u otras sustancias para sobrellevar el dolor</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cuando sientes que no tienes a nadie con quien hablar</span>
              </li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              El Renacer es Posible
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Una ruptura después de muchos años no es el final de tu historia, sino el inicio de un capítulo diferente. Como escribió la psicóloga Mary Pipher: "Las crisis no son sólo momentos de peligro, sino también de oportunidad - momentos en que el cambio es posible porque ya no podemos seguir siendo como éramos".
            </p>
            <p className="text-gray-700 leading-relaxed">
              El camino no es fácil, pero cada paso te acerca a redescubrirte y reinventarte. Con el tiempo y el apoyo adecuado, lo que hoy parece una herida abierta puede transformarse en sabiduría y una nueva forma de estar en el mundo.
            </p>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-blue-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}