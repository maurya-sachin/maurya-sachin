// components/ContactSection.tsx
import React from 'react'
import { motion } from 'framer-motion'
import {
    Mail, Phone, Linkedin, Github, MapPin, Clock,
    Download, Star, Rocket, Send, ExternalLink
} from 'lucide-react'

interface ContactSectionProps {
    isDarkMode: boolean
    downloadResume: () => void
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode, downloadResume }) => {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "sachinmaurya1710@gmail.com",
            href: "mailto:sachinmaurya1710@gmail.com",
            gradient: "from-red-500 to-pink-500",
            description: "Let's discuss your project"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8586025785",
            href: "tel:+918586025785",
            gradient: "from-green-500 to-emerald-500",
            description: "Available 9 AM - 9 PM IST"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "maurya-sachin",
            href: "https://linkedin.com/in/maurya-sachin",
            gradient: "from-blue-500 to-cyan-500",
            description: "Professional networking"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "maurya-sachin",
            href: "https://github.com/maurya-sachin",
            gradient: "from-gray-600 to-gray-800",
            description: "Check out my code"
        },
    ]

    const quickFacts = [
        { icon: MapPin, text: "Delhi, India", subtext: "Available for remote work" },
        { icon: Clock, text: "IST Timezone", subtext: "Flexible working hours" },
        { icon: Rocket, text: "Quick Response", subtext: "Usually reply within 2 hours" },
        { icon: Star, text: "Open to Opportunities", subtext: "Frontend & Full-stack roles" },
    ]

    return (
        <section
            id="contact"
            className={`py-20 px-4 sm:px-6 lg:px-8 relative ${isDarkMode ? "bg-gray-800/30" : "bg-gray-50/50"}`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-5`}
                        style={{
                            width: `${100 + i * 30}px`,
                            height: `${100 + i * 30}px`,
                            left: `${10 + i * 15}%`,
                            top: `${20 + i * 10}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Main Contact Card */}
                <motion.div
                    className={`rounded-3xl p-12 text-center backdrop-blur-md border relative overflow-hidden ${isDarkMode ? "bg-gray-900/50 border-gray-700" : "bg-white/70 border-gray-200"
                        }`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    {/* Background Gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"
                        animate={{
                            background: [
                                "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                                "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                                "linear-gradient(225deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                                "linear-gradient(315deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                            ],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                        {/* Header Icon */}
                        <motion.div
                            className="flex justify-center mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className={`p-4 rounded-2xl backdrop-blur-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Let's Build Something Amazing
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Ready to bring your ideas to life? I'm available for exciting projects,
                            collaborations, and full-time opportunities in frontend development.
                        </motion.p>

                        {/* Contact Methods Grid */}
                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {contactMethods.map((contact, index) => (
                                <motion.a
                                    key={contact.label}
                                    href={contact.href}
                                    className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 text-center group border relative overflow-hidden ${isDarkMode
                                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                        : "bg-white/50 border-gray-200 hover:border-gray-300"
                                        }`}
                                    whileHover={{ y: -5, scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Background Gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                    />

                                    <div className="relative z-10">
                                        <motion.div
                                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.gradient} flex items-center justify-center mx-auto mb-3`}
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <contact.icon className="w-6 h-6 text-white" />
                                        </motion.div>

                                        <h4 className="font-semibold mb-1">{contact.label}</h4>
                                        <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                            {contact.value}
                                        </p>
                                        <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                                            {contact.description}
                                        </p>

                                        {contact.href.startsWith("http") && (
                                            <ExternalLink className="w-3 h-3 mt-2 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        )}
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Resume Download CTA */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                onClick={downloadResume}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto shadow-2xl group relative overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)",
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
                                <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                                <span className="relative z-10">Download Complete Resume</span>
                                <Star className="w-6 h-6 group-hover:animate-spin relative z-10" />
                            </motion.button>
                        </motion.div>

                        {/* Quick Facts */}
                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            {quickFacts.map((fact, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-4 rounded-lg backdrop-blur-sm ${isDarkMode ? "bg-gray-800/30" : "bg-white/30"
                                        }`}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 1.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <fact.icon className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <div className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                                {fact.text}
                                            </div>
                                            <div className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                                                {fact.subtext}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                >
                    <motion.p
                        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        whileHover={{ scale: 1.02 }}
                    >
                        Looking forward to hearing from you! ✨
                    </motion.p>
                    <motion.div
                        className="flex items-center justify-center space-x-2 mt-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-2xl">🚀</span>
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                            Let's create something extraordinary!
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection