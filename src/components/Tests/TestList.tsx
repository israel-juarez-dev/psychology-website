import React from 'react'
import { testMetadata } from '../../data/tests'
import TestCard from './TestCard'
import { MotionContainer } from '../../animations' // 👈 Asegúrate de tener esta exportación

const TestList = () => {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto p-6">
      <h3>🧠 Estos cuestionarios te pueden ayudar a reflexionar sobre cómo te sientes. No son un diagnóstico. Si necesitas orientación, puedes hablar con un profesional.</h3>
      <h1 className="text-3xl font-bold mb-6">Selecciona un test</h1>

      {/* 👇 Aquí usamos el contenedor animado */}
      <MotionContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testMetadata.map(test => (
          <TestCard key={test.id} test={test} />
        ))}
      </MotionContainer>
    </div>
  )
}

export default TestList
