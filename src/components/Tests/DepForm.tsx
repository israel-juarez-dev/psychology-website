import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dep, depOptions, depMeta } from '../../data/tests/dep';
import { useTestPhq9Logic } from '../../hooks/useTestPhq9Logic';

const DepForm = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [missingBefore, setMissingBefore] = useState<string[]>([]);
  const { calculateResult } = useTestPhq9Logic();

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };
      const indexRespondida = dep.findIndex(q => q.id === questionId);
      const prevMissing = dep
        .slice(0, indexRespondida)
        .filter(q => updated[q.id] === undefined)
        .map(q => q.id);
      setMissingBefore(prevMissing);
      setShowMissing(prevMissing.length > 0);
      return updated;
    });
  };

  const handleSubmit = () => {
    const lastAnsweredIndex = dep.reduce(
      (last, q, idx) => answers[q.id] !== undefined ? idx : last,
      -1
    );

    const unansweredBeforeLast = dep
      .slice(0, lastAnsweredIndex + 1)
      .filter(q => answers[q.id] === undefined);

    if (unansweredBeforeLast.length === 0) {
      setSubmitted(true);
    } else {
      setMissingBefore(unansweredBeforeLast.map(q => q.id));
      setShowMissing(true);
      setTimeout(() => setShowMissing(false), 3000);
      const firstMissing = document.getElementById(`question-${unansweredBeforeLast[0].id}`);
      firstMissing?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const result = submitted ? calculateResult(answers) : null;

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{depMeta.name}</h1>

      {/* Missing questions notification */}
      <AnimatePresence>
        {showMissing && missingBefore.length > 0 && (
          <motion.div
            key="missing-notification"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 rounded-lg"
          >
            <p>Por favor responde las preguntas anteriores primero</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted ? (
        <form className="space-y-8">
          {dep.map((item, index) => {
            const isUnanswered = answers[item.id] === undefined;
            const shouldHighlight = showMissing && missingBefore.includes(item.id);

            return (
              <motion.div
                key={item.id}
                id={`question-${item.id}`}
                layout
                className={`pb-6 border-b last:border-b-0 ${shouldHighlight ? 'bg-red-50/50 px-4 -mx-4 rounded-lg' : ''
                  }`}
                animate={{
                  x: shouldHighlight ? [0, -5, 5, -5, 0] : 0
                }}
                transition={{
                  x: { duration: 0.6 },
                  layout: { duration: 0.3 }
                }}
              >
                <p className="text-gray-600 mb-6">{depMeta.instruction}</p>

                <motion.p
                  className={`font-medium text-lg mb-3 ${shouldHighlight ? 'text-red-600' : ''
                    }`}
                >
                  <span className="mr-2 font-bold">{index + 1}.</span>
                  {item.question}

                  {shouldHighlight && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2 inline-block bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs"
                    >
                      Falta responder
                    </motion.span>
                  )}
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {depOptions.map(opt => (
                    <motion.label
                      key={opt.value}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${answers[item.id] === opt.value
                        ? 'bg-blue-50 border-blue-500'
                        : shouldHighlight
                          ? 'border-red-200 bg-red-50/50'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                      <input
                        type="radio"
                        name={item.id}
                        value={opt.value}
                        onChange={() => handleChange(item.id, opt.value)}
                        className="hidden"
                      />
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${answers[item.id] === opt.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-400'
                        }`}>
                        {answers[item.id] === opt.value && (
                          <span className="w-2 h-2 rounded-full bg-white"></span>
                        )}
                      </span>
                      <span>{opt.label}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <motion.button
            type="button"
            onClick={handleSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md"
          >
            Ver resultados
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -3,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          className="bg-white shadow-lg p-6 rounded-xl space-y-6"
        >
          <h3 className="text-xl font-bold mb-2">Resultados DEP Estado de ánimo</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Puntuación total:</span>
              <span className="text-2xl font-bold">{result?.totalScore}/27</span>
            </div>

            <div className="flex items-center">
              <span className="font-medium">Nivel de Estado de Ánimo:</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${result?.severity === 'alta'
                ? 'bg-red-100 text-red-800'
                : result?.severity.includes('moderada')
                  ? 'bg-orange-100 text-orange-800'
                  : result?.severity === 'leve'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                {result?.severity}
              </span>
            </div>
          </div>

          {/* Tabla de puntuación DEP Estado de ánimo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h4 className="font-bold mb-3 text-center">Escala DEP Estado de ánimo</h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-sm font-medium">Puntuación</th>
                    <th className="text-left py-2 px-3 text-sm font-medium">Nivel</th>
                    <th className="text-left py-2 px-3 text-sm font-medium">Recomendación</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { score: '0-4', level: 'Mínimo', rec: 'No se observan indicios importantes en este momento.' },
                    { score: '5-9', level: 'Leve', rec: 'Sería útil mantenerse atento(a) y hacer seguimiento de cómo te sientes.' },
                    { score: '10-14', level: 'Moderado', rec: 'Considera consultar con un profesional para orientación y evaluación.' },
                    { score: '15-19', level: 'Moderado alto', rec: 'Se sugiere buscar apoyo profesional para abordar lo que estás sintiendo.' },
                    { score: '20-27', level: 'Alto', rec: 'Es recomendable una atención profesional prioritaria para tu bienestar.' }
                  ].map((row, i) => (
                    <motion.tr
                      key={row.score}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`border-b border-gray-100 last:border-b-0 ${result &&
                        (result.totalScore <= 4 && row.score === '0-4' ||
                          result.totalScore >= 5 && result.totalScore <= 9 && row.score === '5-9' ||
                          result.totalScore >= 10 && result.totalScore <= 14 && row.score === '10-14' ||
                          result.totalScore >= 15 && result.totalScore <= 19 && row.score === '15-19' ||
                          result.totalScore >= 20 && row.score === '20-27')
                        ? 'bg-blue-50'
                        : ''
                        }`}
                    >
                      <td className="py-3 px-3 text-sm font-medium">{row.score}</td>
                      <td className="py-3 px-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.level.includes('Alto') ? 'bg-red-100 text-red-800' :
                          row.level.includes('Moderado') ? 'bg-orange-100 text-orange-800' :
                            row.level === 'Leve' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                          }`}>
                          {row.level}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-sm text-gray-600">{row.rec}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold mb-2">Recomendación específica:</h4>
            <p>{result?.recommendation}</p>
          </div>

          {result && result.totalScore >= 10 && (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-yellow-800"
            >
              <p className="font-medium">⚠️ Nota importante:</p>
              <p>
                Esta puntuación indica una posible tendencia al malestar emocional sostenido.
                Si este resultado te hace reflexionar, considera hablar con alguien de confianza o con un profesional capacitado.
              </p>

            </motion.div>
          )}

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">
              <strong>Nota:</strong> Puntuaciones más altas podrían reflejar una tendencia significativa al desánimo.
              Este cuestionario es orientativo y no reemplaza una evaluación profesional.
            </p>

          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DepForm;