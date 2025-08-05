import { TestItem } from '../../types/TestTypes';

export const rosenberg: TestItem[] = [
  { id: 'q1', question: 'Siento que soy una persona digna de aprecio, al menos igual que los demás' },
  { id: 'q2', question: 'Estoy convencido(a) de que tengo cualidades positivas' },
  { id: 'q3', question: 'Soy capaz de hacer las cosas tan bien como la mayoría de las personas' },
  { id: 'q4', question: 'Tengo una actitud positiva hacia mí mismo(a)' },
  { id: 'q5', question: 'En general, estoy satisfecho(a) conmigo mismo(a)' },
  // Reverse-scored items
  { id: 'q6', question: 'Siento que no tengo mucho de qué estar orgulloso(a)', reverse: true },
  { id: 'q7', question: 'A veces pienso que soy un(a) fracasado(a)', reverse: true },
  { id: 'q8', question: 'Me gustaría tener más respeto por mí mismo(a)', reverse: true },
  { id: 'q9', question: 'Hay veces que realmente me siento inútil', reverse: true },
  { id: 'q10', question: 'A veces me siento completamente inútil', reverse: true }
];

export const rosenbergOptions = [
  { label: 'Muy en desacuerdo', value: 1 },
  { label: 'En desacuerdo', value: 2 },
  { label: 'De acuerdo', value: 3 },
  { label: 'Muy de acuerdo', value: 4 }
];

export const rosenbergMeta = {
  id: 'autoestima-rosenberg',
  name: 'Escala de Autoestima de Rosenberg',
  description: 'Evaluación de 10 ítems para medir autoestima global',
  instruction: 'Indique su grado de acuerdo con cada afirmación:',
  tags: ['autoestima', 'autoconcepto', 'psicología positiva']
};