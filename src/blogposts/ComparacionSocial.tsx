import { Link } from 'react-router-dom';
import { SearchOutlined, BulbOutlined, TeamOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

export default function ComparacionSocial() {
  return (<><Helmet>
    <title>Comparación social: cómo afecta nuestra autoestima | Integralis Psicología</title>
    <meta name="description" content="Exploramos cómo la comparación constante con los demás impacta nuestra autoimagen y qué hacer al respecto." />
  </Helmet>

    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-10 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Comparación Social: El Veneno Silencioso de las Redes
            </h1>
            <p className="text-purple-100 text-lg md:text-xl opacity-90">
              Cómo dejar de medir tu valor contra estándares irreales
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-10 max-w-3xl mx-auto prose prose-lg">
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed mb-6">
              La comparación social es un proceso psicológico natural, pero en la era digital se ha convertido en una fuente masiva de infelicidad. Estudios de la Universidad de Stanford revelan que el 82% de las personas experimentan emociones negativas después de pasar tiempo en redes sociales, principalmente por compararse con versiones idealizadas de la vida ajena.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El problema no es compararnos ocasionalmente, sino hacerlo de manera automática, constante y casi siempre ascendente (comparándonos con quienes parecen estar mejor). Esta dinámica mina nuestra autoestima y distorsiona nuestra percepción de la realidad.
            </p>
          </section>

          {/* Mecanismos Psicológicos */}
          <section className="mb-10 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-4">
              <SearchOutlined className="text-purple-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                ¿Por qué nos comparamos tanto?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Razones evolutivas</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Nuestros cerebros están programados para evaluar nuestro estatus en el grupo
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    En el pasado, esto era crucial para la supervivencia
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Factores modernos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Las redes sociales muestran versiones editadas de la realidad
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    El algoritmo nos expone principalmente a "vidas perfectas"
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Cultura que glorifica el éxito constante y visible
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tipos de Comparación */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              3 Tipos de Comparación Social y sus Efectos
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Ascendente</h3>
                <p className="text-gray-700 text-sm">
                  Compararse con quienes parecen estar mejor. Aumenta la insatisfacción pero puede motivar si es realista.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Descendente</h3>
                <p className="text-gray-700 text-sm">
                  Compararse con quienes parecen estar peor. Puede aumentar autoestima pero genera falsa seguridad.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-2">Lateral</h3>
                <p className="text-gray-700 text-sm">
                  Compararse con pares en situaciones similares. La más saludable para evaluar progreso real.
                </p>
              </div>
            </div>
          </section>

          {/* Costos Emocionales */}
          <section className="mb-10 bg-pink-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">

              <h2 className="text-2xl font-semibold text-gray-800">
                Costos Emocionales de la Comparación Excesiva
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Efectos psicológicos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Ansiedad y depresión (aumento del 30% en última década)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Síndrome del impostor
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Disminución de la autoestima
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Impacto en la vida</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Decisiones basadas en estándares ajenos
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Relaciones superficiales por miedo al juicio
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Pérdida de autenticidad
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Estrategias para Reducir Comparación */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              5 Estrategias para Liberarte de la Comparación Tóxica
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">1</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Desintoxicación digital</h3>
                  <p className="text-gray-700 text-sm">
                    Reduce tiempo en redes, elimina cuentas que te hacen sentir mal, usa apps que limiten tu acceso.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">2</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Practica la gratitud radical</h3>
                  <p className="text-gray-700 text-sm">
                    Lista diaria de 3 cosas que aprecias de tu vida actual. Estudios muestran aumento del 25% en bienestar.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">3</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Reenfoca en tu progreso</h3>
                  <p className="text-gray-700 text-sm">
                    Compara tu presente solo con tu pasado, no con los demás. Celebra pequeñas mejoras.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">4</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Humaniza las comparaciones</h3>
                  <p className="text-gray-700 text-sm">
                    Recuerda que todos tienen luchas invisibles. Detrás de cada "éxito" hay una historia compleja.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4">
                  <span className="font-bold">5</span>
                </span>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Cultiva tu autoconcepto</h3>
                  <p className="text-gray-700 text-sm">
                    Define tu éxito por tus valores, no por estándares externos. ¿Qué es realmente importante para ti?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios de Dejar de Compararse */}
          <section className="mb-10 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-4">
              <TeamOutlined className="text-indigo-600 text-2xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Beneficios de Reducir la Comparación Social
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">+30% de satisfacción vital:</span> Según estudios en psicología positiva
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Relaciones más auténticas:</span> Menos envidia, más conexión genuina
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Mayor creatividad:</span> Al no limitarte a copiar lo que otros hacen
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Decisiones más alineadas:</span> Con tus valores reales, no presiones sociales
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Reducción de ansiedad:</span> Menos preocupación por "quedar mal"
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <div>
                  <span className="font-medium">Libertad emocional:</span> Para disfrutar tu camino único
                </div>
              </li>
            </ul>
          </section>

          {/* Conclusión */}
          <section className="mb-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              El Poder de Ser Tú Mismo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Como dijo Theodore Roosevelt: "La comparación es el ladrón de la alegría". En un mundo que constantemente nos insta a mirar hacia afuera, el verdadero acto revolucionario es volver la mirada hacia dentro - a nuestros propios valores, progresos y formas únicas de estar en el mundo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La próxima vez que te encuentres comparándote, recuerda: no estás viendo la película completa de nadie, solo los clips destacados. Tu historia es demasiado valiosa para reducirla a una comparación injusta.
            </p>
          </section>

          {/* Back button */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Regresar a la lista de posts
            </Link>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
            <p>Publicado por <span className="font-semibold text-purple-700">Integralis Psicología</span>. Todos los derechos reservados.</p>
          </footer>
        </div>
      </article>
    </div></>
  );
}