import React from 'react'
import { TestItem } from '../../types/TestTypes'

// ✅ Componente de vista previa del Violentómetro
const ViolentometroTest = () => {
  return (
    <div>
    <p>
      Esta herramienta está basada en el Violentómetro, un recurso educativo diseñado para ayudarte a identificar señales de alerta en tus relaciones y promover entornos más saludables.
    </p>
  </div>
  
  )
}

// ✅ Preguntas del Violentómetro
export const violentometro = [
  // Violencia emocional
  {
    id: '1',
    question: 'Te cela constantemente',
    category: 'control',
    severity: 'leve',
    action: 'celos',
  },
  {
    id: '2',
    question: 'Te descalifica o ridiculiza',
    category: 'emocional',
    severity: 'leve',
    action: 'ridiculización',
  },
  {
    id: '3',
    question: 'Te hace sentir menos',
    category: 'emocional',
    severity: 'leve',
    action: 'humillación',
  },
  {
    id: '4',
    question: 'Controla lo que haces o cómo te vistes',
    category: 'control',
    severity: 'leve',
    action: 'control de imagen',
  },
  {
    id: '5',
    question: 'Revisa tus pertenencias (como el celular o redes sociales)',
    category: 'control',
    severity: 'leve',
    action: 'invasión de privacidad',
  },
  {
    id: '6',
    question: 'Te culpa por lo que le sucede o por lo que él/ella hace',
    category: 'emocional',
    severity: 'leve',
    action: 'culpabilización',
  },
  {
    id: '7',
    question: 'Ignora tus opiniones o decisiones',
    category: 'emocional',
    severity: 'leve',
    action: 'desvaloración',
  },
  { id: 'q8', question: '¿Te ha amenazado con hacerte daño si no haces lo que quiere?', category: 'violencia_emocional', severity: 'alta', action: 'amenazas' },

  // // Violencia mental (control y manipulación)
  { id: 'q9', question: '¿Revisa constantemente tus mensajes o redes sociales?', category: 'violencia_mental', severity: 'moderado', action: 'control' },
  { id: 'q10', question: '¿Te ha prohibido ver a tu familia o amistades?', category: 'violencia_mental', severity: 'alta', action: 'aislamiento' },
  { id: 'q11', question: '¿Toma decisiones por ti sin consultarte?', category: 'violencia_mental', severity: 'moderado', action: 'dominación' },
  { id: 'q12', question: '¿Te interroga constantemente sobre dónde estuviste?', category: 'violencia_mental', severity: 'leve', action: 'sospecha' },
  { id: 'q13', question: '¿Controla cómo te vistes o te comportas en público?', category: 'violencia_mental', severity: 'moderado', action: 'imposición' },
  { id: 'q14', question: '¿Te manipula para que hagas cosas que no quieres?', category: 'violencia_mental', severity: 'moderado', action: 'manipulación' },
  { id: 'q15', question: '¿Te dice que estás exagerando o imaginando cosas?', category: 'violencia_mental', severity: 'moderado', action: 'Distorsión de realidad' },

  // // Violencia física
  { id: 'q16', question: '¿Te ha empujado o sacudido en alguna discusión?', category: 'violencia_fisica', severity: 'alta', action: 'empujones' },
  { id: 'q17', question: '¿Te ha abofeteado o golpeado?', category: 'violencia_fisica', severity: 'alta', action: 'golpes' },
  { id: 'q18', question: '¿Te ha arrojado objetos?', category: 'violencia_fisica', severity: 'alta', action: 'agresiones físicas' },
  { id: 'q19', question: '¿Ha destruido cosas tuyas por enojo?', category: 'violencia_fisica', severity: 'moderado', action: 'daños materiales' },
  { id: 'q20', question: '¿Te ha sujetado fuerte para evitar que te vayas?', category: 'violencia_fisica', severity: 'alta', action: 'retención física' },
  { id: 'q21', question: '¿Te ha lastimado con objetos?', category: 'violencia_fisica', severity: 'alta', action: 'uso de objetos' },

  // // Violencia sexual
  { id: 'q22', question: '¿Te ha forzado a mantener relaciones sexuales sin consentimiento?', category: 'violencia_sexual', severity: 'alta', action: 'agresiones sexuales' },
  { id: 'q23', question: '¿Te ha manipulado emocionalmente para tener relaciones sexuales?', category: 'violencia_sexual', severity: 'moderado', action: 'presión sexual' },
  { id: 'q24', question: '¿Se ha burlado de tu cuerpo o desempeño sexual?', category: 'violencia_sexual', severity: 'moderado', action: 'burlas sexuales' },
  { id: 'q25', question: '¿Te ha obligado a ver pornografía sin tu consentimiento?', category: 'violencia_sexual', severity: 'moderado', action: 'exposición forzada' },
  { id: 'q26', question: '¿Ha difundido imágenes íntimas tuyas sin permiso?', category: 'violencia_sexual', severity: 'alta', action: 'violación a la privacidad' },
  { id: 'q27', question: '¿Te ha tocado sin tu consentimiento?', category: 'violencia_sexual', severity: 'alta', action: 'tocamientos' },

  // Otras formas combinadas o indirectas
  { id: 'q28', question: '¿Amenaza con quitarte a tus hijos/as si lo dejas?', category: 'violencia_emocional', severity: 'alta', action: 'coerción' },
  { id: 'q29', question: '¿Te ha culpado por sus actos violentos?', category: 'violencia_emocional', severity: 'moderado', action: 'culpabilización' },
  { id: 'q30', question: '¿Minimiza o niega sus conductas violentas?', category: 'violencia_mental', severity: 'moderado', action: 'negación' },
]




// ✅ Metadata del test
export const violentometroMeta = {
  id: 'violentometro',
  name: 'Guía de señales en la relación',
  description:
    'Esta autoevaluación está inspirada en el Violentómetro y te permitirá reflexionar sobre dinámicas que podrían representar señales de malestar, control o falta de respeto en una relación interpersonal.',
  instruction:
    'Responde con "Sí" o "No" según lo que has vivido o percibido en tu relación actual o pasada.',
  tags: ['relaciones', 'dinámicas de pareja', 'guía emocional', 'prevención']
};


// ✅ Opciones del test Violentómetro (Sí/No)
export const violentometroOptions = [
  { label: 'Sí', value: 1 },
  { label: 'No', value: 0 },
]



// ✅ Export por defecto para testComponents
export default ViolentometroTest
