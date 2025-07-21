import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://dev.to/api/articles?username=maurya-sachin"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%"],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex items-center justify-center p-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="text-6xl mb-4"
          >
            ⚠️
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchArticles}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px), radial-gradient(circle at 75% 75%, blue 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 w-full px-4 py-8">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                  >
                    <div className="relative overflow-hidden bg-gray-700/50 rounded-xl h-48 mb-4">
                      <motion.div
                        variants={shimmerVariants}
                        animate="animate"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700/50 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-700/50 rounded w-3/4 animate-pulse"></div>
                      <div className="flex gap-4 pt-4">
                        <div className="h-3 bg-gray-700/50 rounded w-16 animate-pulse"></div>
                        <div className="h-3 bg-gray-700/50 rounded w-16 animate-pulse"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {articles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden h-48">
                      {article.cover_image ? (
                        <img
                          src={article.cover_image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-600/50 to-blue-600/50 flex items-center justify-center">
                          <div className="text-4xl">📝</div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tag_list.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 text-xs rounded-full border border-purple-400/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                        {article.title}
                      </h2>

                      <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(article.published_at)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.reading_time_minutes} min</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{article.public_reactions_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{article.comments_count}</span>
                          </div>
                        </div>

                        <motion.a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Read More
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default BlogSection;
