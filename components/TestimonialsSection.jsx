import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Building,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Project Manager",
      company: "Kreate Technologies",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sachin is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to optimize performance is remarkable. The GENAI Document Analyzer project exceeded all expectations.",
      project: "GENAI Document Analyzer",
      linkedinUrl: "#",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "UX Designer",
      company: "Kreate Technologies",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Sachin has been a pleasure. He translates design concepts into pixel-perfect, responsive interfaces. His expertise in React.js and Next.js helped us achieve a 95+ Lighthouse score consistently.",
      project: "Corporate Website",
      linkedinUrl: "#",
    },
    {
      id: 3,
      name: "Amit Singh",
      role: "Tech Lead",
      company: "Digital Innovation Lab",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sachin's technical skills and problem-solving abilities are outstanding. He implemented complex animations with GSAP and improved our application's performance by 80%. Highly recommended for any frontend project.",
      project: "Performance Optimization",
      linkedinUrl: "#",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Owner",
      company: "TechStart Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sachin's ability to understand business requirements and translate them into technical solutions is impressive. He built our e-commerce platform with excellent user experience and maintainable code architecture.",
      project: "E-commerce Platform",
      linkedinUrl: "#",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/5 dark:bg-blue-500/5"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
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
            What People Say
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Feedback from colleagues, clients, and collaborators who've
            experienced my work firsthand
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
            {/* Quote decoration */}
            <motion.div
              className="absolute top-6 left-6 text-blue-500/20 dark:text-blue-400/20"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Quote className="w-16 h-16" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl leading-relaxed text-center text-gray-800 dark:text-gray-200 mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Project Tag */}
                <div className="text-center mb-8">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    <Building className="w-4 h-4 mr-2" />
                    Project: {testimonials[currentIndex].project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </motion.div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  <motion.a
                    href={testimonials[currentIndex].linkedinUrl}
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-blue-500 w-8"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 scale-105"
                  : "bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800"
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{
                y: -5,
                scale: index === currentIndex ? 1.05 : 1.02,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your project and create the next success story?
          </p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Let's collaborate and build something amazing together!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
