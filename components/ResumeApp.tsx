"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import GitHubStatsSection from "./GitHubStatsSection";
import ContactSection from "./ContactSection";
import { useGitHubData } from "../hooks/useGitHubData";
import { useTheme } from "../hooks/useTheme";

const ResumeApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTime, setCurrentTime] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const {
    githubData,
    loading: githubLoading,
    error: githubError,
  } = useGitHubData("maurya-sachin");

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);
  const parallaxY = useSpring(
    useTransform(scrollY, [0, 1000], [0, -200]),
    springConfig,
  );

  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Main effects
  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 3000);

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "stats",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", updateMousePosition, {
      passive: true,
    });

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(loadingTimer);
      document.body.style.overflow = "unset";
    };
  }, [updateMousePosition, isMenuOpen]);

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/download-resume");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Sachin_Maurya_Frontend_Developer_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
  ];

  if (isLoading) {
    return <LoadingScreen isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      ref={containerRef}
    >
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sachin Maurya",
            jobTitle: "Frontend Developer | React.js Specialist | UI Developer",
            description:
              "Experienced Frontend Developer specializing in React.js, Next.js, TypeScript with expertise in performance optimization, web accessibility, and modern UI/UX development",
            url: "https://maurya-sachin.vercel.app",
            sameAs: [
              "https://linkedin.com/in/maurya-sachin",
              "https://github.com/maurya-sachin",
            ],
            knowsAbout: [
              "React.js Development",
              "Next.js",
              "TypeScript",
              "Frontend Development",
              "UI/UX Design",
              "Performance Optimization",
              "Web Accessibility",
              "GSAP Animation",
              "GraphQL",
              "Redux Toolkit",
              "Tailwind CSS",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Delhi",
              addressCountry: "IN",
            },
          }),
        }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ left: mousePosition.x - 16, top: mousePosition.y - 16 }}
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navigation */}
      <Navigation
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        navigationItems={navigationItems}
        scrollToSection={scrollToSection}
        downloadResume={downloadResume}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentTime={currentTime}
        headerOpacity={headerOpacity}
      />

      {/* Hero Section */}
      <HeroSection
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
        currentTime={currentTime}
        heroY={heroY}
      />

      {/* About Section */}
      <AboutSection isDarkMode={isDarkMode} parallaxY={parallaxY} />

      {/* Skills Section */}
      <SkillsSection isDarkMode={isDarkMode} />

      {/* Experience Section */}
      <ExperienceSection isDarkMode={isDarkMode} />

      {/* Projects Section */}
      <ProjectsSection isDarkMode={isDarkMode} />

      {/* GitHub Stats Section */}
      <GitHubStatsSection
        isDarkMode={isDarkMode}
        githubData={githubData}
        loading={githubLoading}
        error={githubError}
      />

      {/* Contact Section */}
      <ContactSection isDarkMode={isDarkMode} downloadResume={downloadResume} />

      {/* Footer */}
      <footer
        className={`py-12 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className={`mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              © 2024 Sachin Maurya. Crafted with Next.js, TypeScript & Tailwind
              CSS.
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
  );
};

export default ResumeApp;
