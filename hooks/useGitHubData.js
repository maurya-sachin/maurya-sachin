// hooks/useGitHubData.js
import { useEffect } from "react";
import useStore from "../store/useStore";

const FALLBACK_DATA = {
  user: {
    name: "Sachin Maurya",
    bio: "Frontend Developer specializing in React.js and modern web technologies",
    avatarUrl: "",
    location: "Delhi, India",
    company: "Kreate Technologies",
    followers: { totalCount: 120 },
    following: { totalCount: 85 },
    repositories: { totalCount: 28 },
    contributionsCollection: { totalCommitContributions: 847 },
  },
  repositories: [
    {
      name: "genai-document-analyzer",
      description: "AI-powered document processing platform with real-time chat capabilities",
      url: "https://github.com/maurya-sachin/genai-analyzer",
      stargazerCount: 15,
      forkCount: 3,
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
      updatedAt: "2024-01-15T00:00:00Z",
    },
    {
      name: "kreate-website",
      description: "High-performance corporate website with GSAP animations",
      url: "https://github.com/maurya-sachin/kreate-website",
      stargazerCount: 12,
      forkCount: 2,
      primaryLanguage: { name: "TypeScript", color: "#2b7489" },
      updatedAt: "2024-01-10T00:00:00Z",
    },
    {
      name: "portfolio-v3",
      description: "Personal portfolio website built with Next.js and Framer Motion",
      url: "https://github.com/maurya-sachin/portfolio-v3",
      stargazerCount: 18,
      forkCount: 4,
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
      updatedAt: "2024-01-12T00:00:00Z",
    },
    {
      name: "kanban-board",
      description: "Modern task management system with drag-and-drop functionality",
      url: "https://github.com/maurya-sachin/kanban-board",
      stargazerCount: 8,
      forkCount: 1,
      primaryLanguage: { name: "React", color: "#61dafb" },
      updatedAt: "2024-01-05T00:00:00Z",
    },
    {
      name: "react-ui-library",
      description: "Comprehensive design system with 50+ reusable components",
      url: "https://github.com/maurya-sachin/react-ui-lib",
      stargazerCount: 22,
      forkCount: 5,
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" },
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      name: "weather-dashboard",
      description: "Beautiful weather application with location-based forecasts",
      url: "https://github.com/maurya-sachin/weather-app",
      stargazerCount: 6,
      forkCount: 1,
      primaryLanguage: { name: "React", color: "#61dafb" },
      updatedAt: "2023-12-20T00:00:00Z",
    },
  ],
  stats: {
    totalStars: 81,
    totalForks: 16,
    totalRepositories: 28,
    languages: { JavaScript: 15, TypeScript: 8, CSS: 3, HTML: 2 },
    topLanguage: "JavaScript",
  },
};

export const useGitHubData = (username) => {
  const { githubData, githubLoading, githubError, setGithubData, setGithubLoading, setGithubError } = useStore();

  useEffect(() => {
    if (!username) return;

    const fetchGitHubData = async () => {
      setGithubLoading(true);
      setGithubError(null);

      try {

        const response = await fetch(`/api/github/${username}`);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        setGithubData(data);

      } catch (error) {
        console.error("❌ GitHub API Error:", error.message);
        setGithubError(error.message);
        setGithubData(FALLBACK_DATA);
        console.log("📝 Using fallback GitHub data");
      }
    };

    fetchGitHubData();
  }, [username]);

  return { githubData, githubLoading, githubError };
};