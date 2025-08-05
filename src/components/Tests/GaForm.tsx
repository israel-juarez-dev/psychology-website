import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ga, gaOptions, gaMeta } from '../../data/tests/ga';
import { useTestGad7Logic } from '../../hooks/useTestGad7Logic';

const GaForm = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [missingBefore, setMissingBefore] = useState<string[]>([]);
  const { calculateResult } = useTestGad7Logic();

  // Verifica cuáles preguntas anteriores están sin responder cada vez que se responde algo

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };
      const indexRespondida = ga.findIndex(q => q.id === questionId);
      const prevMissing = ga
        .slice(0, indexRespondida)
        .filter(q => updated[q.id] === undefined)
        .map(q => q.id);
      setMissingBefore(prevMissing);
      setShowMissing(prevMissing.length > 0);
      return updated;
    });
  };

  const handleSubmit = () => {
    const lastAnsweredIndex = ga.reduce(
      (last, q, idx) => answers[q.id] !== undefined ? idx : last,
      -1
    );

    const unansweredBeforeLast = ga
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-2">{gaMeta.name}</h1>
      </motion.div>

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
          {ga.map((item, index) => {
            console.log('missingBefore', missingBefore)
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
                <p className="text-gray-600">{gaMeta.instruction}</p>

                <motion.p
                  className={`font-medium text-lg mb-4 ${shouldHighlight ? 'text-red-600' : ''
                    }`}
                >
                  <span className="text-gray-500 mr-2">{index + 1}.</span>
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
                  {gaOptions.map(opt => (
                    <motion.label
                      key={opt.value}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex flex-col items-center p-3 rounded-lg border cursor-pointer transition-all ${answers[item.id] === opt.value
                        ? 'bg-blue-50 border-blue-500 shadow-sm'
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
                      <span className="font-medium">{opt.label}</span>
                      <span className="text-sm text-gray-500 text-center mt-1">
                        {opt.description}
                      </span>
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
          <h3 className="text-xl font-bold mb-2">Resultados GA Inquietud-emocional</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Puntuación total:</span>
              <span className="text-2xl font-bold">{result?.totalScore}/21</span>
            </div>

            <div className="flex items-center">
              <span className="font-medium">Nivel de AG Inquietud Emocional:</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-sm font-medium ${result?.severity === 'alta'
                ? 'bg-red-100 text-red-800'
                : result?.severity === 'moderada'
                  ? 'bg-orange-100 text-orange-800'
                  : result?.severity === 'leve'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                {result?.severity}
              </span>
            </div>
          </div>

          {/* Add the scoring table here */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h4 className="font-bold mb-3 text-center">Escala GA Inquietud-emocional</h4>
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
                    { score: '0-4', level: 'Mínima', rec: 'No se requiere acción en este momento' },
                    { score: '5-9', level: 'Leve', rec: 'Prestar atención a posibles cambios emocionales' },
                    { score: '10-14', level: 'Moderada', rec: 'Puede ser útil recibir orientación profesional' },
                    { score: '15-21', level: 'Alto', rec: 'Se sugiere atención especializada de forma prioritaria' }
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
                          result.totalScore >= 15 && row.score === '15-21')
                        ? 'bg-blue-50'
                        : ''
                        }`}
                    >
                      <td className="py-3 px-3 text-sm font-medium">{row.score}</td>
                      <td className="py-3 px-3 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.level === 'Alto' ? 'bg-red-100 text-red-800' :
                          row.level === 'Moderada' ? 'bg-orange-100 text-orange-800' :
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
            <h4 className="font-bold mb-2">Recomendación:</h4>
            <p>{result?.recommendation}</p>
          </div>

          {result && result.totalScore >= 10 && (
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-yellow-800">
          <p className="font-medium">⚠️ Posible indicio emocional:</p>
          <p>
            Esta puntuación sugiere que podrías estar atravesando un momento de alta tensión o preocupación. 
            Sería recomendable hablar con alguien de confianza o buscar orientación profesional si lo consideras necesario.
          </p>
        </div>
          )}

<div className="pt-4 border-t">
  <p className="text-sm text-gray-500">
    <strong>Nota:</strong> Puntuaciones a partir de 10 pueden reflejar un nivel importante de malestar emocional.
  </p>
</div>
        </motion.div>
      )}
    </div>
  );
};

export default GaForm;