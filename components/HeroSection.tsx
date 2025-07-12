// components/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Rocket,
  Zap,
  TrendingUp,
  Calendar,
  Code,
} from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
  currentTime: string;
  heroY: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  isDarkMode,
  scrollToSection,
  currentTime,
  heroY,
}) => {
  const stats = [
    {
      number: "2+",
      label: "Years Experience",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      description: "Frontend Development",
    },
    {
      number: "25+",
      label: "Projects Built",
      icon: Code,
      color: "from-green-500 to-green-600",
      description: "Web Applications",
    },
    {
      number: "95+",
      label: "Lighthouse Score",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      description: "Performance Expert",
    },
    {
      number: "80%",
      label: "Performance Boost",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      description: "Load Time Improvement",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-5 ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
            style={{
              width: `${80 + i * 25}px`,
              height: `${80 + i * 25}px`,
              left: `${5 + i * 6}%`,
              top: `${5 + i * 5}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["React", "JS", "TS", "CSS", "{}", "</>", "npm", "git"].map(
          (text, i) => (
            <motion.div
              key={text}
              className={`absolute text-xs font-mono opacity-10 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {text}
            </motion.div>
          ),
        )}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10 w-full"
        style={{ y: heroY }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>🚀 Available for Frontend Developer opportunities</span>
            </motion.div>

            {/* Main Heading with Typing Effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Frontend
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Developer
              </motion.span>
              <motion.div
                className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mt-4"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </h1>

            {/* Description */}
            <motion.div
              className={`text-lg sm:text-xl lg:text-2xl mb-12 leading-relaxed max-w-2xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <p className="mb-4">
                Crafting exceptional digital experiences with{" "}
                <motion.span
                  className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  React.js, Next.js, and TypeScript
                </motion.span>
                .
              </p>
              <p>
                Specializing in{" "}
                <motion.span
                  className="font-semibold text-green-500"
                  whileHover={{ scale: 1.05 }}
                >
                  performance optimization
                </motion.span>{" "}
                and building scalable, accessible web applications.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-2xl group relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center relative z-10">
                  <Rocket className="w-3 h-3 text-blue-600 group-hover:rotate-12 transition-transform" />
                </div>
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`border-2 text-center px-10 py-4 rounded-xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                  isDarkMode
                    ? "border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white"
                    : "border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:mr-2 transition-all relative z-10">
                  Let's Connect
                </span>
                <ArrowRight className="w-0 group-hover:w-5 h-5 inline-block transition-all duration-300 overflow-hidden relative z-10" />
              </motion.button>
            </motion.div>

            {/* Location & Status */}
            <motion.div
              className={`flex flex-wrap items-center gap-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Delhi, India</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm">Open to remote opportunities</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-4 h-4" />
                <span className="text-sm">{currentTime} IST</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interactive Stats Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.div
              className={`rounded-3xl p-8 backdrop-blur-xl border shadow-2xl relative overflow-hidden ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/50 border-gray-200"
              }`}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(225deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(315deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Key Achievements
                </motion.h3>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <motion.div
                        className="relative mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>

                      <motion.div
                        className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 1.2 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        {stat.number}
                      </motion.div>

                      <div
                        className={`text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {stat.label}
                      </div>

                      <div
                        className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
