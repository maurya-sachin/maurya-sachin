import React, { useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Download, Zap } from 'lucide-react';
import useStore from '../store/useStore';

// Memoized navigation items to prevent recreation - FIXED IDs to match sections
const NAVIGATION_ITEMS = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'github-stats', label: 'Github' },
	{ id: 'blog', label: 'Blog' },
	{ id: 'contact', label: 'Contact' },
];

// Memoized Logo Component to prevent unnecessary re-renders
const Logo = React.memo(({ handleNavClick, currentTime }) => (
	<motion.div
		className='flex items-center space-x-2 sm:space-x-3'
		initial={{ opacity: 0, x: -30 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.8 }}
	>
		<motion.div
			className='relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600'
			whileHover={{ scale: 1.1, rotate: 360 }}
			transition={{ duration: 0.5 }}
			onClick={() => handleNavClick('hero')}
		>
			<span className='relative text-white font-bold text-base sm:text-lg z-10'>
				SM
			</span>
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-0 hover:opacity-100 transition-opacity'
				animate={{ rotate: [0, 360] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
			/>
		</motion.div>

		<div className='hidden sm:block'>
			<motion.h1
				className='text-base sm:text-lg font-bold cursor-pointer text-gray-900 dark:text-white'
				whileHover={{ scale: 1.05 }}
				onClick={() => handleNavClick('hero')}
			>
				Sachin Maurya
			</motion.h1>
			<div className='flex items-center space-x-1 sm:space-x-2'>
				<motion.p
					className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'
					animate={{ opacity: [1, 0.5, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					Frontend Developer
				</motion.p>
				<span className='text-xs text-gray-500 hidden md:inline'>•</span>
				<span className='text-xs text-gray-600 dark:text-gray-400 hidden md:inline'>
					{currentTime} IST
				</span>
				<motion.div
					className='w-2 h-2 bg-green-400 rounded-full hidden md:block'
					animate={{ scale: [1, 1.3, 1] }}
					transition={{ duration: 2, repeat: Infinity }}
				/>
			</div>
		</div>
	</motion.div>
));

// Memoized Desktop Navigation
const DesktopNavigation = React.memo(
	({ navigationItems, activeSection, handleNavClick }) => (
		<div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
			{navigationItems.map((item, index) => (
				<motion.button
					key={item.id}
					onClick={() => handleNavClick(item.id)}
					className={`relative text-sm font-medium transition-all duration-300 ${
						activeSection === item.id
							? 'text-blue-600 dark:text-blue-400'
							: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
					}`}
					whileHover={{ y: -2, scale: 1.05 }}
					whileTap={{ y: 0, scale: 0.95 }}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
				>
					{item.label}
					{activeSection === item.id && (
						<motion.div
							className='absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
							layoutId='activeSection'
							initial={{ opacity: 0, scaleX: 0 }}
							animate={{ opacity: 1, scaleX: 1 }}
							transition={{ duration: 0.3 }}
						/>
					)}
					<motion.div
						className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity -z-10'
						whileHover={{ scale: 1.1 }}
					/>
				</motion.button>
			))}
		</div>
	)
);

// Memoized Action Buttons
const ActionButtons = React.memo(
	({
		isDarkMode,
		handleThemeToggle,
		downloadResume,
		isMenuOpen,
		setIsMenuOpen,
	}) => (
		<div className='flex items-center space-x-2 sm:space-x-3'>
			{/* Dark Mode Toggle */}
			<motion.button
				onClick={handleThemeToggle}
				className='p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-yellow-400'
				whileHover={{ scale: 1.1, rotate: 180 }}
				whileTap={{ scale: 0.9 }}
				aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
			>
				<AnimatePresence mode='wait'>
					{isDarkMode ? (
						<motion.div
							key='sun'
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Sun className='w-4 h-4 sm:w-5 sm:h-5' />
						</motion.div>
					) : (
						<motion.div
							key='moon'
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Moon className='w-4 h-4 sm:w-5 sm:h-5' />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>

			{/* Resume Download Button */}
			<motion.button
				onClick={downloadResume}
				className='hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium items-center space-x-1 sm:space-x-2 shadow-lg group relative overflow-hidden text-sm sm:text-base'
				whileHover={{
					scale: 1.05,
					boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
					y: -2,
				}}
				whileTap={{ scale: 0.95 }}
			>
				<motion.div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity' />
				<Download className='w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce relative z-10' />
				<span className='relative z-10 hidden sm:inline'>Resume</span>
				<Zap className='w-3 h-3 sm:w-4 sm:h-4 relative z-10' />
			</motion.button>

			{/* Mobile Menu Toggle */}
			<motion.button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='lg:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-white'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				aria-label='Toggle mobile menu'
			>
				<AnimatePresence mode='wait'>
					{isMenuOpen ? (
						<motion.div
							key='close'
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<X className='w-4 h-4 sm:w-5 sm:h-5' />
						</motion.div>
					) : (
						<motion.div
							key='menu'
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<Menu className='w-4 h-4 sm:w-5 sm:h-5' />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.button>
		</div>
	)
);

// Memoized Mobile Menu
const MobileMenu = React.memo(
	({
		isMenuOpen,
		navigationItems,
		activeSection,
		handleNavClick,
		downloadResume,
		setIsMenuOpen,
		currentTime,
	}) => (
		<AnimatePresence>
			{isMenuOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsMenuOpen(false)}
					/>

					{/* Mobile Menu Panel */}
					<motion.div
						className='fixed top-0 right-0 h-full w-80 max-w-[85vw] z-40 lg:hidden bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-2xl'
						initial={{ x: '100%', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: '100%', opacity: 0 }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
					>
						<div className='p-4 sm:p-6 pt-20 sm:pt-24'>
							{/* Mobile Navigation Items */}
							<div className='space-y-4 sm:space-y-6'>
								{navigationItems.map((item, index) => (
									<motion.button
										key={item.id}
										onClick={() => handleNavClick(item.id)}
										className={`block w-full text-left text-lg sm:text-xl font-semibold transition-all duration-300 ${
											activeSection === item.id
												? 'text-blue-600 dark:text-blue-400 transform translate-x-4'
												: 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:translate-x-2'
										}`}
										initial={{ opacity: 0, x: 50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1, duration: 0.3 }}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										{item.label}
										{activeSection === item.id && (
											<motion.div
												className='w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full inline-block ml-2'
												animate={{ scale: [1, 1.3, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
											/>
										)}
									</motion.button>
								))}
							</div>

							{/* Mobile Resume Button */}
							<motion.div
								className='mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
							>
								<motion.button
									onClick={() => {
										downloadResume();
										setIsMenuOpen(false);
									}}
									className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg'
									whileHover={{ scale: 1.02, y: -2 }}
									whileTap={{ scale: 0.98 }}
								>
									<Download className='w-5 h-5' />
									<span>Download Resume</span>
									<Zap className='w-5 h-5' />
								</motion.button>
							</motion.div>

							{/* Mobile Footer Info */}
							<motion.div
								className='mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700 text-center'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<p className='text-sm text-gray-600 dark:text-gray-400'>
									Available for opportunities
								</p>
								<p className='text-xs mt-1 text-gray-500'>{currentTime} IST</p>
								<motion.div
									className='flex items-center justify-center space-x-1 mt-2'
									animate={{ opacity: [0.5, 1, 0.5] }}
									transition={{ duration: 2, repeat: Infinity }}
								>
									<div className='w-2 h-2 bg-green-400 rounded-full' />
									<span className='text-xs text-green-500'>Online</span>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
);

const Navigation = ({ scrollToSection, downloadResume, headerOpacity }) => {
	// Selective store subscription - only subscribe to needed state
	const isDarkMode = useStore((state) => state.isDarkMode);
	const activeSection = useStore((state) => state.activeSection);
	const isMenuOpen = useStore((state) => state.isMenuOpen);
	const currentTime = useStore((state) => state.currentTime);
	const initializeTheme = useStore((state) => state.initializeTheme);
	const toggleDarkMode = useStore((state) => state.toggleDarkMode);
	const setIsMenuOpen = useStore((state) => state.setIsMenuOpen);

	// Initialize theme only once
	useEffect(() => {
		initializeTheme();
	}, []); // Remove initializeTheme from deps to prevent re-runs

	// Memoized event handlers to prevent recreation on each render
	const handleNavClick = useCallback(
		(sectionId) => {
			scrollToSection(sectionId);
			setIsMenuOpen(false);
		},
		[scrollToSection, setIsMenuOpen]
	);

	const handleThemeToggle = useCallback(() => {
		console.log('Theme toggle clicked, current mode:', isDarkMode);
		toggleDarkMode();
	}, [isDarkMode, toggleDarkMode]);

	// Memoized header style to prevent object recreation
	const headerStyle = useMemo(
		() => ({
			opacity: headerOpacity,
		}),
		[headerOpacity]
	);

	return (
		<>
			{/* Main Navigation Header */}
			<motion.header
				className='fixed top-0 left-0 right-0 z-40 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
				style={headerStyle}
			>
				<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4'>
					<div className='flex items-center justify-between'>
						<Logo
							handleNavClick={handleNavClick}
							currentTime={currentTime}
						/>

						<DesktopNavigation
							navigationItems={NAVIGATION_ITEMS}
							activeSection={activeSection}
							handleNavClick={handleNavClick}
						/>

						<ActionButtons
							isDarkMode={isDarkMode}
							handleThemeToggle={handleThemeToggle}
							downloadResume={downloadResume}
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
						/>
					</div>
				</nav>
			</motion.header>

			{/* Mobile Menu */}
			<MobileMenu
				isMenuOpen={isMenuOpen}
				navigationItems={NAVIGATION_ITEMS}
				activeSection={activeSection}
				handleNavClick={handleNavClick}
				downloadResume={downloadResume}
				setIsMenuOpen={setIsMenuOpen}
				currentTime={currentTime}
			/>
		</>
	);
};

export default React.memo(Navigation);
