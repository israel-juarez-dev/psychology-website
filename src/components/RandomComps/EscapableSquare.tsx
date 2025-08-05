// src/components/EscapableSquare.tsx
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function EscapableSquare() {
  const jailRef = useRef<HTMLDivElement>(null);
  const [escaped, setEscaped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (_: any, info: { point: { x: number; y: number } }) => {
    const jail = jailRef.current?.getBoundingClientRect();
    if (!jail) return;

    // Check if prisoner is dragged outside jail boundaries
    if (
      info.point.y > jail.bottom ||
      info.point.y < jail.top ||
      info.point.x < jail.left ||
      info.point.x > jail.right
    ) {
      setEscaped(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <div className="relative">
        {/* Freedom area (outside jail) */}
        <div className="w-80 h-80 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
          {/* Jail */}
          <motion.div
            ref={jailRef}
            className="w-60 h-60 bg-gray-200 border-4 border-gray-400 rounded-md relative"
          >
            {/* Jail door at bottom */}
            <div className="absolute bottom-0 left-1/3 w-1/3 h-2 bg-yellow-300 z-10 flex justify-center">
              <div className="w-1 h-6 bg-yellow-500 -mt-4" />
            </div>

            {/* Prisoner (blue square) */}
            {!escaped && (
              <motion.div
                className="w-16 h-16 bg-blue-500 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 touch-none z-20 cursor-grab"
                drag
                dragConstraints={jailRef}
                dragElastic={0.2}
                whileDrag={{ 
                  scale: 1.1,
                  cursor: "grabbing"
                }}
                onDrag={handleDrag}
              />
            )}
          </motion.div>

          {/* Escaped prisoner */}
          {escaped && (
            <motion.div
              className="w-16 h-16 bg-blue-500 rounded-md absolute touch-none z-30"
              initial={{ 
                x: 0,
                y: 0,
                scale: 1.1
              }}
              animate={{
                x: 100,
                y: 50,
                scale: 1,
                transition: { duration: 0.5 }
              }}
            />
          )}
        </div>
      </div>

      {/* Escape message */}
      {escaped && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-green-600"
        >
          🎉 You escaped!
        </motion.div>
      )}
    </div>
  );
}