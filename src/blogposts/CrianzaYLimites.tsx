import { Link } from 'react-router-dom';
import { TeamOutlined, ExclamationCircleOutlined, BulbOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function CrianzaYLimites() {
  return (<><Helmet>
    <title>Crianza y límites: equilibrio entre amor y firmeza | Integralis Psicología</title>
    <meta name="description" content="Reflexiones psicológicas sobre cómo poner límites en la crianza sin caer en autoritarismo ni permisividad." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-500 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Crianza y Límites: Educar sin Gritar ni Ceder
            </h1>
            <p className="text-orange-100 text-lg md:text-xl opacity-90">
              Los límites no son castigos, son actos de amor que enseñan seguridad y responsabilidad
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          {/* Introducción */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              Establecer límites claros en la crianza es una de las tareas más difíciles y necesarias para el desarrollo emocional de niños y adolescentes. Un límite saludable transmite contención, estructura y amor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estudios en psicología del desarrollo han demostrado que los niños que crecen con límites firmes y afectivos desarrollan mejor autoestima, mayor tolerancia a la frustración y habilidades sociales más sólidas.
            </p>
          </section>

          {/* Qué no son los límites */}
          <section className="mb-10 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <ExclamationCircleOutlined className="text-yellow-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Qué no son los límites?
              </h2>
            </div>

            <ul className="text-gray-700 space-y-2">
              <li>• No son autoritarismo ni control excesivo</li>
              <li>• No significan frialdad emocional</li>
              <li>• No deben ser cambiantes o arbitrarios</li>
              <li>• No sustituyen al vínculo afectivo</li>
            </ul>
          </section>

          {/* Barreras a poner límites */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-orange-800 mb-6">
              ¿Por qué a veces cuesta tanto poner límites?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { titulo: 'Miedo al rechazo del hijo', texto: 'Confundir amor con complacencia genera inseguridad en ambos.' },
                { titulo: 'Falta de modelo propio', texto: 'Muchos padres repiten o evitan lo que vivieron sin reflexión.' },
                { titulo: 'Culpa parental', texto: 'Sentimientos de culpa llevan a ceder para “compensar”.' },
                { titulo: 'Falta de acuerdos entre cuidadores', texto: 'Mensajes contradictorios debilitan la autoridad y confunden al niño.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-800 mb-2">{item.titulo}</h3>
                  <p className="text-gray-700 text-sm">{item.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Estrategias para establecer límites */}
          <section className="mb-10 bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <BulbOutlined className="text-orange-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Claves para una Crianza con Límites Sanos
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { titulo: 'Sé firme y afectuoso a la vez', texto: 'La firmeza no es dureza. Puedes decir “no” sin dejar de amar.' },
                { titulo: 'Explica el porqué del límite', texto: 'Dar sentido ayuda a que el niño lo interiorice con más facilidad.' },
                { titulo: 'Sigue consecuencias naturales y lógicas', texto: 'No es castigo, es enseñanza. Que la consecuencia tenga relación con la conducta.' },
                { titulo: 'No cedas ante berrinches', texto: 'Ceder refuerza la conducta. Mantén la calma y la coherencia.' },
                { titulo: 'Valida emociones, no conductas', texto: 'Puedes aceptar que esté enojado, sin permitir que golpee o grite.' },
              ].map((estrategia, i) => (
                <div key={i} className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full p-2 mr-4">
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

          {/* Beneficios de los límites claros */}
          <section className="mb-10 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-4">
              <TeamOutlined className="text-green-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Beneficios de una Crianza con Límites Claros
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li>• Hijos más seguros y estables emocionalmente</li>
              <li>• Mayor respeto hacia la autoridad sana</li>
              <li>• Reducción de conductas impulsivas o agresivas</li>
              <li>• Mejor tolerancia a la frustración</li>
              <li>• Menos conflictos familiares a largo plazo</li>
              <li>• Vínculos más honestos y equilibrados</li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">
              Educar con Límites es Educar con Amor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Decir "no" también es cuidar. Poner límites es enseñarle al niño a convivir con los demás, a respetar su entorno y a autorregularse emocionalmente.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La crianza no es una tarea perfecta, pero sí puede ser coherente, afectiva y firme. Desde ahí, los hijos florecen.
            </p>
          </section>

          {/* Botón de regreso */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-yellow-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}
