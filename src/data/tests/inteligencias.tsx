import React from 'react'
import { TestItem } from '../../types/TestTypes'

// ✅ Componente de vista previa del test
const InteligenciasTest = () => {
  return (
    <div>
      <p>Este es el Test de Inteligencias Múltiples. Al completarlo, descubrirás qué tipos de inteligencia predominan en ti según la teoría de Howard Gardner.</p>
    </div>
  )
}

// ✅ Preguntas del test (5 por cada una de las 8 inteligencias)
export const inteligencias = [
  // Lingüística
  { id: 'q1', question: 'Me gusta leer y escribir.', category: 'linguistica' },
  { id: 'q2', question: 'Soy bueno para contar historias.', category: 'linguistica' },
  { id: 'q3', question: 'Me expreso bien con palabras.', category: 'linguistica' },
  { id: 'q4', question: 'Disfruto los juegos de palabras y acertijos.', category: 'linguistica' },
  { id: 'q5', question: 'Prefiero las materias relacionadas con el lenguaje.', category: 'linguistica' },

  // Lógico-matemática
  { id: 'q6', question: 'Disfruto resolver problemas matemáticos.', category: 'logico_matematica' },
  { id: 'q7', question: 'Me gustan los juegos de lógica.', category: 'logico_matematica' },
  { id: 'q8', question: 'Puedo encontrar patrones fácilmente.', category: 'logico_matematica' },
  { id: 'q9', question: 'Pienso de forma estructurada y lógica.', category: 'logico_matematica' },
  { id: 'q10', question: 'Prefiero tareas que involucren números o razonamiento.', category: 'logico_matematica' },

  // Visual-espacial
  { id: 'q11', question: 'Tengo buena orientación espacial.', category: 'visual_espacial' },
  { id: 'q12', question: 'Me gusta dibujar, diseñar o crear mapas.', category: 'visual_espacial' },
  { id: 'q13', question: 'Puedo imaginar objetos en el espacio.', category: 'visual_espacial' },
  { id: 'q14', question: 'Soy bueno para leer gráficos y diagramas.', category: 'visual_espacial' },
  { id: 'q15', question: 'Prefiero aprender con imágenes y esquemas.', category: 'visual_espacial' },

  // Corporal-kinestésica
  { id: 'q16', question: 'Me gusta moverme y usar mi cuerpo para aprender.', category: 'corporal' },
  { id: 'q17', question: 'Practico deportes o baile con frecuencia.', category: 'corporal' },
  { id: 'q18', question: 'Aprendo haciendo cosas con mis manos.', category: 'corporal' },
  { id: 'q19', question: 'Tengo buena coordinación física.', category: 'corporal' },
  { id: 'q20', question: 'Me expreso bien corporalmente.', category: 'corporal' },

  // Musical
  { id: 'q21', question: 'Disfruto escuchar o crear música.', category: 'musical' },
  { id: 'q22', question: 'Puedo seguir el ritmo fácilmente.', category: 'musical' },
  { id: 'q23', question: 'Tengo buena memoria para canciones o melodías.', category: 'musical' },
  { id: 'q24', question: 'Toco algún instrumento o me interesa aprender.', category: 'musical' },
  { id: 'q25', question: 'Me gusta cantar o tararear.', category: 'musical' },

  // Interpersonal
  { id: 'q26', question: 'Entiendo bien las emociones de los demás.', category: 'interpersonal' },
  { id: 'q27', question: 'Me gusta trabajar en grupo.', category: 'interpersonal' },
  { id: 'q28', question: 'Me considero empático.', category: 'interpersonal' },
  { id: 'q29', question: 'Soy bueno para resolver conflictos entre personas.', category: 'interpersonal' },
  { id: 'q30', question: 'Disfruto ayudar a los demás.', category: 'interpersonal' },

  // Intrapersonal
  { id: 'q31', question: 'Me conozco bien a mí mismo.', category: 'intrapersonal' },
  { id: 'q32', question: 'Reflexiono sobre mis emociones y decisiones.', category: 'intrapersonal' },
  { id: 'q33', question: 'Tengo metas personales claras.', category: 'intrapersonal' },
  { id: 'q34', question: 'Disfruto pasar tiempo solo.', category: 'intrapersonal' },
  { id: 'q35', question: 'Soy consciente de mis fortalezas y debilidades.', category: 'intrapersonal' },

  // Naturalista
  { id: 'q36', question: 'Me gusta estar en contacto con la naturaleza.', category: 'naturalista' },
  { id: 'q37', question: 'Puedo identificar plantas, animales o fenómenos naturales.', category: 'naturalista' },
  { id: 'q38', question: 'Disfruto actividades al aire libre.', category: 'naturalista' },
  { id: 'q39', question: 'Me interesa aprender sobre ecología o biología.', category: 'naturalista' },
  { id: 'q40', question: 'Siento una conexión especial con el medio ambiente.', category: 'naturalista' },
]

// ✅ Metadata
export const inteligenciasMeta = {
  id: 'inteligencias-multiples',
  name: 'Test de Inteligencias Múltiples',
  description: 'Identifica tus fortalezas cognitivas según la teoría de las Inteligencias Múltiples de Howard Gardner.',
  instruction: 'Responde qué tan cierto es para ti cada enunciado, usando la escala de 1 (Nada cierto) a 5 (Totalmente cierto).',
  tags: ['inteligencias', 'cognitivas', 'aprendizaje', 'autoconocimiento']
}

// ✅ Opciones del test (Likert 1–5)
export const inteligenciasOptions = [
  { label: 'Nada cierto', value: 1 },
  { label: 'Poco cierto', value: 2 },
  { label: 'Algo cierto', value: 3 },
  { label: 'Bastante cierto', value: 4 },
  { label: 'Totalmente cierto', value: 5 }
]

// ✅ Export default del componente de introducción
export default InteligenciasTest
