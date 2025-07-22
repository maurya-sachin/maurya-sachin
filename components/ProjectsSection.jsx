import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Github,
	ExternalLink,
	Globe,
	Star,
	Eye,
	Filter,
	X,
	Code,
	Zap,
	Users,
	Calendar,
	Award,
	Target,
	Sparkles,
	TrendingUp,
	Shield,
	Gauge,
	Brain,
	ShoppingCart,
	Layout,
	Briefcase,
	CheckCircle,
	ChevronRight,
	Play,
	Layers,
	Smartphone,
	Monitor,
	Server,
	Database,
} from 'lucide-react';
import useStore from '../store/useStore';

const ProjectsSection = () => {
	const {
		activeProjectCategory,
		setActiveProjectCategory,
		selectedProject,
		setSelectedProject,
	} = useStore();

	const generateProjectImage = (title, gradient) => {
		const colors = gradient.includes('violet')
			? ['#8B5CF6', '#3B82F6']
			: gradient.includes('emerald')
				? ['#10B981', '#06B6D4']
				: gradient.includes('orange')
					? ['#F97316', '#EF4444']
					: gradient.includes('green')
						? ['#22C55E', '#059669']
						: ['#3B82F6', '#8B5CF6'];

		return `data:image/svg+xml;base64,${btoa(`
      <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#grad)"/>
        <text x="300" y="180" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold">${title}</text>
        <text x="300" y="220" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle">Professional Project</text>
      </svg>
    `)}`;
	};

	const projects = [
		{
			id: 1,
			title: 'GENAI Document Analyzer',
			description:
				'AI-powered document processing platform with smart search and summarization features for enterprise clients.',
			longDescription:
				'A comprehensive AI-powered document analyzer designed for enterprise use. Features intelligent document processing, smart search capabilities, real-time summarization, and advanced analytics. Built with modern React architecture and integrated with Python backend APIs for AI processing. Achieved 98% response accuracy and maintains 95+ Lighthouse performance scores.',
			tech: [
				'React.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'Axios',
				'REST APIs',
				'Python Backend',
				'AI Integration',
				'TypeScript',
			],
			category: 'Web App',
			status: 'Ongoing',
			metrics: {
				accuracy: '98%',
				lighthouse: '95+',
				users: '500+',
				uptime: '99.9%',
			},
			gradient: 'from-violet-600 via-purple-600 to-blue-600',
			features: [
				'AI-Powered Analysis',
				'Smart Search & Summarization',
				'Real-time Processing',
				'Enterprise Security',
				'Advanced Analytics',
				'Document Vault System',
			],
			github: 'https://github.com/maurya-sachin/genai-analyzer',
			live: 'https://genai-analyzer.vercel.app',
			image: generateProjectImage('GENAI Document Analyzer', 'violet'),
			featured: true,
			year: '2024',
			highlights: ['98% Accuracy', '500+ Users', 'Enterprise Grade'],
			icon: Brain,
			complexity: 'Complex',
		},
		{
			id: 2,
			title: 'Kreate Technologies Website',
			description:
				'SEO-optimized corporate website with smooth animations, modular sections and high conversion rates.',
			longDescription:
				'Modern corporate website built with Next.js featuring advanced SEO optimization, smooth animations, modular component architecture, and dynamic routing. Implemented skeleton loading states, error boundaries, and proxy API integration using React Query. Resulted in 45% increase in site conversion rates and consistent 95+ performance scores.',
			tech: [
				'Next.js',
				'React Query',
				'Lighthouse Optimization',
				'Bootstrap',
				'GSAP',
				'SEO Optimization',
				'SSR',
				'TypeScript',
			],
			category: 'Web App',
			status: 'Live',
			metrics: {
				lighthouse: '95+',
				conversion: '+45%',
				loadTime: '0.8s',
				seo: '97+',
			},
			gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
			features: [
				'SEO Optimized',
				'Smooth Animations',
				'Modular Architecture',
				'Dynamic Routing',
				'Error Boundaries',
				'Performance First',
			],
			github: 'https://github.com/maurya-sachin/kreate-website',
			live: 'https://kreatetechnologies.com',
			image: generateProjectImage('Kreate Technologies', 'emerald'),
			featured: true,
			year: '2024',
			highlights: ['95+ Lighthouse', '+45% Conversion', '0.8s Load Time'],
			icon: Globe,
			complexity: 'Intermediate',
		},
		{
			id: 3,
			title: 'Interactive Kanban Board',
			description:
				'Real-time Kanban task board with drag-and-drop functionality and flexible state management.',
			longDescription:
				'A feature-rich task management application with intuitive drag-and-drop interface built using React DND. Features real-time task tracking, flexible state management with Zustand and Redux Toolkit, local persistence, and enhanced responsiveness for daily productivity tracking. Perfect for agile teams and personal project management.',
			tech: [
				'React.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'React DND',
				'TypeScript',
				'Zustand',
				'Local Storage',
				'Responsive Design',
			],
			category: 'Web App',
			status: 'Demo',
			metrics: {
				tasks: '2000+',
				teams: '25+',
				efficiency: '+40%',
				satisfaction: '95%',
			},
			gradient: 'from-orange-500 via-red-500 to-pink-500',
			features: [
				'Drag & Drop Interface',
				'Real-time Updates',
				'State Management',
				'Local Persistence',
				'Task Categories',
				'Responsive Design',
			],
			github: 'https://github.com/maurya-sachin/kanban-board',
			live: 'https://kanban-sachin.vercel.app',
			image: generateProjectImage('Interactive Kanban', 'orange'),
			featured: true,
			year: '2025',
			highlights: ['2000+ Tasks', '25+ Teams', '+40% Efficiency'],
			icon: Layout,
			complexity: 'Intermediate',
		},
		{
			id: 4,
			title: 'Kreate Energy Platform',
			description:
				'Dynamic internal platform with GraphQL integration and optimized build delivery for energy sector.',
			longDescription:
				'A comprehensive internal platform built for the energy sector using Next.js and GraphQL. Features advanced filtering capabilities, custom ESLint and Prettier setup for code consistency, optimized build processes, and streamlined client-side data management. Designed to handle complex energy data and provide intuitive user interfaces for internal teams.',
			tech: [
				'Next.js',
				'GraphQL',
				'ESLint',
				'Prettier',
				'TypeScript',
				'React Query',
				'Custom Hooks',
				'Performance Optimization',
			],
			category: 'Dashboard',
			status: 'Live',
			metrics: {
				performance: '92+',
				codeQuality: 'A+',
				buildTime: '30%↓',
				efficiency: '85%',
			},
			gradient: 'from-green-500 via-emerald-500 to-teal-600',
			features: [
				'GraphQL Integration',
				'Advanced Filtering',
				'Code Quality Tools',
				'Optimized Builds',
				'Custom Components',
				'Data Management',
			],
			github: 'https://github.com/maurya-sachin/kreate-energy',
			image: generateProjectImage('Kreate Energy', 'green'),
			featured: false,
			year: '2024',
			highlights: ['GraphQL API', 'A+ Code Quality', '30% Faster Builds'],
			icon: Zap,
			complexity: 'Complex',
		},
		{
			id: 5,
			title: 'Government Portal Dashboard',
			description:
				'WCAG 2.1 AA compliant government portal with accessibility-first design and real-time data visualization.',
			longDescription:
				'A comprehensive government portal built with accessibility as the primary focus. Features WCAG 2.1 AA compliance, real-time data visualizations, responsive design, and optimized performance for government users. Includes advanced form handling, document management, and citizen services integration with robust security measures.',
			tech: [
				'React.js',
				'Next.js',
				'Accessibility (WCAG 2.1 AA)',
				'Chart.js',
				'Bootstrap',
				'Form Validation',
				'Security Integration',
				'Performance Optimization',
			],
			category: 'Dashboard',
			status: 'Live',
			metrics: {
				accessibility: 'AA',
				users: '10K+',
				compliance: '100%',
				performance: '90+',
			},
			gradient: 'from-blue-600 via-indigo-600 to-purple-600',
			features: [
				'WCAG 2.1 AA Compliant',
				'Real-time Dashboards',
				'Data Visualizations',
				'Form Management',
				'Security Features',
				'Mobile Responsive',
			],
			image: generateProjectImage('Government Portal', 'blue'),
			featured: false,
			year: '2023',
			highlights: ['WCAG AA Compliant', '10K+ Users', '100% Compliance'],
			icon: Shield,
			complexity: 'Complex',
		},
		{
			id: 6,
			title: 'WordPress E-commerce Solutions',
			description:
				'Custom WordPress sites with WooCommerce integration, performance optimization and SEO enhancements.',
			longDescription:
				'A collection of custom WordPress websites and e-commerce solutions built during internship at Digidex Labs. Features custom theme development, WooCommerce integration, performance optimization, SEO enhancements, and responsive design. Delivered 5+ client projects with improved load times and enhanced user experience.',
			tech: [
				'WordPress',
				'PHP',
				'MySQL',
				'JavaScript',
				'CSS3',
				'WooCommerce',
				'SEO Optimization',
				'Performance Tuning',
			],
			category: 'E-commerce',
			status: 'Live',
			metrics: {
				sites: '5+',
				performance: '+40%',
				seo: '90+',
				satisfaction: '100%',
			},
			gradient: 'from-indigo-500 via-purple-500 to-pink-500',
			features: [
				'Custom Themes',
				'WooCommerce Integration',
				'Performance Optimization',
				'SEO Enhancement',
				'Responsive Design',
				'Client Delivery',
			],
			image: generateProjectImage('WordPress Solutions', 'indigo'),
			featured: false,
			year: '2023',
			highlights: [
				'5+ Sites Delivered',
				'+40% Performance',
				'100% Client Satisfaction',
			],
			icon: ShoppingCart,
			complexity: 'Simple',
		},
	];

	const categories = ['All', 'Web App', 'Dashboard', 'E-commerce'];
	const filteredProjects =
		activeProjectCategory === 'All'
			? projects
			: projects.filter(
					(project) => project.category === activeProjectCategory
				);
	const featuredProjects = projects.filter((project) => project.featured);

	const getStatusColor = (status) => {
		const colors = {
			Live: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
			Demo: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
			Ongoing:
				'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200',
		};
		return (
			colors[status] ||
			'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'
		);
	};

	const getComplexityIcon = (complexity) => {
		const icons = {
			Simple: Layers,
			Intermediate: Server,
			Complex: Database,
		};
		return icons[complexity] || Layers;
	};

	const getComplexityColor = (complexity) => {
		const colors = {
			Simple: 'from-green-400 to-emerald-500',
			Intermediate: 'from-yellow-400 to-orange-500',
			Complex: 'from-red-400 to-pink-500',
		};
		return colors[complexity] || 'from-gray-400 to-gray-500';
	};

	const stats = [
		{
			label: 'Projects',
			value: projects.length.toString(),
			icon: Briefcase,
			color: 'from-blue-500 to-cyan-400',
		},
		{
			label: 'Technologies',
			value: '15+',
			icon: Code,
			color: 'from-green-500 to-emerald-400',
		},
		{
			label: 'Avg Performance',
			value: '95+',
			icon: Gauge,
			color: 'from-purple-500 to-pink-400',
		},
		{
			label: 'Client Satisfaction',
			value: '100%',
			icon: Award,
			color: 'from-yellow-500 to-orange-400',
		},
	];

	return (
		<section
			className='relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden'
			id='projects'
		>
			{/* Enhanced Background decoration */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{/* Large floating orbs */}
				{[...Array(4)].map((_, i) => (
					<motion.div
						key={`orb-${i}`}
						className='absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl'
						style={{
							width: `${300 + i * 100}px`,
							height: `${300 + i * 100}px`,
							left: `${-10 + i * 30}%`,
							top: `${10 + i * 25}%`,
						}}
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 180, 360],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 20 + i * 5,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: i * 3,
						}}
					/>
				))}

				{/* Floating geometric shapes */}
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={`shape-${i}`}
						className={`absolute ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-lg'} ${i % 2 === 0 ? 'bg-blue-400/10' : 'bg-purple-400/10'}`}
						style={{
							width: `${20 + Math.random() * 40}px`,
							height: `${20 + Math.random() * 40}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -50, 0],
							x: [0, Math.random() * 50 - 25, 0],
							rotate: [0, 360],
							opacity: [0.2, 0.5, 0.2],
						}}
						transition={{
							duration: 15 + Math.random() * 10,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: Math.random() * 10,
						}}
					/>
				))}

				{/* Code symbols */}
				{['</>', '{}', '[]', '()', '<>', '||', '&&', '=>'].map((symbol, i) => (
					<motion.div
						key={`code-${i}`}
						className='absolute text-3xl font-bold text-blue-300/20 dark:text-blue-600/20'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.1, 0.3, 0.1],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 12 + Math.random() * 8,
							repeat: Infinity,
							delay: Math.random() * 5,
						}}
					>
						{symbol}
					</motion.div>
				))}
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Enhanced Section Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 shadow-lg'
						whileHover={{ scale: 1.05, y: -2 }}
					>
						<Sparkles className='w-5 h-5 text-purple-500' />
						<span className='text-gray-700 dark:text-gray-300 font-semibold'>
							Portfolio Showcase
						</span>
						<Code className='w-5 h-5 text-blue-500' />
					</motion.div>

					<motion.h2
						className='text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent'
						whileHover={{ scale: 1.02 }}
					>
						Featured Projects
					</motion.h2>

					<motion.div
						className='w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full'
						initial={{ width: 0 }}
						whileInView={{ width: 128 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>

					<motion.p
						className='text-lg lg:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
					>
						Showcasing real-world applications built with modern technologies,
						focusing on performance, accessibility, and exceptional user
						experiences
					</motion.p>
				</motion.div>

				{/* Enhanced Stats */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16'>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className='group relative'
							initial={{ opacity: 0, y: 30, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.05 }}
						>
							<div className='relative h-full text-center p-4 lg:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-500'>
								{/* Gradient overlay */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
								/>

								<div className='relative z-10'>
									<motion.div
										className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
										whileHover={{ rotate: 360, scale: 1.1 }}
										transition={{ duration: 0.6 }}
									>
										<stat.icon className='w-6 h-6 lg:w-8 lg:h-8 text-white' />
									</motion.div>

									<motion.div
										className='text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2'
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

									<div className='text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium'>
										{stat.label}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Enhanced Featured Projects Showcase */}
				<motion.div
					className='mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div className='text-center mb-12'>
						<h3 className='text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
							Featured Projects
						</h3>
						<p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
							Highlighted projects showcasing advanced development skills and
							innovative solutions
						</p>
					</motion.div>

					<div className='grid lg:grid-cols-3 gap-8'>
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className='group relative h-full rounded-2xl overflow-hidden cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500'
								initial={{ opacity: 0, y: 30, rotateX: 10 }}
								whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								viewport={{ once: true }}
								whileHover={{
									y: -12,
									scale: 1.02,
									rotateX: -2,
									rotateY: 2,
								}}
								onClick={() => setSelectedProject(project)}
							>
								{/* Enhanced hover gradient */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
								/>

								{/* Floating particles on hover */}
								<AnimatePresence>
									<motion.div className='absolute inset-0 overflow-hidden pointer-events-none'>
										{[...Array(5)].map((_, i) => (
											<motion.div
												key={i}
												className={`absolute w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
												initial={{
													x: Math.random() * 300,
													y: Math.random() * 200,
													opacity: 0,
												}}
												animate={{
													y: -50,
													opacity: [0, 1, 0],
													scale: [0, 2, 0],
												}}
												transition={{
													duration: 3,
													repeat: Infinity,
													delay: i * 0.5,
												}}
											/>
										))}
									</motion.div>
								</AnimatePresence>

								{/* Project Image */}
								<div className='relative overflow-hidden h-48 lg:h-56'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
									/>

									{/* Enhanced overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

									{/* Status Badge */}
									<motion.div
										className='absolute top-4 left-4'
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ delay: index * 0.2 + 0.3 }}
									>
										<span
											className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${getStatusColor(project.status)}`}
										>
											{project.status}
										</span>
									</motion.div>

									{/* Complexity Badge */}
									<motion.div
										className='absolute top-4 right-4'
										initial={{ scale: 0, rotate: -90 }}
										animate={{ scale: 1, rotate: 0 }}
										transition={{ delay: index * 0.2 + 0.5 }}
									>
										<div
											className={`flex items-center space-x-1 px-2 py-1 rounded-lg bg-gradient-to-r ${getComplexityColor(project.complexity)} text-white text-xs font-medium backdrop-blur-sm`}
										>
											{React.createElement(
												getComplexityIcon(project.complexity),
												{ className: 'w-3 h-3' }
											)}
											<span>{project.complexity}</span>
										</div>
									</motion.div>

									{/* Project Icon with enhanced animation */}
									<motion.div
										className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
										whileHover={{ scale: 1.2, rotate: 180 }}
										transition={{ type: 'spring', stiffness: 300 }}
									>
										<div className='w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30'>
											<project.icon className='w-6 h-6 text-white' />
										</div>
									</motion.div>

									{/* Enhanced View Button */}
									<motion.div
										className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'
										whileHover={{ scale: 1.1 }}
										transition={{ type: 'spring', stiffness: 300 }}
									>
										<div className='w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30'>
											<Play className='w-8 h-8 text-white ml-1' />
										</div>
									</motion.div>
								</div>

								{/* Enhanced Content */}
								<div className='p-6 lg:p-8 relative z-10 flex-1 flex flex-col'>
									<div className='flex items-start justify-between mb-4'>
										<h3 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300'>
											{project.title}
										</h3>
										<div className='flex space-x-2'>
											{project.github && (
												<motion.a
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 group/btn'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1, rotate: 15 }}
													whileTap={{ scale: 0.9 }}
												>
													<Github className='w-4 h-4' />
												</motion.a>
											)}
											{project.live && (
												<motion.a
													href={project.live}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white transition-all duration-300 group/btn'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1, rotate: -15 }}
													whileTap={{ scale: 0.9 }}
												>
													<ExternalLink className='w-4 h-4' />
												</motion.a>
											)}
										</div>
									</div>

									<p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1'>
										{project.description}
									</p>

									{/* Enhanced Highlights */}
									<div className='grid grid-cols-3 gap-3 mb-6'>
										{project.highlights.slice(0, 3).map((highlight, i) => (
											<motion.div
												key={i}
												className='text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500'
												whileHover={{ y: -2, scale: 1.05 }}
											>
												<div className='text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
													{highlight.split(' ')[0]}
												</div>
												<div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
													{highlight.split(' ').slice(1).join(' ')}
												</div>
											</motion.div>
										))}
									</div>

									{/* Enhanced Tech Stack */}
									<div className='flex flex-wrap gap-2'>
										{project.tech.slice(0, 4).map((tech, techIndex) => (
											<motion.span
												key={tech}
												className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-md'
												whileHover={{ scale: 1.05, y: -2 }}
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{
													delay: index * 0.2 + techIndex * 0.1 + 0.8,
												}}
											>
												{tech}
											</motion.span>
										))}
										{project.tech.length > 4 && (
											<motion.span
												className='px-3 py-1.5 rounded-lg text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium'
												whileHover={{ scale: 1.05 }}
											>
												+{project.tech.length - 4} more
											</motion.span>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Enhanced Category Filter */}
				<motion.div
					className='flex flex-wrap justify-center gap-3 lg:gap-4 mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
				>
					{categories.map((category, index) => (
						<motion.button
							key={category}
							onClick={() => setActiveProjectCategory(category)}
							className={`group flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
								activeProjectCategory === category
									? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
									: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-white/20 hover:shadow-lg hover:scale-105'
							}`}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1 }}
						>
							<Filter
								className={`w-4 h-4 ${activeProjectCategory === category ? 'text-white' : 'text-blue-500'}`}
							/>
							<span>{category}</span>
							{activeProjectCategory === category && (
								<motion.div
									className='w-2 h-2 bg-white rounded-full'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									layoutId='activeCategory'
								/>
							)}
						</motion.button>
					))}
				</motion.div>

				{/* Enhanced All Projects Grid */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeProjectCategory}
						className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, staggerChildren: 0.1 }}
					>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className='group relative rounded-2xl overflow-hidden cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								whileHover={{ y: -8, scale: 1.02 }}
								onClick={() => setSelectedProject(project)}
							>
								{/* Gradient overlay */}
								<motion.div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
								/>

								<div className='p-6 relative z-10'>
									<div className='flex items-center justify-between mb-4'>
										<div className='flex items-center space-x-3'>
											<motion.div
												className={`p-2 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}
												whileHover={{ rotate: 360, scale: 1.1 }}
												transition={{ duration: 0.6 }}
											>
												<project.icon className='w-5 h-5 text-white' />
											</motion.div>
											<h4 className='font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300'>
												{project.title}
											</h4>
										</div>
										<div className='flex flex-col items-end space-y-2'>
											<span
												className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}
											>
												{project.status}
											</span>
											<span className='text-xs text-gray-500 dark:text-gray-400'>
												{project.year}
											</span>
										</div>
									</div>

									<p className='text-sm mb-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
										{project.description.slice(0, 120)}...
									</p>

									<div className='flex flex-wrap gap-2 mb-4'>
										{project.tech.slice(0, 3).map((tech, techIndex) => (
											<motion.span
												key={tech}
												className='px-2 py-1 rounded-lg text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 font-medium'
												whileHover={{ scale: 1.05, y: -1 }}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 + techIndex * 0.05 }}
											>
												{tech}
											</motion.span>
										))}
										{project.tech.length > 3 && (
											<span className='px-2 py-1 rounded-lg text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'>
												+{project.tech.length - 3}
											</span>
										)}
									</div>

									<div className='flex items-center justify-between'>
										<div className='flex space-x-3'>
											{project.github && (
												<motion.div
													whileHover={{ scale: 1.2, rotate: 15 }}
													transition={{ type: 'spring', stiffness: 300 }}
												>
													<Github className='w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors' />
												</motion.div>
											)}
											{project.live && (
												<motion.div
													whileHover={{ scale: 1.2, rotate: -15 }}
													transition={{ type: 'spring', stiffness: 300 }}
												>
													<ExternalLink className='w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors' />
												</motion.div>
											)}
										</div>
										<motion.div
											className='flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300'
											whileHover={{ x: 5 }}
										>
											<span className='text-sm font-medium mr-1'>View</span>
											<ChevronRight className='w-4 h-4' />
										</motion.div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Enhanced CTA */}
				<motion.div
					className='text-center mt-20 max-w-4xl mx-auto'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className='p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20 shadow-xl'>
						<motion.p
							className='text-xl lg:text-2xl mb-6 text-gray-700 dark:text-gray-300 font-semibold'
							whileHover={{ scale: 1.02 }}
						>
							Impressed by these projects? Let's create something amazing
							together!
						</motion.p>
						<motion.div
							className='flex items-center justify-center space-x-4'
							whileHover={{ scale: 1.05 }}
						>
							<motion.div
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
							>
								<Target className='w-8 h-8 text-blue-500' />
							</motion.div>
							<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-xl lg:text-2xl'>
								Ready to build the next big thing?
							</span>
							<motion.div
								animate={{ y: [0, -5, 0] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<Sparkles className='w-8 h-8 text-yellow-500' />
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>

			{/* Enhanced Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							className='max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/20 shadow-2xl'
							initial={{ opacity: 0, scale: 0.8, y: 50 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8, y: 50 }}
							transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
							onClick={(e) => e.stopPropagation()}
						>
							<div className='p-8 lg:p-12'>
								{/* Enhanced Modal Header */}
								<div className='flex items-start justify-between mb-8'>
									<div className='flex items-center space-x-4'>
										<motion.div
											className={`p-4 rounded-2xl bg-gradient-to-r ${selectedProject.gradient} shadow-xl`}
											whileHover={{ rotate: 360, scale: 1.1 }}
											transition={{ duration: 0.8 }}
										>
											<selectedProject.icon className='w-8 h-8 text-white' />
										</motion.div>
										<div>
											<h3 className='text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
												{selectedProject.title}
											</h3>
											<div className='flex items-center space-x-3'>
												<p className='text-gray-600 dark:text-gray-400'>
													{selectedProject.category} • {selectedProject.year}
												</p>
												<span
													className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedProject.status)}`}
												>
													{selectedProject.status}
												</span>
											</div>
										</div>
									</div>
									<motion.button
										onClick={() => setSelectedProject(null)}
										className='p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-all duration-300'
										whileHover={{ scale: 1.1, rotate: 90 }}
										whileTap={{ scale: 0.9 }}
									>
										<X className='w-6 h-6' />
									</motion.button>
								</div>

								{/* Enhanced Modal Content */}
								<div className='space-y-8'>
									<motion.p
										className='text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										{selectedProject.longDescription}
									</motion.p>

									{/* Enhanced Features */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
									>
										<h4 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
											<Star className='w-6 h-6 mr-3 text-yellow-500' />
											Key Features
										</h4>
										<div className='grid sm:grid-cols-2 gap-3'>
											{selectedProject.features.map((feature, index) => (
												<motion.div
													key={index}
													className='flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20'
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.4 + index * 0.1 }}
													whileHover={{ x: 5, scale: 1.02 }}
												>
													<CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
													<span className='text-gray-700 dark:text-gray-300 font-medium'>
														{feature}
													</span>
												</motion.div>
											))}
										</div>
									</motion.div>

									{/* Enhanced Metrics */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
									>
										<h4 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
											<TrendingUp className='w-6 h-6 mr-3 text-green-500' />
											Project Metrics
										</h4>
										<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
											{Object.entries(selectedProject.metrics).map(
												([key, value], index) => (
													<motion.div
														key={key}
														className='text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700'
														initial={{ opacity: 0, scale: 0.8 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ delay: 0.6 + index * 0.1 }}
														whileHover={{ scale: 1.05, y: -5 }}
													>
														<div className='text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
															{value}
														</div>
														<div className='text-sm text-gray-600 dark:text-gray-400 capitalize font-medium'>
															{key.replace(/([A-Z])/g, ' $1')}
														</div>
													</motion.div>
												)
											)}
										</div>
									</motion.div>

									{/* Enhanced Tech Stack */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.7 }}
									>
										<h4 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
											<Code className='w-6 h-6 mr-3 text-blue-500' />
											Technology Stack
										</h4>
										<div className='flex flex-wrap gap-3'>
											{selectedProject.tech.map((tech, index) => (
												<motion.span
													key={tech}
													className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg'
													initial={{ opacity: 0, scale: 0 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: 0.8 + index * 0.1 }}
													whileHover={{ scale: 1.05, y: -2 }}
												>
													{tech}
												</motion.span>
											))}
										</div>
									</motion.div>

									{/* Enhanced Action Buttons */}
									<motion.div
										className='flex space-x-4 pt-8'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.9 }}
									>
										{selectedProject.live && (
											<motion.a
												href={selectedProject.live}
												target='_blank'
												rel='noopener noreferrer'
												className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:shadow-2xl transition-all duration-300'
												whileHover={{ scale: 1.02, y: -2 }}
												whileTap={{ scale: 0.98 }}
											>
												<Globe className='w-6 h-6' />
												<span>View Live Project</span>
											</motion.a>
										)}
										{selectedProject.github && (
											<motion.a
												href={selectedProject.github}
												target='_blank'
												rel='noopener noreferrer'
												className='flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all duration-300'
												whileHover={{ scale: 1.02, y: -2 }}
												whileTap={{ scale: 0.98 }}
											>
												<Github className='w-6 h-6' />
												<span>View Source Code</span>
											</motion.a>
										)}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ProjectsSection;
