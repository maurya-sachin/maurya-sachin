import React, { useState, useEffect, useRef } from "react";
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
  Star,
  Coffee,
  Heart,
} from "lucide-react";

const HeroSection = ({ scrollToSection, downloadResume }) => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const sectionRef = useRef(null);

  const words = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Performance Expert",
  ];

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
      return () =>
        sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Typing animation
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
            : currentWord.substring(0, current.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const stats = [
    {
      number: "2+",
      label: "Years Experience",
      icon: Calendar,
      color: "from-blue-500 to-cyan-400",
    },
    {
      number: "25+",
      label: "Projects Built",
      icon: Code,
      color: "from-green-500 to-emerald-400",
    },
    {
      number: "95+",
      label: "Performance Score",
      icon: Zap,
      color: "from-yellow-500 to-orange-400",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: Heart,
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
      ref={sectionRef}
      className="min-h-screen pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(59, 130, 246, 0.15), 
              rgba(147, 51, 234, 0.1) 40%, 
              transparent 70%)`,
          }}
        />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              left: `${10 + i * 8}%`,
              top: `${5 + i * 8}%`,
              background:
                i % 3 === 0
                  ? "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                  : i % 3 === 1
                    ? "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))"
                    : "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating icons */}
        {[
          { icon: Sparkles, x: "15%", y: "20%", delay: 0, duration: 6 },
          { icon: Star, x: "85%", y: "15%", delay: 1, duration: 8 },
          { icon: Coffee, x: "20%", y: "70%", delay: 2, duration: 7 },
          { icon: Rocket, x: "90%", y: "75%", delay: 3, duration: 5 },
          { icon: Code, x: "10%", y: "50%", delay: 4, duration: 9 },
          { icon: Zap, x: "80%", y: "45%", delay: 1.5, duration: 6 },
        ].map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/20 dark:text-blue-300/10"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <element.icon className="w-6 h-6" />
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Additional decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`decoration-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + i * 9}%`,
              width: "2px",
              height: "2px",
              background: "rgba(59, 130, 246, 0.4)",
              borderRadius: "50%",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-600 dark:text-blue-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium mb-4 sm:mb-6 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                y: -2,
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

            {/* Main Heading */}
            <div className="mb-4 sm:mb-6">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight"
                variants={itemVariants}
              >
                <motion.span
                  className="block text-gray-900 dark:text-white mb-1 sm:mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Sachin
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg -z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </motion.span>

                {/* Typing animation */}
                <div className="h-10 sm:h-12 md:h-16 lg:h-18 flex items-center overflow-hidden">
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent break-words"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {typedText}
                  </motion.span>
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-12 lg:h-14 bg-gradient-to-b from-blue-500 to-purple-500 ml-1 rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </motion.h1>

              <motion.div
                className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "8rem" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Description */}
            <motion.div
              className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              <motion.p
                className="mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Transforming ideas into{" "}
                <motion.span
                  className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  exceptional digital experiences
                </motion.span>{" "}
                with modern web technologies.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Specializing in{" "}
                <motion.span
                  className="font-semibold text-green-500"
                  whileHover={{ scale: 1.05 }}
                >
                  React.js, Next.js, and performance optimization
                </motion.span>
                .
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-xl overflow-hidden text-sm"
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
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white group-hover:rotate-12 transition-transform" />
                </motion.div>
                <span className="relative z-10">Explore My Work</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 relative overflow-hidden text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                />
                <span className="group-hover:mr-2 transition-all relative z-10">
                  Let's Connect
                </span>
                <ArrowRight className="w-0 group-hover:w-4 sm:group-hover:w-5 h-4 sm:h-5 inline-block transition-all duration-300 overflow-hidden relative z-10" />
              </motion.button>
            </motion.div>

            {/* Location & Status */}
            <motion.div
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-gray-500 dark:text-gray-400"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Delhi, India</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05, color: "#10B981" }}
                transition={{ duration: 0.2 }}
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
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{currentTime} IST</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div
              className="relative rounded-2xl p-5 sm:p-6 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl bg-white/50 dark:bg-gray-800/50 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dynamic background */}
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
                  className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Quick Stats
                </motion.h3>

                {/* Flowing stats layout */}
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center space-x-4 group cursor-pointer"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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

                      <div className="flex-1">
                        <motion.div
                          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Resume Button */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    onClick={downloadResume}
                    className="group bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 mx-auto hover:shadow-lg transition-all text-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            className="w-0.5 sm:w-1 h-2.5 sm:h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1.5 sm:mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
