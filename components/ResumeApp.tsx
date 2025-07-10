'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'
import {
    Download,
    Mail,
    Phone,
    Github,
    Linkedin,
    MapPin,
    ArrowRight,
    ExternalLink,
    Calendar,
    Award,
    Code,
    Briefcase,
    ChevronRight,
    Star,
    Zap,
    Users,
    Moon,
    Sun,
    Menu,
    X,
    Eye,
    Layers,
    Smartphone,
    Globe,
    Database,
    Cpu,
    Terminal,
    Rocket,
    TrendingUp
} from 'lucide-react'

// Types
interface Skill {
    name: string
    level: number
    category: 'Frontend' | 'Backend' | 'Tools'
    icon: React.ElementType
    color: string
}

interface Project {
    title: string
    description: string
    tech: string[]
    metrics: Record<string, string>
    status: 'Live' | 'Demo'
    gradient: string
    features: string[]
}

interface Experience {
    role: string
    company: string
    period: string
    location: string
    achievements: string[]
    tech: string[]
    highlights: string[]
}

const ResumeApp: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>('hero')
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isTyping, setIsTyping] = useState<boolean>(true)

    const { scrollY } = useScroll()
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

    const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
    const heroY = useTransform(scrollY, [0, 300], [0, -50])
    const parallaxY = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), springConfig)

    // Advanced mouse tracking for cursor effects
    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }, [])

    useEffect(() => {
        // Theme persistence
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        }

        // Advanced scroll tracking
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        // Typing effect
        const typingTimer = setTimeout(() => setIsTyping(false), 3000)

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', updateMousePosition)
            clearTimeout(typingTimer)
        }
    }, [updateMousePosition])

    const toggleDarkMode = (): void => {
        const newDarkMode = !isDarkMode
        setIsDarkMode(newDarkMode)

        if (newDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const downloadResume = async (): Promise<void> => {
        try {
            // Add loading state and success feedback
            const link = document.createElement('a')
            link.href = '/api/download-resume'
            link.download = 'Sachin_Maurya_Frontend_Developer_Resume.pdf'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            // Success notification would go here
            console.log('✅ Resume download initiated')
        } catch (error) {
            console.error('❌ Download failed:', error)
        }
    }

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    const skills: Skill[] = [
        { name: 'React.js', level: 95, category: 'Frontend', icon: Code, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 90, category: 'Frontend', icon: Globe, color: 'from-gray-600 to-gray-800' },
        { name: 'TypeScript', level: 85, category: 'Frontend', icon: Terminal, color: 'from-blue-600 to-blue-800' },
        { name: 'Redux Toolkit', level: 88, category: 'Frontend', icon: Layers, color: 'from-purple-500 to-purple-700' },
        { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: Smartphone, color: 'from-teal-400 to-cyan-500' },
        { name: 'GraphQL', level: 80, category: 'Backend', icon: Database, color: 'from-pink-500 to-rose-500' },
        { name: 'Node.js', level: 75, category: 'Backend', icon: Cpu, color: 'from-green-500 to-emerald-600' },
        { name: 'Git & GitHub', level: 90, category: 'Tools', icon: Eye, color: 'from-orange-500 to-red-500' },
    ]

    const projects: Project[] = [
        {
            title: 'GENAI Document Analyzer',
            description: 'Enterprise AI-powered document processing platform with real-time chat, advanced analytics, and secure authentication.',
            tech: ['React', 'Redux Toolkit', 'Python API', 'TypeScript', 'WebSocket'],
            metrics: { users: '500+', performance: '90+', accuracy: '98%' },
            status: 'Live',
            gradient: 'from-violet-600 via-purple-600 to-blue-600',
            features: ['Real-time Chat', 'Document Vault', 'AI Processing', 'Advanced Analytics']
        },
        {
            title: 'Kreate Technologies Website',
            description: 'High-performance corporate website with advanced animations, SEO optimization, and lightning-fast load times.',
            tech: ['Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
            metrics: { lighthouse: '95+', loadTime: '0.8s', conversion: '+45%' },
            status: 'Live',
            gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
            features: ['GSAP Animations', 'SEO Optimized', 'Performance First', 'Mobile Responsive']
        },
        {
            title: 'Interactive Kanban Board',
            description: 'Modern task management system with drag-and-drop functionality and real-time collaboration features.',
            tech: ['React', 'TypeScript', 'React DND', 'Zustand', 'Socket.io'],
            metrics: { tasks: '2000+', teams: '25+', efficiency: '+40%' },
            status: 'Demo',
            gradient: 'from-orange-500 via-red-500 to-pink-500',
            features: ['Drag & Drop', 'Real-time Sync', 'Team Collaboration', 'Custom Workflows']
        }
    ]

    const experience: Experience[] = [
        {
            role: 'Frontend Developer',
            company: 'Kreate Technologies',
            period: 'May 2024 - Present',
            location: 'Ghaziabad, India',
            achievements: [
                'Optimized Next.js applications, improving load times by 80% and TTI by 40%',
                'Developed GraphQL middleware, reducing API latency by 20%',
                'Achieved 95+ Lighthouse performance scores across all applications',
                'Built reusable component library, reducing development time by 30%'
            ],
            tech: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind CSS'],
            highlights: ['Performance Expert', 'Component Architecture', 'Team Leadership']
        },
        {
            role: 'Frontend Development Trainee',
            company: 'Kreate Technologies',
            period: 'Sep 2023 - Apr 2024',
            location: 'Ghaziabad, India',
            achievements: [
                'Developed WCAG 2.1 AA compliant government portal interfaces',
                'Created responsive dashboards handling 10,000+ daily users',
                'Led Next.js adoption initiative across development teams',
                'Implemented comprehensive accessibility standards'
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
            highlights: ['Accessibility Expert', 'Responsive Design', 'Modern Frameworks']
        }
    ]

    const navigationItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-900'
            }`}>
            {/* Advanced Cursor Effect */}
            <motion.div
                className="fixed w-6 h-6 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
            />

            {/* SEO-optimized structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Sachin Maurya",
                        "jobTitle": "Frontend Developer",
                        "description": "Frontend Developer specializing in React.js, Next.js, and TypeScript with dark mode expertise",
                        "url": "https://sachinmaurya.dev",
                        "sameAs": [
                            "https://linkedin.com/in/maurya-sachin",
                            "https://github.com/maurya-sachin"
                        ],
                        "knowsAbout": ["React.js", "Next.js", "TypeScript", "GraphQL", "Performance Optimization"],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Delhi",
                            "addressCountry": "IN"
                        }
                    })
                }}
            />

            {/* Advanced Navigation Header */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode
                    ? 'bg-gray-900/90 border-gray-800'
                    : 'bg-white/90 border-gray-200'
                    }`}
                style={{ opacity: headerOpacity }}
            >
                <nav className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-white font-bold text-lg">SM</span>
                            </motion.div>
                            <div>
                                <h1 className="text-lg font-bold">Sachin Maurya</h1>
                                <motion.p
                                    className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                    animate={isTyping ? { opacity: [1, 0, 1] } : {}}
                                    transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
                                >
                                    Frontend Developer
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors relative ${activeSection === item.id
                                        ? 'text-blue-600'
                                        : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                                            layoutId="activeSection"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Dark Mode Toggle */}
                            <motion.button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-lg transition-colors ${isDarkMode
                                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Sun className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Moon className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Resume Download Button */}
                            <motion.button
                                onClick={downloadResume}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center space-x-2 shadow-lg"
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download className="w-4 h-4" />
                                <span>Resume</span>
                            </motion.button>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode
                                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`md:hidden border-t overflow-hidden ${isDarkMode ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'
                                }`}
                        >
                            <div className="px-6 py-4 space-y-4">
                                {navigationItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-lg font-medium transition-colors ${activeSection === item.id
                                            ? 'text-blue-600'
                                            : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Hero Section with Advanced Animations */}
            <section id="hero" className="pt-24 pb-20 px-6 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-64 h-64 rounded-full opacity-10 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                                }`}
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${10 + i * 12}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="max-w-7xl mx-auto relative z-10"
                    style={{ y: heroY }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.span
                                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                🚀 Available for exciting opportunities
                            </motion.span>

                            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                                <motion.span
                                    className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    Frontend
                                </motion.span>
                                <motion.span
                                    className="block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    Developer
                                </motion.span>
                            </h1>

                            <motion.p
                                className={`text-xl lg:text-2xl mb-12 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                Crafting exceptional digital experiences with{' '}
                                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    React.js, Next.js, and TypeScript
                                </span>
                                . Proven track record of{' '}
                                <span className="font-semibold text-green-500">80% performance improvements</span>{' '}
                                and building scalable applications.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6 mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                <motion.button
                                    onClick={() => scrollToSection('projects')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-2xl"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Rocket className="w-5 h-5" />
                                    <span>View My Work</span>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                <motion.button
                                    onClick={() => scrollToSection('contact')}
                                    className={`border-2 text-center px-10 py-4 rounded-xl font-semibold transition-all duration-300 ${isDarkMode
                                        ? 'border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-800'
                                        : 'border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Let&apos;s Connect
                                </motion.button>
                            </motion.div>

                            <motion.div
                                className={`flex items-center space-x-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.3, duration: 0.8 }}
                            >
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">Delhi, India</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <motion.div
                                        className="w-2 h-2 bg-green-500 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-sm">Available for remote work</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Interactive Stats Card */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <motion.div
                                className={`rounded-2xl p-8 backdrop-blur-md border shadow-2xl ${isDarkMode
                                    ? 'bg-gray-800/50 border-gray-700'
                                    : 'bg-white/50 border-gray-200'
                                    }`}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { number: '2+', label: 'Years Experience', icon: Calendar, color: 'text-blue-500' },
                                        { number: '15+', label: 'Projects Built', icon: Code, color: 'text-green-500' },
                                        { number: '95+', label: 'Lighthouse Score', icon: Zap, color: 'text-yellow-500' },
                                        { number: '80%', label: 'Performance Boost', icon: TrendingUp, color: 'text-purple-500' },
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            className="text-center group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                                            </motion.div>
                                            <motion.div
                                                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                                            >
                                                {stat.number}
                                            </motion.div>
                                            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* About Section with Parallax */}
            <section id="about" className={`py-20 px-6 relative ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    style={{ y: parallaxY }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className={`text-xl leading-relaxed mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            I&apos;m a passionate Frontend Developer with expertise in building scalable,
                            high-performance web applications. My journey combines technical excellence
                            with creative problem-solving to deliver exceptional user experiences.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Award,
                                    title: 'Performance Expert',
                                    description: 'Consistently achieving 90+ Lighthouse scores and 80% performance improvements',
                                    gradient: 'from-yellow-400 to-orange-500'
                                },
                                {
                                    icon: Users,
                                    title: 'Team Leader',
                                    description: 'Experienced in mentoring developers and leading technical initiatives',
                                    gradient: 'from-blue-400 to-cyan-500'
                                },
                                {
                                    icon: Briefcase,
                                    title: 'Problem Solver',
                                    description: 'Engineering mindset combined with creative solutions for complex challenges',
                                    gradient: 'from-purple-400 to-pink-500'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className={`p-6 rounded-xl border backdrop-blur-sm ${isDarkMode
                                        ? 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                                        : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                        } transition-all duration-300`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <motion.div
                                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-4`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <item.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Advanced Skills Section */}
            <section id="skills" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Technical Expertise
                        </h2>
                        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Modern technologies and frameworks powering my development
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className={`p-6 rounded-xl border backdrop-blur-sm relative overflow-hidden group ${isDarkMode
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <motion.div
                                                className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <skill.icon className="w-5 h-5 text-white" />
                                            </motion.div>
                                            <div>
                                                <h3 className="font-semibold">{skill.name}</h3>
                                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {skill.category}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section with Enhanced Design */}
            <section id="experience" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Professional Journey
                        </h2>
                        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Building expertise through impactful contributions and continuous learning
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.role}
                                className={`p-8 rounded-xl border backdrop-blur-sm relative overflow-hidden group ${isDarkMode
                                    ? 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-2">{exp.role}</h3>
                                            <div className={`flex flex-wrap items-center gap-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <span className="font-semibold text-blue-500">{exp.company}</span>
                                                <span>•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {exp.highlights.map((highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`flex items-center space-x-2 mt-2 lg:mt-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <Calendar className="w-5 h-5" />
                                            <span className="font-medium">{exp.period}</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <motion.div
                                                key={achievementIndex}
                                                className={`flex items-start space-x-3 p-4 rounded-lg backdrop-blur-sm ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
                                                    }`}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: achievementIndex * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <ChevronRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {achievement}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {exp.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium border ${isDarkMode
                                                    ? 'bg-gray-800 border-gray-600 text-gray-300'
                                                    : 'bg-white border-gray-200 text-gray-700'
                                                    }`}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Showcasing innovative solutions and exceptional user experiences
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className={`rounded-xl border backdrop-blur-sm overflow-hidden group relative ${isDarkMode
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                    : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`} />

                                <div className="p-8 relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.gradient}`}>
                                            {project.status}
                                        </span>
                                        <motion.div
                                            className={`p-2 rounded-lg backdrop-blur-sm cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {project.title}
                                    </h3>

                                    <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="text-sm font-semibold mb-2 text-blue-500">Key Features:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className={`px-3 py-1 rounded-md text-xs font-medium ${isDarkMode
                                                            ? 'bg-gray-700 text-gray-300 border border-gray-600'
                                                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                                                            }`}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold mb-2 text-purple-500">Tech Stack:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-md text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                        {Object.entries(project.metrics).map(([key, value]) => (
                                            <div key={key} className="text-center">
                                                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                    {value}
                                                </div>
                                                <div className={`text-xs capitalize ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {key}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Contact Section */}
            <section id="contact" className={`py-20 px-6 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className={`rounded-3xl p-12 text-center backdrop-blur-md border relative overflow-hidden ${isDarkMode
                            ? 'bg-gray-900/50 border-gray-700'
                            : 'bg-white/50 border-gray-200'
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

                        <div className="relative z-10">
                            <motion.div
                                className="flex justify-center mb-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={`p-4 rounded-2xl backdrop-blur-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                    <Rocket className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" />
                                </div>
                            </motion.div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Let&apos;s Build Something Amazing
                            </h2>
                            <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Ready to bring your ideas to life? I&apos;m available for exciting projects,
                                collaborations, and full-time opportunities.
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {[
                                    { icon: Mail, text: 'Email', href: 'mailto:sachinmaurya1710@gmail.com', gradient: 'from-red-500 to-pink-500' },
                                    { icon: Phone, text: 'Phone', href: 'tel:+918586025785', gradient: 'from-green-500 to-emerald-500' },
                                    { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/maurya-sachin', gradient: 'from-blue-500 to-cyan-500' },
                                    { icon: Github, text: 'GitHub', href: 'https://github.com/maurya-sachin', gradient: 'from-gray-600 to-gray-800' }
                                ].map((contact, index) => (
                                    <motion.a
                                        key={index}
                                        href={contact.href}
                                        className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 text-center group border ${isDarkMode
                                            ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                            : 'bg-white/50 border-gray-200 hover:border-gray-300'
                                            }`}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.gradient} flex items-center justify-center mx-auto mb-3`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <contact.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <p className="font-medium">{contact.text}</p>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.button
                                onClick={downloadResume}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto shadow-2xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)",
                                    y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Download className="w-6 h-6" />
                                <span>Download Complete Resume</span>
                                <Star className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className={`mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            © 2024 Sachin Maurya. Crafted with Next.js, TypeScript & Tailwind CSS.
                        </p>
                        <motion.p
                            className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            ✨ Designed for performance, built for the future
                        </motion.p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default ResumeApp