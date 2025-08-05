import React from "react";
import { Link } from "react-router-dom";
import { CalendarOutlined, ReadOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet-async";
const blogPosts = [
  {
    slug: "infidelidad",
    title: "Cómo enfrentar una infidelidad desde la psicología",
    excerpt: "Reflexiones psicológicas sobre el proceso emocional después de una traición y cómo iniciar un proceso de sanación.",
    date: "2025-07-08",
    category: "Relaciones",
    readTime: "5 min"
  },
  {
    slug: "autoestima",
    title: "¿Qué es la autoestima y cómo fortalecerla?",
    excerpt: "Exploramos cómo se forma la autoestima, cómo afecta nuestras decisiones y qué podemos hacer para mejorarla desde la psicología.",
    date: "2025-07-12",
    category: "Desarrollo Personal",
    readTime: "6 min"
  },
  {
    slug: "ansiedad",
    title: "Ansiedad: cuando la mente corre más rápido que la vida",
    excerpt: "Comprende por qué aparece la ansiedad, cómo se siente y qué herramientas psicológicas pueden ayudarte a manejarla.",
    date: "2025-07-14",
    category: "Salud Mental",
    readTime: "7 min"
  },
  {
    slug: "duelo-amoroso",
    title: "Duelo amoroso: cómo sanar después de una ruptura",
    excerpt: "Perder una relación duele, pero entender el proceso emocional puede ayudarte a reconstruirte con mayor claridad y compasión.",
    date: "2025-07-16",
    category: "Relaciones",
    readTime: "8 min"
  },
  {
    slug: "depresion",
    title: "Depresión: más allá de estar triste",
    excerpt: "Analizamos cómo se manifiesta la depresión, qué mitos existen y cómo la psicología puede ayudarte a entenderla y tratarla.",
    date: "2025-07-18",
    category: "Salud Mental",
    readTime: "9 min"
  },
  {
    slug: "sentido-de-vida",
    title: "¿Qué sentido tiene la vida? Una mirada desde la psicología",
    excerpt: "Exploramos cómo las personas construyen significado y propósito, especialmente en momentos de crisis existencial.",
    date: "2025-07-20",
    category: "Desarrollo Personal",
    readTime: "6 min"
  },
  {
    slug: "relaciones-toxicas",
    title: "Relaciones tóxicas: señales de alerta y caminos para salir",
    excerpt: "Identificar una relación dañina no siempre es fácil. Aquí te explicamos qué observar y cómo empezar a tomar distancia.",
    date: "2025-07-22",
    category: "Relaciones",
    readTime: "10 min"
  },
  {
    slug: "comunicacion-en-pareja",
    title: "Comunicación en pareja: más que hablar, es escuchar",
    excerpt: "Una comunicación efectiva puede transformar tu relación. Descubre qué errores comunes cometemos y cómo mejorar la conexión.",
    date: "2025-07-24",
    category: "Relaciones",
    readTime: "5 min"
  },
  {
    slug: "celos-e-inseguridad",
    title: "Celos e inseguridad: ¿amor o miedo a perder?",
    excerpt: "Los celos no son prueba de amor, sino una señal de inseguridad. En este post analizamos sus causas y cómo trabajarlos.",
    date: "2025-07-26",
    category: "Relaciones",
    readTime: "7 min"
  },
  {
    slug: "manejo-del-enojo",
    title: "Manejo del enojo: sentirlo sin destruir",
    excerpt: "El enojo es natural, pero su expresión puede dañar. Aprende a reconocerlo, canalizarlo y usarlo a tu favor.",
    date: "2025-07-28",
    category: "Emociones",
    readTime: "6 min"
  },
  {
    slug: "aceptacion-personal",
    title: "Aceptación personal: dejar de pelear contigo mismo",
    excerpt: "Aceptar quién eres no significa resignarte, sino empezar a vivir con mayor compasión y libertad interna.",
    date: "2025-07-30",
    category: "Desarrollo Personal",
    readTime: "8 min"
  },
  {
    slug: "ruptura-despues-de-anos",
    title: "Ruptura después de muchos años: cuando la vida cambia sin aviso",
    excerpt: "Exploramos el impacto psicológico de separarse tras una relación larga y cómo reconstruir el proyecto de vida.",
    date: "2025-08-01",
    category: "Relaciones",
    readTime: "9 min"
  },
  {
    slug: "comparacion-social",
    title: "Comparación social: el veneno silencioso de las redes",
    excerpt: "Compararnos con los demás es natural, pero en exceso nos lastima. Aquí te explicamos cómo manejar esa tendencia.",
    date: "2025-08-03",
    category: "Desarrollo Personal",
    readTime: "5 min"
  },
  {
    slug: "psicologia-del-perdon",
    title: "La psicología del perdón: liberarte no es justificar",
    excerpt: "Perdonar no siempre es fácil, pero puede ser un paso clave para sanar heridas emocionales y seguir adelante.",
    date: "2025-08-05",
    category: "Emociones",
    readTime: "7 min"
  },
  {
    slug: "crianza-y-limites",
    title: "Crianza con límites: entre el afecto y la firmeza",
    excerpt: "Poner límites no es castigar, sino cuidar. Analizamos cómo establecerlos sin dañar el vínculo con hijos adolescentes.",
    date: "2025-08-07",
    category: "Familia",
    readTime: "8 min"
  },
  {
    slug: "miedo-al-abandono",
    title: "Miedo al abandono: heridas que arrastramos desde la infancia",
    excerpt: "Detrás del miedo a ser dejados suele haber experiencias pasadas no resueltas. Te ayudamos a entenderlas y trabajarlas.",
    date: "2025-08-09",
    category: "Emociones",
    readTime: "6 min"
  },
  {
    slug: "autoaceptacion-adulta",
    title: "Autoaceptación en la adultez: reconciliarte contigo a cualquier edad",
    excerpt: "Nunca es tarde para construir una relación más sana contigo mismo. Descubre cómo comenzar ese camino.",
    date: "2025-08-11",
    category: "Desarrollo Personal",
    readTime: "7 min"
  },
  {
    slug: "vocacion-y-profesion",
    title: "Vocación y profesión: ¿cómo saber si estás donde deberías estar?",
    excerpt: "Muchos adultos viven frustrados con su trabajo. Hablamos sobre el sentido vocacional y cómo reenfocar tu camino.",
    date: "2025-08-13",
    category: "Desarrollo Personal",
    readTime: "9 min"
  },
  {
    slug: "cambios-personales",
    title: "Cambios personales: cuando crecer también implica soltar",
    excerpt: "Cambiar no siempre es cómodo, pero puede ser liberador. Este post explora cómo adaptarte a nuevas versiones de ti.",
    date: "2025-08-15",
    category: "Desarrollo Personal",
    readTime: "6 min"
  },
  {
    slug: "trauma-emocional",
    title: "Trauma emocional: entender la herida para poder sanar",
    excerpt: "El trauma no siempre viene de lo visible. Aquí te explicamos cómo se forma, cómo se expresa y cómo se puede tratar.",
    date: "2025-08-17",
    category: "Salud Mental",
    readTime: "10 min"
  }
];

const categoryColors = {
  "Relaciones": "bg-pink-100 text-pink-800",
  "Desarrollo Personal": "bg-blue-100 text-blue-800",
  "Salud Mental": "bg-purple-100 text-purple-800",
  "Emociones": "bg-green-100 text-green-800",
  "Familia": "bg-orange-100 text-orange-800"
};

const BlogIndex = () => {
  return (<><Helmet>
    <title>Blog de Psicología | Creciendo Psicología</title>
    <meta
      name="description"
      content="Lee artículos sobre salud mental, emociones, relaciones y crecimiento personal desde un enfoque psicológico accesible y profesional."
    />
    <meta property="og:title" content="Blog de Psicología | Creciendo Psicología" />
    <meta
      property="og:description"
      content="Explora reflexiones y recursos sobre autoestima, ansiedad, manejo emocional y más. Psicoterapia explicada con claridad y empatía."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.creciendopsicologia.com/blog" />
    <meta property="og:image" content="https://www.creciendopsicologia.com/og-blog.jpg" />
    <link rel="canonical" href="https://www.creciendopsicologia.com/blog" />
  </Helmet>
    <div className="max-w-7xl mx-auto px-4 py-36 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explorando la Mente Humana
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Artículos profesionales sobre psicología, bienestar emocional y desarrollo personal
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(categoryColors).map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[category]}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[post.category]}`}>
                {post.category}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link to={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarOutlined className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ReadOutlined className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                Leer artículo completo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Anterior
          </button>
          <button className="px-4 py-2 border rounded-md bg-indigo-600 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Siguiente
          </button>
        </nav>
      </div>
    </div></>
  );
};

export default BlogIndex;