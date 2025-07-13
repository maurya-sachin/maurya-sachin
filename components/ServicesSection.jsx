import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Zap,
  Palette,
  Globe,
  Search,
  ShoppingCart,
  BarChart,
  Rocket,
  Users,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Modern, responsive web applications built with React.js, Next.js, and cutting-edge technologies.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "React.js & Next.js",
        "JavaScript & TypeScript",
        "Responsive Design",
        "Performance Optimization",
      ],
      price: "Starting at $2,000",
      popular: false,
    },
    {
      id: 2,
      title: "UI/UX Design & Development",
      description:
        "Beautiful, intuitive user interfaces that convert visitors into customers with modern design principles.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Modern UI Design",
        "User Experience",
        "Prototyping",
        "Design Systems",
      ],
      price: "Starting at $1,500",
      popular: true,
    },
    {
      id: 3,
      title: "Performance Optimization",
      description:
        "Speed up your website and achieve 95+ Lighthouse scores for better user experience and SEO.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Speed Optimization",
        "SEO Enhancement",
        "Core Web Vitals",
        "Mobile Performance",
      ],
      price: "Starting at $800",
      popular: false,
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment integration, inventory management, and admin dashboards.",
      icon: ShoppingCart,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Online Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Admin Dashboard",
      ],
      price: "Starting at $3,000",
      popular: false,
    },
    {
      id: 5,
      title: "Web Application Development",
      description:
        "Full-stack web applications with modern architecture, scalable solutions, and cloud deployment.",
      icon: Globe,
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Full-stack Development",
        "Database Design",
        "API Integration",
        "Cloud Deployment",
      ],
      price: "Starting at $4,000",
      popular: false,
    },
    {
      id: 6,
      title: "Consulting & Mentoring",
      description:
        "Technical guidance, code reviews, and mentoring for development teams and individuals.",
      icon: Users,
      gradient: "from-teal-500 to-blue-500",
      features: [
        "Code Review",
        "Technical Consulting",
        "1-on-1 Mentoring",
        "Team Training",
      ],
      price: "Starting at $100/hour",
      popular: false,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-purple-900/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/5 dark:bg-purple-400/5"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${5 + i * 12}%`,
              top: `${10 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Services I Offer 💼
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            From concept to deployment, I help businesses create amazing digital
            experiences that drive results and engage users.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative p-8 rounded-2xl border backdrop-blur-sm group cursor-pointer bg-white/70 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </span>
                </motion.div>
              )}

              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Service Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Service Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.price}
                  </span>
                  <motion.button
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Need something custom? Let's discuss your project requirements!
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 mx-auto shadow-2xl group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            <span>Start Your Project</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
