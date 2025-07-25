// components/FloatingElements.jsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const FloatingElements = () => {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState('light');
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		setMounted(true);

		const detectTheme = () => {
			const isDark =
				document.documentElement.classList.contains('dark') ||
				document.documentElement.getAttribute('data-theme') === 'dark';
			setTheme(isDark ? 'dark' : 'light');
		};

		detectTheme();

		const observer = new MutationObserver(detectTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class', 'data-theme'],
		});

		return () => observer.disconnect();
	}, []);

	// More visible particles with better colors
	const particles = useMemo(() => {
		if (!mounted) return [];

		const count = shouldReduceMotion ? 6 : 12;

		// Enhanced colors for better visibility
		const colors =
			theme === 'dark'
				? {
						particles: [
							'#60a5fa',
							'#a78bfa',
							'#34d399',
							'#fbbf24',
							'#fb7185',
							'#38bdf8',
						],
						glows: [
							'rgba(96, 165, 250, 0.4)',
							'rgba(167, 139, 250, 0.4)',
							'rgba(52, 211, 153, 0.4)',
						],
					}
				: {
						particles: [
							'#3b82f6',
							'#8b5cf6',
							'#10b981',
							'#f59e0b',
							'#ef4444',
							'#06b6d4',
						],
						glows: [
							'rgba(59, 130, 246, 0.3)',
							'rgba(139, 92, 246, 0.3)',
							'rgba(16, 185, 129, 0.3)',
						],
					};

		return Array.from({ length: count }, (_, i) => ({
			id: i,
			x: Math.random() * 90 + 5, // Keep away from edges
			y: Math.random() * 90 + 5,
			size: Math.random() * 8 + 6, // Bigger particles (6-14px)
			duration: Math.random() * 25 + 20, // Slower movement
			delay: Math.random() * 8,
			color:
				colors.particles[Math.floor(Math.random() * colors.particles.length)],
			glowColor: colors.glows[Math.floor(Math.random() * colors.glows.length)],
			shape: Math.floor(Math.random() * 5), // 5 different shapes
			initialRotation: Math.random() * 360,
		}));
	}, [mounted, theme, shouldReduceMotion]);

	// Enhanced background with more visibility
	const backgroundStyle =
		theme === 'dark'
			? {
					background: `
          radial-gradient(ellipse 600px 400px at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 800px 600px at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 400px 300px at 50% 10%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
        `,
				}
			: {
					background: `
          radial-gradient(ellipse 600px 400px at 20% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse 800px 600px at 80% 80%, rgba(167, 139, 250, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse 400px 300px at 50% 10%, rgba(52, 211, 153, 0.1) 0%, transparent 50%)
        `,
				};

	const getShapeElement = (particle) => {
		const baseStyle = {
			width: particle.size,
			height: particle.size,
			position: 'absolute',
			background: particle.color,
			boxShadow: `0 0 ${particle.size * 2}px ${particle.glowColor}`,
		};

		const shapeElements = {
			// Glowing circle
			0: (
				<div
					style={{
						...baseStyle,
						borderRadius: '50%',
						background: `radial-gradient(circle, ${particle.color} 0%, ${particle.color}80 70%, transparent 100%)`,
					}}
				/>
			),
			// Glowing square
			1: (
				<div
					style={{
						...baseStyle,
						borderRadius: '20%',
						transform: 'rotate(45deg)',
						background: `linear-gradient(45deg, ${particle.color} 0%, ${particle.color}90 100%)`,
					}}
				/>
			),
			// Star shape
			2: (
				<div
					style={{
						...baseStyle,
						clipPath:
							'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
						background: `radial-gradient(circle, ${particle.color} 0%, ${particle.color}70 100%)`,
					}}
				/>
			),
			// Diamond
			3: (
				<div
					style={{
						...baseStyle,
						clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
						background: `linear-gradient(135deg, ${particle.color} 0%, ${particle.color}80 100%)`,
					}}
				/>
			),
			// Hexagon
			4: (
				<div
					style={{
						...baseStyle,
						clipPath:
							'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
						background: `conic-gradient(${particle.color}, ${particle.color}80, ${particle.color})`,
					}}
				/>
			),
		};

		return shapeElements[particle.shape] || shapeElements[0];
	};

	if (!mounted) return null;

	return (
		<div
			className='fixed inset-0 pointer-events-none z-0'
			style={{
				...backgroundStyle,
				transform: 'translateZ(0)',
				willChange: 'transform',
			}}
		>
			{/* Enhanced mesh background with better visibility */}
			<div className='absolute inset-0'>
				<svg
					className='w-full h-full'
					style={{ opacity: theme === 'dark' ? 0.4 : 0.3 }}
					viewBox='0 0 1200 800'
					preserveAspectRatio='xMidYMid slice'
				>
					<defs>
						<linearGradient
							id='meshGradient1'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='100%'
						>
							<stop
								offset='0%'
								stopColor={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
								stopOpacity='0.3'
							/>
							<stop
								offset='50%'
								stopColor={theme === 'dark' ? '#a78bfa' : '#8b5cf6'}
								stopOpacity='0.4'
							/>
							<stop
								offset='100%'
								stopColor={theme === 'dark' ? '#34d399' : '#10b981'}
								stopOpacity='0.3'
							/>
						</linearGradient>
						<linearGradient
							id='meshGradient2'
							x1='100%'
							y1='0%'
							x2='0%'
							y2='100%'
						>
							<stop
								offset='0%'
								stopColor={theme === 'dark' ? '#fbbf24' : '#f59e0b'}
								stopOpacity='0.3'
							/>
							<stop
								offset='50%'
								stopColor={theme === 'dark' ? '#fb7185' : '#ef4444'}
								stopOpacity='0.25'
							/>
							<stop
								offset='100%'
								stopColor={theme === 'dark' ? '#38bdf8' : '#06b6d4'}
								stopOpacity='0.3'
							/>
						</linearGradient>
					</defs>

					{/* More visible flowing paths */}
					<motion.path
						d='M0,200 Q300,100 600,200 T1200,200'
						stroke='url(#meshGradient1)'
						strokeWidth='3'
						fill='none'
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.8 }}
						transition={{
							pathLength: { duration: 4, ease: 'easeInOut' },
							opacity: { duration: 2 },
						}}
					/>

					<motion.path
						d='M0,400 Q400,300 800,400 T1200,400'
						stroke='url(#meshGradient2)'
						strokeWidth='2.5'
						fill='none'
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.6 }}
						transition={{
							pathLength: { duration: 5, ease: 'easeInOut', delay: 1 },
							opacity: { duration: 2, delay: 1 },
						}}
					/>

					<motion.path
						d='M0,600 Q200,500 400,600 T800,600 Q1000,550 1200,600'
						stroke='url(#meshGradient1)'
						strokeWidth='2'
						fill='none'
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 0.5 }}
						transition={{
							pathLength: { duration: 6, ease: 'easeInOut', delay: 2 },
							opacity: { duration: 2, delay: 2 },
						}}
					/>
				</svg>
			</div>

			{/* Enhanced floating particles */}
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					initial={{ opacity: 0, scale: 0, rotate: particle.initialRotation }}
					animate={{
						opacity: [0, 0.9, 0.6, 1, 0.4],
						scale: [0.5, 1.3, 0.8, 1.2, 0.9],
						x: [0, 60, -40, 50, 0],
						y: [0, -50, 30, -60, 0],
						rotate: [
							particle.initialRotation,
							particle.initialRotation + 180,
							particle.initialRotation + 360,
						],
					}}
					transition={{
						duration: particle.duration,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: particle.delay,
						times: [0, 0.2, 0.4, 0.7, 1],
					}}
					style={{
						position: 'absolute',
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						willChange: 'transform, opacity',
						filter: `blur(0.5px) brightness(1.1)`,
					}}
				>
					{getShapeElement(particle)}
				</motion.div>
			))}

			{/* More prominent ambient glow orbs */}
			<motion.div
				className='absolute top-1/4 left-1/4 w-48 h-48 rounded-full'
				style={{
					background:
						theme === 'dark'
							? 'radial-gradient(circle, rgba(96,165,250,0.25) 0%, rgba(96,165,250,0.1) 40%, transparent 70%)'
							: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
					filter: 'blur(40px)',
				}}
				animate={{
					scale: [1, 1.4, 1],
					opacity: [0.4, 0.8, 0.4],
					x: [0, 30, 0],
					y: [0, -20, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<motion.div
				className='absolute bottom-1/3 right-1/4 w-36 h-36 rounded-full'
				style={{
					background:
						theme === 'dark'
							? 'radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(167,139,250,0.12) 40%, transparent 70%)'
							: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
					filter: 'blur(30px)',
				}}
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.3, 0.7, 0.3],
					x: [0, -25, 0],
					y: [0, 15, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 3,
				}}
			/>

			<motion.div
				className='absolute top-1/2 right-1/3 w-32 h-32 rounded-full'
				style={{
					background:
						theme === 'dark'
							? 'radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(52,211,153,0.08) 40%, transparent 70%)'
							: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)',
					filter: 'blur(25px)',
				}}
				animate={{
					scale: [1, 1.6, 1],
					opacity: [0.5, 0.9, 0.5],
					x: [0, 40, 0],
					y: [0, -30, 0],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 6,
				}}
			/>

			{/* Enhanced grid pattern */}
			<div
				className='absolute inset-0'
				style={{
					opacity: theme === 'dark' ? 0.08 : 0.04,
					backgroundImage:
						theme === 'dark'
							? `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 2px, transparent 0)`
							: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 2px, transparent 0)`,
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Dynamic connecting lines between particles */}
			<svg
				className='absolute inset-0 w-full h-full'
				style={{ opacity: 0.3 }}
			>
				{particles.slice(0, 4).map((particle, i) => {
					const nextParticle = particles[(i + 1) % 4];
					if (!nextParticle) return null;

					return (
						<motion.line
							key={`connection-${i}`}
							x1={`${particle.x}%`}
							y1={`${particle.y}%`}
							x2={`${nextParticle.x}%`}
							y2={`${nextParticle.y}%`}
							stroke={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
							strokeWidth='1.5'
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{
								pathLength: [0, 1, 0],
								opacity: [0, 0.6, 0],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: i * 2,
							}}
						/>
					);
				})}
			</svg>
		</div>
	);
};

export default FloatingElements;
