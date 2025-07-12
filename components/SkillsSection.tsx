// components/SkillsSection.tsx 
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Code, Globe, Terminal, Layers, Smartphone, Database,
    Cpu, Sparkles, Zap, Settings, Palette, TestTube
} from 'lucide-react'

interface Skill {
    name: string
    level: number
    category: "Frontend" | "Backend" | "Tools" | "Design"
    icon: React.ElementType
    color: string
    keywords: string[]
    experience: string
}

interface SkillsSectionProps {
    isDarkMode: boolean
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState<string>("All")
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

    const skills: Skill[] = [
        {
            name: "React.js",
            level: 95,
            category: "Frontend",
            icon: Code,
            color: "from-cyan-400 to-blue-500",
            keywords: ["Hooks", "Context", "Components", "JSX", "Virtual DOM"],
            experience: "2+ years building scalable applications"
        },
        {
            name: "Next.js",
            level: 90,
            category: "Frontend",
            icon: Globe,
            color: "from-gray-600 to-gray-800",
            keywords: ["SSR", "SSG", "API Routes", "App Router", "Performance"],
            experience: "Expert in SSR and performance optimization"
        },
        {
            name: "TypeScript",
            level: 88,
            category: "Frontend",
            icon: Terminal,
            color: "from-blue-600 to-blue-800",
            keywords: ["Type Safety", "Interfaces", "Generics", "Decorators"],
            experience: "Strong typing for enterprise applications"
        },
        {
            name: "Redux Toolkit",
            level: 85,
            category: "Frontend",
            icon: Layers,
            color: "from-purple-500 to-purple-700",
            keywords: ["State Management", "RTK Query", "Slices", "Thunks"],
            experience: "Complex state management solutions"
        },
        {
            name: "Tailwind CSS",
            level: 92,
            category: "Design",
            icon: Palette,
            color: "from-teal-400 to-cyan-500",
            keywords: ["Utility Classes", "Responsive", "Custom Config", "JIT"],
            experience: "Rapid UI development and design systems"
        },
        {
            name: "GSAP",
            level: 82,
            category: "Design",
            icon: Sparkles,
            color: "from-green-400 to-emerald-500",
            keywords: ["Animations", "Timelines", "ScrollTrigger", "Morphing"],
            experience: "Advanced web animations and interactions"
        },
        {
            name: "GraphQL",
            level: 80,
            category: "Backend",
            icon: Database,
            color: "from-pink-500 to-rose-500",
            keywords: ["Queries", "Mutations", "Schema", "Apollo Client"],
            experience: "Efficient data fetching and API design"
        },
        {
            name: "Node.js",
            level: 75,
            category: "Backend",
            icon: Cpu,
            color: "from-green-500 to-emerald-600",
            keywords: ["Express", "API Development", "Middleware", "MongoDB"],
            experience: "Backend development and API creation"
        },
        {
            name: "Webpack",
            level: 78,
            category: "Tools",
            icon: Settings,
            color: "from-blue-500 to-indigo-600",
            keywords: ["Bundling", "Optimization", "Loaders", "Plugins"],
            experience: "Build optimization and configuration"
        },
        {
            name: "Jest",
            level: 80,
            category: "Tools",
            icon: TestTube,
            color: "from-orange-500 to-red-500",
            keywords: ["Unit Testing", "Mocking", "Coverage", "TDD"],
            experience: "Comprehensive testing strategies"
        },
        {
            name: "Framer Motion",
            level: 85,
            category: "Design",
            icon: Zap,
            color: "from-purple-400 to-pink-500",
            keywords: ["React Animations", "Gestures", "Layout", "SVG"],
            experience: "Modern React animations and micro-interactions"
        },
        {
            name: "Responsive Design",
            level: 92,
            category: "Design",
            icon: Smartphone,
            color: "from-cyan-500 to-blue-600",
            keywords: ["Mobile First", "Grid", "Flexbox", "Media Queries"],
            experience: "Cross-device compatibility expert"
        }
    ]

    const categories = ["All", "Frontend", "Backend", "Tools", "Design"]

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === activeCategory)

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Reduced background elements - only 3 instead of 10 */}
            <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-5`}
                        style={{
                            width: `${80 + i * 30}px`,
                            height: `${80 + i * 30}px`,
                            left: `${20 + i * 30}%`,
                            top: `${25 + i * 20}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.03, 0.08, 0.03],
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
                        Technical Expertise
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        A comprehensive toolkit of modern technologies and frameworks that power exceptional web experiences
                    </motion.p>
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
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${activeCategory === category
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                : isDarkMode
                                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    className="absolute inset-0 bg-blue-500 rounded-xl opacity-20"
                                    layoutId="activeCategory"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                {/* OPTIMIZED Skills Grid - Fixed Hover Performance */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className={`p-6 rounded-xl border relative overflow-hidden group cursor-pointer ${isDarkMode
                                    ? "bg-gray-800/70 border-gray-700 hover:border-gray-600"
                                    : "bg-white/80 border-gray-200 hover:border-gray-300"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                onHoverStart={() => setHoveredSkill(skill.name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                            >
                                {/* SIMPLIFIED Hover Background Effect - No complex gradients */}
                                <motion.div
                                    className={`absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />

                                {/* Skill Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <motion.div
                                                className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                                                whileHover={{ rotate: 180, scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <skill.icon className="w-5 h-5 text-white" />
                                            </motion.div>
                                            <div>
                                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                                <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                    {skill.category}
                                                </span>
                                            </div>
                                        </div>
                                        <motion.span
                                            className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                            animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {skill.level}%
                                        </motion.span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className={`h-2 rounded-full overflow-hidden mb-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>

                                    {/* Experience */}
                                    <motion.p
                                        className={`text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                                        initial={{ opacity: 0.7 }}
                                        animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {skill.experience}
                                    </motion.p>

                                    {/* OPTIMIZED Keywords - Simplified Animation */}
                                    <AnimatePresence>
                                        {hoveredSkill === skill.name && (
                                            <motion.div
                                                className="space-y-2"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="flex flex-wrap gap-1">
                                                    {skill.keywords.slice(0, 3).map((keyword, i) => (
                                                        <motion.span
                                                            key={keyword}
                                                            className={`px-2 py-1 text-xs rounded-md ${isDarkMode
                                                                ? "bg-gray-700 text-gray-300"
                                                                : "bg-gray-100 text-gray-600"
                                                                }`}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.05 }}
                                                        >
                                                            {keyword}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* REMOVED Floating Particles - Performance killer */}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Stats */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "12+", label: "Technologies", icon: Code },
                            { number: "95+", label: "Avg Performance", icon: Zap },
                            { number: "2+", label: "Years Experience", icon: Sparkles },
                            { number: "25+", label: "Projects Built", icon: Globe },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <stat.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <motion.div
                                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection