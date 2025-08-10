import { Link } from 'react-router-dom';
import { BulbOutlined, ReadOutlined, TeamOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function SentidoDeVida() {
  return (<><Helmet>
    <title>Buscar sentido a la vida: una mirada psicológica | Integralis Psicología</title>
    <meta name="description" content="Reflexionamos sobre el propósito de vida desde la psicología y cómo encontrar dirección en momentos de crisis." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              El Sentido de Vida: Un Pilar Fundamental para el Bienestar Psicológico
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl opacity-90">
              Explorando la importancia del propósito existencial desde la psicología humanista y positiva
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La búsqueda de sentido es una característica intrínseca del ser humano. Viktor Frankl, padre de la logoterapia, postuló que la voluntad de sentido es la motivación primaria del hombre. Estudios contemporáneos en psicología positiva confirman que tener un propósito vital se asocia con mayor resiliencia, mejor salud mental y mayor longevidad.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Según investigaciones de la Universidad de Michigan, las personas con un claro sentido de vida tienen un 30% menos de probabilidades de desarrollar depresión y un 23% menos riesgo de mortalidad prematura.
            </p>
          </section>

          {/* Qué es el sentido de vida */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué es el sentido de vida en psicología?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              En psicología, el sentido de vida se compone de tres elementos fundamentales:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-indigo-800 mb-2">1. Propósito</h3>
                <p className="text-gray-700 text-sm">
                  Metas y direccionalidad que dan sentido a las acciones cotidianas
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-indigo-800 mb-2">2. Significado</h3>
                <p className="text-gray-700 text-sm">
                  Valor y coherencia que atribuimos a nuestras experiencias
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-indigo-800 mb-2">3. Coherencia</h3>
                <p className="text-gray-700 text-sm">
                  Sensación de que la vida es comprensible y manejable
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              La psicóloga Carol Ryff incluye el "propósito en la vida" como una de las seis dimensiones clave del bienestar psicológico en su modelo ampliamente validado.
            </p>
          </section>

          {/* Beneficios */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Beneficios psicológicos de tener un sentido de vida claro
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Mayor resiliencia</h3>
                <p className="text-gray-700 text-sm">
                  Las personas con propósito enfrentan mejor las adversidades, mostrando 2.5 veces más capacidad de recuperación según estudios.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Mejor salud mental</h3>
                <p className="text-gray-700 text-sm">
                  Reducción del 27% en riesgo de trastornos de ansiedad y 35% menos síntomas depresivos (Journal of Clinical Psychology).
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Satisfacción vital</h3>
                <p className="text-gray-700 text-sm">
                  Correlación de 0.68 con bienestar subjetivo, mayor que ingresos económicos o estatus social.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Longevidad</h3>
                <p className="text-gray-700 text-sm">
                  Estudio de Rush University muestra 15% menor riesgo de mortalidad en personas con alto sentido vital.
                </p>
              </div>
            </div>
          </section>

          {/* Cómo encontrar sentido */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ReadOutlined className="text-purple-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                5 Estrategias para Descubrir tu Sentido de Vida
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Autoconocimiento profundo</h3>
                  <p className="text-gray-700 text-sm">
                    Ejercicios de reflexión sobre valores, pasiones y momentos de "flow". Preguntas poderosas: ¿Qué harías si no tuvieras miedo? ¿De qué te enorgullecerías al final de tu vida?
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Identificación de fortalezas</h3>
                  <p className="text-gray-700 text-sm">
                    Usa herramientas como el test VIA de fortalezas personales. Alinear tu propósito con tus talentos naturales aumenta la sensación de significado.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Contribución trascendente</h3>
                  <p className="text-gray-700 text-sm">
                    Buscar formas de servir a algo más grande que uno mismo. Estudios muestran que las personas que ayudan a otros reportan mayor sentido existencial.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Narrativa vital coherente</h3>
                  <p className="text-gray-700 text-sm">
                    Construir una historia personal que integre eventos pasados, presente y aspiraciones futuras. La terapia narrativa puede ser muy útil.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Aceptación de lo inevitable</h3>
                  <p className="text-gray-700 text-sm">
                    Reconocer limitaciones y sufrimientos como parte de la condición humana, pero eligiendo nuestra actitud frente a ellos (concepto logoterapéutico).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Obstáculos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Obstáculos Comunes en la Búsqueda de Sentido
            </h2>
            <div className="bg-white p-6 rounded-lg border border-indigo-100 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4 mb-4">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Comparación social:</span> Medir el propio valor con estándares ajenos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Miedo al fracaso:</span> Evitar perseguir lo que realmente importa
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Inmediatez cultural:</span> Priorizar gratificación rápida sobre propósito profundo
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Crisis existenciales:</span> Momentos donde se cuestionan creencias y valores previos
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Pérdidas significativas:</span> Duelos que hacen replantear el sentido establecido
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Sociedad hiperindividualista:</span> Dificultad para encontrar conexión trascendente
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                La psicología humanista ve estos obstáculos no como patologías, sino como oportunidades para crecimiento y autodescubrimiento.
              </p>
            </div>
          </section>

          {/* Terapia y sentido */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <TeamOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Cómo puede ayudar la terapia psicológica
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Enfoques terapéuticos útiles</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Logoterapia (Viktor Frankl)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Terapia existencial
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Psicología positiva
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Terapia narrativa
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    ACT (Terapia de Aceptación y Compromiso)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Procesos terapéuticos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Clarificación de valores personales
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Integración de experiencias vitales
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Desarrollo de narrativa personal coherente
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Superación de obstáculos emocionales
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Diseño de proyectos vitales significativos
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              Reflexiones Finales
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              El sentido de vida no es un destino fijo, sino un camino en constante evolución. Como señalaba Viktor Frankl, "la vida nunca deja de tener sentido, incluso en el sufrimiento y la adversidad". La psicología contemporánea nos muestra que encontrar propósito es tanto un derecho como una capacidad humana fundamental.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No se trata de descubrir un sentido universal, sino de crear tu propio significado auténtico, aquel que te haga levantarte cada mañana con curiosidad y compromiso. Este proceso, aunque a veces desafiante, es una de las aventuras más gratificantes del desarrollo personal.
            </p>
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