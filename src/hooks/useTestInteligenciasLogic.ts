// src/hooks/useTestInteligenciasLogic.ts
import { useMemo } from 'react'

type InteligenciaKey =
  | 'linguistica'
  | 'logico_matematica'
  | 'visual_espacial'
  | 'corporal'
  | 'musical'
  | 'interpersonal'
  | 'intrapersonal'
  | 'naturalista'

const categoryMap: Record<string, InteligenciaKey> = {
  // Lingüística
  q1: 'linguistica', q2: 'linguistica', q3: 'linguistica', q4: 'linguistica', q5: 'linguistica',
  // Lógico-matemática
  q6: 'logico_matematica', q7: 'logico_matematica', q8: 'logico_matematica', q9: 'logico_matematica', q10: 'logico_matematica',
  // Visual-espacial
  q11: 'visual_espacial', q12: 'visual_espacial', q13: 'visual_espacial', q14: 'visual_espacial', q15: 'visual_espacial',
  // Corporal-kinestésica
  q16: 'corporal', q17: 'corporal', q18: 'corporal', q19: 'corporal', q20: 'corporal',
  // Musical
  q21: 'musical', q22: 'musical', q23: 'musical', q24: 'musical', q25: 'musical',
  // Interpersonal
  q26: 'interpersonal', q27: 'interpersonal', q28: 'interpersonal', q29: 'interpersonal', q30: 'interpersonal',
  // Intrapersonal
  q31: 'intrapersonal', q32: 'intrapersonal', q33: 'intrapersonal', q34: 'intrapersonal', q35: 'intrapersonal',
  // Naturalista
  q36: 'naturalista', q37: 'naturalista', q38: 'naturalista', q39: 'naturalista', q40: 'naturalista',
}

type InteligenciasResult = {
  topInteligencias: { categoria: InteligenciaKey; puntuacion: number }[]
  puntuacionesPorCategoria: Record<InteligenciaKey, number>
}

export const useTestInteligenciasLogic = () => {
  const calcularResultadoInteligencias = (respuestas: Record<string, number>): InteligenciasResult => {
    const puntuaciones: Record<InteligenciaKey, number> = {
      linguistica: 0,
      logico_matematica: 0,
      visual_espacial: 0,
      corporal: 0,
      musical: 0,
      interpersonal: 0,
      intrapersonal: 0,
      naturalista: 0,
    }

    Object.entries(respuestas).forEach(([preguntaId, valor]) => {
      const categoria = categoryMap[preguntaId as keyof typeof categoryMap]
      if (categoria) {
        puntuaciones[categoria] += valor
      }
    })

    const ordenadas = Object.entries(puntuaciones)
      .map(([categoria, puntuacion]) => ({ categoria: categoria as InteligenciaKey, puntuacion }))
      .sort((a, b) => b.puntuacion - a.puntuacion)

    return {
      topInteligencias: ordenadas.slice(0, 3),
      puntuacionesPorCategoria: puntuaciones,
    }
  }

  return { calcularResultadoInteligencias }
}
