import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

// Create separate slices for better performance
const createThemeSlice = (set, get) => ({
  // Theme state - hydration safe
  isDarkMode: false,
  isHydrated: false,

  toggleDarkMode: () => {
    const newMode = !get().isDarkMode;
    set({ isDarkMode: newMode });

    if (typeof window !== "undefined") {
      const htmlElement = document.documentElement;
      if (newMode) {
        htmlElement.classList.add("dark");
        htmlElement.setAttribute("data-theme", "dark");
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("theme", newMode ? "dark" : "light");
    }
  },

  initializeTheme: () => {
    if (typeof window !== "undefined" && !get().isHydrated) {
      const htmlElement = document.documentElement;
      const currentTheme = htmlElement.getAttribute("data-theme");
      const isDark = currentTheme === "dark" || htmlElement.classList.contains("dark");

      set({
        isDarkMode: isDark,
        isHydrated: true
      });

      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  },
});

const createNavigationSlice = (set) => ({
  // Navigation state
  activeSection: "hero",
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
});

const createUISlice = (set) => ({
  // UI state
  isLoading: true,
  currentTime: "",
  scrollProgress: 0,
  setIsLoading: (loading) => set({ isLoading: loading }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
});

const createContactSlice = (set, get) => ({
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
});

const createGithubSlice = (set) => ({
  // GitHub data 
  githubData: null,
  githubLoading: true,
  githubError: null,
  setGithubData: (data) => set({ githubData: data, githubLoading: false, githubError: null }),
  setGithubError: (error) => set({ githubError: error, githubLoading: false }),
  setGithubLoading: (loading) => set({ githubLoading: loading }),
});

const createProjectSlice = (set) => ({
  // Skills & Projects filter
  activeSkillCategory: "All",
  activeProjectCategory: "All",
  selectedProject: null,
  setActiveSkillCategory: (category) => set({ activeSkillCategory: category }),
  setActiveProjectCategory: (category) => set({ activeProjectCategory: category }),
  setSelectedProject: (project) => set({ selectedProject: project }),
});

// Main store combining all slices with subscribeWithSelector for better performance
const useStore = create(
  subscribeWithSelector((set, get) => ({
    ...createThemeSlice(set, get),
    ...createNavigationSlice(set, get),
    ...createUISlice(set, get),
    ...createContactSlice(set, get),
    ...createGithubSlice(set, get),
    ...createProjectSlice(set, get),
  }))
);

// Selector hooks for better performance (optional)
export const useThemeStore = () => useStore((state) => ({
  isDarkMode: state.isDarkMode,
  isHydrated: state.isHydrated,
  toggleDarkMode: state.toggleDarkMode,
  initializeTheme: state.initializeTheme,
}));

export const useNavigationStore = () => useStore((state) => ({
  activeSection: state.activeSection,
  isMenuOpen: state.isMenuOpen,
  setActiveSection: state.setActiveSection,
  setIsMenuOpen: state.setIsMenuOpen,
}));

export const useUIStore = () => useStore((state) => ({
  isLoading: state.isLoading,
  currentTime: state.currentTime,
  scrollProgress: state.scrollProgress,
  setIsLoading: state.setIsLoading,
  setCurrentTime: state.setCurrentTime,
  setScrollProgress: state.setScrollProgress,
}));

export default useStore;