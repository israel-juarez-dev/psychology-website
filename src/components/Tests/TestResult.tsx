import React from 'react'

type TestResultProps = {
  totalScore: number
  level: string
  recommendation: string
}

const TestResult = ({ totalScore, level, recommendation }: TestResultProps) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Resultado del Test</h3>
      <p className="text-lg mb-2"><strong>Puntaje total:</strong> {totalScore}</p>
      <p className="text-lg mb-2"><strong>Nivel de {level}:</strong> {level}</p>
      <p className="text-gray-700 mb-4">{recommendation}</p>
    </div>
  )
}

export default TestResult
