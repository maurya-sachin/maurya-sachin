import React from 'react';
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
			category: 'Web App',
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
			category: 'Web App',
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
			category: 'WordPress',
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
		},
	];

	const categories = ['All', 'Web App', 'WordPress', 'Dashboard', 'E-commerce'];
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
			id='projects'
			className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-gray-900'
		>
			{/* Background decoration */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute rounded-full bg-purple-500/5 dark:bg-purple-400/5'
						style={{
							width: `${200 + i * 100}px`,
							height: `${200 + i * 100}px`,
							left: `${10 + i * 30}%`,
							top: `${20 + i * 20}%`,
						}}
						animate={{
							y: [0, -20, 0],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 8 + i * 2,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: i * 2,
						}}
					/>
				))}
			</div>

			<div className='max-w-7xl mx-auto relative z-10'>
				{/* Section Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 dark:border-blue-600/30'
						whileHover={{ scale: 1.05 }}
					>
						<Sparkles className='w-4 h-4 text-blue-500' />
						<span className='text-blue-600 dark:text-blue-400 font-medium'>
							Portfolio Showcase
						</span>
						<Code className='w-4 h-4 text-purple-500' />
					</motion.div>

					<motion.h2
						className='text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
						whileHover={{ scale: 1.02 }}
					>
						Featured Projects
					</motion.h2>
					<motion.div
						className='w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8'
						initial={{ width: 0 }}
						whileInView={{ width: 128 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>
					<motion.p
						className='text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300'
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

				{/* Stats */}
				<motion.div
					className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className='text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05, y: -3 }}
						>
							<motion.div
								className={`w-10 h-10 mx-auto mb-2 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
								whileHover={{ rotate: 180 }}
								transition={{ duration: 0.3 }}
							>
								<stat.icon className='w-5 h-5 text-white' />
							</motion.div>
							<motion.div
								className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
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
							<div className='text-xs text-gray-600 dark:text-gray-400'>
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Featured Projects Showcase */}
				<motion.div
					className='mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className='grid lg:grid-cols-3 gap-8'>
						{featuredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className='group relative rounded-2xl border overflow-hidden cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
								viewport={{ once: true }}
								whileHover={{ y: -8, scale: 1.02 }}
								onClick={() => setSelectedProject(project)}
							>
								{/* Hover gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
								/>

								{/* Project Image */}
								<div className='relative overflow-hidden h-48'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
									/>

									{/* Overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

									{/* Status Badge */}
									<div className='absolute top-4 left-4'>
										<span
											className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
										>
											{project.status}
										</span>
									</div>

									{/* Project Icon */}
									<div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<div className='w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center'>
											<project.icon className='w-5 h-5 text-white' />
										</div>
									</div>

									{/* View Button */}
									<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
											<Eye className='w-6 h-6 text-white' />
										</div>
									</div>
								</div>

								{/* Content */}
								<div className='p-6 relative z-10'>
									<div className='flex items-center justify-between mb-3'>
										<h3 className='text-xl font-bold text-gray-900 dark:text-white'>
											{project.title}
										</h3>
										<div className='flex space-x-2'>
											{project.github && (
												<motion.a
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'
													className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1 }}
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
													className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
												>
													<ExternalLink className='w-4 h-4' />
												</motion.a>
											)}
										</div>
									</div>

									<p className='leading-relaxed mb-4 text-sm text-gray-600 dark:text-gray-300'>
										{project.description}
									</p>

									{/* Highlights */}
									<div className='grid grid-cols-3 gap-2 mb-4'>
										{project.highlights.slice(0, 3).map((highlight, i) => (
											<div
												key={i}
												className='text-center'
											>
												<div className='text-xs font-bold text-blue-500'>
													{highlight.split(' ')[0]}
												</div>
												<div className='text-xs text-gray-500 dark:text-gray-400'>
													{highlight.split(' ').slice(1).join(' ')}
												</div>
											</div>
										))}
									</div>

									{/* Tech Stack */}
									<div className='flex flex-wrap gap-2'>
										{project.tech.slice(0, 3).map((tech) => (
											<motion.span
												key={tech}
												className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-md text-xs font-medium'
												whileHover={{ scale: 1.05 }}
											>
												{tech}
											</motion.span>
										))}
										{project.tech.length > 3 && (
											<span className='px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'>
												+{project.tech.length - 3}
											</span>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Category Filter */}
				<motion.div
					className='flex flex-wrap justify-center gap-4 mb-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
				>
					{categories.map((category) => (
						<motion.button
							key={category}
							onClick={() => setActiveProjectCategory(category)}
							className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
								activeProjectCategory === category
									? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
									: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
							}`}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<Filter className='w-4 h-4' />
							<span>{category}</span>
						</motion.button>
					))}
				</motion.div>

				{/* All Projects Grid */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeProjectCategory}
						className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, staggerChildren: 0.1 }}
					>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								className='rounded-xl border overflow-hidden cursor-pointer transition-all duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								whileHover={{ y: -4 }}
								onClick={() => setSelectedProject(project)}
							>
								<div className='p-6'>
									<div className='flex items-center justify-between mb-3'>
										<div className='flex items-center space-x-3'>
											<project.icon className='w-5 h-5 text-blue-500' />
											<h4 className='font-semibold text-lg text-gray-900 dark:text-white'>
												{project.title}
											</h4>
										</div>
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
										>
											{project.status}
										</span>
									</div>

									<p className='text-sm mb-4 text-gray-600 dark:text-gray-300'>
										{project.description.slice(0, 100)}...
									</p>

									<div className='flex flex-wrap gap-1 mb-4'>
										{project.tech.slice(0, 4).map((tech) => (
											<span
												key={tech}
												className='px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
											>
												{tech}
											</span>
										))}
									</div>

									<div className='flex items-center justify-between'>
										<div className='flex space-x-2'>
											{project.github && (
												<Github className='w-4 h-4 text-gray-400' />
											)}
											{project.live && (
												<ExternalLink className='w-4 h-4 text-gray-400' />
											)}
										</div>
										<span className='text-xs text-gray-500 dark:text-gray-400'>
											{project.year}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* CTA */}
				<motion.div
					className='text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.p
						className='text-xl mb-6 text-gray-700 dark:text-gray-300'
						whileHover={{ scale: 1.02 }}
					>
						Impressed by these projects? Let's create something amazing
						together!
					</motion.p>
					<motion.div
						className='flex items-center justify-center space-x-3'
						whileHover={{ scale: 1.05 }}
					>
						<Target className='w-6 h-6 text-blue-500' />
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-xl'>
							Ready to build the next big thing?
						</span>
						<Sparkles className='w-6 h-6 text-yellow-500' />
					</motion.div>
				</motion.div>
			</div>

			{/* Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedProject(null)}
					>
						<motion.div
							className='max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()}
						>
							<div className='p-8'>
								{/* Modal Header */}
								<div className='flex items-start justify-between mb-6'>
									<div className='flex items-center space-x-3'>
										<selectedProject.icon className='w-8 h-8 text-blue-500' />
										<div>
											<h3 className='text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
												{selectedProject.title}
											</h3>
											<p className='text-gray-600 dark:text-gray-400'>
												{selectedProject.category} • {selectedProject.year}
											</p>
										</div>
									</div>
									<button
										onClick={() => setSelectedProject(null)}
										className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
									>
										<X className='w-6 h-6' />
									</button>
								</div>

								{/* Modal Content */}
								<div className='space-y-6'>
									<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
										{selectedProject.longDescription}
									</p>

									{/* Features */}
									<div>
										<h4 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
											<Star className='w-5 h-5 mr-2 text-yellow-500' />
											Key Features
										</h4>
										<div className='grid md:grid-cols-2 gap-3'>
											{selectedProject.features.map((feature, index) => (
												<div
													key={index}
													className='flex items-center space-x-2'
												>
													<CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
													<span className='text-gray-700 dark:text-gray-300'>
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>

									{/* Metrics */}
									<div>
										<h4 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
											<TrendingUp className='w-5 h-5 mr-2 text-green-500' />
											Project Metrics
										</h4>
										<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
											{Object.entries(selectedProject.metrics).map(
												([key, value]) => (
													<div
														key={key}
														className='text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800'
													>
														<div className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
															{value}
														</div>
														<div className='text-sm text-gray-600 dark:text-gray-400 capitalize'>
															{key}
														</div>
													</div>
												)
											)}
										</div>
									</div>

									{/* Tech Stack */}
									<div>
										<h4 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center'>
											<Code className='w-5 h-5 mr-2 text-blue-500' />
											Technology Stack
										</h4>
										<div className='flex flex-wrap gap-3'>
											{selectedProject.tech.map((tech) => (
												<span
													key={tech}
													className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium'
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Action Buttons */}
									<div className='flex space-x-4 pt-4'>
										{selectedProject.live && (
											<a
												href={selectedProject.live}
												target='_blank'
												rel='noopener noreferrer'
												className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow'
											>
												<Globe className='w-5 h-5' />
												<span>View Live</span>
											</a>
										)}
										{selectedProject.github && (
											<a
												href={selectedProject.github}
												target='_blank'
												rel='noopener noreferrer'
												className='flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors'
											>
												<Github className='w-5 h-5' />
												<span>View Code</span>
											</a>
										)}
									</div>
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
