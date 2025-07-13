import React, { useState, useEffect } from "react";
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
  Sparkles,
  Download,
} from "lucide-react";
import useStore from "../store/useStore";

const HeroSection = ({ scrollToSection, heroY, downloadResume }) => {
  const { currentTime } = useStore();
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Performance Expert",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText((current) =>
          isDeleting
            ? currentWord.substring(0, current.length - 1)
            : currentWord.substring(0, current.length + 1),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const stats = [
    {
      number: "2+",
      label: "Years",
      icon: Calendar,
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "25+",
      label: "Projects",
      icon: Code,
      color: "from-green-500 to-emerald-400",
    },
    {
      number: "95+",
      label: "Performance",
      icon: Zap,
      color: "from-yellow-500 to-orange-400",
    },
    {
      number: "100%",
      label: "Satisfaction",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center"
    >
      {/* Animated mesh gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.3) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10 w-full"
        style={{ y: heroY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="whitespace-nowrap">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading - Made more responsive */}
            <div className="mb-6 sm:mb-8">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
                variants={itemVariants}
              >
                <span className="block text-gray-900 dark:text-white mb-1 sm:mb-2">
                  Hi, I'm{" "}
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sachin
                  </motion.span>
                </span>

                {/* Responsive typing animation container */}
                <div className="h-12 sm:h-16 md:h-20 lg:h-24 flex items-center overflow-hidden">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent break-words">
                    {typedText}
                  </span>
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 lg:h-20 bg-blue-500 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </motion.h1>

              <motion.div
                className="h-0.5 sm:h-1 w-20 sm:w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Description - More responsive */}
            <motion.div
              className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 leading-relaxed max-w-2xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              <p className="mb-3 sm:mb-4">
                Transforming ideas into{" "}
                <motion.span
                  className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  exceptional digital experiences
                </motion.span>{" "}
                with modern web technologies.
              </p>
              <p>
                Specializing in{" "}
                <motion.span
                  className="font-semibold text-green-500"
                  whileHover={{ scale: 1.05 }}
                >
                  React.js, Next.js, and performance optimization
                </motion.span>
                .
              </p>
            </motion.div>

            {/* CTA Buttons - Better responsive layout */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center space-x-2 sm:space-x-3 shadow-xl overflow-hidden text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                  <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white group-hover:rotate-12 transition-transform" />
                </div>
                <span className="relative z-10">Explore My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:mr-2 transition-all relative z-10">
                  Let's Connect
                </span>
                <ArrowRight className="w-0 group-hover:w-4 sm:group-hover:w-5 h-4 sm:h-5 inline-block transition-all duration-300 overflow-hidden relative z-10" />
              </motion.button>
            </motion.div>

            {/* Location & Status - More responsive */}
            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-gray-500 dark:text-gray-400"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Delhi, India</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#10B981" }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs sm:text-sm">Open to remote work</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
              >
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{currentTime} IST</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interactive Stats Card - Better responsive handling */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl bg-white/50 dark:bg-gray-800/50 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))",
                    "linear-gradient(225deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
                    "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Quick Stats
                </motion.h3>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center group cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <motion.div
                        className="relative mb-3 sm:mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>

                      <motion.div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.9 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        {stat.number}
                      </motion.div>

                      <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Resume Button */}
                <motion.div
                  className="mt-6 sm:mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    onClick={downloadResume}
                    className="group bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium flex items-center space-x-2 mx-auto hover:shadow-lg transition-all text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:animate-bounce" />
                    <span>Resume</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-0.5 sm:w-1 h-2.5 sm:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1.5 sm:mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
