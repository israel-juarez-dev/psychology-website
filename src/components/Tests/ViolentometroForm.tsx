import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { violentometro, violentometroOptions, violentometroMeta } from '../../data/tests/violentometro';
import { useTestViolentometroLogic } from '../../hooks/useTestViolentometroLogic';
import { Severity } from '../../types/TestTypes';
import {
  cardContainer,
  cardItem,
  fadeIn,
  slideUp,
  staggerContainer
} from '../../animations';

const severityColorClass: Record<Severity, string> = {
  leve: 'text-green-700 bg-yellow-200 px-2 py-1 text-sm rounded',
  moderado: 'text-green-700 bg-orange-200 px-2 py-1 text-sm rounded',
  alta: 'text-green-700 bg-red-200 px-2 py-1 text-sm rounded',
};

const ViolentometroForm = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [missingQuestions, setMissingQuestions] = useState<string[]>([]);
  const { calculateViolentometroResult } = useTestViolentometroLogic();

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };
      const currentIndex = violentometro.findIndex(q => q.id === questionId);
      const prevUnanswered = violentometro
        .slice(0, currentIndex)
        .filter(q => updated[q.id] === undefined)
        .map(q => q.id);
      
      setMissingQuestions(prevUnanswered);
      setShowMissing(prevUnanswered.length > 0);
      return updated;
    });
  };

  const handleSubmit = () => {
    const unanswered = violentometro
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

  const result = submitted ? calculateViolentometroResult(answers) : null;

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="pt-24 px-6 max-w-2xl mx-auto p-4"
    >
      <motion.h1 
        className="text-2xl font-bold mb-2"
        variants={fadeIn}
      >
        {violentometroMeta.name}
      </motion.h1>

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
            <motion.p 
              variants={cardItem}
              className="text-muted-foreground mb-1"
            >
              {violentometroMeta.description}
            </motion.p>
            
            <motion.p 
              variants={cardItem}
              className="text-sm italic text-muted-foreground mb-6"
            >
              {violentometroMeta.instruction}
            </motion.p>

            {violentometro.map((item) => {
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
                    {violentometroOptions.map(opt => (
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
          className="bg-white shadow-md p-6 rounded-lg"
        >
          <motion.h3 
            variants={cardItem}
            className="text-xl font-bold mb-4"
          >
            Resultado del Violentómetro
          </motion.h3>
          
          <motion.div variants={cardItem} className="mb-6">
            <p className="mb-2"><strong>{result?.result.label}</strong></p>
            <p className="mb-4">{result?.result.description}</p>
          </motion.div>

          <motion.div variants={cardItem}>
            <h4 className="font-semibold mb-2">Indicadores detectados:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Amarillo: {result?.yellow}</li>
              <li>Naranja: {result?.orange}</li>
              <li>Rojo: {result?.red}</li>
            </ul>
          </motion.div>

          <motion.div variants={cardItem}>
            <h4 className="font-semibold mb-2">Resumen por categoría:</h4>
            <ul className="list-disc list-inside">
              {result?.resumenPorCategoria &&
                Object.entries(result.resumenPorCategoria).map(([categoria, datos]) => (
                  <motion.li 
                    key={categoria}
                    variants={cardItem}
                    className="mb-2"
                  >
                    <strong>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</strong>{' '}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {datos.entries.map((entry, i) => (
                        <motion.span
                          key={i}
                          variants={cardItem}
                          className={`${severityColorClass[entry.severity]}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {entry.action}
                        </motion.span>
                      ))}
                    </div>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ViolentometroForm;