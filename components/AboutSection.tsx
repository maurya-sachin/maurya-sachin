/* eslint-disable @typescript-eslint/no-explicit-any */
// components/AboutSection.tsx
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
} from "lucide-react";

interface AboutSectionProps {
  isDarkMode: boolean;
  parallaxY: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  isDarkMode,
  parallaxY,
}) => {
  const highlights = [
    {
      icon: Award,
      title: "Performance Expert",
      description:
        "Consistently achieving 95+ Lighthouse scores and 80% performance improvements through advanced optimization techniques.",
      gradient: "from-yellow-400 to-orange-500",
      stats: "95+ Lighthouse",
    },
    {
      icon: Users,
      title: "Team Collaborator",
      description:
        "Experienced in cross-functional teams, Agile methodologies, and modern development workflows with strong communication skills.",
      gradient: "from-blue-400 to-cyan-500",
      stats: "2+ Years",
    },
    {
      icon: Briefcase,
      title: "Problem Solver",
      description:
        "Engineering mindset combined with creative solutions for complex frontend challenges and user experience optimization.",
      gradient: "from-purple-400 to-pink-500",
      stats: "25+ Projects",
    },
  ];

  const skills = [
    { name: "React.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 88, color: "bg-blue-600" },
    { name: "Next.js", level: 90, color: "bg-gray-800" },
    { name: "Performance", level: 92, color: "bg-green-500" },
  ];

  const funFacts = [
    { icon: Code, text: "1.2M+ lines of code written", color: "text-blue-500" },
    {
      icon: Zap,
      text: "80% faster load times achieved",
      color: "text-yellow-500",
    },
    {
      icon: Target,
      text: "95+ Lighthouse score consistent",
      color: "text-green-500",
    },
    { icon: Heart, text: "Passionate about clean code", color: "text-red-500" },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative ${isDarkMode ? "bg-gray-800/30" : "bg-gray-50/50"}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full ${isDarkMode ? "bg-blue-500" : "bg-blue-400"} opacity-5`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
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
        style={{ y: parallaxY }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className={`text-xl leading-relaxed max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            I&apos;m a passionate{" "}
            <motion.strong
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Frontend Developer
            </motion.strong>{" "}
            with expertise in building scalable, high-performance web
            applications. My journey combines technical excellence with creative
            problem-solving to deliver exceptional user experiences that make a
            difference.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Highlights Cards */}
          <div className="space-y-6">
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What Sets Me Apart
            </motion.h3>

            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className={`p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden group ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                    : "bg-white/70 border-gray-200 hover:border-gray-300"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <motion.span
                          className={`text-sm font-bold px-2 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.2 + 0.5,
                            duration: 0.3,
                          }}
                          viewport={{ once: true }}
                        >
                          {item.stats}
                        </motion.span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills & Fun Facts */}
          <div className="space-y-8">
            {/* Quick Skills Overview */}
            <motion.div
              className={`p-6 rounded-xl border backdrop-blur-sm ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-700"
                  : "bg-white/70 border-gray-200"
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Core Expertise
              </h4>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-blue-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
                    >
                      <motion.div
                        className={`h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className={`p-6 rounded-xl border backdrop-blur-sm ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-700"
                  : "bg-white/70 border-gray-200"
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-purple-500" />
                By the Numbers
              </h4>

              <div className="space-y-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <fact.icon className={`w-5 h-5 ${fact.color}`} />
                    </motion.div>
                    <span
                      className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} group-hover:text-blue-500 transition-colors`}
                    >
                      {fact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            whileHover={{ scale: 1.02 }}
          >
            Ready to bring your ideas to life with modern web technologies?
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Let&apos;s build something amazing together!
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
