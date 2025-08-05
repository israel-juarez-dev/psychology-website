import { useMemo } from 'react'

// src/hooks/useTestVocacionalLogic.ts
import { TestResult } from '../types/TestTypes'

type CategoryKey = 'Realista' | 'Investigador' | 'Artístico' | 'Social' | 'Emprendedor' | 'Convencional'

const categoryMap: Record<string, CategoryKey> = {
  q1: 'Realista', q2: 'Realista', q3: 'Realista', q4: 'Realista', q5: 'Realista',
  q6: 'Investigador', q7: 'Investigador', q8: 'Investigador', q9: 'Investigador', q10: 'Investigador',
  q11: 'Artístico', q12: 'Artístico', q13: 'Artístico', q14: 'Artístico', q15: 'Artístico',
  q16: 'Social', q17: 'Social', q18: 'Social', q19: 'Social', q20: 'Social',
  q21: 'Emprendedor', q22: 'Emprendedor', q23: 'Emprendedor', q24: 'Emprendedor', q25: 'Emprendedor',
  q26: 'Convencional', q27: 'Convencional', q28: 'Convencional', q29: 'Convencional', q30: 'Convencional',
}

type VocacionalResult = {
  topCategories: { category: CategoryKey; score: number }[]
  scoresByCategory: Record<CategoryKey, number>
}

export const useTestVocacionalLogic = () => {
  const calculateVocacionalResult = (answers: Record<string, number>): VocacionalResult => {
    const scores: Record<CategoryKey, number> = {
      Realista: 0,
      Investigador: 0,
      Artístico: 0,
      Social: 0,
      Emprendedor: 0,
      Convencional: 0,
    }

    Object.entries(answers).forEach(([questionId, value]) => {
      const category = categoryMap[questionId as keyof typeof categoryMap]
      if (category) {
        scores[category] += value
      }
    })

    const sorted = Object.entries(scores)
      .map(([category, score]) => ({ category: category as CategoryKey, score }))
      .sort((a, b) => b.score - a.score)

    return {
      topCategories: sorted.slice(0, 3),
      scoresByCategory: scores,
    }
  }

  return { calculateVocacionalResult }
}
