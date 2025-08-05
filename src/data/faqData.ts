export type FAQ = {
    question: string;
    answer: string;
  };
  
  export type FAQSectionType = {
    title: string;
    questions: FAQ[];
  };
  
  export const faqData: FAQSectionType[] = [
    {
      title: "🧭 Sobre el proceso terapéutico",
      questions: [
        {
          question: "¿Cómo funciona la terapia?",
          answer:
            "La terapia es un espacio seguro donde puedes explorar lo que sientes y piensas. Juntos iremos dándole sentido a lo que estás viviendo.",
        },
        {
          question: "¿Cuánto tiempo dura un proceso terapéutico?",
          answer:
            "No hay una duración exacta. Depende de tus objetivos, ritmo y necesidades. Algunas personas van por unas semanas, otras por más tiempo.",
        },
        {
          question: "¿Cada cuánto son las sesiones?",
          answer:
            "Generalmente una vez por semana, aunque puede ajustarse según tu disponibilidad y lo que necesites.",
        },
        {
          question: "¿En cuánto tiempo voy a empezar a sentirme mejor?",
          answer:
            "Algunas personas notan cambios pronto, otras tardan más. La terapia es un proceso gradual que necesita compromiso.",
        },
        {
          question: "¿Qué pasa si no sé por dónde empezar?",
          answer:
            "No pasa nada, es muy común. Puedes empezar hablando de lo que te preocupa ahora, y desde ahí comenzamos.",
        },
      ],
    },
    {
      title: "👤 Sobre el/la terapeuta",
      questions: [
        {
          question: "¿Cuál es tu enfoque terapéutico?",
          answer:
            "Trabajo desde un enfoque integrativo, adaptando herramientas a tus necesidades y ritmo.",
        },
        {
          question: "¿Con qué tipo de problemas trabajas?",
          answer:
            "Ansiedad, autoestima, relaciones, duelos, crisis personales, entre otros.",
        },
        {
          question: "¿Tienes experiencia con personas que viven lo mismo que yo?",
          answer:
            "Seguramente sí, aunque cada historia es única. Lo más importante es construir un espacio donde te sientas acompañado.",
        },
        {
          question: "¿Qué formación tienes?",
          answer:
            "Soy psicólogo/a con formación en psicoterapia y actualización continua.",
        },
        {
          question: "¿Qué tan confidencial es lo que diga en sesión?",
          answer:
            "La confidencialidad está garantizada por ética profesional. Solo se rompe en casos legales como riesgo grave para ti o terceros.",
        },
      ],
    },
    {
      title: "💰 Sobre costos",
      questions: [
        {
          question: "¿Cuánto cuesta cada sesión?",
          answer:
            "El precio es lo equivalente a 7 dolares por sesión",
        },
        {
          question: "¿Cómo puedo pagar?",
          answer:
            "Transferencia bancaria,efectivo,paypal. Pago se hace con 24 horas antes de la cita",
        },
        {
          question: "¿Qué pasa si no puedo asistir a una sesión?",
          answer:
            "Puedes cancelar o reprogramar con al menos 12 horas de anticipación. Si no, la sesión se cobra igual.",
        },
        {
          question: "¿Hay reembolsos si cancelo?",
          answer:
            "Solo si avisas con anticipación o se considera la causa como una emergencia. En cancelaciones tardías no se hacen devoluciones.",
        },
        {
          question: "¿Atiendes en línea o presencial?",
          answer:
            "En línea",
        },
      ],
    },
    {
      title: "❤️‍🩹 Sobre motivos de consulta",
      questions: [
        {
          question: "¿Puedo ir a terapia aunque no tenga un “problema grave”?",
          answer:
            "Sí. La terapia no es solo para crisis, también para crecimiento personal, autoconocimiento y prevenir dificultades.",
        },
        {
          question: "¿Me puedes ayudar con ansiedad / autoestima / relaciones / etc.?",
          answer:
            "Sí, trabajamos con muchos temas personales y emocionales. Puedes escribirme y lo conversamos sin compromiso.",
        },
        {
          question: "¿Terapia sirve aunque ya lo haya intentado antes?",
          answer:
            "Cada proceso es distinto. Si antes no funcionó, no significa que ahora no lo hará. A veces se trata de encontrar el espacio y momento adecuados.",
        },
      ],
    },
  ];
  