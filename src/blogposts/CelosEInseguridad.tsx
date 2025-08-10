import { Link } from 'react-router-dom';
import { HeartOutlined, WarningOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function CelosEInseguridad() {
  return (<><Helmet>
    <title>Celos e inseguridad: entendiendo su origen y manejo | Integralis Psicología</title>
    <meta name="description" content="Exploramos desde la psicología el origen de los celos y la inseguridad, y cómo trabajarlos de manera saludable." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Celos e Inseguridad: ¿Amor o Miedo a Perder?
            </h1>
            <p className="text-orange-100 text-lg md:text-xl opacity-90">
              Un análisis psicológico para comprender y transformar los celos en relaciones más sanas
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Los celos son una emoción compleja que mezcla miedo, inseguridad y posesividad. Según estudios en psicología clínica, aproximadamente el 75% de las personas experimentarán celos significativos en alguna relación romántica. Sin embargo, cuando los celos se vuelven intensos y frecuentes, pueden dañar seriamente la relación y el bienestar emocional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Es importante diferenciar entre celos adaptativos (que protegen el vínculo) y celos patológicos (que lo destruyen). Los primeros surgen ante amenazas reales, mientras que los segundos aparecen sin evidencia concreta.
            </p>
          </section>

          {/* Raíces de los Celos */}
          <section className="mb-10 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-4">
              <WarningOutlined className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Las 5 Raíces Psicológicas de los Celos Intensos
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Baja autoestima</h3>
                  <p className="text-gray-700 text-sm">
                    Creencia de no ser "suficiente" y que la pareja podría encontrar a alguien mejor.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Experiencias pasadas</h3>
                  <p className="text-gray-700 text-sm">
                    Traumas de infidelidades anteriores o modelos familiares disfuncionales.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Estilo de apego ansioso</h3>
                  <p className="text-gray-700 text-sm">
                    Patrón de relación caracterizado por miedo crónico al abandono.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Proyección</h3>
                  <p className="text-gray-700 text-sm">
                    Atribuir a la pareja nuestros propios impulsos o deseos no reconocidos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Dependencia emocional</h3>
                  <p className="text-gray-700 text-sm">
                    La pareja se convierte en la única fuente de validación y autoestima.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Señales de Celos Patológicos */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-orange-800 mb-6">
              Señales de que los Celos son Problemáticos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Control excesivo</h3>
                <p className="text-gray-700 text-sm">
                  Revisar el teléfono, redes sociales o exigir constantes explicaciones sobre actividades.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Imaginación catastrófica</h3>
                <p className="text-gray-700 text-sm">
                  Crear escenarios negativos sin evidencia y angustiarse por ellos.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Aislamiento social</h3>
                <p className="text-gray-700 text-sm">
                  Intentar limitar las amistades o actividades independientes de la pareja.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Reacciones desproporcionadas</h3>
                <p className="text-gray-700 text-sm">
                  Crisis de ansiedad, llanto o ira ante interacciones normales de la pareja con otros.
                </p>
              </div>
            </div>
          </section>

          {/* Estrategias de Manejo */}
          <section className="mb-10 bg-amber-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-amber-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                6 Estrategias para Gestionar Celos e Inseguridad
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Diferenciar hechos de interpretaciones</h3>
                  <p className="text-gray-700 text-sm">
                    Preguntarse: ¿Tengo evidencia concreta o son solo suposiciones?
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Trabajar en la autoestima</h3>
                  <p className="text-gray-700 text-sm">
                    Desarrollar identidad y fuentes de validación independientes de la pareja.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Comunicación asertiva</h3>
                  <p className="text-gray-700 text-sm">
                    Expresar necesidades sin acusaciones ("Me siento inseguro cuando..." vs "Siempre me engañas").
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Técnicas de regulación emocional</h3>
                  <p className="text-gray-700 text-sm">
                    Respiración diafragmática, mindfulness y pausas antes de reaccionar.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Exposición gradual</h3>
                  <p className="text-gray-700 text-sm">
                    Tolerar progresivamente situaciones que generan celos sin buscar "reaseguros".
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">
                  <span className="font-bold">6</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Terapia psicológica</h3>
                  <p className="text-gray-700 text-sm">
                    Para explorar raíces profundas y desarrollar patrones relacionales más sanos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cuando Buscar Ayuda */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              <WarningOutlined className="text-red-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Cuándo buscar ayuda profesional?
              </h2>
            </div>

            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si los celos están dañando seriamente la relación</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cuando hay conductas controladoras o acosadoras</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si los celos generan ansiedad o depresión significativas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cuando hay antecedentes de relaciones tóxicas o abusivas</span>
              </li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">
              Transformando los Celos en Confianza
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Los celos, cuando se comprenden y gestionan adecuadamente, pueden convertirse en una oportunidad para crecer tanto individualmente como en pareja. Reconocerlos como señal de nuestras propias inseguridades es el primer paso para transformarlos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Como dijo el psicólogo Robert Firestone: "El amor verdadero no busca controlar ni poseer, sino nutrir y permitir ser". Trabajar en nuestros celos no solo mejora nuestras relaciones, sino que nos ayuda a desarrollar una versión más segura y completa de nosotros mismos.
            </p>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-orange-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}