// components/GitHubStatsSection.tsx
import React from 'react'
import { motion } from 'framer-motion'
import {
    GitBranch, Star, Users, Activity, Code, Eye,
    TrendingUp, Award, Calendar, ExternalLink
} from 'lucide-react'

interface GitHubStatsProps {
    isDarkMode: boolean
    githubData: any
    loading: boolean
    error: string | null
}

const GitHubStatsSection: React.FC<GitHubStatsProps> = ({
    isDarkMode,
    githubData,
    loading,
    error
}) => {
    if (loading) {
        return (
            <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <p className={`mt-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Loading GitHub statistics...
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    if (error || !githubData) {
        return (
            <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Unable to load GitHub data at the moment.
                    </p>
                </div>
            </section>
        )
    }

    const mainStats = [
        {
            label: "Public Repos",
            value: githubData.user.repositories.totalCount,
            icon: GitBranch,
            color: "from-blue-500 to-blue-600",
            description: "Open source projects"
        },
        {
            label: "Total Stars",
            value: githubData.stats?.totalStars || 0,
            icon: Star,
            color: "from-yellow-500 to-yellow-600",
            description: "Community appreciation"
        },
        {
            label: "Followers",
            value: githubData.user.followers.totalCount,
            icon: Users,
            color: "from-green-500 to-green-600",
            description: "Developer network"
        },
        {
            label: "Contributions",
            value: githubData.user.contributionsCollection.totalCommitContributions,
            icon: Activity,
            color: "from-purple-500 to-purple-600",
            description: "This year"
        },
    ]

    return (
        <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-40 h-40 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-5`}
                        style={{
                            left: `${15 + i * 12}%`,
                            top: `${10 + i * 8}%`,
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 20 + i * 3,
                            repeat: Infinity,
                            delay: i * 1,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.02 }}
                    >
                        GitHub Analytics
                    </motion.h2>
                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Real-time insights from my coding journey and open source contributions
                    </motion.p>
                </motion.div>

                {/* Main Stats Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {mainStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className={`p-6 rounded-xl border backdrop-blur-sm text-center group relative overflow-hidden ${isDarkMode
                                    ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                    : "bg-white/50 border-gray-200 hover:border-gray-300"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            {/* Background Gradient */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div
                                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>

                                <div className={`text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                                    {stat.label}
                                </div>

                                <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {stat.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Recent Repositories */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-2xl font-bold mb-8 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        Recent Projects
                    </motion.h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {githubData.repositories.slice(0, 6).map((repo: any, index: number) => (
                            <motion.a
                                key={repo.name}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-6 rounded-xl border backdrop-blur-sm block group relative overflow-hidden ${isDarkMode
                                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                                        : "bg-white/50 border-gray-200 hover:border-gray-300"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Background Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center space-x-2">
                                            <Code className="w-5 h-5 text-blue-500" />
                                            <h4 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                                                {repo.name}
                                            </h4>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                                        {repo.description || "A cool project with lots of potential!"}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            {repo.primaryLanguage && (
                                                <div className="flex items-center space-x-1">
                                                    <div
                                                        className="w-3 h-3 rounded-full"
                                                        style={{ backgroundColor: repo.primaryLanguage.color }}
                                                    />
                                                    <span className="text-xs">{repo.primaryLanguage.name}</span>
                                                </div>
                                            )}
                                            {repo.stargazerCount > 0 && (
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-3 h-3 text-yellow-500" />
                                                    <span className="text-xs">{repo.stargazerCount}</span>
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                                            {new Date(repo.updatedAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Contribution Activity */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className={`inline-flex items-center px-6 py-3 rounded-xl border backdrop-blur-sm ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white/50 border-gray-200"
                            }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                    >
                        <Calendar className="w-5 h-5 mr-3 text-green-500" />
                        <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Active contributor with{" "}
                            <motion.span
                                className="font-bold text-green-500"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {githubData.user.contributionsCollection.totalCommitContributions}+
                            </motion.span>{" "}
                            contributions this year
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default GitHubStatsSection