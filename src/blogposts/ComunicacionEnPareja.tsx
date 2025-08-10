import { Link } from 'react-router-dom';
import { MessageOutlined, HeartOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function ComunicacionEnPareja() {
  return (<><Helmet>
    <title>Cómo mejorar la comunicación en pareja | Integralis Psicología</title>
    <meta name="description" content="Claves psicológicas para mejorar la comunicación en la relación de pareja y resolver conflictos de forma saludable." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Comunicación en Pareja: Más que Hablar, es Conectar
            </h1>
            <p className="text-pink-100 text-lg md:text-xl opacity-90">
              Descubre las claves psicológicas para una comunicación auténtica y transformadora
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La comunicación es el sistema circulatorio de las relaciones de pareja. Según estudios del Gottman Institute, el 67% de los conflictos en parejas saludables son problemas perpetuos que no se "resuelven", pero que pueden manejarse mejor con habilidades comunicativas efectivas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La psicología de pareja ha identificado que no es la ausencia de conflictos lo que determina el éxito de una relación, sino cómo se manejan esos conflictos a través de la comunicación.
            </p>
          </section>

          {/* Problemas Comunes */}
          <section className="mb-10 bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
            <div className="flex items-center mb-4">
              <MessageOutlined className="text-pink-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                5 Errores de Comunicación que Dañan la Pareja
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">La crítica personal</h3>
                  <p className="text-gray-700 text-sm">
                    Atacar al carácter de la pareja ("Eres egoísta") en lugar de describir el comportamiento específico que nos molesta.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">El desprecio</h3>
                  <p className="text-gray-700 text-sm">
                    Sarcasmo, insultos, miradas despectivas o burlas que hieren la autoestima del otro.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Actitud defensiva</h3>
                  <p className="text-gray-700 text-sm">
                    Justificarse constantemente en lugar de escuchar y validar los sentimientos de la pareja.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">La evitación</h3>
                  <p className="text-gray-700 text-sm">
                    Ignorar los problemas o retirarse emocionalmente cuando surgen conflictos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Suposiciones mentales</h3>
                  <p className="text-gray-700 text-sm">
                    Creer que sabemos lo que piensa o siente el otro sin preguntar directamente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Estrategias Saludables */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-pink-800 mb-6">
              Estrategias de Comunicación Saludable
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Escucha activa</h3>
                <p className="text-gray-700 text-sm">
                  Prestar atención plena, parafrasear lo que dice tu pareja y validar sus sentimientos antes de responder.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Comunicación no violenta</h3>
                <p className="text-gray-700 text-sm">
                  Expresar observaciones, sentimientos, necesidades y peticiones sin culpar o criticar.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Tiempo de calidad</h3>
                <p className="text-gray-700 text-sm">
                  Espacios libres de distracciones (sin móviles) para conversaciones significativas.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Regulación emocional</h3>
                <p className="text-gray-700 text-sm">
                  Tomar pausas cuando las emociones son intensas para evitar decir cosas de las que luego te arrepientas.
                </p>
              </div>
            </div>
          </section>

          {/* Ejercicio Práctico */}
          <section className="mb-10 bg-rose-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-rose-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Ejercicio Práctico: La Técnica del Hablante-Oyente
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-rose-100 text-rose-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <p className="text-gray-700 text-sm">
                    El hablante expone su perspectiva usando frases en primera persona ("Yo siento...", "Necesito...").
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-rose-100 text-rose-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <p className="text-gray-700 text-sm">
                    El oyente repite con sus propias palabras lo que entendió, sin juzgar ni dar soluciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-rose-100 text-rose-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <p className="text-gray-700 text-sm">
                    El hablante confirma si fue entendido correctamente o aclara su mensaje.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-rose-100 text-rose-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <p className="text-gray-700 text-sm">
                    Se invierten los roles y se repite el proceso.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-4 text-sm italic">
              Este ejercicio, validado por la investigación del Dr. John Gottman, reduce la escalada de conflictos en un 40% cuando se practica regularmente.
            </p>
          </section>

          {/* Comunicación No Verbal */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">
              El Poder de la Comunicación No Verbal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Según el psicólogo Albert Mehrabian, solo el 7% de la comunicación emocional se transmite a través de palabras. El resto se comunica a través de:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Tono de voz (38%)</h3>
                <p className="text-gray-700 text-sm">
                  Suavizar el tono, modular el volumen y velocidad al hablar.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Lenguaje corporal (55%)</h3>
                <p className="text-gray-700 text-sm">
                  Contacto visual, postura abierta, gestos que muestran atención.
                </p>
              </div>
            </div>
          </section>

          {/* Cuando Buscar Ayuda */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Cuándo considerar terapia de pareja?
              </h2>
            </div>

            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cuando los conflictos se repiten sin resolución</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si existe evitación crónica de temas importantes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Cuando la comunicación se ha vuelto principalmente negativa</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">Si hay heridas emocionales no resueltas que interfieren</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              La terapia de pareja puede proporcionar un espacio seguro para reconstruir la confianza y aprender nuevas formas de comunicación.
            </p>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">
              Comunicación que Nutre el Amor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La comunicación efectiva en pareja no se trata de evitar los conflictos, sino de navegarlos con respeto y empatía. Cada conversación es una oportunidad para profundizar la conexión y el entendimiento mutuo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Como dijo el terapeuta de parejas John Gottman: "En las relaciones más satisfactorias, las parejas no son más compatibles, sino que han desarrollado habilidades para manejar sus diferencias". La buena noticia es que estas habilidades pueden aprenderse y practicarse en cualquier etapa de la relación.
            </p>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-pink-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}