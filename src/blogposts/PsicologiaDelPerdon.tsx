import { Link } from 'react-router-dom';
import { HeartOutlined, SmileOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function PsicologiaDelPerdon() {
  return (<><Helmet>
    <title>Psicología del perdón: liberar el resentimiento | Integralis Psicología</title>
    <meta name="description" content="Analizamos cómo el perdón impacta emocionalmente y cómo encontrar paz mental desde la psicología." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Psicología del Perdón: Liberarte del Peso Emocional
            </h1>
            <p className="text-pink-100 text-lg md:text-xl opacity-90">
              Aprende cómo perdonar te ayuda a sanar, no a justificar lo que te hirió
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          {/* Introducción */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              El perdón es uno de los procesos psicológicos más complejos y sanadores. No se trata de olvidar lo ocurrido, sino de dejar de cargar con el dolor, el resentimiento o la necesidad de venganza.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estudios en psicología clínica han demostrado que las personas que trabajan en el perdón presentan menores niveles de ansiedad, depresión y enfermedades cardiovasculares.
            </p>
          </section>

          {/* Qué no es perdonar */}
          <section className="mb-10 bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
            <div className="flex items-center mb-4">
              <SmileOutlined className="text-rose-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué no es perdonar?
              </h2>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>• No es justificar lo injustificable</li>
              <li>• No es negar el daño o fingir que no dolió</li>
              <li>• No es reconciliarse con quien no ha cambiado</li>
              <li>• No es debilidad: es un acto de fortaleza emocional</li>
            </ul>
          </section>

          {/* Barreras al perdón */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-pink-800 mb-6">
              Obstáculos Comunes para Perdonar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { titulo: 'Dolor no procesado', texto: 'Mientras más reprimimos el dolor, más difícil se vuelve soltarlo.' },
                { titulo: 'Confusión con la reconciliación', texto: 'Se puede perdonar sin volver a vincularse con quien dañó.' },
                { titulo: 'Creencias sobre justicia', texto: 'Pensar que perdonar equivale a que el otro “se salga con la suya”.' },
                { titulo: 'Identidad victimizada', texto: 'Cuando el resentimiento se vuelve parte de cómo nos definimos.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">{item.titulo}</h3>
                  <p className="text-gray-700 text-sm">{item.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Estrategias para perdonar */}
          <section className="mb-10 bg-pink-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-pink-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Estrategias Terapéuticas para Trabajar el Perdón
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { titulo: 'Valida tu dolor', texto: 'Reconocer lo que sentiste es el primer paso para soltar.' },
                { titulo: 'Carta de expresión emocional', texto: 'Escribe sin filtros todo lo que sientes hacia quien te dañó.' },
                { titulo: 'Enfoque en tu bienestar', texto: 'Perdonas para liberarte tú, no para liberar al otro.' },
                { titulo: 'Reencuadre cognitivo', texto: 'Busca comprender el contexto del otro, sin justificar.' },
                { titulo: 'Terapia enfocada en trauma', texto: 'Un proceso acompañado puede facilitar el perdón profundo.' },
              ].map((estrategia, i) => (
                <div key={i} className="flex items-start">
                  <span className="bg-pink-100 text-pink-800 rounded-full p-2 mr-4">
                    <span className="font-bold">{i + 1}</span>
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">{estrategia.titulo}</h3>
                    <p className="text-gray-700 text-sm">{estrategia.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Beneficios del perdón */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-4">
              <HeartOutlined className="text-purple-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Beneficios Psicológicos del Perdón
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li>• Reducción del estrés crónico</li>
              <li>• Mayor regulación emocional</li>
              <li>• Mejora en la calidad del sueño</li>
              <li>• Incremento del bienestar subjetivo</li>
              <li>• Disminución del rencor y pensamientos obsesivos</li>
              <li>• Más espacio mental para metas personales</li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">
              El Perdón: Un Acto de Amor Propio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Perdonar no borra lo vivido, pero redefine el lugar que el dolor ocupa en tu historia. Es dejar de ser esclavo del pasado para volver a elegir quién quieres ser hoy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A veces, el perdón más difícil es hacia ti mismo. Pero es precisamente ese el que más libertad puede traer.
            </p>
          </section>

          {/* Botón de regreso */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-rose-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}
