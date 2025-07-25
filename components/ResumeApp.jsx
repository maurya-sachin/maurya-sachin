// components/ResumeApp.jsx
'use client';

import React, { useEffect, useCallback, useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/next';
import useStore from '../store/useStore';
import { useGitHubData } from '../hooks/useGitHubData';

import { AppErrorBoundary } from '../components/error-boundary/ErrorBoundary';
import {
	DynamicHeroSection,
	DynamicAboutSection,
	DynamicSkillsSection,
	DynamicExperienceSection,
	DynamicProjectsSection,
	DynamicGitHubStatsSection,
	DynamicBlogSection,
	DynamicContactSection,
} from '../components/loading/DynamicLoader';

const LoadingScreen = React.lazy(() => import('./LoadingScreen'));
const Navigation = React.lazy(() => import('./Navigation'));
const FloatingElements = React.lazy(() => import('./FloatingElements'));

const SimpleLoader = () => (
	<div className='flex items-center justify-center py-20'>
		<div className='w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin' />
	</div>
);

const ResumeApp = () => {
	const containerRef = useRef(null);
	const { scrollY } = useScroll();

	useGitHubData('maurya-sachin');

	const isLoading = useStore((state) => state.isLoading);
	const isMenuOpen = useStore((state) => state.isMenuOpen);
	const scrollProgress = useStore((state) => state.scrollProgress);
	const setIsLoading = useStore((state) => state.setIsLoading);
	const setCurrentTime = useStore((state) => state.setCurrentTime);
	const setScrollProgress = useStore((state) => state.setScrollProgress);
	const setActiveSection = useStore((state) => state.setActiveSection);
	const initializeTheme = useStore((state) => state.initializeTheme);

	// Optimized transforms with clamping
	const headerOpacity = useTransform(scrollY, [0, 100], [0, 1], {
		clamp: true,
	});
	const heroY = useTransform(scrollY, [0, 300], [0, -50], { clamp: true });

	const updateTime = useCallback(() => {
		const now = new Date();
		const istTime = new Intl.DateTimeFormat('en-IN', {
			timeZone: 'Asia/Kolkata',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true,
		}).format(now);
		setCurrentTime(istTime);
	}, [setCurrentTime]);

	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;
		const totalHeight = document.documentElement.scrollHeight - windowHeight;
		const progress = Math.min(100, (scrollPosition / totalHeight) * 100);

		setScrollProgress(progress);

		const sections = [
			'hero',
			'about',
			'skills',
			'experience',
			'projects',
			'github-stats',
			'blog',
			'contact',
		];
		const checkPosition = scrollPosition + 100;

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + scrollPosition;
				const elementBottom = elementTop + rect.height;

				if (checkPosition >= elementTop && checkPosition < elementBottom) {
					setActiveSection(section);
					break;
				}
			}
		}
	}, [setScrollProgress, setActiveSection]);

	const scrollToSection = useCallback((sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}, []);

	const downloadResume = useCallback(async () => {
		try {
			const response = await fetch('/api/download-resume');
			if (response.ok) {
				const blob = await response.blob();
				const url = window.URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = 'Sachin_Maurya_Frontend_Developer_Resume.pdf';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				window.URL.revokeObjectURL(url);
			}
		} catch (error) {
			console.error('Download failed:', error);
		}
	}, []);

	useEffect(() => {
		let timeoutId = null;

		const throttledScroll = () => {
			if (timeoutId === null) {
				timeoutId = setTimeout(() => {
					handleScroll();
					timeoutId = null;
				}, 16);
			}
		};

		window.addEventListener('scroll', throttledScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', throttledScroll);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [handleScroll]);

	useEffect(() => {
		initializeTheme();
		updateTime();

		const timeInterval = setInterval(updateTime, 1000);
		const loadingTimer = setTimeout(() => setIsLoading(false), 2500);

		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			clearInterval(timeInterval);
			clearTimeout(loadingTimer);
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen, updateTime, setIsLoading, initializeTheme]);

	if (isLoading) {
		return (
			<AppErrorBoundary>
				<Suspense fallback={<SimpleLoader />}>
					<LoadingScreen />
				</Suspense>
			</AppErrorBoundary>
		);
	}

	return (
		<AppErrorBoundary>
			<div
				className='min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
				ref={containerRef}
				style={{
					overflowX: 'hidden',
					scrollBehavior: 'smooth',
				}}
			>
				{/* Toast notifications */}
				<Toaster
					position='top-right'
					toastOptions={{
						duration: 4000,
						className: 'dark:bg-gray-800 dark:text-white',
						style: {
							background: 'var(--toast-bg, #ffffff)',
							color: 'var(--toast-color, #000000)',
							borderRadius: '12px',
							border: '1px solid var(--toast-border, #e5e7eb)',
							boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
						},
					}}
				/>

				<SpeedInsights />

				<motion.div
					className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left'
					style={{
						scaleX: scrollProgress / 100,
						transformOrigin: '0%',
					}}
				/>

				<Suspense fallback={null}>
					<FloatingElements />
				</Suspense>

				<Suspense
					fallback={
						<div className='h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' />
					}
				>
					<Navigation
						scrollToSection={scrollToSection}
						downloadResume={downloadResume}
						headerOpacity={headerOpacity}
					/>
				</Suspense>

				<main
					id='main-content'
					className='relative z-10'
				>
					<DynamicHeroSection
						scrollToSection={scrollToSection}
						heroY={heroY}
						downloadResume={downloadResume}
					/>

					<DynamicAboutSection />
					<DynamicSkillsSection />
					<DynamicExperienceSection />
					<DynamicProjectsSection />
					<DynamicGitHubStatsSection />
					<DynamicBlogSection />
					<DynamicContactSection downloadResume={downloadResume} />
				</main>

				<footer className='relative z-10 py-12 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'>
					<div className='max-w-7xl mx-auto px-4 text-center'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<p className='mb-3 text-gray-600 dark:text-gray-400'>
								© 2024 Sachin Maurya. Crafted with passion using React, Next.js
								& modern web technologies.
							</p>
							<motion.p
								className='text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium'
								animate={{ opacity: [0.7, 1, 0.7] }}
								transition={{ duration: 3, repeat: Infinity }}
							>
								✨ Optimized for performance, designed for impact
							</motion.p>
						</motion.div>
					</div>
				</footer>
			</div>
		</AppErrorBoundary>
	);
};

export default ResumeApp;
