import { create } from "zustand";

const useStore = create((set, get) => ({
  // Theme state
  isDarkMode: false,
  toggleDarkMode: () => {
    const newMode = !get().isDarkMode;
    set({ isDarkMode: newMode });

    if (typeof window !== "undefined") {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", newMode ? "dark" : "light");
      localStorage.setItem("theme", newMode ? "dark" : "light");
    }
  },
  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

      const htmlElement = document.documentElement;
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
  contactForm: { name: "", email: "", subject: "", message: "" },
  isFormSubmitting: false,
  updateContactForm: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),
  resetContactForm: () =>
    set({ contactForm: { name: "", email: "", subject: "", message: "" } }),
  setFormSubmitting: (submitting) => set({ isFormSubmitting: submitting }),

  // GitHub data 
  githubData: null,
  githubLoading: true,
  githubError: null,
  setGithubData: (data) => set({ githubData: data, githubLoading: false, githubError: null }),
  setGithubError: (error) => set({ githubError: error, githubLoading: false }),
  setGithubLoading: (loading) => set({ githubLoading: loading }),

  // Skills & Projects filter
  activeSkillCategory: "All",
  activeProjectCategory: "All",
  selectedProject: null,
  setActiveSkillCategory: (category) => set({ activeSkillCategory: category }),
  setActiveProjectCategory: (category) => set({ activeProjectCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useStore;