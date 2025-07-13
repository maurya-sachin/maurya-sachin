import React from "react";
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
import useStore from "../store/useStore";

const SkillsSection = () => {
  const { activeSkillCategory, setActiveSkillCategory } = useStore();

  const skills = [
    {
      name: "React.js",
      level: 95,
      category: "Frontend",
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      keywords: ["Hooks", "Context", "Components", "JSX", "Virtual DOM"],
      experience: "2+ years building scalable applications",
      projects: 15,
    },
    {
      name: "Next.js",
      level: 90,
      category: "Frontend",
      icon: Globe,
      color: "from-gray-600 to-gray-800",
      keywords: ["SSR", "SSG", "API Routes", "App Router", "Performance"],
      experience: "Expert in SSR and performance optimization",
      projects: 8,
    },
    {
      name: "JavaScript ES6+",
      level: 92,
      category: "Frontend",
      icon: Terminal,
      color: "from-yellow-400 to-yellow-600",
      keywords: ["ES6+", "Async/Await", "Modules", "Destructuring"],
      experience: "Advanced modern JavaScript patterns",
      projects: 20,
    },
    {
      name: "Redux Toolkit",
      level: 85,
      category: "Frontend",
      icon: Layers,
      color: "from-purple-500 to-purple-700",
      keywords: ["State Management", "RTK Query", "Slices", "Thunks"],
      experience: "Complex state management solutions",
      projects: 6,
    },
    {
      name: "Tailwind CSS",
      level: 92,
      category: "Design",
      icon: Palette,
      color: "from-teal-400 to-cyan-500",
      keywords: ["Utility Classes", "Responsive", "Custom Config", "JIT"],
      experience: "Rapid UI development and design systems",
      projects: 18,
    },
    {
      name: "GSAP",
      level: 82,
      category: "Design",
      icon: Sparkles,
      color: "from-green-400 to-emerald-500",
      keywords: ["Animations", "Timelines", "ScrollTrigger", "Morphing"],
      experience: "Advanced web animations and interactions",
      projects: 5,
    },
    {
      name: "Framer Motion",
      level: 85,
      category: "Design",
      icon: Zap,
      color: "from-purple-400 to-pink-500",
      keywords: ["React Animations", "Gestures", "Layout", "SVG"],
      experience: "Modern React animations and micro-interactions",
      projects: 12,
    },
    {
      name: "Responsive Design",
      level: 92,
      category: "Design",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600",
      keywords: ["Mobile First", "Grid", "Flexbox", "Media Queries"],
      experience: "Cross-device compatibility expert",
      projects: 25,
    },
    {
      name: "Node.js",
      level: 75,
      category: "Backend",
      icon: Cpu,
      color: "from-green-500 to-emerald-600",
      keywords: ["Express", "API Development", "Middleware", "MongoDB"],
      experience: "Backend development and API creation",
      projects: 4,
    },
    {
      name: "GraphQL",
      level: 80,
      category: "Backend",
      icon: Database,
      color: "from-pink-500 to-rose-500",
      keywords: ["Queries", "Mutations", "Schema", "Apollo Client"],
      experience: "Efficient data fetching and API design",
      projects: 3,
    },
    {
      name: "Webpack",
      level: 78,
      category: "Tools",
      icon: Settings,
      color: "from-blue-500 to-indigo-600",
      keywords: ["Bundling", "Optimization", "Loaders", "Plugins"],
      experience: "Build optimization and configuration",
      projects: 8,
    },
    {
      name: "Jest & Testing",
      level: 80,
      category: "Tools",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      keywords: ["Unit Testing", "Mocking", "Coverage", "TDD"],
      experience: "Comprehensive testing strategies",
      projects: 10,
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

  const filteredSkills =
    activeSkillCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  const skillStats = {
    totalSkills: skills.length,
    avgLevel: Math.round(
      skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length
    ),
    totalProjects: skills.reduce((acc, skill) => acc + skill.projects, 0),
    yearsExperience: "2+",
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5 dark:bg-blue-400/5"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${20 + i * 30}%`,
              top: `${25 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of cutting-edge technologies that power
            exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: "Technologies",
              value: skillStats.totalSkills,
              icon: Code,
              color: "from-blue-500 to-cyan-400",
            },
            {
              label: "Avg Proficiency",
              value: `${skillStats.avgLevel}%`,
              icon: TrendingUp,
              color: "from-green-500 to-emerald-400",
            },
            {
              label: "Projects Built",
              value: skillStats.totalProjects,
              icon: Star,
              color: "from-purple-500 to-pink-400",
            },
            {
              label: "Experience",
              value: skillStats.yearsExperience,
              icon: Zap,
              color: "from-yellow-500 to-orange-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveSkillCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                activeSkillCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
              {activeSkillCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 rounded-xl"
                  layoutId="activeSkillCategory"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkillCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group p-6 rounded-2xl border relative overflow-hidden cursor-pointer bg-white/80 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
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
                        transition={{ duration: 0.2 }}
                      >
                        {skill.level}%
                      </motion.span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.projects} projects
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 rounded-full overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Experience */}
                  <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                    {skill.experience}
                  </p>

                  {/* Keywords */}
                  <motion.div
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                    initial={{ height: 0 }}
                    whileHover={{ height: "auto" }}
                  >
                    <div className="flex flex-wrap gap-1">
                      {skill.keywords.slice(0, 3).map((keyword, i) => (
                        <motion.span
                          key={keyword}
                          className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {keyword}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg mb-6 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.02 }}
          >
            Ready to leverage these skills for your next project?
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">💡</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">
              Let's create something extraordinary together!
            </span>
            <span className="text-2xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
