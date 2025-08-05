// src/data/tests/ ga.ts
import { TestItem } from '../../types/TestTypes';

export const ga: TestItem[] = [
  {
    id: 'q1',
    question: '¿Últimamente te has sentido nervioso(a) o inquieto(a)?',
    description: 'Sensación de tensión o incomodidad constante'
  },
  {
    id: 'q2',
    question: '¿Te ha costado dejar de pensar en tus preocupaciones?',
    description: 'Pensamientos repetitivos o difíciles de controlar'
  },
  {
    id: 'q3',
    question: '¿Has sentido que te preocupas por muchas cosas a la vez?',
    description: 'Preocupación por distintos aspectos de la vida diaria'
  },
  {
    id: 'q4',
    question: '¿Te ha sido difícil relajarte?',
    description: 'Sensación de estar en constante alerta o tensión'
  },
  {
    id: 'q5',
    question: '¿Te has sentido tan inquieto(a) que te costaba quedarte en calma?',
    description: 'Movimientos constantes, dificultad para estar quieto'
  },
  {
    id: 'q6',
    question: '¿Te has sentido con poca paciencia o te molestabas con facilidad?',
    description: 'Reacciones rápidas o sensibilidad emocional aumentada'
  },
  {
    id: 'q7',
    question: '¿Has tenido la sensación de que algo malo podría pasar?',
    description: 'Inquietud ante situaciones inciertas o imprevisibles'
  }
];


export const gaMeta = {
  id: 'inquietud-emocional',
  name: 'AG Inquietud emocional',
  description: 'Herramienta de autoexploración emocional basada en síntomas comunes de tensión y preocupación.',
  instruction: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes aspectos?',
  tags: ['estrés', 'malestar emocional', 'autoexploración emocional'],
  scoring: {
    interpretation: [
      { range: '0-4', severity: 'Muy bajo', action: 'Sin indicios relevantes. No se requiere acción.' },
      { range: '5-9', severity: 'Leve', action: 'Puede ser útil prestar atención y observar cambios.' },
      { range: '10-14', severity: 'Moderado', action: 'Se recomienda orientación emocional o profesional.' },
      { range: '15-21', severity: 'Alto', action: 'Sería aconsejable atención profesional prioritaria.' }
    ],
    criticalItem: 'q7',
    cutoff: 10
  }
};


export const gaOptions = [
  {
    label: 'Nunca',
    value: 0,
    description: 'Ningún día en las últimas 2 semanas'
  },
  {
    label: 'Varios días',
    value: 1,
    description: 'Entre 1-6 días en las últimas 2 semanas'
  },
  {
    label: 'Más de la mitad',
    value: 2,
    description: '7-11 días en las últimas 2 semanas'
  },
  {
    label: 'Casi todos',
    value: 3,
    description: '12-14 días en las últimas 2 semanas'
  }
];

// Utility type for scoring interpretation
export type Gad7Scoring = typeof gaMeta.scoring;