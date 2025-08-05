import React, { useState } from "react";
import { faqData, FAQSectionType } from "../data/faqData"; // Ajusta la ruta según tu estructura
import { DownOutlined } from "@ant-design/icons";

const FAQSection = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
    setOpenQuestion(null); // Reinicia preguntas al cambiar sección
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-green-50 px-6 rounded-xl overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-700 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="mt-8 space-y-6">
          {faqData.map((section: FAQSectionType, sectionIndex: number) => (
            <div
              key={section.title}
              className="border border-green-200 rounded-xl"
            >
             <button
  onClick={() => toggleSection(sectionIndex)}
  className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-green-100 rounded-t-xl font-medium text-green-800 transition"
>
  <span>{section.title}</span>
  <DownOutlined
    className={`transition-transform duration-300 ${
      openSection === sectionIndex ? "rotate-180" : ""
    }`}
  />
</button>

              {openSection === sectionIndex && (
                <div className="bg-white divide-y divide-gray-200 rounded-b-xl">
                  {section.questions.map((q, qIndex) => (
                    <div key={q.question}>
                      <button
                        className="w-full text-left px-4 py-3 hover:bg-green-50"
                        onClick={() => toggleQuestion(qIndex)}
                      >
                        <h3 className="font-semibold text-gray-800">
                          {q.question}
                        </h3>
                      </button>
                      {openQuestion === qIndex && (
                        <p className="px-4 pb-4 text-gray-600">{q.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
