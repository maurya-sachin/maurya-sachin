import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Briefcase,
  Zap,
  Target,
  Heart,
  Code,
  Rocket,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const highlights = [
    {
      icon: Award,
      title: "Performance Expert",
      description:
        "Consistently achieving 95+ Lighthouse scores through advanced optimization techniques and modern web practices.",
      gradient: "from-yellow-400 to-orange-500",
      stats: "95+ Score",
      metric: "Lighthouse Performance",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaborative approach with cross-functional teams, mentoring junior developers, and driving technical excellence.",
      gradient: "from-blue-400 to-cyan-500",
      stats: "2+ Years",
      metric: "Professional Experience",
    },
    {
      icon: Briefcase,
      title: "Solution Builder",
      description:
        "Creative problem-solving approach for complex frontend challenges and scalable application architecture.",
      gradient: "from-purple-400 to-pink-500",
      stats: "25+ Projects",
      metric: "Successfully Delivered",
    },
  ];

  const skills = [
    {
      name: "React.js",
      level: 95,
      color: "bg-blue-500",
      projects: "15+ projects",
    },
    {
      name: "Next.js",
      level: 90,
      color: "bg-gray-700",
      projects: "8+ projects",
    },
    {
      name: "TypeScript",
      level: 88,
      color: "bg-blue-600",
      projects: "12+ projects",
    },
    {
      name: "Performance",
      level: 92,
      color: "bg-green-500",
      projects: "All projects",
    },
  ];

  const achievements = [
    "Built enterprise-grade applications serving 500+ daily users",
    "Achieved 80% performance improvement across multiple projects",
    "Implemented WCAG 2.1 AA accessibility standards",
    "Led frontend architecture decisions for major client projects",
    "Mentored junior developers in modern React practices",
    "Delivered pixel-perfect designs with responsive layouts",
  ];

  const personalValues = [
    { icon: Code, text: "Clean, maintainable code", color: "text-blue-500" },
    { icon: Zap, text: "Performance-first mindset", color: "text-yellow-500" },
    { icon: Target, text: "User-centered design", color: "text-green-500" },
    { icon: Heart, text: "Continuous learning", color: "text-red-500" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-blue-500/10 dark:bg-blue-400/5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.p
            className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm a passionate{" "}
            <motion.strong
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Frontend Developer
            </motion.strong>{" "}
            dedicated to crafting exceptional digital experiences. My journey
            combines technical excellence with creative problem-solving to build
            applications that make a real impact.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Highlights Cards */}
          <div className="space-y-6">
            <motion.h3
              className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              What Drives Me
            </motion.h3>

            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl border backdrop-blur-sm relative overflow-hidden bg-white/70 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <motion.span
                          className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.2 + 0.5,
                            duration: 0.3,
                          }}
                        >
                          {item.stats}
                        </motion.span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {item.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills & Achievements */}
          <div className="space-y-8">
            {/* Quick Skills Overview */}
            <motion.div
              className="p-6 rounded-2xl border backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Core Expertise
              </h4>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <div className="text-right">
                        <span className="text-sm text-blue-500 font-bold">
                          {skill.level}%
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.projects}
                        </p>
                      </div>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              className="p-6 rounded-2xl border backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Key Achievements
              </h4>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="flex-shrink-0 mt-1"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Values */}
            <motion.div
              className="p-6 rounded-2xl border backdrop-blur-sm bg-white/70 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <Rocket className="w-5 h-5 mr-2 text-purple-500" />
                My Values
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className={`w-5 h-5 ${value.color}`} />
                    </motion.div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {value.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg mb-6 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.02 }}
          >
            Ready to bring innovative ideas to life with cutting-edge
            technology?
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">
              Let's build the future together!
            </span>
            <span className="text-2xl">✨</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
