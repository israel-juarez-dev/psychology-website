import { TestItem } from '../../types/TestTypes';

export const dep: TestItem[] = [
  { id: 'q1', question: '¿Últimamente has perdido el interés o disfrute por actividades que solías hacer?' },
  { id: 'q2', question: '¿Te has sentido desanimado(a), con el ánimo bajo o sin motivación?' },
  { id: 'q3', question: '¿Has tenido cambios en tu forma de dormir, como dormir poco o demasiado?' },
  { id: 'q4', question: '¿Has sentido que te falta energía para realizar tus actividades diarias?' },
  { id: 'q5', question: '¿Tu apetito ha cambiado significativamente, comiendo menos o más de lo habitual?' },
  { id: 'q6', question: '¿Has tenido pensamientos negativos sobre ti mismo(a) o te has sentido muy autocrítico(a)?' },
  { id: 'q7', question: '¿Te ha costado concentrarte, mantener la atención o tomar decisiones?' },
  { id: 'q8', question: '¿Te has sentido más lento(a) de lo normal al moverte o hablar, o por el contrario, más inquieto(a)?' },
  { id: 'q9', question: '¿Has tenido pensamientos relacionados con desconectarte de todo o desaparecer?' }
];


export const depOptions = [
  { label: 'Nunca', value: 0 },
  { label: 'Varios días', value: 1 },
  { label: 'Más de la mitad de los días', value: 2 },
  { label: 'Casi todos los días', value: 3 }
];

export const depMeta = {
  id: 'estado-animo',
  name: 'DEP Estado de Ánimo',
  description: 'Cuestionario de 9 ítems para reflexionar sobre tu bienestar emocional',
  instruction: 'Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes aspectos?',
  tags: ['bienestar', 'emociones']
};
