import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Eye,
  Heart,
  MessageCircle,
  ExternalLink,
  Tag,
} from "lucide-react";

const BlogSection = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title:
        "Building High-Performance React Applications: My Optimization Journey",
      excerpt:
        "Discover the techniques I use to achieve 95+ Lighthouse scores consistently. From code splitting to image optimization, here's my complete performance optimization playbook.",
      content:
        "Performance optimization isn't just about faster load times—it's about creating exceptional user experiences...",
      category: "Performance",
      readTime: "8 min read",
      publishedAt: "2024-01-15",
      views: 1240,
      likes: 89,
      comments: 12,
      tags: ["React", "Performance", "Web Vitals", "Optimization"],
      featured: true,
      image: "/api/placeholder/600/300",
      slug: "react-performance-optimization",
    },
    {
      id: 2,
      title: "Next.js 14 App Router: Complete Migration Guide",
      excerpt:
        "Step-by-step guide to migrating from Pages Router to App Router. Learn about the new features, benefits, and best practices for modern Next.js applications.",
      content:
        "The App Router in Next.js 14 represents a significant shift in how we structure our applications...",
      category: "Next.js",
      readTime: "12 min read",
      publishedAt: "2024-01-08",
      views: 2150,
      likes: 156,
      comments: 28,
      tags: ["Next.js", "App Router", "Migration", "SSR"],
      featured: true,
      image: "/api/placeholder/600/300",
      slug: "nextjs-14-app-router-guide",
    },
    {
      id: 3,
      title: "GSAP Animation Masterclass: Creating Smooth Web Interactions",
      excerpt:
        "Master the art of web animations with GSAP. From basic tweens to complex timeline sequences, create animations that delight users and enhance UX.",
      content:
        "Animation is more than just eye candy—it's a powerful tool for user engagement...",
      category: "Animation",
      readTime: "15 min read",
      publishedAt: "2024-01-01",
      views: 890,
      likes: 67,
      comments: 15,
      tags: ["GSAP", "Animation", "UX", "Frontend"],
      featured: false,
      image: "/api/placeholder/600/300",
      slug: "gsap-animation-masterclass",
    },
    {
      id: 4,
      title: "TypeScript Best Practices for React Developers",
      excerpt:
        "Level up your React development with TypeScript. Learn advanced patterns, type inference, and how to write more maintainable code.",
      content:
        "TypeScript has revolutionized how we write React applications...",
      category: "TypeScript",
      readTime: "10 min read",
      publishedAt: "2023-12-20",
      views: 1650,
      likes: 124,
      comments: 31,
      tags: ["TypeScript", "React", "Best Practices", "Types"],
      featured: false,
      image: "/api/placeholder/600/300",
      slug: "typescript-react-best-practices",
    },
    {
      id: 5,
      title: "Building Accessible Web Applications: A Developer's Guide",
      excerpt:
        "Web accessibility isn't optional—it's essential. Learn how to build inclusive applications that work for everyone, with practical examples and tools.",
      content:
        "Creating accessible web applications is not just about compliance...",
      category: "Accessibility",
      readTime: "14 min read",
      publishedAt: "2023-12-10",
      views: 920,
      likes: 78,
      comments: 19,
      tags: ["Accessibility", "WCAG", "Inclusive Design", "Web Standards"],
      featured: false,
      image: "/api/placeholder/600/300",
      slug: "web-accessibility-guide",
    },
    {
      id: 6,
      title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
      excerpt:
        "Explore the latest CSS features and techniques. From CSS Grid mastery to modern layout patterns, elevate your styling game.",
      content:
        "CSS has evolved tremendously, offering powerful layout tools...",
      category: "CSS",
      readTime: "11 min read",
      publishedAt: "2023-11-25",
      views: 1320,
      likes: 95,
      comments: 22,
      tags: ["CSS", "Grid", "Flexbox", "Modern CSS"],
      featured: false,
      image: "/api/placeholder/600/300",
      slug: "modern-css-techniques",
    },
  ];

  const categories = [
    "All",
    "Performance",
    "Next.js",
    "Animation",
    "TypeScript",
    "Accessibility",
    "CSS",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const getCategoryColor = (category) => {
    const colors = {
      Performance: "from-green-500 to-emerald-500",
      "Next.js": "from-gray-700 to-gray-900",
      Animation: "from-purple-500 to-pink-500",
      TypeScript: "from-blue-600 to-blue-800",
      Accessibility: "from-indigo-500 to-purple-600",
      CSS: "from-cyan-500 to-blue-500",
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-gray-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/5 dark:bg-blue-500/5"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights about modern web development,
            performance optimization, and frontend best practices
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Featured Articles
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {post.title.slice(0, 20)}...
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(post.category)}`}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>

                  {/* Engagement stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-3 text-white/80">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more button */}
                  <motion.div
                    className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform"
                    animate={{ x: hoveredPost === post.id ? 8 : 0 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Mini image */}
              <div className="relative h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-medium text-sm text-center px-4">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-3">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>

                <h4 className="font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to read more technical articles and tutorials?
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Visit My Blog</span>
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
