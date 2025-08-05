// src/types/TestTypes.ts

// Si Severity es un tipo de string literal, esto está bien:
export type Severity = 'leve' | 'moderado' | 'grave';

// Asegúrate de que `severity` sea una de estas tres opciones en tu lógica.
export type TestItem = {
  id: string
  question: string
  description?: string
  category?: string
  severity?: Severity // Esto está bien, ya que es opcional.
  action?: string
  reverse?: boolean; // Add this line
}

export type AnswerOption = {
  label: string
  value: number
}

export interface TestResult {
  totalScore: number
  level: 'leve' | 'moderada' | 'grave' | 'baja' | 'media' | 'alta'
  recommendation: string
}

export interface TestMetadata {
  id: string
  name: string
  description: string
  tags: string[]
}

type ViolentometroLevel = 'leve' | 'moderada' | 'grave';
