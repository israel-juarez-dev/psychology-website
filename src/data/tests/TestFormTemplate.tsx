// src/components/Tests/TestFormTemplate.tsx or TestForm.tsx
import React, { useState } from 'react'
import { TestItem } from '../../types/TestTypes'

type TestFormProps = {
  testId: string
  questions: TestItem[]
  title: string
  options: { label: string, value: number }[] // Dynamic options for Likert scale
}

const TestFormTemplate = ({ testId, questions, title, options }: TestFormProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const allAnswered = questions.every(q => answers[q.id] !== undefined)

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {!submitted ? (
        <form className="space-y-6">
          {questions.map((item: TestItem) => (
            <div key={item.id}>
              <p className="font-medium">{item.question}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {options.map(opt => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded cursor-pointer hover:bg-gray-200"
                  >
                    <input
                      type="radio"
                      name={item.id}
                      value={opt.value}
                      checked={answers[item.id] === opt.value}
                      onChange={() => handleChange(item.id, opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Ver resultado
          </button>
        </form>
      ) : (
        <div className="bg-white shadow-md p-6 rounded-md">
          {/* Show results here */}
        </div>
      )}
    </div>
  )
}

export default TestFormTemplate
