import { Link } from 'react-router-dom';
import { FireOutlined, BulbOutlined, HeartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function ManejoDelEnojo() {
  return (<><Helmet>
    <title>Cómo manejar el enojo de forma saludable | Creciendo Psicología</title>
    <meta name="description" content="Aprende estrategias psicológicas para comprender y canalizar el enojo sin dañar tus relaciones ni a ti mismo." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Manejo del Enojo: Sentirlo sin Dejarte Controlar
            </h1>
            <p className="text-red-100 text-lg md:text-xl opacity-90">
              Aprende a reconocer, comprender y canalizar tu enojo de manera saludable
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              El enojo es una emoción natural y necesaria que nos alerta sobre injusticias, violaciones a nuestros límites o necesidades no satisfechas. Según la Asociación Americana de Psicología, el enojo mal gestionado puede aumentar en un 50% el riesgo de enfermedades cardiovasculares y dañar significativamente nuestras relaciones.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La clave no está en suprimir el enojo, sino en aprender a expresarlo de forma constructiva. Cuando se maneja adecuadamente, el enojo puede ser un motor para el cambio positivo y la autodefensa saludable.
            </p>
          </section>

          {/* Entendiendo el Enojo */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              <FireOutlined className="text-red-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué ocurre en tu cerebro cuando sientes enojo?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Respuesta fisiológica</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Liberación de adrenalina y cortisol
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Aumento del ritmo cardíaco y presión arterial
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Tensión muscular preparatoria
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Proceso cognitivo</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Interpretación de una amenaza o injusticia
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Activación de la amígdala (centro emocional)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Disminución temporal de la función prefrontal (razonamiento)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tipos de Enojo */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-red-800 mb-6">
              4 Tipos de Enojo y Cómo Reconocerlos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Enojo explosivo</h3>
                <p className="text-gray-700 text-sm">
                  Reacciones intensas e inmediatas, a veces desproporcionadas. Representa el 15% de los casos según estudios.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Enojo crónico</h3>
                <p className="text-gray-700 text-sm">
                  Estado constante de irritabilidad y resentimiento. A menudo relacionado con frustraciones no resueltas.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Enojo pasivo-agresivo</h3>
                <p className="text-gray-700 text-sm">
                  Expresión indirecta a través de sarcasmo, procrastinación o "olvidos" intencionales.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Enojo constructivo</h3>
                <p className="text-gray-700 text-sm">
                  Expresado de manera asertiva para resolver problemas sin dañar relaciones.
                </p>
              </div>
            </div>
          </section>

          {/* Estrategias de Manejo */}
          <section className="mb-10 bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                7 Estrategias para Manejar el Enojo Saludablemente
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reconocimiento temprano</h3>
                  <p className="text-gray-700 text-sm">
                    Identifica las señales físicas (tensión, calor) antes de que el enojo escale.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Técnica de pausa</h3>
                  <p className="text-gray-700 text-sm">
                    Retírate físicamente por 15-20 minutos para recuperar el control cognitivo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Respiración 4-7-8</h3>
                  <p className="text-gray-700 text-sm">
                    Inhala 4 segundos, mantén 7, exhala 8. Repite hasta calmar el sistema nervioso.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reestructuración cognitiva</h3>
                  <p className="text-gray-700 text-sm">
                    Cuestiona pensamientos absolutos ("nunca", "siempre") que intensifican el enojo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Comunicación asertiva</h3>
                  <p className="text-gray-700 text-sm">
                    Usa frases como "Me siento [emoción] cuando [situación] porque [necesidad]".
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">6</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Actividad física</h3>
                  <p className="text-gray-700 text-sm">
                    El ejercicio regular reduce la reactividad emocional en un 30-40%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">7</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Identificación de disparadores</h3>
                  <p className="text-gray-700 text-sm">
                    Lleva un registro para reconocer patrones y situaciones recurrentes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cuando el Enojo es Problema */}
          <section className="mb-10 bg-red-100 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              {/* <WarningOutlined className="text-red-700 text-2xl mr-3" /> */}
              <h2 className="text-2xl font-semibold text-gray-800">
                Señales de que el Enojo Requiere Ayuda Profesional
              </h2>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Arrebatos frecuentes que dañan relaciones
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Conductas violentas (gritos, golpes, lanzar objetos)
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Sentirse fuera de control durante los episodios
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Arrepentimiento constante después de expresar enojo
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Problemas legales o laborales por conductas impulsivas
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                Uso de sustancias para "calmar" el enojo
              </li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              La terapia cognitivo-conductual ha demostrado un 75% de efectividad en el manejo de trastornos de ira según estudios clínicos.
            </p>
          </section>

          {/* Transformar el Enojo */}
          <section className="mb-10 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
            <div className="flex items-start">
              <HeartOutlined className="text-red-500 text-2xl mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  El Poder Transformador del Enojo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Cuando aprendemos a escuchar nuestro enojo en lugar de reprimirlo o dejarnos llevar por él, puede convertirse en una brújula emocional. Nos señala dónde están nuestros límites, qué valores son importantes para nosotros y qué cambios necesitamos hacer en nuestras vidas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Como dijo el psicólogo Marshall Rosenberg: "El enojo es una expresión trágica de necesidades no satisfechas". Detrás de cada explosión de ira hay una necesidad humana legítima esperando ser reconocida y expresada de manera constructiva.
                </p>
              </div>
            </div>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-red-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}