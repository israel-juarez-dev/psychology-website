import React from 'react';
import { Typography, Divider, Tag } from 'antd';
import { 
  HeartOutlined, 
  SafetyOutlined, 
  RiseOutlined, 
  TeamOutlined,
  BookOutlined,
  CheckOutlined
} from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph, Text } = Typography;

const TraumaEmocional = () => {
  return (<><Helmet>
    <title>Trauma emocional: comprender, validar y sanar | Creciendo Psicología</title>
    <meta name="description" content="Abordamos qué es un trauma emocional, cómo se manifiesta y qué recursos psicológicos ayudan a procesarlo." />
  </Helmet>
  
    <div className="w-full py-32 px-4 sm:px-8 lg:px-32 bg-white">
      {/* Encabezado */}
      <div className="max-w-4xl mx-auto mb-10">
        <Tag color="blue" className="mb-4 text-sm font-semibold">
          Psicología Clínica
        </Tag>
        <Title level={1} className="font-bold text-3xl md:text-4xl text-gray-800">
          <HeartOutlined className="text-red-500 mr-3" />
          Comprendiendo el Trauma Emocional: Guía Completa
        </Title>
        <Text type="secondary" className="block mt-2">
          Publicado el {new Date().toLocaleDateString()} • 10 min de lectura
        </Text>
      </div>

      {/* Introducción */}
      <div className="max-w-4xl mx-auto mb-12">
        <Paragraph className="text-lg text-gray-700 leading-relaxed">
          El trauma emocional es una herida invisible que perdura mucho después de que los eventos dolorosos hayan terminado. 
          Como psicóloga especializada en trauma, he acompañado a numerosos pacientes en su camino hacia la sanación, 
          y en este artículo quiero compartir un marco comprensivo para entender este fenómeno complejo.
        </Paragraph>
      </div>

      {/* Qué es el trauma */}
      <div className="max-w-4xl mx-auto mb-12">
        <Title level={2} className="flex items-center text-2xl font-semibold text-gray-800 mb-6">
          <SafetyOutlined className="text-blue-500 mr-3" />
          ¿Qué es exactamente el trauma emocional?
        </Title>
        
        <Paragraph className="text-gray-700 mb-4 leading-relaxed">
          El trauma emocional ocurre cuando experiencias abrumadoras superan nuestra capacidad de procesamiento psicológico. 
          No se trata solo del evento en sí, sino de cómo nuestro sistema nervioso y nuestra mente interpretan y almacenan 
          esa experiencia.
        </Paragraph>

        <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 mb-6">
          <Text strong className="text-blue-700 block mb-2">
            Definición clave:
          </Text>
          <Paragraph className="text-gray-700 italic">
            "El trauma no es lo que te ocurre, sino lo que ocurre dentro de ti como resultado de lo que te ocurrió."
            <Text strong className="block mt-2 not-italic">
              - Dr. Gabor Maté
            </Text>
          </Paragraph>
        </div>

        <Paragraph className="text-gray-700 leading-relaxed">
          Los eventos potencialmente traumáticos pueden incluir:
        </Paragraph>
        
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3 mb-6">
          <li>Abuso físico, emocional o sexual</li>
          <li>Accidentes graves o desastres naturales</li>
          <li>Pérdida repentina de un ser querido</li>
          <li>Negligencia emocional durante la infancia</li>
          <li>Exposición prolongada a situaciones de estrés extremo</li>
        </ul>
      </div>

      <Divider />

      {/* Síntomas */}
      <div className="max-w-4xl mx-auto mb-12">
        <Title level={2} className="flex items-center text-2xl font-semibold text-gray-800 mb-6">
          <RiseOutlined className="text-orange-500 mr-3" />
          Señales y Síntomas del Trauma No Resuelto
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Columna 1 */}
          <div>
            <Title level={4} className="font-medium text-lg text-gray-700 mb-3 flex items-center">
              <CheckOutlined className="text-green-500 mr-2" />
              Síntomas Emocionales
            </Title>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Ansiedad persistente o ataques de pánico
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Estado de alerta constante (hipervigilancia)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Cambios bruscos en el estado de ánimo
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Sensación de desconexión emocional
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <Title level={4} className="font-medium text-lg text-gray-700 mb-3 flex items-center">
              <CheckOutlined className="text-green-500 mr-2" />
              Síntomas Físicos
            </Title>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Problemas de sueño (insomnio o pesadillas)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Fatiga crónica sin causa médica
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Dolores musculares o tensiones
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Problemas digestivos recurrentes
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Divider />

      {/* Enfoque terapéutico */}
      <div className="max-w-4xl mx-auto">
        <Title level={2} className="flex items-center text-2xl font-semibold text-gray-800 mb-6">
          <TeamOutlined className="text-green-500 mr-3" />
          Abordaje Terapéutico del Trauma
        </Title>

        <Paragraph className="text-gray-700 mb-6 leading-relaxed">
          En mi práctica clínica, utilizo un enfoque integrador que combina varias metodologías basadas en evidencia, 
          adaptadas a las necesidades específicas de cada paciente.
        </Paragraph>

        <div className="space-y-6">
          {/* Terapia 1 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <Title level={3} className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <BookOutlined className="text-blue-500 mr-3" />
              Terapia Cognitivo-Conductual para Trauma (TF-CBT)
            </Title>
            <Paragraph className="text-gray-700">
              Este enfoque estructurado ayuda a procesar recuerdos traumáticos y modificar pensamientos distorsionados 
              asociados al trauma. Trabajamos en:
            </Paragraph>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>Reestructuración cognitiva de creencias traumáticas</li>
              <li>Exposición gradual a recuerdos dolorosos</li>
              <li>Desarrollo de habilidades de afrontamiento</li>
            </ul>
          </div>

          {/* Terapia 2 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <Title level={3} className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <HeartOutlined className="text-red-500 mr-3" />
              EMDR (Desensibilización y Reprocesamiento por Movimientos Oculares)
            </Title>
            <Paragraph className="text-gray-700">
              Método basado en la neurociencia que facilita el procesamiento adaptativo de experiencias traumáticas 
              mediante estimulación bilateral. Particularmente efectivo para:
            </Paragraph>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>Traumas puntuales (accidentes, agresiones)</li>
              <li>Recuerdos intrusivos recurrentes</li>
              <li>Reducción de la carga emocional asociada a memorias dolorosas</li>
            </ul>
          </div>
        </div>

        {/* Proceso de terapia */}
        <div className="mt-12">
          <Title level={3} className="text-xl font-semibold text-gray-800 mb-6">
            Proceso de Recuperación del Trauma
          </Title>

          <div className="space-y-4">
            {[
              {
                title: "Fase 1: Evaluación y Estabilización",
                content: "Establecimiento de seguridad emocional y desarrollo de recursos internos antes de abordar directamente el trauma."
              },
              {
                title: "Fase 2: Procesamiento del Trauma",
                content: "Trabajo cuidadoso con los recuerdos traumáticos para integrarlos de manera adaptativa."
              },
              {
                title: "Fase 3: Reintegración y Crecimiento",
                content: "Reconexión con el presente y desarrollo de una narrativa coherente de la experiencia."
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <Text strong className="block text-lg text-gray-800 mb-1">
                    {phase.title}
                  </Text>
                  <Paragraph className="text-gray-700">
                    {phase.content}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default TraumaEmocional;