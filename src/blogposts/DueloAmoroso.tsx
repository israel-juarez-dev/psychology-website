import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function DueloAmoroso() {
  return (<><Helmet>
    <title>Duelo amoroso: cómo sanar después de una ruptura | Creciendo Psicología</title>
    <meta name="description" content="Entiende el proceso emocional tras una ruptura de pareja y encuentra herramientas psicológicas para superar el duelo." />
  </Helmet>
  
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header with romantic-themed gradient */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Duelo amoroso: cómo sanar después de una ruptura
          </h1>
          <p className="text-pink-100 text-lg opacity-90">
            Un camino para transformar el dolor en crecimiento personal
          </p>
        </div>

        {/* Article content */}
        <div className="p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Terminar una relación significativa puede sentirse como si el suelo desapareciera bajo nuestros pies. El duelo amoroso no es solo tristeza; es confusión, enojo, nostalgia, culpa, vacío y, a veces, una esperanza que no se apaga fácilmente. Aunque el corazón lo viva como una herida única, es un proceso más común y humano de lo que creemos.
            </p>
          </section>

          <section className="mb-10 bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué es el duelo amoroso?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El duelo amoroso es el proceso emocional que atravesamos tras la pérdida de una relación significativa. Al igual que con cualquier otra pérdida, incluye etapas como la negación, la tristeza, la ira y, eventualmente, la aceptación.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Muchas personas describen este tipo de ruptura como una "muerte simbólica", ya que se pierde algo vivo: una relación que tenía movimiento, recuerdos, palabras, afecto. Y, como toda pérdida, duele profundamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              ¿Por qué duele tanto?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <HeartFilled className="text-rose-500 text-2xl mb-3" />
                <h3 className="font-medium text-gray-800 mb-2">Inversión emocional</h3>
                <p className="text-gray-700 text-sm">
                  Duele porque invertimos tiempo, emociones y sueños en esa relación. Depositamos en esa persona una parte importante de nuestra historia.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <HeartOutlined className="text-rose-500 text-2xl mb-3" />
                <h3 className="font-medium text-gray-800 mb-2">Reorganización personal</h3>
                <p className="text-gray-700 text-sm">
                  Lo que antes era un "nosotros" ahora es solo "yo". Hay que reconstruir rutinas, hábitos y hasta nuestro autoconcepto.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Cómo vivir el duelo sin quedarte estancado?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Permítete sentir</h3>
                  <p className="text-gray-700 text-sm">No te exijas "estar bien" rápido. Estar triste no es debilidad, es parte del proceso.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Evita romantizar el pasado</h3>
                  <p className="text-gray-700 text-sm">Recordar solo lo bonito puede generar idealización. Es mejor recordar la relación con realismo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">No busques anestesiar el dolor</h3>
                  <p className="text-gray-700 text-sm">Distracciones excesivas o nuevos vínculos inmediatos solo retrasan el duelo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Rodéate de personas que te escuchen</h3>
                  <p className="text-gray-700 text-sm">A veces no necesitamos consejos, solo alguien que nos acompañe.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reflexiona, no te castigues</h3>
                  <p className="text-gray-700 text-sm">Pensar en lo que pasó puede ayudarte a crecer, pero culparte todo el tiempo solo profundiza el dolor.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              ¿Y si todavía lo amo?
            </h2>
            <div className="bg-white p-6 rounded-lg border border-rose-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed italic">
                "Amar no siempre garantiza una relación sana o posible. Puedes seguir sintiendo amor por alguien con quien ya no es viable compartir la vida. Eso no invalida tu dolor, pero tampoco significa que debas regresar. Hay amores que se transforman en aprendizaje, aunque duela aceptarlo."
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Cuánto tiempo toma superar una ruptura?
            </h2>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                No hay un tiempo exacto. Depende de la duración de la relación, la intensidad del vínculo, las circunstancias de la ruptura, y tu historia personal. Algunas personas se sienten mejor en semanas, otras en meses, y otras en años. Lo importante no es la velocidad, sino la dirección: que poco a poco sientas que avanzas hacia mayor paz interior.
              </p>
            </div>
          </section>

          <section className="mb-10 bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Es buena idea ir a terapia?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sí. El duelo amoroso toca fibras muy profundas: autoestima, miedo al abandono, patrones de apego. Un proceso terapéutico puede ayudarte a:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Ordenar lo que sientes
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Entender lo que pasó
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Reconstruir tu camino
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                Recuperar equilibrio
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              No se trata de olvidar a la otra persona, sino de recuperar tu equilibrio emocional.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué puedo aprender de esta experiencia?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Autoconocimiento</h3>
                <p className="text-gray-700 text-sm">
                  Muchas personas descubren en el duelo una oportunidad de autoconocimiento. La ruptura puede mostrarnos aspectos que habíamos descuidado.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Nueva relación contigo</h3>
                <p className="text-gray-700 text-sm">
                  Aprender a estar contigo mismo, sin que eso signifique soledad, puede ser una de las mayores ganancias.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Conclusión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El duelo amoroso no es una enfermedad, pero sí necesita cuidado. No hay que apurarse, pero tampoco hay que quedarse atrapado. Cada emoción tiene un sentido, cada lágrima es parte del camino. Y aunque ahora duela, en algún momento verás hacia atrás y sabrás que sobreviviste... y que también creciste.
            </p>
          </section>
        </div>

        {/* Back button */}
        <div className="px-8 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors duration-200"
          >
            <ArrowLeftOutlined className="mr-2" />
            Regresar a la lista de posts
          </Link>
        </div>
      </article>
    </main></>
  );
}