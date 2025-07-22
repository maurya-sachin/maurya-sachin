import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
	Calendar,
	ChevronDown,
	MapPin,
	Building,
	Target,
	Star,
	Code,
	ExternalLink,
	Award,
	TrendingUp,
	Sparkles,
	Zap,
	Timer,
	CheckCircle,
} from 'lucide-react';

const ExperienceSection = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [scrollProgress, setScrollProgress] = useState(0);
	const sectionRef = React.useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				setMousePosition({ x, y });
			}
		};

		const handleScroll = () => {
			const scrolled = window.scrollY;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			setScrollProgress((scrolled / maxScroll) * 100);
		};

		if (sectionRef.current) {
			sectionRef.current.addEventListener('mousemove', handleMouseMove);
		}
		window.addEventListener('scroll', handleScroll);

		return () => {
			sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const generateCompanyLogo = (companyName, type) => {
		const initial = companyName.charAt(0).toUpperCase();
		const colors =
			type === 'Full-time'
				? ['#10B981', '#059669']
				: type === 'Internship'
					? ['#3B82F6', '#1D4ED8']
					: ['#8B5CF6', '#7C3AED']; // Apprentice

		return `data:image/svg+xml;base64,${btoa(`
      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="8" fill="url(#grad)"/>
        <text x="24" y="30" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">${initial}</text>
      </svg>
    `)}`;
	};

	const experience = [
		{
			role: 'Junior UI Developer',
			company: 'Kreate Technologies Pvt Ltd',
			period: 'May 2024 - Present',
			location: 'Ghaziabad, India',
			type: 'Full-time',
			companyUrl: 'https://kreatetechnologies.com',
			achievements: [
				'Improved load time by 80% and TTI by 40% through code splitting and image optimization in Next.js',
				'Developed GraphQL middleware, reducing API latency by 20% and improving data fetching',
				'Led front-end for GENAI Document Analyzer with 98% accuracy and 95+ Lighthouse score',
				'Built reusable UI components & structured architecture using Redux Toolkit',
				'Enhanced SEO and user experience using Framer Motion animations and lazy loading strategies',
			],
			tech: [
				'React.js',
				'Next.js',
				'TypeScript',
				'GraphQL',
				'Redux Toolkit',
				'Tailwind CSS',
				'Framer Motion',
				'GSAP',
			],
			highlights: [
				'Performance Expert',
				'GraphQL Integration',
				'Component Architecture',
			],
			projects: [
				'GENAI Document Analyzer',
				'Kreate Website',
				'Performance Optimizations',
			],
			metrics: {
				'Load Time': '80%↓',
				'API Latency': '20%↓',
				Lighthouse: '95+',
				TTI: '40%↓',
			},
		},
		{
			role: 'Frontend Trainee',
			company: 'Kreate Technologies Pvt Ltd',
			period: 'Sep 2023 - Apr 2024',
			location: 'Ghaziabad, India',
			type: 'Internship',
			companyUrl: 'https://kreatetechnologies.com',
			achievements: [
				'Developed reusable React components, reducing development time by 30%',
				'Built real-time dashboards and data visualizations for internal platforms',
				'Created WCAG 2.1 AA-compliant UI for government portals',
				'Introduced Next.js to improve SEO, routing, and scalability',
				'Mentored junior developers in React.js best practices',
				'Delivered 8+ projects on schedule with quality standards',
			],
			tech: [
				'HTML5',
				'CSS3',
				'JavaScript ES6+',
				'React.js',
				'Next.js',
				'Bootstrap',
				'SCSS',
			],
			highlights: ['WCAG Compliance', 'Next.js Adoption', 'Team Mentoring'],
			projects: [
				'Government Portals',
				'Data Visualizations',
				'Internal Dashboards',
			],
			metrics: {
				'Dev Time': '30%↓',
				Accessibility: 'AA',
				Projects: '8+',
				Compliance: '100%',
			},
		},
		{
			role: 'WordPress Developer Intern',
			company: 'Digidex Labs Pvt Ltd',
			period: 'Apr 2023 - Aug 2023',
			location: 'Delhi, India (Remote)',
			type: 'Internship',
			achievements: [
				'Developed and maintained WordPress sites with plugin customization',
				'Optimized load times by compressing media and reducing DOM bloat',
				'Built custom themes and implemented responsive design patterns',
				'Created SEO-optimized content structures and meta implementations',
				'Collaborated with design team for pixel-perfect UI implementation',
				'Delivered 5+ client projects with enhanced performance metrics',
			],
			tech: [
				'WordPress',
				'PHP',
				'MySQL',
				'JavaScript',
				'CSS3',
				'jQuery',
				'WooCommerce',
			],
			highlights: [
				'WordPress Expert',
				'Performance Optimization',
				'Client Delivery',
			],
			projects: [
				'Custom WordPress Sites',
				'E-commerce Solutions',
				'Plugin Development',
			],
			metrics: {
				'Sites Built': '5+',
				'Load Time': '40%↑',
				'SEO Score': '90+',
				'Client Sat.': '100%',
			},
		},
		{
			role: 'Engineering Apprentice',
			company: 'Bharat Petroleum Corp. Ltd. (BPCL)',
			period: 'Mar 2022 - Mar 2023',
			location: 'Haridwar, Uttarakhand',
			type: 'Apprentice',
			achievements: [
				'Performed data analysis and reporting using SAP and Excel',
				'Assisted in technical documentation and optimization of refinery processes',
				'Participated in quality control testing procedures and safety audits',
				'Supported inventory management operations and digital documentation',
				'Completed 480+ hours of technical training in petroleum operations',
				'Maintained 100% safety record throughout the apprenticeship',
			],
			tech: [
				'SAP ERP',
				'Microsoft Excel',
				'AutoCAD',
				'PLC Systems',
				'SCADA',
				'Data Analysis',
			],
			highlights: [
				'Data Analysis',
				'Process Optimization',
				'Safety Excellence',
			],
			projects: [
				'Refinery Process Docs',
				'Quality Control Systems',
				'Inventory Management',
			],
			metrics: {
				Training: '480h',
				Safety: '100%',
				Processes: '10+',
				Accuracy: '99%',
			},
		},
	];

	const getTypeColor = (type) => {
		const colors = {
			'Full-time':
				'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800',
			Internship:
				'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800',
			Apprentice:
				'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800',
		};
		return (
			colors[type] ||
			'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800'
		);
	};

	return (
		<section
			id='experience'
			ref={sectionRef}
			className='relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'
		>
			<style jsx>{`
				.experience-card {
					transform: perspective(1000px) rotateX(0deg);
					transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
					animation: slideInUp 0.6s ease-out forwards;
					opacity: 0;
					transform: translateY(30px);
				}

				.experience-card.visible {
					opacity: 1;
					transform: translateY(0);
				}

				.experience-card:hover {
					transform: perspective(1000px) rotateX(2deg) translateY(-4px)
						scale(1.01);
				}

				.timeline-node {
					animation: scaleIn 0.5s ease-out forwards;
				}

				.floating-bg {
					animation: float 20s ease-in-out infinite;
				}

				.glass {
					backdrop-filter: blur(12px);
					-webkit-backdrop-filter: blur(12px);
				}

				.metric-hover:hover {
					transform: scale(1.05) translateY(-2px);
				}

				.tech-hover:hover {
					transform: scale(1.05) translateY(-2px);
					box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
				}

				@keyframes slideInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes scaleIn {
					from {
						transform: scale(0) rotate(-180deg);
					}
					to {
						transform: scale(1) rotate(0deg);
					}
				}

				@keyframes float {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					33% {
						transform: translateY(-10px) rotate(1deg);
					}
					66% {
						transform: translateY(5px) rotate(-1deg);
					}
				}

				.timeline-progress {
					height: ${scrollProgress}%;
					transition: height 0.1s ease-out;
				}
			`}</style>

			{/* Dynamic Background */}
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					className='absolute inset-0 opacity-40'
					style={{
						background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
					}}
				/>
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						className='floating-bg absolute w-2 h-2 bg-blue-400/20 rounded-full'
						style={{
							left: `${10 + i * 15}%`,
							top: `${20 + i * 12}%`,
							animationDelay: `${i * 2}s`,
							animationDuration: `${15 + i * 3}s`,
						}}
					/>
				))}
			</div>

			<div className='max-w-6xl mx-auto relative z-10'>
				{/* Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						className='inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full glass bg-white/30 dark:bg-gray-800/30 border border-white/20'
						whileHover={{ scale: 1.05 }}
					>
						<Timer className='w-4 h-4 text-blue-500' />
						<span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
							Professional Timeline
						</span>
						<Sparkles className='w-4 h-4 text-yellow-500' />
					</motion.div>

					<motion.h2
						className='text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'
						whileHover={{ scale: 1.02 }}
					>
						Professional Journey
					</motion.h2>

					<motion.div
						className='w-24 h-0.5 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
						initial={{ width: 0 }}
						whileInView={{ width: 96 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						viewport={{ once: true }}
					/>

					<motion.p
						className='text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						viewport={{ once: true }}
					>
						Building expertise through impactful contributions and continuous
						learning across diverse technology environments
					</motion.p>
				</motion.div>

				{/* Timeline */}
				<div className='relative'>
					{/* Timeline Line */}
					<div className='absolute left-6 lg:left-1/2 lg:-ml-px top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700'>
						<motion.div
							className='timeline-progress bg-gradient-to-b from-blue-500 to-purple-500 w-full'
							initial={{ height: 0 }}
							whileInView={{ height: '100%' }}
							transition={{ duration: 2, ease: 'easeOut' }}
							viewport={{ once: true }}
						/>
					</div>

					{/* Experience Items */}
					<div className='space-y-12'>
						{experience.map((exp, index) => (
							<motion.div
								key={index}
								className={`relative flex flex-col lg:flex-row lg:items-center ${
									index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
								}`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.8 }}
								viewport={{ once: true }}
							>
								{/* Timeline Node */}
								<motion.div
									className='absolute left-4 lg:left-1/2 lg:-ml-2 z-20'
									initial={{ scale: 0, rotate: -180 }}
									whileInView={{ scale: 1, rotate: 0 }}
									transition={{
										delay: index * 0.2 + 0.5,
										duration: 0.5,
										type: 'spring',
										stiffness: 200,
									}}
									viewport={{ once: true }}
								>
									<div className='timeline-node w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg'>
										<motion.div
											className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-ping opacity-25'
											animate={{
												scale: [1, 1.5, 1],
												opacity: [0.25, 0.5, 0.25],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: 'easeInOut',
											}}
										/>
									</div>
								</motion.div>

								{/* Content Card */}
								<motion.div
									className={`experience-card visible w-full lg:w-[calc(50%-2rem)] ml-12 lg:ml-0 ${
										index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
									}`}
									whileHover={{
										scale: 1.02,
										y: -5,
										transition: { duration: 0.2 },
									}}
								>
									<div className='group relative rounded-xl overflow-hidden glass bg-white/70 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700/30 shadow-lg'>
										<div className='p-6'>
											{/* Header */}
											<div className='flex items-start justify-between mb-4'>
												<div className='flex items-start space-x-3'>
													<motion.div
														className='w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-md'
														whileHover={{ scale: 1.1, rotate: 5 }}
														transition={{ duration: 0.3 }}
													>
														<img
															src={generateCompanyLogo(exp.company, exp.type)}
															alt={exp.company}
															className='w-full h-full object-cover'
														/>
													</motion.div>

													<div className='min-w-0 flex-1'>
														<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1'>
															{exp.role}
														</h3>

														<div className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-2'>
															<Building className='w-3 h-3' />
															{exp.companyUrl ? (
																<a
																	href={exp.companyUrl}
																	target='_blank'
																	rel='noopener noreferrer'
																	className='font-medium text-blue-500 hover:text-blue-600 inline-flex items-center space-x-1'
																>
																	<span>{exp.company}</span>
																	<ExternalLink className='w-2.5 h-2.5' />
																</a>
															) : (
																<span className='font-medium text-blue-500'>
																	{exp.company}
																</span>
															)}
														</div>

														<div className='flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3'>
															<div className='flex items-center space-x-1'>
																<MapPin className='w-3 h-3' />
																<span>{exp.location}</span>
															</div>
															<span>•</span>
															<div className='flex items-center space-x-1'>
																<Calendar className='w-3 h-3' />
																<span>{exp.period}</span>
															</div>
														</div>

														<motion.span
															className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${getTypeColor(exp.type)}`}
															whileHover={{ scale: 1.05 }}
														>
															{exp.type}
														</motion.span>
													</div>
												</div>
											</div>

											{/* Highlights */}
											<div className='flex flex-wrap gap-1.5 mb-4'>
												{exp.highlights.map((highlight, i) => (
													<motion.span
														key={highlight}
														className='px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-xs font-medium'
														initial={{ opacity: 0, scale: 0 }}
														whileInView={{ opacity: 1, scale: 1 }}
														transition={{ delay: i * 0.1, duration: 0.3 }}
														viewport={{ once: true }}
														whileHover={{ scale: 1.05 }}
													>
														{highlight}
													</motion.span>
												))}
											</div>

											{/* Metrics */}
											<div className='grid grid-cols-4 gap-2 mb-4'>
												{Object.entries(exp.metrics).map(([key, value], i) => (
													<motion.div
														key={key}
														className='text-center p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 metric-hover transition-transform duration-200'
														initial={{ opacity: 0, y: 20 }}
														whileInView={{ opacity: 1, y: 0 }}
														transition={{ delay: i * 0.1, duration: 0.5 }}
														viewport={{ once: true }}
													>
														<div className='text-sm font-bold text-blue-600 dark:text-blue-400'>
															{value}
														</div>
														<div className='text-xs text-gray-500 dark:text-gray-400'>
															{key}
														</div>
													</motion.div>
												))}
											</div>

											{/* Expandable Section */}
											<motion.button
												onClick={() =>
													setExpandedIndex(
														expandedIndex === index ? null : index
													)
												}
												className='w-full flex items-center justify-between p-3 rounded-lg glass bg-white/50 dark:bg-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-700/50 transition-colors group/btn'
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<span className='text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center'>
													<Sparkles className='w-4 h-4 mr-2 text-yellow-500' />
													Key Achievements & Projects
												</span>
												<motion.div
													animate={{
														rotate: expandedIndex === index ? 180 : 0,
													}}
													transition={{ duration: 0.2 }}
												>
													<ChevronDown className='w-4 h-4 text-gray-500' />
												</motion.div>
											</motion.button>

											{/* Expanded Content */}
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={
													expandedIndex === index
														? { height: 'auto', opacity: 1 }
														: { height: 0, opacity: 0 }
												}
												transition={{ duration: 0.3, ease: 'easeInOut' }}
												className='overflow-hidden'
											>
												{expandedIndex === index && (
													<div className='mt-4 space-y-4'>
														{/* Achievements */}
														<div className='space-y-2'>
															{exp.achievements.map((achievement, i) => (
																<motion.div
																	key={i}
																	className='flex items-start space-x-2 p-2 rounded-md bg-white/40 dark:bg-gray-800/30'
																	initial={{ opacity: 0, x: -20 }}
																	animate={{ opacity: 1, x: 0 }}
																	transition={{ delay: i * 0.1, duration: 0.3 }}
																>
																	<CheckCircle className='w-3 h-3 text-green-500 mt-1 flex-shrink-0' />
																	<span className='text-sm text-gray-700 dark:text-gray-300'>
																		{achievement}
																	</span>
																</motion.div>
															))}
														</div>

														{/* Projects */}
														<div>
															<h5 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center'>
																<Target className='w-3 h-3 mr-1 text-blue-500' />
																Key Projects
															</h5>
															<div className='flex flex-wrap gap-1.5'>
																{exp.projects.map((project, i) => (
																	<motion.span
																		key={project}
																		className='px-2 py-1 text-xs bg-white/60 dark:bg-gray-700/40 text-gray-600 dark:text-gray-300 rounded-md border border-white/40 dark:border-gray-600/40'
																		initial={{ opacity: 0, scale: 0 }}
																		animate={{ opacity: 1, scale: 1 }}
																		transition={{
																			delay: i * 0.1,
																			duration: 0.2,
																		}}
																		whileHover={{ scale: 1.05 }}
																	>
																		{project}
																	</motion.span>
																))}
															</div>
														</div>
													</div>
												)}
											</motion.div>

											{/* Tech Stack */}
											<div className='mt-4'>
												<h5 className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center'>
													<Code className='w-3 h-3 mr-1 text-purple-500' />
													Technologies
												</h5>
												<div className='flex flex-wrap gap-1.5'>
													{exp.tech.map((tech, i) => (
														<motion.span
															key={tech}
															className='px-2 py-1 text-xs font-medium bg-white/60 dark:bg-gray-700/40 text-gray-600 dark:text-gray-300 rounded-md border border-white/40 dark:border-gray-600/40 tech-hover transition-all duration-200'
															initial={{ opacity: 0, scale: 0 }}
															whileInView={{ opacity: 1, scale: 1 }}
															transition={{ delay: i * 0.05, duration: 0.2 }}
															viewport={{ once: true }}
														>
															{tech}
														</motion.span>
													))}
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>

				{/* CTA */}
				<motion.div
					className='text-center mt-16 p-6 rounded-xl glass bg-white/50 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/30'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.p
						className='text-base mb-4 text-gray-700 dark:text-gray-300'
						whileHover={{ scale: 1.02 }}
					>
						Ready to add proven expertise to your team?
					</motion.p>
					<motion.div
						className='flex items-center justify-center space-x-2'
						whileHover={{ scale: 1.05 }}
					>
						<Award className='w-5 h-5 text-yellow-500' />
						<span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold'>
							Let's discuss your next project!
						</span>
						<TrendingUp className='w-5 h-5 text-green-500' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ExperienceSection;
