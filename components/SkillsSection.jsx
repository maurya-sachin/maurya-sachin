'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Code2,
	Palette,
	Database,
	Globe,
	Zap,
	Star,
	TrendingUp,
	Eye,
	Layers,
	Sparkles,
	ArrowRight,
	Plus,
	Filter,
	Search,
	Terminal,
	Smartphone,
	Settings,
	Cloud,
	GitBranch,
	Cpu,
	Shield,
	BarChart3,
} from 'lucide-react';

// Core featured skills (always shown)
const FEATURED_SKILLS = [
	{
		id: 'react',
		name: 'React.js',
		level: 95,
		icon: Code2,
		color: 'from-cyan-400 to-blue-500',
		description: 'Building dynamic, interactive user interfaces',
		category: 'Frontend',
		isFeatured: true,
	},
	{
		id: 'nextjs',
		name: 'Next.js',
		level: 92,
		icon: Globe,
		color: 'from-gray-700 to-gray-900',
		description: 'Full-stack React applications with SSR/SSG',
		category: 'Framework',
		isFeatured: true,
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		level: 88,
		icon: Code2,
		color: 'from-blue-500 to-indigo-600',
		description: 'Type-safe development and scalable code',
		category: 'Language',
		isFeatured: true,
	},
	{
		id: 'tailwind',
		name: 'Tailwind CSS',
		level: 94,
		icon: Palette,
		color: 'from-teal-400 to-cyan-500',
		description: 'Rapid UI development with utility-first CSS',
		category: 'Styling',
		isFeatured: true,
	},
	{
		id: 'framer',
		name: 'Framer Motion',
		level: 90,
		icon: Zap,
		color: 'from-pink-400 to-rose-500',
		description: 'Advanced animations and micro-interactions',
		category: 'Animation',
		isFeatured: true,
	},
	{
		id: 'state',
		name: 'State Management',
		level: 87,
		icon: Database,
		color: 'from-green-400 to-emerald-500',
		description: 'Redux, Zustand, and Context API expertise',
		category: 'Architecture',
		isFeatured: true,
	},
];

// Additional skills that can be shown
const ADDITIONAL_SKILLS = [
	{
		id: 'javascript',
		name: 'JavaScript ES6+',
		level: 92,
		icon: Terminal,
		color: 'from-yellow-400 to-orange-500',
		description: 'Modern JavaScript features and async programming',
		category: 'Language',
		isFeatured: false,
	},
	{
		id: 'python',
		name: 'Python',
		level: 82,
		icon: Code2,
		color: 'from-green-500 to-blue-500',
		description: 'Backend development and data processing',
		category: 'Language',
		isFeatured: false,
	},
	{
		id: 'nodejs',
		name: 'Node.js',
		level: 85,
		icon: Terminal,
		color: 'from-green-600 to-green-800',
		description: 'Server-side JavaScript development',
		category: 'Backend',
		isFeatured: false,
	},
	{
		id: 'react-native',
		name: 'React Native',
		level: 80,
		icon: Smartphone,
		color: 'from-purple-500 to-pink-500',
		description: 'Cross-platform mobile app development',
		category: 'Mobile',
		isFeatured: false,
	},
	{
		id: 'graphql',
		name: 'GraphQL',
		level: 78,
		icon: Database,
		color: 'from-pink-500 to-rose-600',
		description: 'Efficient API queries and data fetching',
		category: 'Backend',
		isFeatured: false,
	},
	{
		id: 'docker',
		name: 'Docker',
		level: 75,
		icon: Cloud,
		color: 'from-blue-600 to-cyan-600',
		description: 'Containerization and deployment',
		category: 'DevOps',
		isFeatured: false,
	},
	{
		id: 'git',
		name: 'Git & GitHub',
		level: 90,
		icon: GitBranch,
		color: 'from-orange-500 to-red-500',
		description: 'Version control and collaborative development',
		category: 'Tools',
		isFeatured: false,
	},
	{
		id: 'webpack',
		name: 'Webpack',
		level: 77,
		icon: Settings,
		color: 'from-blue-400 to-blue-600',
		description: 'Module bundling and build optimization',
		category: 'Tools',
		isFeatured: false,
	},
	{
		id: 'aws',
		name: 'AWS',
		level: 72,
		icon: Cloud,
		color: 'from-orange-400 to-yellow-500',
		description: 'Cloud services and serverless deployment',
		category: 'Cloud',
		isFeatured: false,
	},
	{
		id: 'mongodb',
		name: 'MongoDB',
		level: 80,
		icon: Database,
		color: 'from-green-500 to-teal-500',
		description: 'NoSQL database design and optimization',
		category: 'Database',
		isFeatured: false,
	},
	{
		id: 'testing',
		name: 'Testing (Jest/Cypress)',
		level: 83,
		icon: Shield,
		color: 'from-red-400 to-pink-500',
		description: 'Unit, integration, and E2E testing',
		category: 'Testing',
		isFeatured: false,
	},
	{
		id: 'performance',
		name: 'Performance Optimization',
		level: 88,
		icon: Cpu,
		color: 'from-indigo-500 to-purple-500',
		description: 'Web vitals, lighthouse optimization',
		category: 'Performance',
		isFeatured: false,
	},
];

// Combine all skills
const ALL_SKILLS = [...FEATURED_SKILLS, ...ADDITIONAL_SKILLS];

// Get unique categories
const CATEGORIES = [...new Set(ALL_SKILLS.map((skill) => skill.category))];

const STATS = [
	{ label: 'Technologies', value: `${ALL_SKILLS.length}+`, icon: Layers },
	{ label: 'Projects Built', value: '50+', icon: Star },
	{ label: 'Years Experience', value: '4+', icon: TrendingUp },
	{ label: 'Happy Clients', value: '25+', icon: Eye },
];

const VIEW_MODES = [
	{ id: 'featured', label: 'Featured', icon: Star, desc: 'Core skills' },
	{ id: 'all', label: 'All Skills', icon: Layers, desc: 'Complete list' },
	{ id: 'radar', label: 'Radar', icon: BarChart3, desc: 'Visual chart' },
];

const SkillCard = React.memo(
	({ skill, index, isHovered, onHover, onLeave, isCompact = false }) => (
		<motion.div
			className='group relative'
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.05, duration: 0.4 }}
			onMouseEnter={() => onHover(skill.id)}
			onMouseLeave={onLeave}
		>
			<motion.div
				className={`relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl ${
					isCompact ? 'p-4' : 'p-6'
				} border border-white/20 shadow-lg overflow-hidden`}
				whileHover={{ y: isCompact ? -4 : -8, scale: isCompact ? 1.01 : 1.02 }}
				transition={{ type: 'spring', stiffness: 300 }}
			>
				{/* Gradient overlay on hover */}
				<motion.div
					className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 rounded-2xl`}
					animate={{ opacity: isHovered ? 0.05 : 0 }}
					transition={{ duration: 0.3 }}
				/>

				{/* Floating particles for featured skills */}
				{isHovered && skill.isFeatured && (
					<motion.div className='absolute inset-0 overflow-hidden rounded-2xl pointer-events-none'>
						{[...Array(2)].map((_, i) => (
							<motion.div
								key={i}
								className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
								initial={{
									x: Math.random() * 200,
									y: Math.random() * 150,
									opacity: 0,
								}}
								animate={{
									y: -20,
									opacity: [0, 1, 0],
									scale: [0, 1, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									delay: i * 0.3,
								}}
							/>
						))}
					</motion.div>
				)}

				<div className='relative z-10'>
					{/* Header */}
					<div className='flex items-start justify-between mb-3'>
						<motion.div
							className={`${isCompact ? 'p-2' : 'p-3'} rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.8 }}
						>
							<skill.icon
								className={`${isCompact ? 'w-4 h-4' : 'w-6 h-6'} text-white`}
							/>
						</motion.div>
						<div className='text-right'>
							<motion.div
								className={`${isCompact ? 'text-lg' : 'text-2xl'} font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent`}
							>
								{skill.level}%
							</motion.div>
							{skill.isFeatured && (
								<motion.div
									className='inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mt-1'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: index * 0.05 + 0.2 }}
								>
									<Star className='w-3 h-3 text-yellow-500 mr-1' />
									<span className='text-xs text-yellow-600 dark:text-yellow-400 font-medium'>
										Featured
									</span>
								</motion.div>
							)}
						</div>
					</div>

					{/* Content */}
					<div className='space-y-3'>
						<h3
							className={`${isCompact ? 'text-base' : 'text-lg'} font-bold text-gray-900 dark:text-white`}
						>
							{skill.name}
						</h3>
						<p
							className={`${isCompact ? 'text-xs' : 'text-sm'} text-gray-600 dark:text-gray-400 leading-relaxed`}
						>
							{skill.description}
						</p>

						{/* Category tag */}
						<span
							className={`inline-block px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 ${
								isCompact ? 'text-xs' : 'text-xs'
							} text-gray-600 dark:text-gray-400 font-medium`}
						>
							{skill.category}
						</span>

						{/* Progress bar */}
						<div
							className={`h-${isCompact ? '1' : '1.5'} bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}
						>
							<motion.div
								className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
								initial={{ width: 0 }}
								animate={{ width: `${skill.level}%` }}
								transition={{
									delay: index * 0.05 + 0.3,
									duration: 0.8,
									ease: 'easeOut',
								}}
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
);

const RadarChart = React.memo(({ skills }) => {
	const chartSize = 300;
	const centerX = chartSize / 2;
	const centerY = chartSize / 2;
	const maxRadius = centerX - 60;

	const displaySkills = skills.slice(0, 6); // Show first 6 for radar

	const points = displaySkills.map((skill, index) => {
		const angle = (index * 2 * Math.PI) / displaySkills.length - Math.PI / 2;
		const radius = (skill.level / 100) * maxRadius;
		const x = centerX + radius * Math.cos(angle);
		const y = centerY + radius * Math.sin(angle);
		return { x, y, angle, radius, skill };
	});

	return (
		<div className='flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto'>
			<div className='relative'>
				<svg
					width={chartSize}
					height={chartSize}
					className='overflow-visible'
				>
					{/* Grid circles */}
					{[20, 40, 60, 80, 100].map((percentage) => (
						<circle
							key={percentage}
							cx={centerX}
							cy={centerY}
							r={(percentage / 100) * maxRadius}
							fill='none'
							stroke='rgba(148, 163, 184, 0.2)'
							strokeWidth='1'
						/>
					))}

					{/* Grid lines */}
					{points.map((point, index) => (
						<line
							key={index}
							x1={centerX}
							y1={centerY}
							x2={centerX + maxRadius * Math.cos(point.angle)}
							y2={centerY + maxRadius * Math.sin(point.angle)}
							stroke='rgba(148, 163, 184, 0.1)'
							strokeWidth='1'
						/>
					))}

					{/* Skill area */}
					<motion.polygon
						points={points.map((p) => `${p.x},${p.y}`).join(' ')}
						fill='rgba(59, 130, 246, 0.1)'
						stroke='rgba(59, 130, 246, 0.6)'
						strokeWidth='2'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.5, duration: 1.5 }}
					/>

					{/* Skill points */}
					{points.map((point, index) => (
						<motion.g key={point.skill.id}>
							<motion.circle
								cx={point.x}
								cy={point.y}
								r='6'
								className='fill-blue-500'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.8 + index * 0.1 }}
							/>
							<motion.circle
								cx={point.x}
								cy={point.y}
								r='12'
								fill='rgba(59, 130, 246, 0.2)'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.8 + index * 0.1 }}
							/>
						</motion.g>
					))}

					{/* Labels */}
					{points.map((point, index) => {
						const labelRadius = maxRadius + 20;
						const labelX = centerX + labelRadius * Math.cos(point.angle);
						const labelY = centerY + labelRadius * Math.sin(point.angle);

						return (
							<motion.g
								key={`label-${point.skill.id}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 + index * 0.1 }}
							>
								<text
									x={labelX}
									y={labelY}
									textAnchor='middle'
									dominantBaseline='middle'
									className='text-sm font-semibold fill-gray-700 dark:fill-gray-300'
								>
									{point.skill.name}
								</text>
								<text
									x={labelX}
									y={labelY + 16}
									textAnchor='middle'
									dominantBaseline='middle'
									className='text-xs font-bold fill-blue-600 dark:fill-blue-400'
								>
									{point.skill.level}%
								</text>
							</motion.g>
						);
					})}
				</svg>
			</div>

			{/* Legend */}
			<div className='space-y-4 lg:max-w-xs'>
				<h4 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
					Top Skills Overview
				</h4>
				{displaySkills.map((skill, index) => (
					<motion.div
						key={skill.id}
						className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.2 + index * 0.1 }}
					>
						<div
							className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}
						/>
						<div className='flex-1'>
							<div className='font-semibold text-gray-900 dark:text-white text-sm'>
								{skill.name}
							</div>
							<div className='text-xs text-gray-600 dark:text-gray-400'>
								{skill.level}% • {skill.category}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
});

const SkillsSection = () => {
	const [viewMode, setViewMode] = useState('featured');
	const [hoveredSkill, setHoveredSkill] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [showAllSkills, setShowAllSkills] = useState(false);

	const handleSkillHover = useCallback((skillId) => {
		setHoveredSkill(skillId);
	}, []);

	const handleSkillLeave = useCallback(() => {
		setHoveredSkill(null);
	}, []);

	const filteredSkills = useMemo(() => {
		const skills = viewMode === 'featured' ? FEATURED_SKILLS : ALL_SKILLS;
		if (selectedCategory === 'All') return skills;
		return skills.filter((skill) => skill.category === selectedCategory);
	}, [viewMode, selectedCategory]);

	const displayedSkills = useMemo(() => {
		if (viewMode === 'featured') return FEATURED_SKILLS;
		if (viewMode === 'radar') return FEATURED_SKILLS; // Always use featured for radar
		return showAllSkills ? filteredSkills : filteredSkills.slice(0, 8);
	}, [viewMode, filteredSkills, showAllSkills]);

	const hasMoreSkills = useMemo(() => {
		return viewMode === 'all' && filteredSkills.length > 8 && !showAllSkills;
	}, [viewMode, filteredSkills.length, showAllSkills]);

	return (
		<section className='relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden'>
			{/* Background effects */}
			<div className='absolute inset-0'>
				<motion.div
					className='absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{ duration: 8, repeat: Infinity }}
				/>
				<motion.div
					className='absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-3xl'
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.2, 0.4],
					}}
					transition={{ duration: 10, repeat: Infinity, delay: 2 }}
				/>
			</div>

			<div className='relative max-w-7xl mx-auto'>
				{/* Header */}
				<motion.div
					className='text-center mb-12'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20'
						whileHover={{ scale: 1.05 }}
					>
						<Sparkles className='w-4 h-4 text-blue-500' />
						<span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
							Technical Skills
						</span>
					</motion.div>

					<h2 className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent'>
						What I Work With
					</h2>

					<motion.div
						className='w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full'
						initial={{ width: 0 }}
						whileInView={{ width: 96 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						viewport={{ once: true }}
					/>
				</motion.div>

				{/* Stats */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto'>
					{STATS.map((stat, index) => (
						<motion.div
							key={stat.label}
							className='text-center p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20'
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							viewport={{ once: true }}
							whileHover={{ y: -2, scale: 1.02 }}
						>
							<motion.div
								className='w-8 h-8 mx-auto mb-2 text-blue-500'
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.6 }}
							>
								<stat.icon className='w-full h-full' />
							</motion.div>
							<div className='text-xl font-bold text-gray-900 dark:text-white'>
								{stat.value}
							</div>
							<div className='text-xs text-gray-600 dark:text-gray-400'>
								{stat.label}
							</div>
						</motion.div>
					))}
				</div>

				{/* View toggles */}
				<div className='flex justify-center mb-8'>
					<div className='flex bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-1 border border-white/20'>
						{VIEW_MODES.map((mode) => (
							<motion.button
								key={mode.id}
								onClick={() => {
									setViewMode(mode.id);
									setShowAllSkills(false);
									setSelectedCategory('All');
								}}
								className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
									viewMode === mode.id
										? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
										: 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
								}`}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<mode.icon className='w-4 h-4' />
								<span className='text-sm'>{mode.label}</span>
								{mode.desc && (
									<span className='text-xs opacity-75 hidden sm:inline'>
										• {mode.desc}
									</span>
								)}
							</motion.button>
						))}
					</div>
				</div>

				{/* Category filters - only show for 'all' view */}
				<AnimatePresence>
					{viewMode === 'all' && (
						<motion.div
							className='flex flex-wrap justify-center gap-2 mb-8'
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
						>
							{['All', ...CATEGORIES].map((category) => (
								<motion.button
									key={category}
									onClick={() => {
										setSelectedCategory(category);
										setShowAllSkills(false);
									}}
									className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
										selectedCategory === category
											? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
											: 'bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-800/80'
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Filter className='w-3 h-3 inline mr-1' />
									{category}
								</motion.button>
							))}
						</motion.div>
					)}
				</AnimatePresence>

				{/* Content */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={`${viewMode}-${selectedCategory}-${showAllSkills}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						{viewMode === 'radar' ? (
							<RadarChart skills={FEATURED_SKILLS} />
						) : (
							<>
								<div
									className={`grid ${
										viewMode === 'featured'
											? 'sm:grid-cols-2 lg:grid-cols-3'
											: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
									} gap-6 max-w-6xl mx-auto`}
								>
									{displayedSkills.map((skill, index) => (
										<SkillCard
											key={skill.id}
											skill={skill}
											index={index}
											isHovered={hoveredSkill === skill.id}
											onHover={handleSkillHover}
											onLeave={handleSkillLeave}
											isCompact={viewMode === 'all'}
										/>
									))}
								</div>

								{/* Show More Button */}
								{hasMoreSkills && (
									<motion.div
										className='text-center mt-8'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.5 }}
									>
										<motion.button
											onClick={() => setShowAllSkills(true)}
											className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all'
											whileHover={{ scale: 1.05, y: -2 }}
											whileTap={{ scale: 0.95 }}
										>
											<Plus className='w-4 h-4' />
											<span>Show {filteredSkills.length - 8} More Skills</span>
										</motion.button>
									</motion.div>
								)}
							</>
						)}
					</motion.div>
				</AnimatePresence>

				{/* Call to action */}
				<motion.div
					className='text-center mt-16 max-w-2xl mx-auto'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className='p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-white/20'>
						<h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
							Ready to build something amazing?
						</h3>
						<p className='text-gray-600 dark:text-gray-400 mb-6'>
							Let's collaborate and bring your ideas to life with these
							technologies.
						</p>
						<motion.div
							className='inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold'
							whileHover={{ x: 5 }}
						>
							<span>Let's connect</span>
							<ArrowRight className='w-4 h-4' />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
