// components/CustomCursor.jsx
import { motion } from "framer-motion";
import useStore from "../store/useStore";

const CustomCursor = () => {
  const { mousePosition, isDarkMode } = useStore();

  return (
    <div className="hidden lg:block">
      {/* Main cursor */}
      <motion.div
        className={`fixed w-6 h-6 border-2 rounded-full pointer-events-none z-[9999] mix-blend-difference ${
          isDarkMode ? "border-white" : "border-black"
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Trail effect */}
      <motion.div
        className="fixed w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

// components/FloatingElements.jsx
const FloatingElements = () => {
  const { isDarkMode } = useStore();

  const shapes = [
    { type: "circle", size: 80, color: "bg-blue-500/10", delay: 0 },
    { type: "square", size: 60, color: "bg-purple-500/10", delay: 2 },
    { type: "triangle", size: 70, color: "bg-pink-500/10", delay: 4 },
    { type: "circle", size: 50, color: "bg-cyan-500/10", delay: 1 },
    { type: "square", size: 90, color: "bg-indigo-500/10", delay: 3 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} ${
            shape.type === "circle"
              ? "rounded-full"
              : shape.type === "triangle"
                ? "transform rotate-45"
                : "rounded-lg"
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${10 + index * 20}%`,
            top: `${20 + index * 15}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Particle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-2 h-2 rounded-full ${
            isDarkMode ? "bg-blue-400/20" : "bg-blue-600/20"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// components/LoadingScreen.jsx
const LoadingScreen = () => {
  const { isDarkMode } = useStore();

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div className="relative mb-8">
          <motion.div
            className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 w-24 h-24 border-4 border-purple-500 border-b-transparent rounded-full mx-auto"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Center logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Sachin Maurya
          </h2>
          <p className="text-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-8">
            Frontend Developer Portfolio
          </p>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div
            className={`h-2 rounded-full overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Status Text */}
        <motion.p
          className={`mt-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading amazing portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

// components/Newsletter.jsx
const NewsletterSection = () => {
  const {
    isDarkMode,
    newsletterEmail,
    newsletterStatus,
    setNewsletterEmail,
    setNewsletterStatus,
  } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      setNewsletterStatus("loading");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setNewsletterStatus("success");
      setNewsletterEmail("");

      setTimeout(() => setNewsletterStatus(null), 3000);
    } catch (error) {
      setNewsletterStatus("error");
      setTimeout(() => setNewsletterStatus(null), 3000);
    }
  };

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDarkMode ? "bg-gray-800/30" : "bg-gray-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stay Updated 📧
          </h2>
          <p
            className={`text-xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Get the latest updates about my projects, blog posts, and tech
            insights delivered to your inbox.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email..."
                className={`flex-1 px-4 py-3 rounded-xl border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              <motion.button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {newsletterStatus === "loading" ? "..." : "Subscribe"}
              </motion.button>
            </div>

            {newsletterStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-sm mt-3"
              >
                ✅ Successfully subscribed! Check your email.
              </motion.p>
            )}

            {newsletterStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-3"
              >
                ❌ Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>

          <p
            className={`text-xs mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            No spam, unsubscribe at any time. I respect your privacy! 🔒
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export { CustomCursor, FloatingElements, LoadingScreen, NewsletterSection };
