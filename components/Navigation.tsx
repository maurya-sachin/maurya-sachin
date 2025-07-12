// components/Navigation.tsx
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'

interface NavigationItem {
    id: string
    label: string
}

interface NavigationProps {
    isDarkMode: boolean
    toggleDarkMode: () => void
    activeSection: string
    navigationItems: NavigationItem[]
    scrollToSection: (sectionId: string) => void
    downloadResume: () => void
    isMenuOpen: boolean
    setIsMenuOpen: (open: boolean) => void
    currentTime: string
    headerOpacity: any
}

const Navigation: React.FC<NavigationProps> = ({
    isDarkMode,
    toggleDarkMode,
    activeSection,
    navigationItems,
    scrollToSection,
    downloadResume,
    isMenuOpen,
    setIsMenuOpen,
    currentTime,
    headerOpacity
}) => {
    return (
        <>
            {/* Main Navigation Header */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${isDarkMode ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-200"
                    }`}
                style={{ opacity: headerOpacity }}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <motion.div
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => scrollToSection('hero')}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl" />
                                <span className="relative text-white font-bold text-lg z-10">SM</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            <div className="hidden sm:block">
                                <motion.h1
                                    className="text-lg font-bold cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => scrollToSection('hero')}
                                >
                                    Sachin Maurya
                                </motion.h1>
                                <motion.div className="flex items-center space-x-2">
                                    <motion.p
                                        className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Frontend Developer
                                    </motion.p>
                                    <span className="text-xs text-gray-500">•</span>
                                    <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                        {currentTime} IST
                                    </span>
                                    <motion.div
                                        className="w-2 h-2 bg-green-400 rounded-full"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? "text-blue-600"
                                        : isDarkMode
                                            ? "text-gray-300 hover:text-white"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    whileTap={{ y: 0, scale: 0.95 }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                            layoutId="activeSection"
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity -z-10"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.button>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-3">
                            {/* Dark Mode Toggle */}
                            <motion.button
                                onClick={toggleDarkMode}
                                className={`p-3 rounded-xl transition-all duration-300 ${isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                                    }`}
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                whileTap={{ scale: 0.9 }}
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
                                className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium items-center space-x-2 shadow-lg group"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                <span>Resume</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"
                                />
                            </motion.button>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${isDarkMode
                                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
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
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] z-40 lg:hidden ${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
                                } border-l`}
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="p-6 pt-24">
                                {/* Mobile Navigation Items */}
                                <div className="space-y-6">
                                    {navigationItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`block w-full text-left text-xl font-semibold transition-all duration-300 ${activeSection === item.id
                                                ? "text-blue-600 transform translate-x-4"
                                                : isDarkMode
                                                    ? "text-gray-300 hover:text-white hover:translate-x-2"
                                                    : "text-gray-600 hover:text-gray-900 hover:translate-x-2"
                                                }`}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.label}
                                            {activeSection === item.id && (
                                                <motion.div
                                                    className="w-2 h-2 bg-blue-600 rounded-full inline-block ml-2"
                                                    animate={{ scale: [1, 1.3, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            )}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Mobile Resume Button */}
                                <motion.div
                                    className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.button
                                        onClick={downloadResume}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Download className="w-5 h-5" />
                                        <span>Download Resume</span>
                                    </motion.button>
                                </motion.div>

                                {/* Mobile Footer Info */}
                                <motion.div
                                    className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                        Available for opportunities
                                    </p>
                                    <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                                        {currentTime} IST
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation