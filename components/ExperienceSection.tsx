// components/ExperienceSection.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  MapPin,
  Award,
  TrendingUp,
  Zap,
  Code,
  Globe,
  Database,
  Palette,
  ExternalLink,
  Building,
  Users,
  Target,
  Star,
  Briefcase,
} from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Full-time" | "Internship" | "Freelance" | "Contract";
  achievements: string[];
  tech: string[];
  highlights: string[];
  keywords: string[];
  logo?: string;
  companyUrl?: string;
  projects?: string[];
  metrics?: { [key: string]: string };
}

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  isDarkMode,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experience: Experience[] = [
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
        "Achieved consistent 95+ Lighthouse performance scores across all web applications",
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
        "Performance Optimization",
      ],
      highlights: [
        "Performance Expert",
        "Component Architecture",
        "Accessibility Specialist",
      ],
      keywords: [
        "React Developer",
        "Frontend Developer",
        "UI Developer",
        "Performance Optimization",
        "Web Accessibility",
      ],
      logo: "/placeholder.svg?height=50&width=50",
      projects: [
        "GENAI Document Analyzer",
        "Kreate Technologies Website",
        "Government Portals",
      ],
      metrics: {
        "Performance Improvement": "80%",
        "Lighthouse Score": "95+",
        "API Latency Reduction": "20%",
        "Development Efficiency": "+30%",
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
        "Developed WCAG 2.1 AA compliant user interfaces for government portal systems",
        "Created responsive dashboards handling 10,000+ daily active users",
        "Led Next.js adoption initiative across development teams",
        "Implemented comprehensive web accessibility standards and best practices",
        "Built interactive data visualizations for internal business tools",
        "Mentored 2 junior developers in React.js best practices",
      ],
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React.js",
        "Bootstrap",
        "Responsive Design",
      ],
      highlights: [
        "Accessibility Expert",
        "Responsive Design",
        "Modern Frameworks",
      ],
      keywords: [
        "Frontend Trainee",
        "Web Development",
        "Government Portal",
        "Responsive Design",
        "JavaScript Developer",
      ],
      logo: "/placeholder.svg?height=50&width=50",
      projects: [
        "Government Dashboards",
        "Data Visualization Tools",
        "Responsive Web Apps",
      ],
      metrics: {
        "Daily Users": "10,000+",
        "Accessibility Score": "AA",
        "Team Growth": "Next.js Adoption",
        Mentoring: "2 Developers",
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
        "Implemented SEO best practices resulting in 60% improved search rankings",
        "Built e-commerce solutions using WooCommerce for 5+ clients",
        "Collaborated with design team to implement pixel-perfect UI/UX",
      ],
      tech: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "WooCommerce"],
      highlights: [
        "Custom Development",
        "Performance Optimization",
        "SEO Specialist",
      ],
      keywords: [
        "WordPress Developer",
        "PHP Development",
        "Custom Themes",
        "Plugin Development",
        "E-commerce",
      ],
      logo: "/placeholder.svg?height=50&width=50",
      projects: ["E-commerce Websites", "Custom Plugins", "SEO Optimization"],
      metrics: {
        "Websites Built": "15+",
        "Performance Gain": "40%",
        "SEO Improvement": "60%",
        "E-commerce Sites": "5+",
      },
    },
    {
      role: "Engineering Apprentice",
      company: "Bharat Petroleum Corporation Limited (BPCL)",
      period: "Mar 2022 - Mar 2023",
      location: "Haridwar Depot, Uttarakhand",
      type: "Apprenticeship",
      achievements: [
        "Gained hands-on experience in petroleum product handling and depot operations",
        "Assisted in quality control testing and product sampling procedures",
        "Participated in safety audits and emergency response drills",
        "Supported inventory management and automated dispensing unit operations",
        "Contributed to digital documentation and data entry in SAP systems",
        "Learned petroleum storage tank maintenance and pipeline inspection protocols",
        "Assisted in customer service operations and retail fuel station management",
        "Participated in environmental compliance monitoring and waste management",
      ],
      tech: [
        "SAP ERP",
        "Excel",
        "AutoCAD",
        "PLC Systems",
        "SCADA",
        "MS Office",
      ],
      highlights: [
        "Petroleum Operations",
        "Quality Control",
        "Safety Compliance",
        "Digital Systems",
        "Inventory Management",
      ],
      keywords: [
        "Petroleum Engineering",
        "Depot Operations",
        "Quality Control",
        "Safety Protocols",
        "SAP Systems",
        "Fuel Dispensing",
        "Environmental Compliance",
      ],
      logo: "/bpcl-logo.png", // BPCL official logo
      projects: [
        "Depot Inventory System",
        "Quality Testing Procedures",
        "Safety Protocol Documentation",
        "Customer Service Operations",
      ],
      metrics: {
        "Safety Incidents": "0",
        "Quality Tests": "200+",
        "Training Hours": "480+",
        "System Efficiency": "98%",
        "Compliance Rate": "100%",
      },
      description:
        "Comprehensive engineering apprenticeship program focusing on petroleum depot operations, quality assurance, safety protocols, and digital systems management at one of India's leading oil marketing companies.",
      learningOutcomes: [
        "Understanding of petroleum supply chain and logistics",
        "Proficiency in quality control testing methodologies",
        "Knowledge of safety protocols in petroleum handling",
        "Experience with enterprise SAP systems",
        "Exposure to automated fuel dispensing technologies",
        "Environmental compliance and sustainability practices",
      ],
      skills: [
        "Petroleum Operations Management",
        "Quality Assurance & Testing",
        "Safety Protocol Implementation",
        "SAP ERP Systems",
        "Data Analysis & Reporting",
        "Customer Service Excellence",
        "Environmental Compliance",
        "Team Collaboration",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Freelance":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-gray-800/30" : "bg-gray-50/50"}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full ${isDarkMode ? "bg-blue-500" : "bg-blue-400"} opacity-5`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 8}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 25 + i * 3,
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
            Professional Journey
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
            Building expertise through impactful contributions and continuous
            learning in modern web development
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              className={`rounded-xl border backdrop-blur-sm relative overflow-hidden group ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                  : "bg-white/70 border-gray-200 hover:border-gray-300"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div className="flex items-start space-x-4">
                    {exp.logo && (
                      <motion.div
                        className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement!.innerHTML = `<span class="text-white font-bold text-lg">${exp.company.charAt(0)}</span>`;
                          }}
                        />
                      </motion.div>
                    )}

                    <div>
                      <motion.h3
                        className="text-2xl lg:text-3xl font-bold mb-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        {exp.role}
                      </motion.h3>

                      <div
                        className={`flex flex-wrap items-center gap-4 mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        <motion.div
                          className="flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                        >
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
                        </motion.div>

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
                          <motion.span
                            key={highlight}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center space-x-2 mt-4 lg:mt-0 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full text-left mb-6"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      Key Achievements & Responsibilities
                    </h4>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5" />
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
                              className={`flex items-start space-x-3 p-4 rounded-lg backdrop-blur-sm ${
                                isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: achievementIndex * 0.1,
                                duration: 0.5,
                              }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                              </div>
                              <span
                                className={`leading-relaxed text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                              >
                                {achievement}
                              </span>
                            </motion.div>
                          ),
                        )}
                      </div>

                      {/* Metrics */}
                      {exp.metrics && (
                        <motion.div
                          className="grid grid-cols-2 md:grid-cols-4 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {Object.entries(exp.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <motion.div
                                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.1 }}
                              >
                                {value}
                              </motion.div>
                              <div
                                className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              >
                                {key}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Projects */}
                      {exp.projects && (
                        <div>
                          <h5 className="font-semibold mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-blue-500" />
                            Key Projects
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.projects.map((project) => (
                              <motion.span
                                key={project}
                                className={`px-3 py-1 rounded-md text-sm ${
                                  isDarkMode
                                    ? "bg-gray-700 text-gray-300 border border-gray-600"
                                    : "bg-gray-100 text-gray-700 border border-gray-200"
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                {project}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Stack */}
                <div>
                  <h5 className="font-semibold mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-purple-500" />
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                          isDarkMode
                            ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
            whileHover={{ scale: 1.02 }}
          >
            Ready to add value to your team with proven expertise and dedication
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Let's discuss how I can contribute to your next project!
            </span>
            <Star className="w-5 h-5 text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
