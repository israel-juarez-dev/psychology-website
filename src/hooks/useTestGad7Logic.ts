type Gad7Result = {
    totalScore: number;
    severity: 'mínima' | 'leve' | 'moderada' | 'alta';
    recommendation: string;
  };
  
  export const useTestGad7Logic = () => {
    const calculateResult = (answers: Record<string, number>): Gad7Result => {
      const totalScore = Object.values(answers).reduce((sum, value) => sum + (value || 0), 0);
  
      let severity: Gad7Result['severity'];
      if (totalScore < 5) severity = 'mínima';
      else if (totalScore < 10) severity = 'leve';
      else if (totalScore < 15) severity = 'moderada';
      else severity = 'alta';
  
      return {
        totalScore,
        severity,
        recommendation: getRecommendation(severity)
      };
    };
  
    const getRecommendation = (severity: string): string => {
      switch(severity) {
        case 'alta': return 'Consulta con un profesional de salud mental';
        case 'moderada': return 'Considera hablar con un especialista';
        case 'leve': return 'Monitoriza tus síntomas';
        default: return 'Sin señales relevantes';
      }
    };
  
    return { calculateResult };
  };