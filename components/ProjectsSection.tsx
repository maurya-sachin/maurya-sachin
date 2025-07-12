/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ProjectsSection.tsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Globe,
  Star,
  Eye,
  Filter,
  X,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "Web App" | "Mobile" | "Desktop" | "Library";
  status: "Live" | "Demo" | "In Progress";
  metrics: Record<string, string>;
  gradient: string;
  features: string[];
  keywords: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
  year: string;
  highlights: string[];
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function to generate a fallback SVG
  const generateFallbackImage = (title: string, gradient: string) => {
    const colors = gradient.includes("violet")
      ? ["#8B5CF6", "#3B82F6"]
      : gradient.includes("emerald")
        ? ["#10B981", "#06B6D4"]
        : ["#3B82F6", "#8B5CF6"];

    return `data:image/svg+xml;base64,${btoa(`
      <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#grad)"/>
        <text x="300" y="200" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">${title}</text>
      </svg>
    `)}`;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "GENAI Document Analyzer",
      description:
        "Enterprise-grade AI-powered document processing platform with real-time chat capabilities and advanced analytics.",
      longDescription:
        "A comprehensive AI-powered document processing platform built for enterprise use. Features include secure document vault, real-time AI chat functionality, advanced analytics dashboard, user authentication & authorization, and intelligent document parsing for business automation. The platform handles multiple file formats and provides detailed insights through AI analysis.",
      tech: [
        "React.js",
        "Redux Toolkit",
        "Python API",
        "TypeScript",
        "WebSocket",
        "AI Integration",
      ],
      category: "Web App",
      status: "Live",
      metrics: {
        users: "500+",
        performance: "90+",
        accuracy: "98%",
        uptime: "99.9%",
        "Processing Speed": "2.3s avg",
        "User Satisfaction": "4.8/5",
      },
      gradient: "from-violet-600 via-purple-600 to-blue-600",
      features: [
        "Real-time AI Chat",
        "Document Vault",
        "Smart Processing",
        "Advanced Analytics",
        "Enterprise Security",
        "Multi-format Support",
      ],
      keywords: [
        "AI Document Processing",
        "Enterprise React App",
        "Real-time Chat",
        "Document Management",
      ],
      github: "https://github.com/maurya-sachin/genai-analyzer",
      live: "https://genai-analyzer.vercel.app",
      image: generateFallbackImage("GENAI Document Analyzer", "violet"),
      featured: true,
      year: "2024",
      highlights: [
        "500+ Active Users",
        "98% Accuracy",
        "Enterprise Grade",
        "Real-time Processing",
      ],
    },
    {
      id: 2,
      title: "Kreate Technologies Website",
      description:
        "High-performance corporate website with advanced GSAP animations and SEO optimization.",
      longDescription:
        "Modern corporate website built with Next.js featuring advanced GSAP animations, perfect SEO optimization, lightning-fast load times, and responsive design. Achieved 95+ Lighthouse score with modern UI/UX patterns and seamless user experience across all devices.",
      tech: [
        "Next.js",
        "GSAP",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
        "GraphQL",
      ],
      category: "Web App",
      status: "Live",
      metrics: {
        lighthouse: "95+",
        loadTime: "0.8s",
        conversion: "+45%",
        seo: "100",
        "Mobile Score": "96",
        Accessibility: "AA",
      },
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      features: [
        "GSAP Animations",
        "SEO Optimized",
        "Performance First",
        "Mobile Responsive",
        "GraphQL Integration",
      ],
      keywords: [
        "Corporate Website",
        "Next.js Development",
        "GSAP Animation",
        "SEO Optimization",
      ],
      github: "https://github.com/maurya-sachin/kreate-website",
      live: "https://kreatetech.com",
      image: generateFallbackImage("Kreate Technologies", "emerald"),
      featured: true,
      year: "2024",
      highlights: [
        "95+ Lighthouse",
        "0.8s Load Time",
        "+45% Conversion",
        "SEO Perfect",
      ],
    },
    {
      id: 3,
      title: "Interactive Kanban Board",
      description:
        "Modern task management system with drag-and-drop functionality and real-time collaboration.",
      longDescription:
        "Feature-rich task management application with intuitive drag-and-drop interface, real-time collaboration capabilities, custom workflows, and comprehensive project tracking. Built with modern React patterns and TypeScript for type safety.",
      tech: [
        "React.js",
        "TypeScript",
        "React DND",
        "Zustand",
        "Socket.io",
        "Tailwind CSS",
      ],
      category: "Web App",
      status: "Demo",
      metrics: {
        tasks: "2000+",
        teams: "25+",
        efficiency: "+40%",
        satisfaction: "95%",
        "Response Time": "<100ms",
        Uptime: "99.8%",
      },
      gradient: "from-orange-500 via-red-500 to-pink-500",
      features: [
        "Drag & Drop",
        "Real-time Sync",
        "Team Collaboration",
        "Custom Workflows",
        "Analytics Dashboard",
      ],
      keywords: [
        "Task Management",
        "Kanban Board",
        "Project Management",
        "Team Collaboration",
      ],
      github: "https://github.com/maurya-sachin/kanban-board",
      live: "https://kanban-demo.vercel.app",
      image: generateFallbackImage("Kanban Board", "orange"),
      featured: true,
      year: "2024",
      highlights: [
        "2000+ Tasks Managed",
        "25+ Teams",
        "+40% Efficiency",
        "Real-time Sync",
      ],
    },
    {
      id: 4,
      title: "React Component Library",
      description:
        "Comprehensive design system with 50+ reusable components and full accessibility support.",
      longDescription:
        "Professional-grade component library built with React, TypeScript, and Storybook. Features over 50 reusable components with complete accessibility support, comprehensive documentation, and testing coverage. Designed for enterprise applications.",
      tech: [
        "React.js",
        "TypeScript",
        "Storybook",
        "Rollup",
        "Jest",
        "Chromatic",
      ],
      category: "Library",
      status: "Live",
      metrics: {
        components: "50+",
        downloads: "1.2K",
        tests: "95%",
        accessibility: "AA",
        "Bundle Size": "45KB",
        "Tree Shaking": "✓",
      },
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      features: [
        "50+ Components",
        "TypeScript Support",
        "Storybook Docs",
        "Accessibility First",
        "Tree Shaking",
      ],
      keywords: [
        "Component Library",
        "Design System",
        "React Components",
        "TypeScript",
      ],
      github: "https://github.com/maurya-sachin/react-ui-lib",
      live: "https://ui-lib-demo.vercel.app",
      image: generateFallbackImage("React Components", "indigo"),
      featured: false,
      year: "2024",
      highlights: [
        "50+ Components",
        "1.2K Downloads",
        "95% Test Coverage",
        "AA Accessible",
      ],
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts and interactive maps.",
      longDescription:
        "Modern weather dashboard featuring location-based forecasts, interactive weather maps, detailed analytics, and beautiful UI. Supports multiple locations and provides comprehensive weather data with intuitive visualizations.",
      tech: ["React.js", "JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      category: "Web App",
      status: "Demo",
      metrics: {
        locations: "1000+",
        accuracy: "95%",
        users: "300+",
        rating: "4.7/5",
        "API Calls": "50K/month",
        "Load Time": "1.2s",
      },
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      features: [
        "Location Search",
        "7-Day Forecast",
        "Interactive Maps",
        "Weather Alerts",
        "Responsive Design",
      ],
      keywords: [
        "Weather App",
        "API Integration",
        "Data Visualization",
        "Responsive Design",
      ],
      github: "https://github.com/maurya-sachin/weather-app",
      live: "https://weather-dashboard-demo.vercel.app",
      image: generateFallbackImage("Weather Dashboard", "blue"),
      featured: false,
      year: "2023",
      highlights: [
        "1000+ Locations",
        "95% Accuracy",
        "300+ Users",
        "4.7/5 Rating",
      ],
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description:
        "Full-featured online store with payment integration and admin dashboard.",
      longDescription:
        "Complete e-commerce solution with product catalog, shopping cart, payment processing, order management, and comprehensive admin dashboard. Built with modern web technologies for optimal performance and user experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      category: "Web App",
      status: "In Progress",
      metrics: {
        products: "500+",
        orders: "150+",
        conversion: "3.2%",
        performance: "92",
        "Page Speed": "1.8s",
        "Mobile Score": "89",
      },
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      features: [
        "Product Catalog",
        "Payment Gateway",
        "Order Management",
        "Admin Dashboard",
        "User Authentication",
      ],
      keywords: [
        "E-commerce",
        "Full Stack",
        "Payment Integration",
        "MERN Stack",
      ],
      github: "https://github.com/maurya-sachin/ecommerce-platform",
      image: generateFallbackImage("E-commerce Platform", "green"),
      featured: false,
      year: "2024",
      highlights: [
        "500+ Products",
        "150+ Orders",
        "3.2% Conversion",
        "Full Stack",
      ],
    },
  ];

  const categories = ["All", "Web App", "Library", "Mobile", "Desktop"];

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(() => {
    return projects.filter((project) => project.featured);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200";
      case "Demo":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? "bg-purple-500/10" : "bg-purple-400/10"}`}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${10 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <p
            className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Showcasing innovative solutions and exceptional user experiences
            built with modern technologies
          </p>
        </motion.div>

        {/* Featured Projects Showcase */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative rounded-xl border overflow-hidden cursor-pointer ${isDarkMode
                  ? "bg-gray-800/80 border-gray-700 hover:border-gray-600"
                  : "bg-white/80 border-gray-200 hover:border-gray-300"
                  } transition-all duration-300 will-change-transform`}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Simplified hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    unoptimized // Add this to prevent Next.js optimization issues
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${project.gradient.includes("violet") ? "bg-violet-500/80" : project.gradient.includes("emerald") ? "bg-emerald-500/80" : "bg-blue-500/80"}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-colors ${isDarkMode
                            ? "bg-gray-700/50 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg transition-colors ${isDarkMode
                            ? "bg-gray-700/50 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p
                    className={`leading-relaxed mb-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.highlights.slice(0, 4).map((highlight, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-bold text-blue-500">
                          {highlight.split(" ")[0]}
                        </div>
                        <div
                          className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {highlight.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        className={`px-2 py-1 rounded-md text-xs ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
                      >
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter className="w-4 h-4" />
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`rounded-xl border overflow-hidden cursor-pointer transition-all duration-200 ${isDarkMode
                  ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                  : "bg-white/50 border-gray-200 hover:border-gray-300"
                  } will-change-transform`}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description.slice(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs ${isDarkMode
                          ? "bg-gray-700/50 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {project.github && (
                        <Github className="w-4 h-4 text-gray-400" />
                      )}
                      {project.live && (
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <span
                      className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optimized Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl border ${isDarkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
                }`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p
                      className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {selectedProject.category} • {selectedProject.year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                      }`}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6">
                  <p
                    className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {selectedProject.longDescription}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Project Metrics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(selectedProject.metrics).map(
                        ([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {value}
                            </div>
                            <div
                              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                            >
                              {key}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
                      >
                        <Globe className="w-5 h-5" />
                        <span>View Live</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 border px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors ${isDarkMode
                          ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
