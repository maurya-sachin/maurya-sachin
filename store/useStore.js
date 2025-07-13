import { create } from "zustand";

const useStore = create((set, get) => ({
  // Theme state
  isDarkMode: false,

  toggleDarkMode: () => {
    const newMode = !get().isDarkMode;
    console.log("Toggling theme to:", newMode ? "dark" : "light");

    set({ isDarkMode: newMode });

    if (typeof window !== "undefined") {
      const htmlElement = document.documentElement;

      // Use data-theme attribute for Tailwind v3
      htmlElement.setAttribute("data-theme", newMode ? "dark" : "light");
      localStorage.setItem("theme", newMode ? "dark" : "light");

      console.log(`Set data-theme="${newMode ? "dark" : "light"}"`);
    }
  },

  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const shouldBeDark =
        savedTheme === "dark" || (!savedTheme && prefersDark);

      console.log("Initializing theme:", {
        savedTheme,
        prefersDark,
        shouldBeDark,
      });

      const htmlElement = document.documentElement;

      // Set data-theme attribute
      htmlElement.setAttribute("data-theme", shouldBeDark ? "dark" : "light");
      set({ isDarkMode: shouldBeDark });
      localStorage.setItem("theme", shouldBeDark ? "dark" : "light");
    }
  },

  // Navigation state
  activeSection: "hero",
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),

  // UI state
  isLoading: true,
  currentTime: "",
  scrollProgress: 0,

  setIsLoading: (loading) => set({ isLoading: loading }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),

  // Contact form state
  contactForm: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  isFormSubmitting: false,

  updateContactForm: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),

  resetContactForm: () =>
    set({
      contactForm: { name: "", email: "", subject: "", message: "" },
    }),

  setFormSubmitting: (submitting) => set({ isFormSubmitting: submitting }),

  // GitHub data
  githubData: null,
  githubLoading: true,
  githubError: null,

  setGithubData: (data) =>
    set({
      githubData: data,
      githubLoading: false,
      githubError: null,
    }),
  setGithubError: (error) =>
    set({
      githubError: error,
      githubLoading: false,
    }),

  // Skills filter
  activeSkillCategory: "All",
  setActiveSkillCategory: (category) => set({ activeSkillCategory: category }),

  // Projects filter
  activeProjectCategory: "All",
  selectedProject: null,
  setActiveProjectCategory: (category) =>
    set({ activeProjectCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useStore;
