import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Download,
  Star,
  Rocket,
  ExternalLink,
} from "lucide-react";
import useStore from "../store/useStore";
import ContactForm from "./ContactForm";

const ContactSection = ({ downloadResume }) => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sachinmaurya1710@gmail.com",
      href: "mailto:sachinmaurya1710@gmail.com",
      gradient: "from-red-500 to-pink-500",
      description: "Let's discuss your project",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8586025785",
      href: "tel:+918586025785",
      gradient: "from-green-500 to-emerald-500",
      description: "Available 9 AM - 9 PM IST",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "maurya-sachin",
      href: "https://linkedin.com/in/maurya-sachin",
      gradient: "from-blue-500 to-cyan-500",
      description: "Professional networking",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "maurya-sachin",
      href: "https://github.com/maurya-sachin",
      gradient: "from-gray-600 to-gray-800",
      description: "Check out my code",
    },
  ];

  const quickFacts = [
    {
      icon: MapPin,
      text: "Delhi, India",
      subtext: "Available for remote work",
    },
    { icon: Clock, text: "IST Timezone", subtext: "Flexible working hours" },
    {
      icon: Rocket,
      text: "Quick Response",
      subtext: "Usually reply within 2 hours",
    },
    {
      icon: Star,
      text: "Open to Opportunities",
      subtext: "Frontend & Full-stack roles",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-500/5"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Ready to bring your ideas to life? I'm here to help you create
                  something amazing.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {contact.label}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {contact.description}
                      </p>
                    </div>
                    {contact.href.startsWith("http") && (
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Resume Download */}
              <motion.button
                onClick={downloadResume}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-xl group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Resume</span>
                <Star className="w-6 h-6 group-hover:animate-spin relative z-10" />
              </motion.button>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <fact.icon className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-300">
                          {fact.text}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {fact.subtext}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
