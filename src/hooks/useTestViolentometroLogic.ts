import { violentometro } from '../data/tests/violentometro'
import { Severity } from '../types/TestTypes'

export const useTestViolentometroLogic = () => {
  const calculateViolentometroResult = (answers: Record<string, number>) => {
    const severidadCounts = {
      leve: 0,
      moderado: 0,
      alta: 0,
    }

    const result: Record<
      string,
      {
        entries: { action: string; severity: Severity }[]
      }
    > = {}

    for (const question of violentometro) {
      const value = answers[question.id]
      if (value === 1) {
        const { category, severity, action } = question

        if (!category || !severity || !action) continue

        if (!result[category]) {
          result[category] = {
            entries: [],
          }
        }

        if (!['leve', 'moderado', 'alta'].includes(severity)) {
          console.error(`Severity inválida: ${severity}`)
          continue
        }

        result[category].entries.push({ action, severity })
        severidadCounts[severity as Severity]++
      }
    }

    const totalAlta = severidadCounts.alta
    const totalModerado = severidadCounts.moderado
    const totalLeve = severidadCounts.leve

    let label = 'Sin indicios de violencia'
    let description = 'No se han detectado indicadores claros de violencia en las respuestas.'

    if (totalAlta > 0) {
      label = 'Alertas Relevantes Detectadas'
      description ='Se han identificado señales relevantes que podrían indicar una situación de riesgo. Buscar apoyo profesional puede ayudarte a tomar decisiones informadas.';

    } else if (totalModerado > 0) {
      label = 'Posibles Riesgos Moderados'
      description = 'Se detectan indicadores moderados. Sería recomendable explorar tu situación con un especialista.'
    } else if (totalLeve > 0) {
      label = 'Señales de Riesgo Leve'
      description = 'Algunas respuestas indican posibles comportamientos inadecuados. Mantente alerta a tu bienestar emocional.'
    }

    return {
      result: {
        label,
        description,
      },
      yellow: totalLeve,
      orange: totalModerado,
      red: totalAlta,
      resumenPorCategoria: result,
    }
  }

  return { calculateViolentometroResult }
}
