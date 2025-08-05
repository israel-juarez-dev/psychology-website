import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestItem } from '../../types/TestTypes';
import { useTestVocacionalLogic } from '../../hooks/useTestVocacionalLogic';
import { vocacionalOptions, vocacional, vocacionalMeta } from '../../data/tests/vocacional';
import { staggerContainer, fadeIn, slideUp, cardContainer, cardItem } from '../../animations';

type VocacionalFormProps = {
  title: string;
};

// Descripciones detalladas de cada categoría RIASEC
const riasecDescriptions = {
  Realista: {
    emoji: '🔧',
    name: 'Realista (Realistic)',
    interests: 'Actividades físicas, trabajo manual, mecánico, técnico.',
    environments: 'Ingeniería, construcción, electricidad, agricultura.',
    personality: 'Práctica, concreta, le gusta "hacer", trabajar con cosas.'
  },
  Investigador: {
    emoji: '💡',
    name: 'Investigador (Investigative)',
    interests: 'Resolver problemas, pensar de manera analítica, investigar.',
    environments: 'Ciencia, tecnología, matemáticas, medicina.',
    personality: 'Curiosa, lógica, introspectiva, disfruta aprender y entender cómo funcionan las cosas.'
  },
  Artístico: {
    emoji: '🎨',
    name: 'Artístico (Artistic)',
    interests: 'Expresión creativa, arte, música, escritura, diseño.',
    environments: 'Artes visuales, diseño gráfico, literatura, teatro, publicidad.',
    personality: 'Imaginativa, intuitiva, no estructurada, necesita libertad para crear.'
  },
  Social: {
    emoji: '👥',
    name: 'Social (Social)',
    interests: 'Ayudar a los demás, enseñar, guiar, colaborar.',
    environments: 'Psicología, trabajo social, educación, enfermería.',
    personality: 'Empática, comunicativa, solidaria, motivada por el bienestar de otros.'
  },
  Emprendedor: {
    emoji: '🧠',
    name: 'Emprendedor (Enterprising)',
    interests: 'Liderazgo, persuasión, negocios, política, ventas.',
    environments: 'Administración, derecho, marketing, emprendimiento.',
    personality: 'Ambiciosa, persuasiva, sociable, orientada a metas y resultados.'
  },
  Convencional: {
    emoji: '📋',
    name: 'Convencional (Conventional)',
    interests: 'Organización, datos, administración, procedimientos.',
    environments: 'Contaduría, banca, archivo, recursos humanos.',
    personality: 'Precisa, organizada, detallista, prefiere la estructura y la rutina.'
  }
};

// Combinaciones de categorías con interpretaciones
const combinationInterpretations = {
  'Realista-Investigador-Artístico': 'Combinación técnica-creativa. Ideal para diseño industrial, arquitectura o ingeniería con enfoque creativo.',
  'Realista-Investigador-Convencional': 'Perfil técnico-analítico. Excelente para ingenierías con componente administrativo o técnicos especializados.',
  'Investigador-Artístico-Social': 'Científico humanista. Perfecto para psicología, antropología o investigación social con enfoque creativo.',
  'Artístico-Social-Emprendedor': 'Creativo comunicador. Ideal para marketing, publicidad, relaciones públicas o gestión cultural.',
  'Social-Emprendedor-Convencional': 'Organizador de personas. Excelente para recursos humanos, administración pública o gestión educativa.',
  'Emprendedor-Convencional-Realista': 'Gestor de operaciones. Perfecto para logística, producción o gestión de proyectos técnicos.',
  'Investigador-Convencional-Realista': 'Analista metódico. Ideal para auditoría, control de calidad o investigación aplicada.',
  'Artístico-Emprendedor-Social': 'Líder creativo. Excelente para dirección artística, gestión de eventos o emprendimientos culturales.'
};

const VocacionalForm = ({ title }: VocacionalFormProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [missingQuestions, setMissingQuestions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof riasecDescriptions | null>(null);
  const { calculateVocacionalResult } = useTestVocacionalLogic();

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };
      const currentIndex = vocacional.findIndex(q => q.id === questionId);
      const prevUnanswered = vocacional
        .slice(0, currentIndex)
        .filter(q => updated[q.id] === undefined)
        .map(q => q.id);
      
      setMissingQuestions(prevUnanswered);
      setShowMissing(prevUnanswered.length > 0);
      return updated;
    });
  };

  const handleSubmit = () => {
    const unanswered = vocacional
      .filter(q => answers[q.id] === undefined)
      .map(q => q.id);

    if (unanswered.length === 0) {
      setSubmitted(true);
    } else {
      setMissingQuestions(unanswered);
      setShowMissing(true);
      setTimeout(() => setShowMissing(false), 3000);
      
      const firstMissing = document.getElementById(`question-${unanswered[0]}`);
      firstMissing?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const result = submitted ? calculateVocacionalResult(answers) : null;

  // Generar combinación de las 3 principales categorías
  const topCombination = result 
    ? result.topCategories.map(c => c.category).join('-') 
    : '';
  const combinationInterpretation = combinationInterpretations[topCombination as keyof typeof combinationInterpretations] || 
    'Combinación única que sugiere un perfil multifacético con diversas habilidades e intereses.';

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="pt-24 px-6 max-w-4xl mx-auto p-4"
    >
     
      <h1 className="text-2xl font-bold mb-6">{vocacionalMeta.name}</h1>
     

      
      {!submitted ? (
        <>
          <AnimatePresence>
            {showMissing && (
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-lg"
              >
                <p>Por favor responde todas las preguntas antes de continuar.</p>
                {missingQuestions.length > 1 && (
                  <p className="text-sm mt-1">
                    {missingQuestions.length} preguntas sin responder
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form 
            variants={cardContainer}
            className="space-y-6"
          >
            {vocacional.map((item: TestItem) => {
              const isMissing = showMissing && missingQuestions.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  id={`question-${item.id}`}
                  variants={cardItem}
                  className={`${isMissing ? 'bg-red-50 px-4 -mx-4 rounded-lg py-3' : ''}`}
                  whileHover={{ scale: isMissing ? 1 : 1.01 }}
                  animate={{
                    x: isMissing ? [0, -5, 5, -5, 0] : 0
                  }}
                  transition={{
                    x: isMissing ? { duration: 0.6 } : { type: "spring", stiffness: 100 }
                  }}
                >
      <p className="text-gray-600 mb-6">{vocacionalMeta.instruction}</p>

                  <p className={`font-medium ${isMissing ? 'text-red-600' : ''}`}>
                    {item.question}
                    {isMissing && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 inline-block bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs"
                      >
                        Falta responder
                      </motion.span>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {vocacionalOptions.map(opt => (
                      <motion.label
                        key={opt.value}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
                          answers[item.id] === opt.value
                            ? 'bg-blue-100 border border-blue-300'
                            : isMissing
                              ? 'bg-red-50 border border-red-200'
                              : 'bg-gray-100 hover:bg-gray-200 border border-gray-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name={item.id}
                          value={opt.value}
                          checked={answers[item.id] === opt.value}
                          onChange={() => handleChange(item.id, opt.value)}
                          className="hidden"
                        />
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          answers[item.id] === opt.value
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : isMissing
                              ? 'border-red-400'
                              : 'border-gray-400'
                        }`}>
                          {answers[item.id] === opt.value && '✓'}
                        </span>
                        {opt.label}
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            <motion.button
              variants={fadeIn}
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md"
            >
              Ver resultado
            </motion.button>
          </motion.form>
        </>
      ) : (
        <motion.div
          variants={cardContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Resultados principales */}
          <motion.div 
            variants={cardItem}
            className="bg-white shadow-md p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Resultados del Test Vocacional</h3>
            
            <div className="space-y-6">
  <h4 className="font-semibold mb-3">Tus áreas más destacadas:</h4>
  
  {result?.topCategories.map((category, index) => (
    <div key={index} className="mb-4">
      {/* Category Selector */}
      <motion.div
        whileHover={{ backgroundColor: "#f8fafc" }}
        onClick={() => setSelectedCategory(
          selectedCategory === category.category ? null : category.category
        )}
        className={`p-4 rounded-lg cursor-pointer border-2 transition-colors ${
          index === 0 ? 'border-blue-200 hover:bg-blue-50' :
          index === 1 ? 'border-green-200 hover:bg-green-50' :
          'border-yellow-200 hover:bg-yellow-50'
        } ${
          selectedCategory === category.category ? 
            index === 0 ? 'bg-blue-50' :
            index === 1 ? 'bg-green-50' :
            'bg-yellow-50' : 'bg-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-2xl mr-3 ${
              index === 0 ? 'text-blue-600' :
              index === 1 ? 'text-green-600' :
              'text-yellow-600'
            }`}>
              {riasecDescriptions[category.category].emoji}
            </span>
            <div>
              <h5 className="font-bold">{category.category}</h5>
              <p className="text-sm text-gray-600">{category.score} puntos</p>
            </div>
          </div>
          <motion.span
            animate={{ rotate: selectedCategory === category.category ? 180 : 0 }}
            className="text-gray-500"
          >
            ▼
          </motion.span>
        </div>
      </motion.div>

      {/* Detailed Description - appears below each select */}
      <AnimatePresence>
        {selectedCategory === category.category && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden rounded-b-lg border-x-2 border-b-2 ${
              index === 0 ? 'border-blue-200 bg-blue-50' :
              index === 1 ? 'border-green-200 bg-green-50' :
              'border-yellow-200 bg-yellow-50'
            }`}
          >
            <div className="p-4">
              <div className="space-y-3">
                <div>
                  <h6 className="font-semibold text-gray-700">Intereses:</h6>
                  <p className="text-gray-600">{riasecDescriptions[category.category].interests}</p>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-700">Ambientes ideales:</h6>
                  <p className="text-gray-600">{riasecDescriptions[category.category].environments}</p>
                </div>
                <div>
                  <h6 className="font-semibold text-gray-700">Tipo de persona:</h6>
                  <p className="text-gray-600">{riasecDescriptions[category.category].personality}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
            {/* Interpretación de combinación */}
            <motion.div 
              variants={cardItem}
              className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6"
            >
              <h4 className="font-bold text-purple-800 mb-2">Interpretación de tu combinación:</h4>
              <p className="font-medium mb-2">{topCombination}</p>
              <p>{combinationInterpretation}</p>
            </motion.div>

            {/* Todos los puntajes */}
            <div>
              <h4 className="font-semibold mb-3">Puntajes por categoría:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(result?.scoresByCategory ?? {}).map(([category, score]) => {
                  const percentage = (score / (5 * 5)) * 100; // Máximo 25 puntos por categoría (5 preguntas * 5 puntos)
                  return (
                    <motion.div
                      key={category}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedCategory(category as keyof typeof riasecDescriptions)}
                      className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-1 gap-2">
                        <span className="font-medium text-sm sm:text-base truncate flex-1">
                          {category}
                        </span>
                        <span className="text-sm bg-white px-2 py-1 rounded-full shadow-inner whitespace-nowrap">
                          {score} pts
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className={`h-2 rounded-full ${
                            category === result.topCategories[0].category ? 'bg-blue-500' :
                            category === result.topCategories[1].category ? 'bg-green-500' :
                            category === result.topCategories[2].category ? 'bg-yellow-500' :
                            'bg-gray-400'
                          }`}
                          initial={{ scaleX: 0, transformOrigin: "left" }}
                          animate={{ 
                            scaleX: percentage/100,
                            transformOrigin: "left" 
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 60 
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        

          {/* Información sobre RIASEC */}
          <motion.div
            variants={cardItem}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <h4 className="font-bold mb-2">¿Qué es el modelo RIASEC?</h4>
            <p className="text-sm text-gray-600">
              El modelo RIASEC, desarrollado por John Holland, clasifica los intereses vocacionales en 6 categorías:
              Realista, Investigador, Artístico, Social, Emprendedor y Convencional. Tu combinación de intereses
              principales puede ayudarte a identificar carreras y ambientes laborales que se ajusten a tu personalidad.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VocacionalForm;