"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Rocket,
  Zap,
  Calendar,
  Code,
  Sparkles,
  Download,
  Star,
  Coffee,
  Heart,
  Github,
  Linkedin,
  Mail,
  Target,
  Layers,
  Cpu,
} from "lucide-react";
import { useGitHubData } from "../hooks/useGitHubData";

const HeroSection = ({ scrollToSection, downloadResume }) => {
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [currentTime, setCurrentTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Fetch real GitHub data
  const { githubData } = useGitHubData("maurya-sachin");

  const words = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Performance Expert",
    "Creative Coder",
  ];

  // Initialize visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
      return () =>
        sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Typing animation
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentWord = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText((current) =>
          isDeleting
            ? currentWord.substring(0, current.length - 1)
            : currentWord.substring(0, current.length + 1)
        );
      }
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const orbitalElements = [
    { icon: Code, color: "text-blue-500", radius: 80, duration: 15, delay: 0 },
    { icon: Zap, color: "text-yellow-500", radius: 65, duration: 18, delay: 3 },
    {
      icon: Star,
      color: "text-purple-500",
      radius: 95,
      duration: 12,
      delay: 6,
    },
    { icon: Heart, color: "text-pink-500", radius: 70, duration: 20, delay: 9 },
    {
      icon: Coffee,
      color: "text-orange-500",
      radius: 85,
      duration: 16,
      delay: 12,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(90deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
          75% {
            transform: translateY(-18px) rotate(270deg);
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg)
              translateX(var(--radius)) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg)
              translateX(var(--radius)) rotate(-360deg);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes bounce-3d {
          0%,
          100% {
            transform: translateY(0) scale(1) rotateZ(0deg);
          }
          50% {
            transform: translateY(-10px) scale(1.03) rotateZ(3deg);
          }
        }

        @keyframes rotate-glow {
          from {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
          }
          to {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) rotateY(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px) rotateY(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        @keyframes morphing-bg {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            background: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.08),
              rgba(147, 51, 234, 0.08)
            );
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            background: linear-gradient(
              135deg,
              rgba(147, 51, 234, 0.08),
              rgba(6, 182, 212, 0.08)
            );
          }
          50% {
            border-radius: 70% 30% 40% 60% / 40% 50% 60% 50%;
            background: linear-gradient(
              225deg,
              rgba(6, 182, 212, 0.08),
              rgba(59, 130, 246, 0.08)
            );
          }
          75% {
            border-radius: 40% 70% 60% 30% / 70% 40% 50% 30%;
            background: linear-gradient(
              315deg,
              rgba(16, 185, 129, 0.08),
              rgba(147, 51, 234, 0.08)
            );
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            infinite;
        }
        .animate-gradient {
          animation: gradient-shift 4s ease infinite;
        }
        .animate-bounce-3d {
          animation: bounce-3d 2.5s ease-in-out infinite;
        }
        .animate-rotate-glow {
          animation: rotate-glow 20s linear infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-morphing-bg {
          animation: morphing-bg 8s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1200 {
          animation-delay: 1.2s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }

        .text-gradient {
          background: linear-gradient(
            45deg,
            #3b82f6,
            #8b5cf6,
            #06b6d4,
            #10b981
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }

        .hover-3d:hover {
          transform: translateY(-5px) rotateX(3deg) rotateY(3deg) scale(1.02);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hover-glow:hover {
          box-shadow:
            0 0 25px rgba(59, 130, 246, 0.5),
            0 0 50px rgba(147, 51, 234, 0.3);
          transition: all 0.3s ease;
        }

        .orbital-element {
          animation: orbit var(--duration, 15s) linear infinite;
          animation-delay: var(--delay, 0s);
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      <section
        id="hero"
        ref={sectionRef}
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 perspective-1000"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Dynamic mouse-following gradient */}
          <div
            className="absolute inset-0 opacity-40 transition-all duration-500 ease-out"
            style={{
              background: `
                radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
                rgba(59, 130, 246, 0.25),
                rgba(147, 51, 234, 0.15) 25%,
                rgba(6, 182, 212, 0.1) 50%,
                transparent 70%)
              `,
            }}
          />

          {/* Simplified morphing background shapes */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-morphing-bg blur-3xl"
              style={{
                width: `${200 + i * 30}px`,
                height: `${200 + i * 30}px`,
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${6 + i * 2}s`,
              }}
            />
          ))}

          {/* Animated grid with parallax */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
              transition: "transform 0.3s ease",
            }}
          />

          {/* Floating geometric shapes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${15 + i * 12}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${4 + i}s`,
              }}
            >
              <div
                className={`w-3 h-3 ${i % 2 === 0 ? "rounded-full" : "rotate-45"} bg-gradient-to-br ${
                  i % 2 === 0
                    ? "from-blue-400/15 to-purple-400/15"
                    : "from-purple-400/15 to-pink-400/15"
                } backdrop-blur-sm border border-white/5 shadow-lg`}
              />
            </div>
          ))}
        </div>

        {/* Main Content - Optimized for 1366px */}
        <div className="relative z-10 min-h-screen flex items-center pb-5 lg:pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              {/* Left Content - Main Text */}
              <div
                className={`lg:col-span-7 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}
              >
                {/* Enhanced Status Badge */}
                <div
                  className={`inline-flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-emerald-200/60 dark:border-emerald-700/60 text-emerald-600 dark:text-emerald-400 px-4 py-2.5 rounded-full text-sm font-medium mb-6 shadow-xl hover-3d ${isVisible ? "animate-fadeInUp delay-200" : "opacity-0"}`}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50" />
                  <Sparkles className="w-4 h-4 mr-2 animate-bounce-3d" />
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    Available for opportunities
                  </span>
                </div>

                {/* Enhanced Main Heading */}
                <div className="mb-6">
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${isVisible ? "animate-fadeInUp delay-300" : "opacity-0"}`}
                  >
                    <span className="block text-gray-900 dark:text-white mb-2">
                      Hi, I'm{" "}
                      <span className="relative inline-block text-gradient hover-3d perspective-1000">
                        {githubData?.user?.name?.split(" ")[0] || "Sachin"}
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-xl blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
                      </span>
                    </span>

                    {/* Enhanced Typing Animation */}
                    <div className="h-16 sm:h-20 lg:h-24 flex items-center overflow-hidden">
                      <span className="text-gradient font-extrabold tracking-tight">
                        {typedText}
                      </span>
                      <span className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ml-2 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />
                    </div>
                  </h1>

                  {/* Enhanced animated underline */}
                  <div className="relative mt-4">
                    <div
                      className={`h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg transition-all duration-1500 ease-out ${isVisible ? "w-32 opacity-100" : "w-0 opacity-0"}`}
                    />
                    <div
                      className={`absolute top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse transition-all duration-1500 ease-out ${isVisible ? "w-16 opacity-60" : "w-0 opacity-0"}`}
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>
                </div>

                {/* Enhanced Description with GitHub Bio */}
                <div
                  className={`text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl text-gray-600 dark:text-gray-300 ${isVisible ? "animate-fadeInUp delay-600" : "opacity-0"}`}
                >
                  <p className="mb-3 font-medium">
                    {githubData?.user?.bio || "Transforming ideas into"}{" "}
                    {/* <span className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent hover-3d inline-block">
                      exceptional digital experiences
                    </span>{" "}
                    with cutting-edge web technologies. */}
                  </p>
                  <p className="font-medium">
                    Specializing in{" "}
                    <span className="font-bold text-emerald-500 hover-3d inline-block">
                      React.js, Next.js, and performance optimization
                    </span>
                    .
                  </p>
                </div>

                {/* Enhanced CTA Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 mb-8 ${isVisible ? "animate-fadeInUp delay-800" : "opacity-0"}`}
                >
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-xl overflow-hidden hover-3d hover-glow transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100" />
                    <Rocket className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Explore My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-xl font-bold transition-all duration-300 relative overflow-hidden hover-3d backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">Let's Connect</span>
                  </button>
                </div>

                {/* Enhanced Social Links */}
                <div
                  className={`flex items-center space-x-4 ${isVisible ? "animate-fadeInUp delay-1000" : "opacity-0"}`}
                >
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/maurya-sachin",
                      color: "hover:text-gray-900 dark:hover:text-white",
                      bg: "hover:bg-gray-100 dark:hover:bg-gray-700",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/maurya-sachin/",
                      color: "hover:text-blue-600",
                      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
                    },
                    {
                      icon: Mail,
                      href: "sachinmaurya1710@gmail.com",
                      color: "hover:text-red-500",
                      bg: "hover:bg-red-50 dark:hover:bg-red-900/30",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 ${social.color} ${social.bg} transition-all duration-300 shadow-lg hover-3d hover-glow`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Content - Compact Avatar & Info */}
              <div
                className={`lg:col-span-5 flex flex-col items-center ${isVisible ? "animate-slideInRight delay-400" : "opacity-0"}`}
              >
                {/* Compact Avatar with Orbital System */}
                <div className="relative mb-6 perspective-1000">
                  {/* Central Avatar - Much Smaller */}
                  <div className="relative z-30">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-3 border-white/30 dark:border-gray-700/30 shadow-xl hover-3d transition-all duration-500 backdrop-blur-xl">
                      <img
                        src={
                          githubData?.user?.avatarUrl ||
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        }
                        alt={githubData?.user?.name || "Sachin Maurya"}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-transparent to-purple-500/25 animate-rotate-glow" />

                      {/* Optimized Pulse rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse-ring" />
                      <div
                        className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-pulse-ring"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                  </div>

                  {/* Compact Orbital Elements */}
                  {orbitalElements.map((orbit, index) => (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 z-20"
                      style={{
                        "--radius": `${orbit.radius}px`,
                        "--duration": `${orbit.duration}s`,
                        "--delay": `${orbit.delay}s`,
                      }}
                    >
                      <div
                        className={`orbital-element w-10 h-10 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl flex items-center justify-center ${orbit.color} hover-3d transition-all duration-300`}
                      >
                        <orbit.icon className="w-4 h-4" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compact Quick Info Panel */}
                <div
                  className={`w-full max-w-xs bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-xl hover-3d transition-all duration-300 ${isVisible ? "animate-fadeInUp delay-1200" : "opacity-0"}`}
                >
                  <h3 className="text-base font-bold mb-3 text-gradient text-center">
                    Quick Info
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors cursor-pointer group">
                      <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                        <MapPin className="w-3 h-3" />
                      </div>
                      <span className="font-medium text-sm">
                        {githubData?.user?.location || "Delhi, India"}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors cursor-pointer group">
                      <div className="p-1.5 rounded-lg bg-green-50 dark:bg-green-900/30 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                      </div>
                      <span className="font-medium text-sm">Remote Ready</span>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors cursor-pointer group">
                      <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors">
                        <Clock className="w-3 h-3" />
                      </div>
                      <span className="font-medium text-sm">
                        {currentTime} IST
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={downloadResume}
                    className="w-full mt-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-white px-4 py-2.5 rounded-lg font-bold flex items-center justify-center space-x-2 hover-3d hover-glow transition-all duration-300 shadow-lg text-sm"
                  >
                    <Download className="w-4 h-4 animate-bounce-3d" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 ${isVisible ? "animate-fadeInUp delay-1500" : "opacity-0"} hidden lg:flex flex-col items-center`}
        >
          <div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 hover-3d transition-all duration-300 animate-bounce-3d"
            onClick={() => scrollToSection("about")}
          >
            <div className="w-1 h-2.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full mt-1.5 animate-pulse shadow-lg" />
          </div>
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
            Scroll to explore
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
