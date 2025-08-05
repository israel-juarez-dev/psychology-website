import { TestItem, TestResult } from '../types/TestTypes'

export const useTestLogic = () => {
  const calculateResult = (
    answers: Record<string, number>,
    reverseItems: string[] = [],
    testId: string = ''
  ): TestResult => {
    // Inversión de ítems si aplica
    const adjustedAnswers = { ...answers }
    reverseItems.forEach(id => {
      if (adjustedAnswers[id] !== undefined) {
        adjustedAnswers[id] = 5 - adjustedAnswers[id] // inversión para escala de 0 a 3
      }
    })

    const totalScore = Object.values(adjustedAnswers).reduce((acc, val) => acc + val, 0)

    let level: TestResult['level']
    let recommendation: string

    // Interpretación por tipo de test
    if (testId === 'rosenberg') {
      if (totalScore <= 15) {
        level = 'baja'
        recommendation = 'Tu autoestima podría estar baja. Sería recomendable trabajar en tu autoconcepto y bienestar emocional.'
      } else if (totalScore <= 25) {
        level = 'media'
        recommendation = 'Tu autoestima es moderada. Puedes fortalecerla con estrategias de autoaceptación y valoración personal.'
      } else {
        level = 'alta'
        recommendation = 'Tienes una autoestima alta, lo cual es un recurso valioso para tu bienestar emocional.'
      }
    } else {
      // Default para GA Inquietud-emocional, PHQ-9 y similares
      if (totalScore <= 4) {
        level = 'leve'
        recommendation = 'Tus niveles de síntomas son bajos. Sin embargo, si te sientes incómodo, hablar con un profesional puede ayudarte.'
      } else if (totalScore <= 10) {
        level = 'moderada'
        recommendation = 'Presentas síntomas moderados. Podrías beneficiarte de acompañamiento psicológico.'
      } else {
        level = 'grave'
        recommendation = 'Tus síntomas podrían estar interfiriendo significativamente en tu vida diaria. Sería recomendable una evaluación profesional más profunda.'
      }
    }

    return { totalScore, level, recommendation }
  }

  return { calculateResult }
}
