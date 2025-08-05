// src/animations/index.ts
import { motion } from "framer-motion";
// src/animations/index.ts
export * from "./CardAnimations";
// Export other animation files as you create them

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export const MotionCard = ({ children, className }: MotionCardProps) => {
  return ( <motion.div
    className={`bg-white rounded-2xl shadow-md transition-shadow hover:shadow-xl cursor-pointer ${className || ""}`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
  >
      {children}
    </motion.div>
  );
};
type MotionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const MotionContainer = ({ children, className }: MotionContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 1.90, // ajusta el tiempo entre tarjetas
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Animación para el navbar (fade down)
export const navbarMotion = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

// Animación del menú móvil
export const mobileMenuMotion = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 }
}

// Variantes para los links con stagger
export const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 }
  })
}
// src/animations/index.ts

export const shake = {
  animate: { x: [0, -10, 10, -10, 0] },
  transition: { duration: 0.4 },
}
