import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  const codeElements = [
    "React",
    "JS",
    "TS",
    "CSS",
    "{}",
    "</>",
    "npm",
    "git",
    "API",
    "UI",
    "UX",
    "CSS3",
  ];

  const shapes = [
    { type: "circle", size: "w-32 h-32" },
    { type: "square", size: "w-24 h-24" },
    { type: "triangle", size: "w-20 h-20" },
    { type: "hexagon", size: "w-28 h-28" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric shapes */}
      {[...Array(12)].map((_, i) => {
        const shape = shapes[i % shapes.length];
        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${shape.size} ${
              shape.type === "circle"
                ? "rounded-full"
                : shape.type === "square"
                  ? "rounded-lg"
                  : shape.type === "triangle"
                    ? "rounded-sm transform rotate-45"
                    : "rounded-2xl transform rotate-12"
            } bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10`}
            style={{
              left: `${5 + ((i * 15) % 90)}%`,
              top: `${10 + ((i * 12) % 80)}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Floating code elements */}
      {codeElements.map((code, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-xs font-mono font-bold text-blue-400/40 dark:text-blue-300/30 select-none"
          style={{
            left: `${10 + ((i * 8) % 85)}%`,
            top: `${15 + ((i * 7) % 70)}%`,
            fontSize: `${0.7 + (i % 3) * 0.2}rem`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        >
          {code}
        </motion.div>
      ))}

      {/* Pulsing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-blue-500/50 dark:bg-blue-400/40 rounded-full"
          style={{
            left: `${20 + ((i * 10) % 60)}%`,
            top: `${25 + ((i * 8) % 50)}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Gradient blobs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className={`absolute w-64 h-64 rounded-full bg-gradient-to-r ${
            i % 3 === 0
              ? "from-blue-400/10 to-purple-400/10"
              : i % 3 === 1
                ? "from-purple-400/10 to-pink-400/10"
                : "from-cyan-400/10 to-blue-400/10"
          } dark:opacity-50 blur-xl`}
          style={{
            left: `${-10 + ((i * 25) % 120)}%`,
            top: `${-10 + ((i * 20) % 120)}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="w-full h-full bg-grid-pattern bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  );
};

export default FloatingElements;
