import { Link } from 'react-router-dom';
import { UserOutlined, HeartOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function AutoaceptacionAdulta() {
  return (<><Helmet>
    <title>Autoaceptación en la adultez: comprender y sanar | Creciendo Psicología</title>
    <meta name="description" content="Desde la psicología, hablamos de cómo reconciliarte con tu historia y fortalecer tu identidad adulta." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Autoaceptación en la Adultez: Reconciliarte contigo a cualquier edad
            </h1>
            <p className="text-teal-100 text-lg md:text-xl opacity-90">
              El arte de abrazar tu historia completa con compasión y autenticidad
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La autoaceptación en la adultez no es un destino, sino un viaje continuo de regreso a casa contigo mismo. Según investigaciones en psicología del desarrollo, el 68% de los adultos experimentan crisis de autoaceptación entre los 35-55 años, cuando confrontan la brecha entre sus expectativas juveniles y su realidad actual.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A diferencia de la autoestima (que evalúa), la autoaceptación es incondicional: es elegir abrazar cada parte de tu ser - tus logros y tus fracasos, tu luz y tu sombra - con compasión radical.
            </p>
          </section>

          {/* Qué es Autoaceptación */}
          <section className="mb-10 bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
            <div className="flex items-center mb-4">
              <UserOutlined className="text-teal-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Autoaceptación vs. Autoestima
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Autoestima</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Evaluación de tu valía basada en logros
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Condicional ("Me gusto cuando...")
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Fluida, cambia con las circunstancias
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Autoaceptación</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Reconocimiento incondicional de tu ser completo
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Constante ("Me acepto aunque...")
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Base sólida para el crecimiento auténtico
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Obstáculos Comunes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              5 Obstáculos para la Autoaceptación en la Adultez
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">1. El mito del "debería"</h3>
                <p className="text-gray-700 text-sm">
                  Comparar tu camino con expectativas sociales o familiares internalizadas.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">2. Arrepentimientos persistentes</h3>
                <p className="text-gray-700 text-sm">
                  Focalización en decisiones pasadas con la mentalidad actual.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">3. Cambios físicos</h3>
                <p className="text-gray-700 text-sm">
                  Dificultad para aceptar el envejecimiento en una cultura obsesionada con la juventud.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">4. Roles no cumplidos</h3>
                <p className="text-gray-700 text-sm">
                  Expectativas sobre matrimonio, paternidad, éxito profesional, etc.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">5. Trauma no procesado</h3>
                <p className="text-gray-700 text-sm">
                  Heridas emocionales de la infancia o juventud que afectan la autoimagen actual.
                </p>
              </div>
            </div>
          </section>

          {/* Estrategias de Autoaceptación */}
          <section className="mb-10 bg-emerald-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-emerald-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                7 Prácticas para Cultivar la Autoaceptación
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Diálogo interno compasivo</h3>
                  <p className="text-gray-700 text-sm">
                    Habla contigo como lo harías con un ser querido que sufre. Reduce la autocrítica en un 40%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Revisión de vida</h3>
                  <p className="text-gray-700 text-sm">
                    Escribe tu historia reconociendo tanto logros como fracasos como parte de tu aprendizaje.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Meditación de aceptación</h3>
                  <p className="text-gray-700 text-sm">
                    Practica observar pensamientos y emociones sin juzgarlos, permitiéndoles ser.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Celebración de imperfecciones</h3>
                  <p className="text-gray-700 text-sm">
                    Identifica cómo tus "defectos" han contribuido positivamente en momentos clave.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Terapia de sombra</h3>
                  <p className="text-gray-700 text-sm">
                    Trabaja con las partes de ti que rechazas para integrarlas compasivamente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">6</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Redefinición de valores</h3>
                  <p className="text-gray-700 text-sm">
                    Actualiza tus estándares de éxito según quién eres hoy, no quién esperabas ser.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-4">
                  <span className="font-bold">7</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Gratitud generacional</h3>
                  <p className="text-gray-700 text-sm">
                    Agradece las lecciones transmitidas por tus ancestros que te hicieron quien eres.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios Científicos */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Beneficios de la Autoaceptación en la Adultez
              </h2>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Reducción del estrés:</span> 35% menos cortisol en adultos que practican autoaceptación
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Relaciones más auténticas:</span> Menos necesidad de aprobación externa
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Toma de decisiones más sabia:</span> Basada en necesidades reales, no en compensaciones
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Mayor resiliencia:</span> Recuperación 50% más rápida ante fracasos
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Satisfacción vital:</span> Correlación de 0.68 con bienestar en adultos 40+
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Libertad emocional:</span> Para disfrutar la etapa actual sin añorar el pasado
                </div>
              </li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              El Regalo de la Madurez Emocional
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Como escribió Carl Jung: "El privilegio de una vida es convertirse en quien realmente eres". La autoaceptación en la adultez no es resignación, sino la valentía de abrazar la complejidad de tu viaje único, con sus giros inesperados y aprendizajes no planeados.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En un mundo que valora la juventud y los logros constantes, elegir aceptarte plenamente - con tus cicatrices, tu sabiduría ganada con esfuerzo y tus sueños reinventados - es quizás el acto más revolucionario de amor propio que puedes realizar.
            </p>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-teal-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}