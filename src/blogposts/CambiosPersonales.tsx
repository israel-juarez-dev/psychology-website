import { Link } from 'react-router-dom';
import { ReloadOutlined, HourglassOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function CambiosPersonal() {
  return (<><Helmet>
    <title>Cómo afrontar cambios personales importantes | Integralis Psicología</title>
    <meta name="description" content="Desde la psicología, analizamos cómo adaptarte a cambios internos o externos sin perder tu equilibrio emocional." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Cambios Personales: Cómo Transformarse sin Perderse
            </h1>
            <p className="text-cyan-100 text-lg md:text-xl opacity-90">
              Crecer implica soltar versiones de ti que ya no te sirven
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          {/* Introducción */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Los cambios personales no siempre comienzan con una decisión clara. A veces nacen del dolor, del hastío o de una incomodidad que ya no se puede ignorar. Cambiar no es fácil, pero quedarse igual suele doler más.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La psicología ha demostrado que el cambio real es un proceso gradual, no un evento. Comprender este proceso puede ayudarte a tener más paciencia contigo mismo y a no rendirte antes de tiempo.
            </p>
          </section>

          {/* Mitos sobre el cambio */}
          <section className="mb-10 bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
            <div className="flex items-center mb-4">
              <ReloadOutlined className="text-cyan-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Mitos comunes sobre el cambio personal
              </h2>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• “Si quiero cambiar, debo poder hacerlo ya”</li>
              <li>• “Cambiar significa dejar de ser yo mismo”</li>
              <li>• “Si recaigo, todo el progreso se pierde”</li>
              <li>• “El cambio viene solo con motivación”</li>
            </ul>
          </section>

          {/* Etapas del cambio */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              Etapas psicológicas del cambio (Prochaska y DiClemente)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { titulo: '1. Precontemplación', texto: 'No hay conciencia del problema o se minimiza.' },
                { titulo: '2. Contemplación', texto: 'Empiezas a considerar que algo debe cambiar.' },
                { titulo: '3. Preparación', texto: 'Haces planes, buscas recursos o ayudas.' },
                { titulo: '4. Acción', texto: 'Implementas nuevos hábitos o decisiones concretas.' },
                { titulo: '5. Mantenimiento', texto: 'Sostienes los cambios con esfuerzo consciente.' },
                { titulo: '6. Recaída (no fracaso)', texto: 'Una parte normal del proceso de aprendizaje.' }
              ].map((etapa, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">{etapa.titulo}</h3>
                  <p className="text-gray-700 text-sm">{etapa.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Claves para el cambio real */}
          <section className="mb-10 bg-teal-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-teal-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Claves para sostener un cambio verdadero
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { titulo: 'Ten claridad en tu “para qué”', texto: 'Saber para qué estás cambiando te ayuda a resistir la incomodidad.' },
                { titulo: 'Sé amable con tus recaídas', texto: 'No son fracasos, son retrocesos momentáneos en un camino más largo.' },
                { titulo: 'Celebra cada pequeño paso', texto: 'El cambio duradero se construye a partir de avances pequeños pero sostenidos.' },
                { titulo: 'Rodéate de entornos que te apoyen', texto: 'Las personas y espacios que frecuentas influyen en tu proceso.' },
                { titulo: 'Busca ayuda profesional si es necesario', texto: 'El acompañamiento terapéutico puede darte herramientas concretas y apoyo emocional.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="bg-teal-100 text-teal-800 rounded-full p-2 mr-4">
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

          {/* Obstáculos comunes */}
          <section className="mb-10 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-4">
              <HourglassOutlined className="text-red-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Obstáculos frecuentes al cambiar
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li>• Miedo a perder la identidad</li>
              <li>• Falta de apoyo social o incomprensión</li>
              <li>• Autoexigencia excesiva</li>
              <li>• Apego al pasado o a lo conocido</li>
              <li>• Impaciencia con los resultados</li>
              <li>• Creencias limitantes sobre uno mismo</li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-teal-800 mb-4">
              Cambiar es Difícil, Pero También es un Acto de Amor Propio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              No se trata de convertirte en alguien diferente, sino en alguien más honesto contigo mismo. Cambiar es muchas veces reaprender a cuidarte.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aunque el camino no siempre sea recto, cada paso cuenta. Y cada paso es prueba de que estás avanzando, incluso si a veces retrocedes un poco. Sé paciente. Estás Integralis.
            </p>
          </section>

          {/* Botón de regreso */}
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
            <p>Publicado por <span className="font-semibold text-teal-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}
