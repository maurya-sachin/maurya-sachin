"use client";

import React, { useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Toaster } from "react-hot-toast";
import useStore from "../store/useStore";
import { useGitHubData } from "../hooks/useGitHubData";

const LoadingScreen = lazy(() => import("./LoadingScreen"));
const Navigation = lazy(() => import("./Navigation"));
const HeroSection = lazy(() => import("./HeroSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const SkillsSection = lazy(() => import("./SkillsSection"));
const ExperienceSection = lazy(() => import("./ExperienceSection"));
const ProjectsSection = lazy(() => import("./ProjectsSection"));
const TestimonialsSection = lazy(() => import("./TestimonialsSection"));
const BlogSection = lazy(() => import("./BlogSection"));
const GitHubStatsSection = lazy(() => import("./GitHubStatsSection"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const ContactSection = lazy(() => import("./ContactSection"));
const FloatingElements = lazy(() => import("./FloatingElements"));

const SuspenseLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="relative">
      <motion.div
        className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 border-2 border-purple-500/20 border-r-purple-500 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
);
const ResumeApp = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  useGitHubData("maurya-sachin");

  const {
    isLoading,
    setIsLoading,
    setCurrentTime,
    setScrollProgress,
    setActiveSection,
    isMenuOpen,
    initializeTheme,
  } = useStore();

  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  const updateTime = useCallback(() => {
    const now = new Date();
    const istTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(now);
    setCurrentTime(istTime);
  }, [setCurrentTime]);

  const handleScroll = useCallback(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "stats",
      "services",
      "testimonials",
      "blog",
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
  }, [setScrollProgress, setActiveSection]);

  useEffect(() => {
    initializeTheme();
    updateTime();

    const timeInterval = setInterval(updateTime, 1000);
    const loadingTimer = setTimeout(() => setIsLoading(false), 2500);

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      clearInterval(timeInterval);
      clearTimeout(loadingTimer);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, handleScroll, updateTime, setIsLoading, initializeTheme]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  if (isLoading) {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <LoadingScreen />
      </Suspense>
    );
  }

  return (
    <div
      className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
      ref={containerRef}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "dark:bg-gray-800 dark:text-white",
        }}
      />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: useStore.getState().scrollProgress / 100 }}
      />

      {/* Floating background elements */}
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      {/* Navigation */}
      <Suspense fallback={null}>
        <Navigation
          scrollToSection={scrollToSection}
          downloadResume={downloadResume}
          headerOpacity={headerOpacity}
        />
      </Suspense>

      {/* Main content */}
      <main>
        <Suspense fallback={<SuspenseLoader />}>
          <HeroSection
            scrollToSection={scrollToSection}
            heroY={heroY}
            downloadResume={downloadResume}
          />
        </Suspense>

        <Suspense fallback={<SuspenseLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader />}>
          <GitHubStatsSection />
        </Suspense>

        {/* <Suspense fallback={<SuspenseLoader/>}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader/>}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SuspenseLoader/>}>
          <BlogSection />
        </Suspense> */}

        <Suspense fallback={<SuspenseLoader />}>
          <ContactSection downloadResume={downloadResume} />
        </Suspense>
      </main>

      {/* Enhanced footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-gray-600 dark:text-gray-400">
              © 2024 Sachin Maurya. Crafted with passion using React, Next.js &
              modern web technologies.
            </p>
            <motion.p
              className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Built for performance, designed for impact
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeApp;
