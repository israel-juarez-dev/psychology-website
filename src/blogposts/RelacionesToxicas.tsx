import { Link } from 'react-router-dom';
import { WarningOutlined, HeartOutlined, ArrowRightOutlined,ArrowLeftOutlined, TeamOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function RelacionesToxicas() {
  return (<><Helmet>
    <title>Cómo identificar y salir de una relación tóxica | Creciendo Psicología</title>
    <meta name="description" content="Descubre señales de relaciones tóxicas y aprende cómo establecer límites saludables desde la psicología." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Relaciones Tóxicas: Reconocer las Señales y Recuperar tu Bienestar
            </h1>
            <p className="text-red-100 text-lg md:text-xl opacity-90">
              Identifica patrones dañinos y descubre caminos para construir relaciones saludables
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Las relaciones tóxicas son aquellas que, en lugar de nutrirnos y hacernos crecer, nos desgastan emocionalmente. Pueden darse en pareja, familia, amistades o entornos laborales. Lo peligroso es que muchas veces no las identificamos inmediatamente, porque el daño suele ser gradual y los patrones se normalizan con el tiempo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Según estudios psicológicos, aproximadamente el 60% de las personas experimentarán al menos una relación tóxica en su vida. Reconocerlas a tiempo es fundamental para proteger nuestra salud mental y emocional.
            </p>
          </section>

          {/* Señales de Alerta */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <WarningOutlined className="text-red-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                10 Señales de una Relación Tóxica
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Control y celos excesivos</h3>
                  <p className="text-gray-700 text-sm">
                    Revisión de tu teléfono, control de tus amistades o cuestionamiento constante de tus actividades.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Crítica constante</h3>
                  <p className="text-gray-700 text-sm">
                    Desvalorización de tus logros, apariencia o forma de ser, a menudo disfrazada de "solo quiero ayudarte".
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Comunicación agresiva</h3>
                  <p className="text-gray-700 text-sm">
                    Gritos, insultos, sarcasmo hiriente o el "tratamiento silencioso" como forma de castigo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Manipulación emocional</h3>
                  <p className="text-gray-700 text-sm">
                    Culparte por sus emociones ("me haces enojar") o usar chantajes emocionales para conseguir lo que quiere.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Falta de respeto a tus límites</h3>
                  <p className="text-gray-700 text-sm">
                    Ignora tus necesidades, invade tu espacio personal o presiona para que hagas cosas con las que no te sientes cómodo/a.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">6</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Altibajos emocionales extremos</h3>
                  <p className="text-gray-700 text-sm">
                    Ciclos de maltrato seguidos de arrepentimiento y promesas de cambio que nunca se cumplen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">7</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Aislamiento progresivo</h3>
                  <p className="text-gray-700 text-sm">
                    Te aleja de tu red de apoyo (familia, amigos) haciéndote depender cada vez más de la relación.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">8</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Desbalance de poder</h3>
                  <p className="text-gray-700 text-sm">
                    Toma decisiones importantes sin consultarte o menosprecia tus opiniones y necesidades.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">9</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Efecto en tu autoestima</h3>
                  <p className="text-gray-700 text-sm">
                    Te sientes inseguro/a, dudas de tu valía o has cambiado aspectos esenciales de tu personalidad para evitar conflictos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <span className="font-bold">10</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Síntomas físicos y emocionales</h3>
                  <p className="text-gray-700 text-sm">
                    Ansiedad, insomnio, dolores de cabeza o estómago, pérdida de interés en actividades que antes disfrutabas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Caminos para Salir */}
          <section className="mb-10 bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ArrowRightOutlined className="text-green-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                7 Pasos para Salir de una Relación Tóxica
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">1. Reconocimiento y validación</h3>
                <p className="text-gray-700 text-sm">
                  Admite que estás en una relación dañina. No minimices lo que ocurre. Tu malestar es válido aunque otros no vean lo que tú experimentas.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">2. Rompe el aislamiento</h3>
                <p className="text-gray-700 text-sm">
                  Reconecta con personas de confianza. El apoyo social es crucial para ganar perspectiva y recibir contención emocional.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">3. Establece límites claros</h3>
                <p className="text-gray-700 text-sm">
                  Decide qué comportamientos no tolerarás más. Comunícalos con firmeza y prepárate para mantenerlos, incluso si la otra persona reacciona mal.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">4. Crea un plan de seguridad</h3>
                <p className="text-gray-700 text-sm">
                  Si hay riesgo físico o emocional alto, planea con antelación cómo y cuándo saldrás de la relación. Busca asesoría legal si es necesario.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">5. Reconstruye tu autoestima</h3>
                <p className="text-gray-700 text-sm">
                  Terapia, grupos de apoyo o prácticas como el journaling pueden ayudarte a recuperar la confianza en ti mismo/a.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">6. Prepárate para el "síndrome de abstinencia" emocional</h3>
                <p className="text-gray-700 text-sm">
                  Las relaciones tóxicas crean dependencia. Es normal extrañar a la persona incluso sabiendo que te hacía daño. Date tiempo para sanar.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-medium text-green-800 mb-2">7. Aprende a identificar relaciones saludables</h3>
                <p className="text-gray-700 text-sm">
                  Trabaja en reconocer los patrones que te llevaron a esta relación. La terapia puede ayudarte a evitar repetir el ciclo.
                </p>
              </div>
            </div>
          </section>

          {/* Terapia y Apoyo */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <TeamOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                El Rol de la Terapia en la Recuperación
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              La terapia psicológica es fundamental para:
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Identificar patrones relacionales disfuncionales
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Trabajar el trauma emocional acumulado
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Fortalecer la autoestima y autonomía
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Desarrollar habilidades de comunicación asertiva
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Establecer límites saludables
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Prevenir relaciones tóxicas futuras
              </li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              Según estudios, las personas que acuden a terapia después de una relación tóxica reducen en un 70% las probabilidades de repetir patrones similares en relaciones futuras.
            </p>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg">
            <div className="flex items-start">
              <HeartOutlined className="text-red-500 text-2xl mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Mereces Relaciones que te Nutran
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Salir de una relación tóxica es un acto de valentía y amor propio. No estás solo/a en este proceso. Con el apoyo adecuado y herramientas psicológicas, es posible reconstruir tu vida emocional y abrirte a conexiones más auténticas y respetuosas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Recuerda: el amor no duele, no controla, no humilla. El verdadero amor respeta, acompaña y celebra tu individualidad. Tú mereces eso y mucho más.
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