import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, QuestionOutlined, HeartOutlined, SafetyOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function Ansiedad() {
  return (<><Helmet>
    <title>Ansiedad: cómo entenderla y manejarla desde la psicología | Integralis Psicología</title>
    <meta name="description" content="Exploramos el origen de la ansiedad, sus síntomas y estrategias psicológicas para afrontarla de forma saludable." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Ansiedad: cuando la mente corre más rápido que la vida
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl opacity-90">
              Comprendiendo y gestionando la respuesta natural de nuestro cuerpo al estrés
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La ansiedad es una respuesta natural del cuerpo ante el peligro. Nos prepara para actuar, huir o protegernos. Es parte del sistema de supervivencia que ha evolucionado con nosotros. El problema no es sentir ansiedad de vez en cuando, sino vivir constantemente en ese estado, incluso cuando no hay una amenaza real.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En nuestra sociedad acelerada, la ansiedad se ha convertido en un compañero frecuente para muchas personas. Según la Organización Mundial de la Salud, cerca de 264 millones de personas en el mundo sufren de trastornos de ansiedad, siendo uno de los problemas de salud mental más prevalentes en la actualidad.
            </p>
          </section>

          {/* Symptoms Section */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Cómo se manifiesta la ansiedad?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Síntomas físicos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Dificultad para respirar u opresión en el pecho
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Taquicardia o palpitaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Tensión muscular o temblores
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Problemas digestivos o náuseas
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Síntomas psicológicos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Pensamientos acelerados o catastróficos
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Dificultad para concentrarse
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Irritabilidad o cambios de humor
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Sensación de peligro inminente
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Causes Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <QuestionOutlined className="mr-3 text-indigo-600" />
              ¿Qué causa la ansiedad?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Factores biológicos</h3>
                <p className="text-gray-700 text-sm">
                  Desequilibrios químicos en el cerebro, predisposición genética o condiciones médicas pueden influir en la aparición de ansiedad.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Factores psicológicos</h3>
                <p className="text-gray-700 text-sm">
                  Estilos de pensamiento, experiencias traumáticas o patrones de afrontamiento aprendidos pueden contribuir a la ansiedad.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Factores ambientales</h3>
                <p className="text-gray-700 text-sm">
                  Estrés laboral, problemas económicos, dificultades relacionales o cambios importantes en la vida pueden desencadenar ansiedad.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Estilo de vida</h3>
                <p className="text-gray-700 text-sm">
                  Falta de sueño, alimentación desequilibrada, consumo de sustancias o sedentarismo pueden exacerbar los síntomas de ansiedad.
                </p>
              </div>
            </div>
          </section>

          {/* Management Section */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Estrategias para manejar la ansiedad
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Técnicas de respiración</h3>
                  <p className="text-gray-700 text-sm">
                    La respiración diafragmática lenta puede activar el sistema nervioso parasimpático, ayudando a reducir la respuesta de ansiedad.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reestructuración cognitiva</h3>
                  <p className="text-gray-700 text-sm">
                    Identificar y cuestionar pensamientos automáticos negativos o catastróficos que alimentan la ansiedad.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Exposición gradual</h3>
                  <p className="text-gray-700 text-sm">
                    Enfrentar progresivamente las situaciones temidas ayuda a reducir la evitación y el miedo asociado.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Mindfulness y meditación</h3>
                  <p className="text-gray-700 text-sm">
                    Practicar la atención plena ayuda a permanecer en el presente y reducir la rumiación ansiosa.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Rutina saludable</h3>
                  <p className="text-gray-700 text-sm">
                    Regular el sueño, alimentación y ejercicio físico proporciona una base sólida para manejar la ansiedad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Therapy Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              ¿Cuándo buscar ayuda profesional?
            </h2>
            <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                La terapia psicológica es recomendable cuando:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-4">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  La ansiedad interfiere significativamente con tu vida diaria
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Experimentas ataques de pánico recurrentes
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Usas sustancias o conductas poco saludables para manejar la ansiedad
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Los síntomas persisten por más de seis meses
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Aparecen síntomas depresivos junto con la ansiedad
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Tienes pensamientos de autolesión o suicidio
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                La terapia cognitivo-conductual ha demostrado especial eficacia para los trastornos de ansiedad, con tasas de mejoría significativa en el 70-80% de los casos.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <div className="flex items-start">
              <SafetyOutlined className="text-indigo-600 text-2xl mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
                  Recuperando el equilibrio
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  La ansiedad no define quién eres. Es una respuesta que puede ser comprendida y gestionada. Con las herramientas adecuadas y el apoyo necesario, es posible transformar la relación con tus pensamientos y emociones, encontrando mayor paz y estabilidad.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Recuerda que buscar ayuda no es signo de debilidad, sino de valentía y autocuidado. Cada paso que das hacia comprender y manejar tu ansiedad es un paso hacia una vida más plena y auténtica.
                </p>
              </div>
            </div>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-indigo-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}