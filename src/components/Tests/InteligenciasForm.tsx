import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TestItem } from '../../types/TestTypes'
import { useTestInteligenciasLogic } from '../../hooks/useTestInteligenciasLogic'
import { inteligencias, inteligenciasOptions, inteligenciasMeta } from '../../data/tests/inteligencias'
import { 
  cardContainer, 
  cardItem, 
  progressBar, 
  progressFill 
} from "../../animations";
type InteligenciasFormProps = {
  title: string
}

const InteligenciasForm = ({ title }: InteligenciasFormProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showMissing, setShowMissing] = useState(false)
  const [missingQuestions, setMissingQuestions] = useState<string[]>([])
  const { calcularResultadoInteligencias } = useTestInteligenciasLogic()

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value }
      // Check for unanswered questions before the current one
      const currentIndex = inteligencias.findIndex(q => q.id === questionId)
      const prevUnanswered = inteligencias
        .slice(0, currentIndex)
        .filter(q => updated[q.id] === undefined)
        .map(q => q.id)
      
      setMissingQuestions(prevUnanswered)
      setShowMissing(prevUnanswered.length > 0)
      return updated
    })
  }

  const handleSubmit = () => {
    const unanswered = inteligencias
      .filter(q => answers[q.id] === undefined)
      .map(q => q.id)

    if (unanswered.length === 0) {
      setSubmitted(true)
    } else {
      setMissingQuestions(unanswered)
      setShowMissing(true)
      setTimeout(() => setShowMissing(false), 3000)
      
      // Scroll to first missing question
      const firstMissing = document.getElementById(`question-${unanswered[0]}`)
      firstMissing?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const result = submitted ? calcularResultadoInteligencias(answers) : null

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto p-4">
     
      <h1 className="text-2xl font-bold mb-2">{inteligenciasMeta.name}</h1>

      {/* Missing questions notification */}
      <AnimatePresence>
        {showMissing && missingQuestions.length > 0 && (
          <motion.div
            key="missing-notification"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-lg"
          >
            <p>Por favor responde todas las preguntas antes de continuar.</p>
            <p className="text-sm mt-1">
              {missingQuestions.length} pregunta{missingQuestions.length > 1 ? 's' : ''} sin responder
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted ? (
        <form className="space-y-6">
          {inteligencias.map((item: TestItem) => {
            const isMissing = showMissing && missingQuestions.includes(item.id)
            
            return (
              <motion.div
                key={item.id}
                id={`question-${item.id}`}
                layout
                className={`py-4 ${isMissing ? 'bg-red-50 px-4 -mx-4 rounded-lg' : ''}`}
                animate={{
                  x: isMissing ? [0, -5, 5, -5, 0] : 0
                }}
                transition={{
                  x: { duration: 0.6 },
                  layout: { duration: 0.3 }
                }}
              >
      <p className="text-gray-600 mb-6">{inteligenciasMeta.instruction}</p>

                <motion.p 
                  className={`font-medium ${isMissing ? 'text-red-600' : ''}`}
                >
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
                </motion.p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {inteligenciasOptions.map(opt => (
                    <motion.label
                      key={opt.value}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
                        answers[item.id] === opt.value
                          ? 'bg-blue-100 border border-blue-300'
                          : isMissing
                            ? 'bg-red-100 border border-red-200'
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
                        {answers[item.id] === opt.value && (
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        )}
                      </span>
                      {opt.label}
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md"
          >
            Ver resultados
          </motion.button>
        </form>
      ) : (
        <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="bg-white shadow-md p-6 rounded-lg"
>
  <motion.h3 
    className="text-xl font-bold mb-4"
    initial={{ y: -10 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
  >
    Resultados del Test de Inteligencias Múltiples
  </motion.h3>
  
  <div className="mb-6">
    <h4 className="font-semibold text-lg mb-2">Tus inteligencias más destacadas:</h4>
    <motion.ul 
      className="space-y-3"
      variants={cardContainer}
      initial="hidden"
      animate="show"
    >
      {result?.topInteligencias.map((item, index) => (
        <motion.li 
          key={index} 
          variants={cardItem}
          className="flex items-center"
        >
          <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
            index === 0 ? 'bg-blue-100 text-blue-800' :
            index === 1 ? 'bg-green-100 text-green-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {index + 1}
          </span>
          <div>
            <strong className="block">{item.categoria}</strong>
            <span className="text-sm text-gray-600">{item.puntuacion} puntos</span>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  </div>

  <motion.div 
    className="border-t pt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <h4 className="font-semibold mb-3">Puntajes completos por categoría:</h4>
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      variants={cardContainer}
      initial="hidden"
      animate="show"
    >
      {Object.entries(result?.puntuacionesPorCategoria ?? {}).map(([categoria, puntuacion]) => {
        const percentage = (puntuacion / 40) * 100;
        
        return (
          <motion.div
            key={categoria}
            variants={cardItem}
            className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-1 gap-2">
              <span 
                className="font-medium text-sm sm:text-base truncate flex-1"
                title={categoria}
              >
                {categoria}
              </span>
              <span className="text-sm bg-white px-2 py-1 rounded-full shadow-inner whitespace-nowrap">
                {puntuacion} pts
              </span>
            </div>
            
            <motion.div 
              variants={progressBar}
              className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
            >
              <motion.div 
                variants={progressFill(percentage/100)}
                className="bg-blue-500 h-2 rounded-full"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  </motion.div>
</motion.div>
      )}
    </div>
  )
}

export default InteligenciasForm