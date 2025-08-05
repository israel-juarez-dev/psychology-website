import { Link } from 'react-router-dom';
import { UserOutlined, HeartOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function AceptacionPersonal() {
  return (<><Helmet>
    <title>Aceptación personal: el primer paso hacia el bienestar | Creciendo Psicología</title>
    <meta name="description" content="Reflexionamos sobre la importancia de aceptarte tal como eres y cómo fortalecer tu identidad desde la psicología." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Aceptación Personal: Dejar de Pelear Contigo Mismo
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl opacity-90">
              Descubre cómo abrazar quién eres sin juicios ni condiciones
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La aceptación personal es el fundamento de la salud psicológica. Según investigaciones en psicología positiva, las personas con mayor nivel de autoaceptación experimentan un 40% menos de ansiedad y depresión, y reportan niveles más altos de satisfacción vital.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aceptarse no significa resignarse o dejar de crecer, sino reconocer y abrazar nuestra realidad actual con compasión, desde la cual el cambio auténtico puede florecer.
            </p>
          </section>

          {/* Qué es Aceptación Personal */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <UserOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué es realmente la aceptación personal?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">No es:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Resignación o conformismo
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Autoindulgencia sin responsabilidad
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Negación de áreas por mejorar
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Sí es:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Reconocimiento honesto de fortalezas y limitaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Tratarse con la misma bondad que a un buen amigo
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Base para el crecimiento auténtico
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Barreras a la Aceptación */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              5 Barreras Comunes a la Aceptación Personal
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">1. Perfeccionismo</h3>
                <p className="text-gray-700 text-sm">
                  La creencia de que solo vales si cumples con estándares imposibles.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">2. Comparación social</h3>
                <p className="text-gray-700 text-sm">
                  Medir tu valor contra logros ajenos, especialmente en redes sociales.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">3. Autoimagen negativa</h3>
                <p className="text-gray-700 text-sm">
                  Focalización excesiva en "defectos" percibidos.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">4. Experiencias pasadas</h3>
                <p className="text-gray-700 text-sm">
                  Mensajes recibidos en la infancia que afectan la autoimagen actual.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">5. Miedo al rechazo</h3>
                <p className="text-gray-700 text-sm">
                  Creer que si te aceptas tal como eres, los demás te rechazarán.
                </p>
              </div>
            </div>
          </section>

          {/* Estrategias para la Aceptación */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-purple-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                6 Estrategias para Cultivar la Aceptación Personal
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Autocompasión consciente</h3>
                  <p className="text-gray-700 text-sm">
                    Trátate como tratarías a un ser querido que sufre. La investigación de Kristin Neff muestra que esto reduce la autocrítica en un 35%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Diario de logros</h3>
                  <p className="text-gray-700 text-sm">
                    Registra diariamente 3 cosas que hiciste bien, por pequeñas que sean.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Meditación de aceptación</h3>
                  <p className="text-gray-700 text-sm">
                    Practica observar tus pensamientos y emociones sin juzgarlos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Redefinición de "defectos"</h3>
                  <p className="text-gray-700 text-sm">
                    Pregunta: ¿Cómo esta característica podría ser útil en otro contexto?
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Límites con la autocrítica</h3>
                  <p className="text-gray-700 text-sm">
                    Establece un "tiempo máximo" para analizar errores, luego cambia de foco.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">6</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Terapia de aceptación</h3>
                  <p className="text-gray-700 text-sm">
                    La ACT (Terapia de Aceptación y Compromiso) ha demostrado aumentar la autoaceptación en un 60% de los casos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios de la Aceptación */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Beneficios Científicamente Comprobados
              </h2>
            </div>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Reducción del estrés:</span> 30% menos cortisol en personas con alta autoaceptación
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Mejores relaciones:</span> Mayor autenticidad e intimidad emocional
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Resiliencia:</span> Recuperación 40% más rápida ante fracasos
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Creatividad:</span> Menos miedo al juicio permite mayor expresión
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Satisfacción vital:</span> Correlación de 0.72 con bienestar general
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Crecimiento personal:</span> Bases más sólidas para el desarrollo
                </div>
              </li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              El Regalo de Ser Tú Mismo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La aceptación personal no es un destino final, sino un camino diario de regreso a casa contigo mismo. Como dijo Carl Rogers: "El curioso paradigma es que cuando me acepto como soy, entonces puedo cambiar".
            </p>
            <p className="text-gray-700 leading-relaxed">
              En un mundo que constantemente te dice que no eres suficiente, elegir aceptarte es un acto revolucionario de amor propio. No se trata de perfección, sino de integridad - de abrazar la totalidad de tu ser, con sus luces y sombras, como un paisaje humano único e irrepetible.
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
            <p>Publicado por <span className="font-semibold text-indigo-700">Creciendo Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}