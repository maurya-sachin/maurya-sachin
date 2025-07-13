import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  MapPin,
  Building,
  Target,
  Star,
  Code,
  ExternalLink,
  Award,
  TrendingUp,
} from "lucide-react";

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const generateCompanyLogo = (companyName, type) => {
    const initial = companyName.charAt(0).toUpperCase();
    const colors =
      type === "Full-time" ? ["#10B981", "#059669"] : ["#3B82F6", "#1D4ED8"];

    return `data:image/svg+xml;base64,${btoa(`
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="url(#grad)"/>
        <text x="32" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">${initial}</text>
      </svg>
    `)}`;
  };

  const experience = [
    {
      role: "Frontend Developer",
      company: "Kreate Technologies Pvt Ltd",
      period: "May 2024 - Present",
      location: "Ghaziabad, India",
      type: "Full-time",
      companyUrl: "https://kreatetech.com",
      achievements: [
        "Optimized Next.js applications achieving 80% faster load times and 40% TTI improvement",
        "Developed GraphQL middleware reducing API response latency by 20%",
        "Achieved consistent 95+ Lighthouse performance scores across all applications",
        "Built reusable React component library reducing development time by 30%",
        "Implemented WCAG 2.1 AA accessibility standards for government portals",
        "Led frontend architecture decisions for 3 major client projects",
      ],
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Tailwind CSS",
        "GSAP",
      ],
      highlights: [
        "Performance Expert",
        "Component Architecture",
        "Accessibility Specialist",
      ],
      projects: [
        "GENAI Document Analyzer",
        "Kreate Technologies Website",
        "Government Portals",
      ],
      metrics: {
        Performance: "80% improvement",
        Lighthouse: "95+ score",
        "API Latency": "20% reduction",
        Efficiency: "+30%",
      },
    },
    {
      role: "Frontend Development Trainee",
      company: "Kreate Technologies Pvt Ltd",
      period: "Sep 2023 - Apr 2024",
      location: "Ghaziabad, India",
      type: "Internship",
      companyUrl: "https://kreatetech.com",
      achievements: [
        "Developed WCAG 2.1 AA compliant interfaces for government portal systems",
        "Created responsive dashboards handling 10,000+ daily active users",
        "Led Next.js adoption initiative across development teams",
        "Implemented comprehensive web accessibility standards",
        "Built interactive data visualizations for business tools",
        "Mentored 2 junior developers in React.js best practices",
      ],
      tech: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Bootstrap"],
      highlights: [
        "Accessibility Expert",
        "Responsive Design",
        "Team Leadership",
      ],
      projects: [
        "Government Dashboards",
        "Data Visualization Tools",
        "Responsive Web Apps",
      ],
      metrics: {
        Users: "10,000+ daily",
        Accessibility: "AA compliant",
        Mentoring: "2 developers",
        Projects: "8 delivered",
      },
    },
    {
      role: "WordPress Developer Intern",
      company: "Digidex Labs Pvt Ltd",
      period: "Jan 2023 - Aug 2023",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Developed 15+ custom WordPress websites with responsive designs",
        "Created custom WordPress plugins for client-specific functionality",
        "Optimized website performance achieving 40% faster load times",
        "Implemented SEO best practices resulting in 60% improved rankings",
        "Built e-commerce solutions using WooCommerce for 5+ clients",
        "Collaborated with design team for pixel-perfect UI/UX implementation",
      ],
      tech: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "WooCommerce"],
      highlights: [
        "Custom Development",
        "Performance Optimization",
        "SEO Specialist",
      ],
      projects: ["E-commerce Websites", "Custom Plugins", "SEO Optimization"],
      metrics: {
        Websites: "15+ built",
        Performance: "40% faster",
        SEO: "60% improvement",
        "E-commerce": "5+ sites",
      },
    },
    {
      role: "Engineering Apprentice",
      company: "Bharat Petroleum Corporation Limited (BPCL)",
      period: "Mar 2022 - Mar 2023",
      location: "Haridwar, Uttarakhand",
      type: "Apprentice",
      achievements: [
        "Gained hands-on experience in petroleum product handling and depot operations",
        "Assisted in quality control testing and product sampling procedures",
        "Participated in safety audits and emergency response drills",
        "Supported inventory management and automated dispensing operations",
        "Contributed to digital documentation and data entry in SAP systems",
        "Learned petroleum storage tank maintenance and pipeline inspection",
      ],
      tech: ["SAP ERP", "Excel", "AutoCAD", "PLC Systems", "SCADA"],
      highlights: [
        "Operations Management",
        "Quality Control",
        "Safety Compliance",
      ],
      projects: ["Depot Operations", "Quality Testing", "Safety Documentation"],
      metrics: {
        Safety: "0 incidents",
        "Quality Tests": "200+",
        Training: "480+ hours",
        Efficiency: "98%",
      },
    },
  ];

  const getTypeColor = (type) => {
    const colors = {
      "Full-time":
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
      Internship:
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
      Apprentice:
        "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200",
    };
    return (
      colors[type] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200"
    );
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-blue-500/5 dark:bg-blue-400/5"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12 + i * 2,
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Building expertise through impactful contributions and continuous
            learning in modern web development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              className="group rounded-2xl border overflow-hidden bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div className="flex items-start space-x-4">
                    {/* Company Logo */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <img
                        src={generateCompanyLogo(exp.company, exp.type)}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 mb-3 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-blue-500 hover:text-blue-600 flex items-center space-x-1"
                            >
                              <span>{exp.company}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="font-semibold text-blue-500">
                              {exp.company}
                            </span>
                          )}
                        </div>

                        <span>•</span>

                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>

                        <span>•</span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
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
                  </div>

                  <div className="flex items-center space-x-2 mt-4 lg:mt-0 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full text-left mb-6 group/btn"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 group-hover/btn:bg-gray-100 dark:group-hover/btn:bg-gray-700 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Achievements & Impact
                    </h4>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 mb-8"
                    >
                      {/* Achievements Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.div
                              key={achievementIndex}
                              className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: achievementIndex * 0.1,
                                duration: 0.5,
                              }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className="flex-shrink-0 mt-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                              </div>
                              <span className="leading-relaxed text-sm text-gray-700 dark:text-gray-300">
                                {achievement}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(exp.metrics).map(([key, value]) => (
                          <motion.div
                            key={key}
                            className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {key}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Projects */}
                      <div>
                        <h5 className="font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                          <Target className="w-4 h-4 mr-2 text-blue-500" />
                          Key Projects
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <span
                              key={project}
                              className="px-3 py-1 rounded-md text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Stack */}
                <div>
                  <h5 className="font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                    <Code className="w-4 h-4 mr-2 text-purple-500" />
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 rounded-lg text-sm font-medium border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Ready to add proven expertise and dedication to your team?
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Let's discuss how I can contribute to your next project!
            </span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
