type RosenbergResult = {
    totalScore: number;
    selfEsteemLevel: 'alta' | 'media' | 'baja';
    interpretation: string;
  };
  
  export const useTestRosenbergLogic = () => {
    const calculateResult = (answers: Record<string, number>): RosenbergResult => {
      // Calculate score with reverse coding for specific items
      let totalScore = 0;
      const reverseItems = ['q6', 'q7', 'q8', 'q9', 'q10'];
      
      Object.entries(answers).forEach(([questionId, value]) => {
        if (reverseItems.includes(questionId)) {
          totalScore += 5 - value; // Reverse score (1=4, 2=3, etc.)
        } else {
          totalScore += value;
        }
      });
  
      let selfEsteemLevel: RosenbergResult['selfEsteemLevel'];
      if (totalScore >= 30) selfEsteemLevel = 'alta';
      else if (totalScore >= 20) selfEsteemLevel = 'media';
      else selfEsteemLevel = 'baja';
  
      return {
        totalScore,
        selfEsteemLevel,
        interpretation: getInterpretation(selfEsteemLevel)
      };
    };
  
    const getInterpretation = (level: string): string => {
      const interpretations = {
        'alta': 'Autoestima saludable. Te valoras positivamente.',
        'media': 'Autoestima moderada. Algunas áreas podrían mejorar.',
        'baja': 'Autoestima baja. Considera trabajar en tu autoconcepto.'
      };
      return interpretations[level as keyof typeof interpretations];
    };
  
    return { calculateResult };
  };