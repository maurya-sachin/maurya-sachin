import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
	GitBranch,
	Star,
	Users,
	Activity,
	Code,
	Calendar,
	ExternalLink,
	Github,
	Sparkles,
	TrendingUp,
	Zap,
	Eye,
	Award,
	Target,
} from 'lucide-react';

import useStore from '../store/useStore';

const GitHubStatsSection = () => {
	const { githubData, githubLoading, githubError } = useStore();

	if (githubLoading) {
		return (
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-center'>
						<motion.div
							className='relative'
							animate={{ rotate: 360 }}
							transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
						>
							<div className='w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1'>
								<div className='w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center'>
									<Github className='w-8 h-8 text-blue-500' />
								</div>
							</div>
						</motion.div>
						<motion.p
							className='mt-6 text-gray-600 dark:text-gray-400 text-lg'
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							Fetching GitHub magic...
						</motion.p>
					</div>
				</div>
			</section>
		);
	}

	if (githubError || !githubData) {
		return (
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
				<div className='max-w-6xl mx-auto text-center'>
					<div className='p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-red-200 dark:border-red-800'>
						<div className='w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center'>
							<Github className='w-8 h-8 text-red-500' />
						</div>
						<p className='text-gray-600 dark:text-gray-400 text-lg'>
							GitHub data is taking a coffee break. Please try again later!
						</p>
					</div>
				</div>
			</section>
		);
	}

	const mainStats = [
		{
			label: 'Public Repos',
			value: githubData.user?.repositories?.totalCount || 25,
			icon: GitBranch,
			color: 'from-blue-500 to-cyan-400',
			description: 'Open source projects',
			gradient: 'from-blue-500/20 to-cyan-500/20',
		},
		{
			label: 'Total Stars',
			value: githubData.stats?.totalStars || 45,
			icon: Star,
			color: 'from-yellow-500 to-orange-400',
			description: 'Community appreciation',
			gradient: 'from-yellow-500/20 to-orange-500/20',
		},
		{
			label: 'Followers',
			value: githubData.user?.followers?.totalCount || 120,
			icon: Users,
			color: 'from-green-500 to-emerald-400',
			description: 'Developer network',
			gradient: 'from-green-500/20 to-emerald-500/20',
		},
		{
			label: 'Contributions',
			value:
				githubData.user?.contributionsCollection?.totalCommitContributions ||
				847,
			icon: Activity,
			color: 'from-purple-500 to-pink-400',
			description: 'This year',
			gradient: 'from-purple-500/20 to-pink-500/20',
		},
	];

	const repositories = githubData.repositories;

	return (
		<section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0'>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl'
						style={{
							left: `${10 + i * 20}%`,
							top: `${20 + i * 15}%`,
						}}
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.3, 0.6, 0.3],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 15 + i * 3,
							repeat: Infinity,
							delay: i * 2,
							ease: 'easeInOut',
						}}
					/>
				))}

				{/* Floating code symbols */}
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={`symbol-${i}`}
						className='absolute text-blue-300/20 dark:text-blue-600/20'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							fontSize: `${20 + Math.random() * 20}px`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.2, 0.5, 0.2],
							rotate: [0, 360],
						}}
						transition={{
							duration: 10 + Math.random() * 10,
							repeat: Infinity,
							delay: Math.random() * 5,
						}}
					>
						{['<', '>', '{', '}', '(', ')', ';', '#'][i]}
					</motion.div>
				))}
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Section Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center space-x-2 mb-6 px-6 py-3 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 shadow-lg'
						whileHover={{ scale: 1.05 }}
					>
						<Github className='w-5 h-5 text-gray-700 dark:text-gray-300' />
						<span className='text-gray-700 dark:text-gray-300 font-semibold'>
							GitHub Analytics
						</span>
						<Sparkles className='w-5 h-5 text-purple-500' />
					</motion.div>

					<motion.h2
						className='text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent'
						whileHover={{ scale: 1.02 }}
					>
						Code & Contributions
					</motion.h2>

					<motion.div
						className='w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full'
						initial={{ width: 0 }}
						whileInView={{ width: 128 }}
						transition={{ delay: 0.5, duration: 1.2 }}
						viewport={{ once: true }}
					/>

					<motion.p
						className='text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					>
						Real-time insights from my coding journey and open source
						contributions
					</motion.p>
				</motion.div>

				{/* Main Stats Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
					{mainStats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className='group relative'
							initial={{ opacity: 0, y: 30, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.02 }}
						>
							<div className='relative h-full p-6 lg:p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden'>
								{/* Animated background gradient */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
									initial={false}
								/>

								{/* Floating particles on hover */}
								<AnimatePresence>
									<motion.div className='absolute inset-0 overflow-hidden pointer-events-none'>
										{[...Array(3)].map((_, i) => (
											<motion.div
												key={i}
												className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
												initial={{
													x: Math.random() * 200,
													y: Math.random() * 150,
													opacity: 0,
												}}
												animate={{
													y: -20,
													opacity: [0, 1, 0],
													scale: [0, 1.5, 0],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													delay: i * 0.7,
												}}
											/>
										))}
									</motion.div>
								</AnimatePresence>

								<div className='relative z-10 text-center'>
									<motion.div
										className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}
										whileHover={{ rotate: 360, scale: 1.1 }}
										transition={{ duration: 0.8 }}
									>
										<stat.icon className='w-8 h-8 lg:w-10 lg:h-10 text-white' />
									</motion.div>

									<motion.div
										className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3'
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{
											delay: index * 0.1 + 0.3,
											type: 'spring',
											stiffness: 200,
										}}
										viewport={{ once: true }}
									>
										{stat.value}
									</motion.div>

									<div className='text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300'>
										{stat.label}
									</div>

									<div className='text-sm text-gray-500 dark:text-gray-400'>
										{stat.description}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Recent Repositories */}
				<motion.div
					className='mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div className='text-center mb-12'>
						<h3 className='text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
							Recent Projects
						</h3>
						<p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
							Latest repositories showcasing my development journey
						</p>
					</motion.div>

					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{repositories.slice(0, 6).map((repo, index) => (
							<motion.a
								key={repo.name}
								href={repo.url}
								target='_blank'
								rel='noopener noreferrer'
								className='group relative block'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.6 }}
								viewport={{ once: true }}
								whileHover={{ y: -8, scale: 1.02 }}
							>
								<div className='h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden'>
									{/* Gradient overlay on hover */}
									<motion.div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />

									<div className='relative z-10'>
										{/* Header */}
										<div className='flex items-start justify-between mb-4'>
											<div className='flex items-center space-x-3'>
												<motion.div
													className='p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500'
													whileHover={{ rotate: 360 }}
													transition={{ duration: 0.6 }}
												>
													<Code className='w-5 h-5 text-white' />
												</motion.div>
												<div>
													<h4 className='font-bold text-lg group-hover:text-blue-500 transition-colors text-gray-900 dark:text-white line-clamp-1'>
														{repo.name}
													</h4>
												</div>
											</div>
											<motion.div
												whileHover={{ scale: 1.2, rotate: 15 }}
												transition={{ type: 'spring', stiffness: 300 }}
											>
												<ExternalLink className='w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors' />
											</motion.div>
										</div>

										{/* Description */}
										<p className='text-sm leading-relaxed mb-4 text-gray-600 dark:text-gray-400 line-clamp-2'>
											{repo.description ||
												'A cool project with lots of potential!'}
										</p>

										{/* Footer */}
										<div className='flex items-center justify-between'>
											<div className='flex items-center space-x-4'>
												{repo.primaryLanguage && (
													<div className='flex items-center space-x-2'>
														<div
															className='w-3 h-3 rounded-full shadow-sm'
															style={{
																backgroundColor: repo.primaryLanguage.color,
															}}
														/>
														<span className='text-xs font-medium text-gray-600 dark:text-gray-400'>
															{repo.primaryLanguage.name}
														</span>
													</div>
												)}
												{repo.stargazerCount > 0 && (
													<motion.div
														className='flex items-center space-x-1'
														whileHover={{ scale: 1.1 }}
													>
														<Star className='w-3 h-3 text-yellow-500' />
														<span className='text-xs font-medium text-gray-600 dark:text-gray-400'>
															{repo.stargazerCount}
														</span>
													</motion.div>
												)}
											</div>
											<span className='text-xs text-gray-500 dark:text-gray-400'>
												{new Date(repo.updatedAt).toLocaleDateString()}
											</span>
										</div>
									</div>
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Contribution Activity */}
				<motion.div
					className='text-center'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 shadow-lg'
						whileHover={{ scale: 1.05, y: -5 }}
					>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
							className='mr-4'
						>
							<Calendar className='w-6 h-6 text-green-500' />
						</motion.div>
						<span className='text-gray-700 dark:text-gray-300 text-lg'>
							Active contributor with{' '}
							<motion.span
								className='font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'
								animate={{ scale: [1, 1.1, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								{
									githubData.user?.contributionsCollection
										?.totalCommitContributions
								}
							</motion.span>{' '}
							contributions this year
						</span>
						<motion.div
							className='ml-4'
							animate={{ y: [0, -5, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<TrendingUp className='w-6 h-6 text-blue-500' />
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					className='text-center mt-16 max-w-3xl mx-auto'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className='p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/20'>
						<h3 className='text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
							Want to collaborate on the next big thing?
						</h3>
						<p className='text-gray-600 dark:text-gray-400 mb-6'>
							Let's build something amazing together using cutting-edge
							technologies
						</p>
						<motion.div
							className='inline-flex items-center space-x-3 text-blue-600 dark:text-blue-400 font-semibold'
							whileHover={{ x: 5 }}
						>
							<Target className='w-5 h-5' />
							<span>Let's connect and create</span>
							<Sparkles className='w-5 h-5' />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default GitHubStatsSection;
