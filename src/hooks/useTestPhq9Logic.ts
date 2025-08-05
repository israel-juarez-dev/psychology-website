type Phq9Result = {
  totalScore: number;
  severity: 'ninguna' | 'leve' | 'moderada' | 'moderadamente alta' | 'alta';
  recommendation: string;
};

export const useTestPhq9Logic = () => {
  const calculateResult = (answers: Record<string, number>): Phq9Result => {
    const answerValues: number[] = Object.keys(answers).map(key => answers[key]);
    const totalScore = answerValues.reduce((sum, value) => sum + (value || 0), 0);

    let severity: Phq9Result['severity'];
    if (totalScore < 5) severity = 'ninguna';
    else if (totalScore < 10) severity = 'leve';
    else if (totalScore < 15) severity = 'moderada';
    else if (totalScore < 20) severity = 'moderadamente alta';
    else severity = 'alta';

    const q9Score = answers['q9'] || 0;

    return {
      totalScore,
      severity,
      recommendation: getRecommendation(severity, q9Score)
    };
  };

  const getRecommendation = (severity: string, q9Score: number): string => {
    const recommendations = {
      'ninguna': 'No se observan señales relevantes en este momento.',
      'leve': 'Sería recomendable hacer seguimiento y observar cambios.',
      'moderada': 'Puede ser útil considerar apoyo profesional.',
      'moderadamente alta': 'Es importante considerar una evaluación con un especialista.',
      'alta': 'Se sugiere buscar orientación profesional lo antes posible.'
    };

    let recommendation = recommendations[severity as keyof typeof recommendations];

    if (q9Score >= 2) {
      recommendation += ' Se recomienda prestar especial atención a ciertas respuestas.';
    }

    return recommendation;
  };

  return { calculateResult };
};
