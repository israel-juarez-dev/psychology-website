// src/data/tests/vocacional.tsx

import React from 'react'
import { TestItem } from '../../types/TestTypes'

// ✅ Componente de vista previa del test
const VocacionalTest = () => {
  return (
    <div>
      <p>Este es el test vocacional. Cuando lo inicies, podrás explorar tus intereses profesionales.</p>
    </div>
  )
}

// ✅ Preguntas del test vocacional (incompleto para ejemplo)
export const vocacional = [
  // Realista (R)
  { id: 'q1', question: 'Me gusta trabajar con herramientas o maquinaria.', category: 'realista' },
  { id: 'q2', question: 'Disfruto trabajar al aire libre.', category: 'realista' },
  { id: 'q3', question: 'Prefiero actividades físicas a las de escritorio.', category: 'realista' },
  { id: 'q4', question: 'Me interesa la mecánica o la electrónica.', category: 'realista' },
  { id: 'q5', question: 'Me gusta construir o reparar cosas.', category: 'realista' },

  // Investigador (I)
  { id: 'q6', question: 'Disfruto resolver problemas matemáticos o científicos.', category: 'investigador' },
  { id: 'q7', question: 'Me interesa cómo funcionan las cosas.', category: 'investigador' },
  { id: 'q8', question: 'Prefiero actividades analíticas y lógicas.', category: 'investigador' },
  { id: 'q9', question: 'Me gusta investigar y buscar información.', category: 'investigador' },
  { id: 'q10', question: 'Me interesa la ciencia y la investigación.', category: 'investigador' },

  // Artístico (A)
  { id: 'q11', question: 'Me gusta dibujar, pintar o crear arte.', category: 'artistico' },
  { id: 'q12', question: 'Disfruto expresarme de forma creativa.', category: 'artistico' },
  { id: 'q13', question: 'Me interesa la música, el teatro o la danza.', category: 'artistico' },
  { id: 'q14', question: 'Prefiero trabajos que permiten libertad de expresión.', category: 'artistico' },
  { id: 'q15', question: 'Tengo ideas originales o poco convencionales.', category: 'artistico' },

  // Social (S)
  { id: 'q16', question: 'Me gusta ayudar a los demás.', category: 'social' },
  { id: 'q17', question: 'Disfruto enseñar o capacitar a otros.', category: 'social' },
  { id: 'q18', question: 'Me interesa el bienestar emocional de las personas.', category: 'social' },
  { id: 'q19', question: 'Prefiero trabajos que impliquen contacto humano.', category: 'social' },
  { id: 'q20', question: 'Me gusta trabajar en equipo y colaborar.', category: 'social' },

  // Emprendedor (E)
  { id: 'q21', question: 'Me interesa liderar o coordinar proyectos.', category: 'emprendedor' },
  { id: 'q22', question: 'Disfruto influir en otras personas.', category: 'emprendedor' },
  { id: 'q23', question: 'Me atraen los negocios y las ventas.', category: 'emprendedor' },
  { id: 'q24', question: 'Me gusta tomar decisiones importantes.', category: 'emprendedor' },
  { id: 'q25', question: 'Tengo habilidades de liderazgo.', category: 'emprendedor' },

  // Convencional (C)
  { id: 'q26', question: 'Prefiero seguir instrucciones claras y procedimientos.', category: 'convencional' },
  { id: 'q27', question: 'Me gusta organizar información o archivos.', category: 'convencional' },
  { id: 'q28', question: 'Disfruto trabajar con números o datos.', category: 'convencional' },
  { id: 'q29', question: 'Soy bueno en tareas administrativas.', category: 'convencional' },
  { id: 'q30', question: 'Prefiero trabajos con estructura y reglas claras.', category: 'convencional' },
]

  

// ✅ Metadata del test
export const vocacionalMeta = {
  id: 'test-vocacional',
  name: 'Test de Intereses Vocacionales (RIASEC)',
  description: 'Este test te ayudará a identificar tus intereses principales en seis áreas profesionales: Realista, Investigador, Artístico, Social, Emprendedor y Convencional.',
  instruction: 'Indica cuánto te gustaría realizar cada una de las siguientes actividades, usando la escala de 1 (Nada interesado) a 5 (Muy interesado).',
  tags: ['vocacional', 'RIASEC', 'intereses', 'orientación profesional']
}



// ✅ Opciones del test vocacional (Likert 1–5)
export const vocacionalOptions = [
  { label: 'Totalmente en desacuerdo', value: 1 },
  { label: 'En desacuerdo', value: 2 },
  { label: 'Neutral', value: 3 },
  { label: 'De acuerdo', value: 4 },
  { label: 'Totalmente de acuerdo', value: 5 }
]

// ✅ Export default del componente para testComponents
export default VocacionalTest
