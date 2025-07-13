import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Globe,
  Terminal,
  Layers,
  Smartphone,
  Database,
  Cpu,
  Sparkles,
  Zap,
  Settings,
  Palette,
  TestTube,
  Star,
  TrendingUp,
} from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    {
      name: "React.js",
      level: 95,
      category: "Frontend",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      projects: 15,
    },
    {
      name: "Next.js",
      level: 90,
      category: "Frontend",
      icon: Globe,
      color: "from-gray-600 to-gray-800",
      projects: 8,
    },
    {
      name: "JavaScript ES6+",
      level: 92,
      category: "Frontend",
      icon: Terminal,
      color: "from-yellow-400 to-yellow-600",
      projects: 20,
    },
    {
      name: "Redux Toolkit",
      level: 85,
      category: "Frontend",
      icon: Layers,
      color: "from-purple-500 to-purple-700",
      projects: 6,
    },
    {
      name: "Tailwind CSS",
      level: 92,
      category: "Design",
      icon: Palette,
      color: "from-teal-400 to-cyan-500",
      projects: 18,
    },
    {
      name: "GSAP",
      level: 82,
      category: "Design",
      icon: Sparkles,
      color: "from-green-400 to-emerald-500",
      projects: 5,
    },
    {
      name: "Framer Motion",
      level: 85,
      category: "Design",
      icon: Zap,
      color: "from-purple-400 to-pink-500",
      projects: 12,
    },
    {
      name: "Responsive Design",
      level: 92,
      category: "Design",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600",
      projects: 25,
    },
    {
      name: "Node.js",
      level: 75,
      category: "Backend",
      icon: Cpu,
      color: "from-green-500 to-emerald-600",
      projects: 4,
    },
    {
      name: "GraphQL",
      level: 80,
      category: "Backend",
      icon: Database,
      color: "from-pink-500 to-rose-500",
      projects: 3,
    },
    {
      name: "Webpack",
      level: 78,
      category: "Tools",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      projects: 8,
    },
    {
      name: "Jest & Testing",
      level: 80,
      category: "Tools",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      projects: 10,
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const stats = [
    {
      label: "Technologies",
      value: "12",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
    },
    {
      label: "Avg Proficiency",
      value: "86%",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-400",
    },
    {
      label: "Projects Built",
      value: "134",
      icon: Star,
      color: "from-purple-500 to-pink-400",
    },
    {
      label: "Experience",
      value: "2+",
      icon: Zap,
      color: "from-yellow-500 to-orange-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Simple background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/5 dark:to-purple-900/5" />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5 dark:bg-blue-400/5"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${25 + i * 20}%`,
              top: `${20 + i * 25}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of cutting-edge technologies that power
            exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <motion.div
                className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group p-5 rounded-xl border relative overflow-hidden cursor-pointer bg-white/80 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Hover gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {skill.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <motion.span
                        className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.projects} projects
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg mb-4 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.02 }}
          >
            Ready to leverage these skills for your next project?
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl">💡</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Let's create something extraordinary together!
            </span>
            <span className="text-xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
