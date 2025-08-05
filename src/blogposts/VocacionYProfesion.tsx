import React from 'react';
import { Card, Typography, Grid } from 'antd';
import { BulbOutlined, LineChartOutlined, TeamOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const VocacionYProfesion = () => {
  const screens = useBreakpoint();
  
  return (<><Helmet>
    <title>Vocación y profesión: decisiones con sentido | Creciendo Psicología</title>
    <meta name="description" content="Guía psicológica para entender la vocación, elegir carrera y construir un proyecto profesional con propósito." />
  </Helmet>
  
    <div className="w-full py-16 px-4 sm:px-8 lg:px-24 bg-gray-50">
      <Title 
        level={2} 
        className="text-center mb-12 font-bold text-gray-800"
      >
        <TeamOutlined className="mr-2" />
        Vocación y <span className="text-blue-600">Profesión</span> en Psicología
      </Title>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Sección de Vocación ampliada */}
        <Card
          hoverable
          className="h-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6">
            <Title level={4} className="font-semibold mb-5 flex items-center">
              <BulbOutlined className="text-yellow-500 mr-2" />
              Mi Vocación Psicológica
            </Title>
            <Paragraph className="mb-4 text-gray-700">
              Mi camino en la psicología comenzó con una profunda fascinación por comprender la complejidad del comportamiento humano. Desde mis primeros estudios en la universidad, descubrí que la mente humana es el sistema más intrigante y significativo que podemos estudiar. Lo que comenzó como curiosidad académica se transformó en una verdadera vocación cuando comprendí el impacto transformador que tiene la terapia bien aplicada.
            </Paragraph>
            <Paragraph className="mb-4 text-gray-700">
              Durante mi formación, me especialicé en terapia cognitivo-conductual porque encontré en este enfoque un equilibrio perfecto entre rigor científico y aplicabilidad práctica. La posibilidad de ayudar a las personas a reestructurar sus patrones de pensamiento, modificando así sus emociones y conductas, representa para mí la esencia misma del crecimiento personal.
            </Paragraph>
            <Paragraph className="mb-4 text-gray-700">
              Lo que más valoro de mi vocación es ese momento de conexión auténtica con el paciente, cuando juntos identificamos los patrones disfuncionales y comenzamos a construir alternativas más saludables. Cada historia de superación refuerza mi convicción de que este no es simplemente mi trabajo, sino mi auténtica vocación de vida.
            </Paragraph>
          </div>
        </Card>
        
        {/* Sección de Desarrollo Profesional ampliada */}
        <Card
          hoverable
          className="h-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="p-6">
            <Title level={4} className="font-semibold mb-5 flex items-center">
              <LineChartOutlined className="text-green-500 mr-2" />
              Trayectoria Profesional
            </Title>
            <Paragraph className="mb-4 text-gray-700">
              Mi carrera profesional ha sido un viaje de constante aprendizaje y evolución. Comencé mi práctica clínica en [Año] trabajando con adolescentes en riesgo social, donde desarrollé habilidades fundamentales para establecer rapport terapéutico incluso en circunstancias desafiantes. Esta experiencia temprana moldeó mi enfoque terapéutico, enfatizando la importancia de la adaptabilidad y la empatía genuina.
            </Paragraph>
            <Paragraph className="mb-4 text-gray-700">
              Posteriormente, me especialicé en [Área específica, ej. "trastornos de ansiedad"] completando más de [X] horas de formación especializada. Durante [X] años formé parte del equipo de [Institución relevante], donde además de mi labor clínica participé en investigaciones sobre [Tema de investigación]. Esta etapa me permitió integrar la práctica clínica con la investigación científica, enriqueciendo mi perspectiva profesional.
            </Paragraph>
            <Paragraph className="mb-4 text-gray-700">
              En la actualidad, combino mi práctica privada con [Otras actividades relevantes como docencia, supervisión, etc.]. He tenido el privilegio de trabajar con más de [X] pacientes y cada caso ha contribuido a mi crecimiento como profesional. Mis áreas de especialización actual incluyen [Listar 3-4 áreas específicas], aunque mantengo un enfoque integrador que se adapta a las necesidades únicas de cada paciente.
            </Paragraph>
          </div>
        </Card>
        
        {/* Sección de Integración ampliada */}
        <div className="md:col-span-2">
          <Card
            hoverable
            className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50"
          >
            <div className="p-8 text-center">
              <Title level={3} className="font-semibold mb-6">
                La Síntesis entre Vocación y Profesión
              </Title>
              <Paragraph className="mb-4 text-gray-700 max-w-4xl mx-auto text-lg">
                En psicología, la separación entre vocación y profesión puede tener consecuencias significativas. He comprobado que los terapeutas que trabajan desde la auténtica vocación logran mejores resultados terapéuticos, mayor satisfacción profesional y menor riesgo de burnout. En mi caso, he cultivado esta integración mediante:
              </Paragraph>
              <ul className="mb-6 text-left max-w-2xl mx-auto text-gray-700 grid md:grid-cols-2 gap-4">
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Desarrollo profesional continuo con foco en áreas que me apasionan</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Práctica clínica basada en evidencia pero adaptada a cada persona</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Equilibrio entre desafío profesional y autocuidado</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Integración de múltiples enfoques terapéuticos</li>
              </ul>
              <Paragraph className="text-gray-700 max-w-3xl mx-auto text-lg">
                Esta síntesis se refleja en mi trabajo diario, donde cada sesión terapéutica representa tanto un ejercicio profesional riguroso como una expresión de mi compromiso vocacional con el bienestar psicológico. Creo firmemente que esta integración es lo que permite ofrecer una terapia genuinamente transformadora.
              </Paragraph>
            </div>
          </Card>
        </div>
      </div>
    </div></>
  );
};

export default VocacionYProfesion;