import { Link } from 'react-router-dom';
import { FrownOutlined, WarningOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function MiedoAlAbandono() {
  return (<><Helmet>
    <title>Miedo al abandono: una herida emocional profunda | Creciendo Psicología</title>
    <meta name="description" content="Exploramos el miedo al abandono, sus raíces y cómo sanarlo desde la psicología relacional." />
  </Helmet>
  
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Miedo al Abandono: Comprenderlo y Sanarlo
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl opacity-90">
              Cuando el temor a perder al otro impide disfrutar del vínculo
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          {/* Introducción */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              El miedo al abandono es una experiencia emocional profunda que muchas personas arrastran desde la infancia. Se manifiesta como una ansiedad intensa ante la posibilidad de ser dejados, ignorados o reemplazados por alguien significativo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este miedo no siempre es consciente, pero puede influir fuertemente en nuestras relaciones, generando dependencia emocional, celos excesivos o dificultad para confiar.
            </p>
          </section>

          {/* Qué no es el miedo al abandono */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <FrownOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué no es el miedo al abandono?
              </h2>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>• No es simple inseguridad o necesidad de atención</li>
              <li>• No es inmadurez emocional</li>
              <li>• No es manipulación intencional</li>
              <li>• No es algo que se elige sentir</li>
            </ul>
          </section>

          {/* Orígenes del miedo al abandono */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              ¿De dónde viene este miedo?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { titulo: 'Infancia con figuras inestables', texto: 'Cuidadores que fueron emocional o físicamente ausentes.' },
                { titulo: 'Experiencias de rechazo', texto: 'Vínculos tempranos que terminaron abruptamente o de forma dolorosa.' },
                { titulo: 'Trauma de apego', texto: 'Heridas relacionales no reparadas que generaron una necesidad extrema de pertenencia.' },
                { titulo: 'Aprendizaje de valor condicional', texto: 'Sentir que solo merezco afecto si cumplo expectativas o no incomodo.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">{item.titulo}</h3>
                  <p className="text-gray-700 text-sm">{item.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Estrategias terapéuticas */}
          <section className="mb-10 bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Cómo empezar a sanar el miedo al abandono?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { titulo: 'Reconoce el patrón emocional', texto: 'Identificar cómo reacciones repetitivas se activan en tus vínculos.' },
                { titulo: 'Diferencia entre pasado y presente', texto: 'Pregúntate: ¿Mi reacción es proporcional a lo que está pasando hoy?' },
                { titulo: 'Trabaja en tu autoestima', texto: 'Recordarte que tu valor no depende de que el otro se quede.' },
                { titulo: 'Comunicación emocional', texto: 'Aprender a expresar miedo y necesidad sin reclamos ni dramatización.' },
                { titulo: 'Terapia enfocada en apego', texto: 'El acompañamiento profesional es clave para resignificar heridas profundas.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full p-2 mr-4">
                    <span className="font-bold">{i + 1}</span>
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{item.titulo}</h3>
                    <p className="text-gray-700 text-sm">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Consecuencias de no abordarlo */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              <WarningOutlined className="text-red-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué pasa si no lo trabajo?
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li>• Relaciones dependientes o asfixiantes</li>
              <li>• Idealización o apego excesivo a quien te lastima</li>
              <li>• Dificultad para poner límites por miedo a que te dejen</li>
              <li>• Ansiedad ante cualquier señal de distancia</li>
              <li>• Ciclos de autosabotaje y abandono interno</li>
              <li>• Dificultad para estar solo sin sentir vacío</li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              El Abandono Real Duele, Pero el Imaginario también
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sanar el miedo al abandono no significa eliminarlo por completo, sino aprender a vivir con él sin que gobierne tus decisiones ni tus relaciones.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada vez que eliges no rogar, no perseguir, no forzar... estás haciendo algo que tu niño interior necesitaba: demostrarle que eres suficiente, incluso si alguien se va.
            </p>
          </section>

          {/* Botón de regreso */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 transition-colors"
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
