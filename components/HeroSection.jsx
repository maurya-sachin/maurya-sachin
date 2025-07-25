import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import {
	ArrowRight,
	MapPin,
	Rocket,
	Sparkles,
	Download,
	Github,
	Linkedin,
	Mail,
} from 'lucide-react';

// Mock GitHub data hook for demo
const useGitHubData = (username) => {
	return {
		githubData: {
			user: {
				name: 'Sachin Maurya',
				bio: 'Crafting exceptional digital experiences with modern web technologies',
				location: 'Delhi, India',
			},
		},
	};
};

const HeroSection = ({
	scrollToSection = () => {},
	downloadResume = () => {},
}) => {
	const [currentTime, setCurrentTime] = useState('');
	const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const sceneRef = useRef(null);
	const rendererRef = useRef(null);
	const animationRef = useRef(null);
	const clockRef = useRef(new THREE.Clock());

	const prefersReducedMotion = useReducedMotion();
	const { githubData } = useGitHubData('maurya-sachin');

	// Create text texture for labels
	const createTextTexture = (text, color = '#ffffff') => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.width = 256;
		canvas.height = 128;

		context.fillStyle = 'rgba(0,0,0,0)';
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.font = 'bold 24px Arial';
		context.fillStyle = color;
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(text, canvas.width / 2, canvas.height / 2);

		const texture = new THREE.CanvasTexture(canvas);
		texture.needsUpdate = true;
		return texture;
	};

	// Initialize Three.js scene
	useEffect(() => {
		if (!canvasRef.current || prefersReducedMotion) return;

		// Scene setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance',
		});

		// Store refs
		sceneRef.current = scene;
		rendererRef.current = renderer;

		// Renderer setup
		renderer.setSize(500, 500);
		renderer.setClearColor(0x000000, 0);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
		camera.position.z = 8;

		// Performance optimizations
		renderer.shadowMap.enabled = false;
		renderer.physicallyCorrectLights = false;

		// Frontend Dev Materials with better performance
		const reactMaterial = new THREE.MeshStandardMaterial({
			color: 0x61dafb,
			roughness: 0.2,
			metalness: 0.8,
			emissive: 0x1a1a2e,
			emissiveIntensity: 0.1,
		});

		const jsMaterial = new THREE.MeshStandardMaterial({
			color: 0xf7df1e,
			roughness: 0.3,
			metalness: 0.9,
		});

		const cssMaterial = new THREE.MeshStandardMaterial({
			color: 0x1572b6,
			roughness: 0.4,
			metalness: 0.7,
			emissive: 0x0a0a0a,
			emissiveIntensity: 0.05,
		});

		const htmlMaterial = new THREE.MeshStandardMaterial({
			color: 0xe34f26,
			roughness: 0.3,
			metalness: 0.8,
		});

		const nodeMaterial = new THREE.MeshStandardMaterial({
			color: 0x68a063,
			roughness: 0.2,
			metalness: 0.9,
		});

		// Create React-inspired torus (main focal point)
		const torusGeometry = new THREE.TorusGeometry(1.5, 0.3, 12, 24);
		const reactTorus = new THREE.Mesh(torusGeometry, reactMaterial);
		reactTorus.position.set(0, 0, 0);
		reactTorus.userData = {
			originalPosition: { x: 0, y: 0, z: 0 },
			animationSpeed: { x: 0.8, z: 0.4 },
		};

		// Create text labels for each technology
		const textMaterial = new THREE.SpriteMaterial({
			map: createTextTexture('REACT', '#61dafb'),
			transparent: true,
			alphaTest: 0.1,
		});
		const reactLabel = new THREE.Sprite(textMaterial);
		reactLabel.scale.set(2, 1, 1);
		reactLabel.position.set(0, -2.5, 0);

		// Create orbital elements
		const orbitRadius = 2.8;

		// CSS Cube with label
		const cssBoxGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
		const cssBox = new THREE.Mesh(cssBoxGeometry, cssMaterial);
		cssBox.userData = {
			orbitAngle: 0,
			orbitRadius: orbitRadius * 0.8,
			orbitSpeed: 0.5,
			rotationSpeed: { x: 0.02, y: 0.015, z: 0.01 },
		};

		const cssLabelMaterial = new THREE.SpriteMaterial({
			map: createTextTexture('CSS3', '#1572b6'),
			transparent: true,
			alphaTest: 0.1,
		});
		const cssLabel = new THREE.Sprite(cssLabelMaterial);
		cssLabel.scale.set(1.5, 0.75, 1);

		// HTML Triangle with label
		const htmlGeometry = new THREE.ConeGeometry(0.4, 0.8, 3);
		const htmlCone = new THREE.Mesh(htmlGeometry, htmlMaterial);
		htmlCone.rotation.set(0, 0, Math.PI / 6);
		htmlCone.userData = {
			orbitAngle: Math.PI * 0.7,
			orbitRadius: orbitRadius * 0.7,
			orbitSpeed: 0.5,
			rotationSpeed: { z: 0.025 },
		};

		const htmlLabelMaterial = new THREE.SpriteMaterial({
			map: createTextTexture('HTML5', '#e34f26'),
			transparent: true,
			alphaTest: 0.1,
		});
		const htmlLabel = new THREE.Sprite(htmlLabelMaterial);
		htmlLabel.scale.set(1.5, 0.75, 1);

		// JavaScript Sphere with label
		const jsSphereGeometry = new THREE.SphereGeometry(0.35, 16, 16);
		const jsSphere = new THREE.Mesh(jsSphereGeometry, jsMaterial);
		jsSphere.userData = {
			orbitAngle: Math.PI * 1.4,
			orbitRadius: orbitRadius * 0.5,
			orbitSpeed: 0.5,
			rotationSpeed: { y: 0.04 },
			bounceAmplitude: 0.1,
			bounceSpeed: 4,
		};

		const jsLabelMaterial = new THREE.SpriteMaterial({
			map: createTextTexture('JS', '#f7df1e'),
			transparent: true,
			alphaTest: 0.1,
		});
		const jsLabel = new THREE.Sprite(jsLabelMaterial);
		jsLabel.scale.set(1.2, 0.6, 1);

		// Node.js Diamond with label
		const nodeOctaGeometry = new THREE.OctahedronGeometry(0.45);
		const nodeOcta = new THREE.Mesh(nodeOctaGeometry, nodeMaterial);
		nodeOcta.userData = {
			orbitAngle: Math.PI * 0.3,
			orbitRadius: orbitRadius * 0.6,
			orbitSpeed: 0.5,
			rotationSpeed: { x: 0.008, y: 0.012 },
		};

		const nodeLabelMaterial = new THREE.SpriteMaterial({
			map: createTextTexture('NODE', '#68a063'),
			transparent: true,
			alphaTest: 0.1,
		});
		const nodeLabel = new THREE.Sprite(nodeLabelMaterial);
		nodeLabel.scale.set(1.5, 0.75, 1);

		// Create floating symbols
		const symbolMaterial = new THREE.MeshBasicMaterial({
			color: 0x8b5cf6,
			transparent: true,
			opacity: 0.6,
		});

		const symbols = [];
		const symbolPositions = [
			{ x: 3.2, y: 0.8, z: 0.2 },
			{ x: -3.0, y: -0.5, z: 0.8 },
			{ x: 0.5, y: 2.8, z: -0.5 },
		];

		symbolPositions.forEach((pos, i) => {
			const smallTorus = new THREE.TorusGeometry(0.15, 0.04, 6, 8);
			const symbol = new THREE.Mesh(smallTorus, symbolMaterial);
			symbol.position.set(pos.x, pos.y, pos.z);
			symbol.userData = {
				originalPosition: { ...pos },
				rotationSpeed: 0.015 + i * 0.002,
				floatSpeed: 1.5,
				floatAmplitude: 0.001,
			};
			symbols.push(symbol);
		});

		// Create orbital path
		const wireframeMaterial = new THREE.LineBasicMaterial({
			color: 0x61dafb,
			transparent: true,
			opacity: 0.2,
		});

		const orbitPoints = [];
		for (let i = 0; i <= 64; i++) {
			const angle = (i / 64) * Math.PI * 2;
			orbitPoints.push(
				new THREE.Vector3(
					Math.cos(angle) * orbitRadius * 0.7,
					Math.sin(angle) * orbitRadius * 0.4,
					Math.sin(angle * 2) * 0.3
				)
			);
		}

		const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
		const orbitLine = new THREE.Line(orbitGeometry, wireframeMaterial);

		// Group elements for better performance
		const mainGroup = new THREE.Group();
		const techGroup = new THREE.Group();

		// Add tech elements to tech group
		techGroup.add(
			cssBox,
			cssLabel,
			htmlCone,
			htmlLabel,
			jsSphere,
			jsLabel,
			nodeOcta,
			nodeLabel
		);

		// Add all elements to main group
		mainGroup.add(reactTorus, reactLabel, techGroup, orbitLine);
		symbols.forEach((symbol) => mainGroup.add(symbol));
		scene.add(mainGroup);

		// Optimized lighting setup
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
		directionalLight.position.set(8, 8, 5);

		scene.add(ambientLight, directionalLight);

		// Store animation objects
		const animationObjects = {
			mainGroup,
			techGroup,
			reactTorus,
			cssBox,
			cssLabel,
			htmlCone,
			htmlLabel,
			jsSphere,
			jsLabel,
			nodeOcta,
			nodeLabel,
			symbols,
		};

		// Optimized animation loop with delta time
		const animate = () => {
			const deltaTime = clockRef.current.getDelta();
			const elapsedTime = clockRef.current.getElapsedTime();

			// Gentle main group rotation
			mainGroup.rotation.y = elapsedTime * 0.03;
			mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.02;

			// React torus animation
			reactTorus.rotation.x =
				elapsedTime * reactTorus.userData.animationSpeed.x;
			reactTorus.rotation.z =
				elapsedTime * reactTorus.userData.animationSpeed.z;
			reactTorus.position.y = Math.sin(elapsedTime * 1.5) * 0.05;

			// Orbital animations for tech elements
			const orbitTime = elapsedTime * 0.5;

			// CSS animation
			const cssAngle = orbitTime + cssBox.userData.orbitAngle;
			cssBox.position.x = Math.cos(cssAngle) * cssBox.userData.orbitRadius;
			cssBox.position.y =
				Math.sin(cssAngle) * cssBox.userData.orbitRadius * 0.375;
			cssBox.position.z = Math.sin(cssAngle * 2) * 0.3;
			cssBox.rotation.x += cssBox.userData.rotationSpeed.x;
			cssBox.rotation.y += cssBox.userData.rotationSpeed.y;
			cssBox.rotation.z += cssBox.userData.rotationSpeed.z;

			// Update CSS label position
			cssLabel.position.copy(cssBox.position);
			cssLabel.position.y -= 1;

			// HTML animation
			const htmlAngle = orbitTime + htmlCone.userData.orbitAngle;
			htmlCone.position.x = Math.cos(htmlAngle) * htmlCone.userData.orbitRadius;
			htmlCone.position.y =
				Math.sin(htmlAngle) * htmlCone.userData.orbitRadius * 0.571;
			htmlCone.position.z = Math.sin(htmlAngle * 2) * 0.3;
			htmlCone.rotation.z += htmlCone.userData.rotationSpeed.z;

			// Update HTML label position
			htmlLabel.position.copy(htmlCone.position);
			htmlLabel.position.y -= 1;

			// JS animation with bounce
			const jsAngle = orbitTime + jsSphere.userData.orbitAngle;
			jsSphere.position.x = Math.cos(jsAngle) * jsSphere.userData.orbitRadius;
			jsSphere.position.y =
				Math.sin(jsAngle) * jsSphere.userData.orbitRadius * 1.2 +
				Math.sin(elapsedTime * jsSphere.userData.bounceSpeed) *
					jsSphere.userData.bounceAmplitude;
			jsSphere.position.z = Math.sin(jsAngle * 2) * 0.3;
			jsSphere.rotation.y += jsSphere.userData.rotationSpeed.y;

			// Update JS label position
			jsLabel.position.copy(jsSphere.position);
			jsLabel.position.y -= 0.8;

			// Node animation
			const nodeAngle = orbitTime + nodeOcta.userData.orbitAngle;
			nodeOcta.position.x = Math.cos(nodeAngle) * nodeOcta.userData.orbitRadius;
			nodeOcta.position.y =
				Math.sin(nodeAngle) * nodeOcta.userData.orbitRadius * 0.833;
			nodeOcta.position.z = Math.sin(nodeAngle * 2) * 0.3;
			nodeOcta.rotation.x += nodeOcta.userData.rotationSpeed.x;
			nodeOcta.rotation.y += nodeOcta.userData.rotationSpeed.y;

			// Update Node label position
			nodeLabel.position.copy(nodeOcta.position);
			nodeLabel.position.y -= 1;

			// Animate floating symbols
			symbols.forEach((symbol, index) => {
				symbol.rotation.z += symbol.userData.rotationSpeed;
				symbol.position.y =
					symbol.userData.originalPosition.y +
					Math.sin(elapsedTime * symbol.userData.floatSpeed + index * 2) *
						symbol.userData.floatAmplitude;
			});

			renderer.render(scene, camera);
			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		// Handle resize with throttling
		let resizeTimeout;
		const handleResize = () => {
			if (resizeTimeout) clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				const container = canvasRef.current?.parentElement;
				if (container) {
					const width = Math.min(container.offsetWidth, 500);
					const height = Math.min(container.offsetHeight, 500);
					camera.aspect = width / height;
					camera.updateProjectionMatrix();
					renderer.setSize(width, height);
				}
			}, 100);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
			if (resizeTimeout) clearTimeout(resizeTimeout);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}

			// Comprehensive cleanup
			[
				torusGeometry,
				cssBoxGeometry,
				htmlGeometry,
				jsSphereGeometry,
				nodeOctaGeometry,
				orbitGeometry,
			].forEach((geo) => geo?.dispose());

			[
				reactMaterial,
				jsMaterial,
				cssMaterial,
				htmlMaterial,
				nodeMaterial,
				symbolMaterial,
				wireframeMaterial,
				textMaterial,
				cssLabelMaterial,
				htmlLabelMaterial,
				jsLabelMaterial,
				nodeLabelMaterial,
			].forEach((mat) => mat?.dispose());

			symbols.forEach((symbol) => {
				symbol.geometry?.dispose();
				symbol.material?.dispose();
			});

			// Dispose textures
			[
				textMaterial,
				cssLabelMaterial,
				htmlLabelMaterial,
				jsLabelMaterial,
				nodeLabelMaterial,
			].forEach((material) => material.map?.dispose());

			renderer?.dispose();
		};
	}, [prefersReducedMotion]);

	// Time update
	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setCurrentTime(
				now.toLocaleTimeString('en-US', {
					timeZone: 'Asia/Kolkata',
					hour12: false,
					hour: '2-digit',
					minute: '2-digit',
				})
			);
		};
		updateTime();
		const interval = setInterval(updateTime, 60000);
		return () => clearInterval(interval);
	}, []);

	// Throttled mouse tracking
	const handleMouseMove = useCallback(
		(e) => {
			if (prefersReducedMotion || !containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			setMousePosition({ x, y });

			// Subtle mouse interaction
			if (sceneRef.current) {
				const mainGroup = sceneRef.current.children.find(
					(child) => child.type === 'Group'
				);
				if (mainGroup) {
					const targetRotationY = (x - 0.5) * 0.1;
					const targetRotationX = (y - 0.5) * 0.1;

					// Smooth interpolation for mouse interaction
					mainGroup.rotation.y +=
						(targetRotationY - mainGroup.rotation.y) * 0.05;
					mainGroup.rotation.x +=
						(targetRotationX - mainGroup.rotation.x) * 0.05;
				}
			}
		},
		[prefersReducedMotion]
	);

	useEffect(() => {
		if (prefersReducedMotion) return;

		let rafId;
		const throttledMouseMove = (e) => {
			if (rafId) return;
			rafId = requestAnimationFrame(() => {
				handleMouseMove(e);
				rafId = null;
			});
		};

		document.addEventListener('mousemove', throttledMouseMove, {
			passive: true,
		});
		return () => {
			document.removeEventListener('mousemove', throttledMouseMove);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [handleMouseMove, prefersReducedMotion]);

	const Scene3DFallback = () => (
		<div className='w-full h-full flex items-center justify-center relative'>
			<div className='relative perspective-1000'>
				{/* Central React torus */}
				<motion.div
					className='w-40 h-40 border-8 border-cyan-400/40 rounded-full relative flex items-center justify-center'
					animate={{
						rotate: [0, 360],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'linear',
					}}
				>
					<div className='absolute inset-6 border-4 border-cyan-300/30 rounded-full' />
					<div className='w-4 h-4 bg-cyan-400 rounded-full' />
					<div className='absolute -bottom-12 text-cyan-400 font-bold text-sm'>
						REACT
					</div>
				</motion.div>

				{/* Orbiting elements with labels */}
				<motion.div
					className='absolute w-6 h-6 bg-blue-500/40 backdrop-blur-sm'
					animate={{
						rotate: [0, 360],
						x: [60, 0, -60, 0, 60],
						y: [0, 40, 0, -40, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					style={{
						left: '50%',
						top: '50%',
						transformOrigin: 'center',
					}}
				>
					<div className='absolute -bottom-8 -left-3 text-blue-500 font-bold text-xs whitespace-nowrap'>
						CSS3
					</div>
				</motion.div>

				<motion.div
					className='absolute w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-orange-500/40'
					animate={{
						rotate: [0, -360],
						x: [-50, -35, 50, 35, -50],
						y: [35, -50, -35, 50, 35],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						left: '50%',
						top: '50%',
						transformOrigin: 'center',
					}}
				>
					<div className='absolute -bottom-8 -left-4 text-orange-500 font-bold text-xs whitespace-nowrap'>
						HTML5
					</div>
				</motion.div>

				<motion.div
					className='absolute w-5 h-5 bg-yellow-400/50 rounded-full'
					animate={{
						x: [-40, 20, 50, -20, -40],
						y: [-50, -20, 30, 50, -50],
						scale: [1, 1.2, 1, 1.2, 1],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					style={{
						left: '50%',
						top: '50%',
						transformOrigin: 'center',
					}}
				>
					<div className='absolute -bottom-6 -left-2 text-yellow-400 font-bold text-xs'>
						JS
					</div>
				</motion.div>

				<motion.div
					className='absolute w-4 h-4 bg-green-500/40 transform rotate-45'
					animate={{
						rotate: [45, 405],
						x: [45, -15, -55, -15, 45],
						y: [-15, -45, 15, 55, -15],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						left: '50%',
						top: '50%',
						transformOrigin: 'center',
					}}
				>
					<div className='absolute -bottom-8 -left-4 text-green-500 font-bold text-xs whitespace-nowrap rotate-[-45deg]'>
						NODE
					</div>
				</motion.div>
			</div>
		</div>
	);

	return (
		<>
			<style
				jsx
				global
			>{`
				@keyframes gradient-shift {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}

				@keyframes pulse-soft {
					0%,
					100% {
						opacity: 0.8;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(1.05);
					}
				}

				@keyframes shimmer {
					0% {
						background-position: -200% center;
					}
					100% {
						background-position: 200% center;
					}
				}

				.text-gradient {
					background: linear-gradient(
						135deg,
						#3b82f6 0%,
						#8b5cf6 25%,
						#06b6d4 50%,
						#10b981 75%,
						#3b82f6 100%
					);
					background-size: 300% 300%;
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
					animation: gradient-shift 4s ease infinite;
				}

				.glass {
					backdrop-filter: blur(16px);
					background: rgba(255, 255, 255, 0.8);
					border: 1px solid rgba(255, 255, 255, 0.2);
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
				}

				.dark .glass {
					background: rgba(17, 24, 39, 0.8);
					border: 1px solid rgba(255, 255, 255, 0.1);
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
				}

				.animate-pulse-soft {
					animation: pulse-soft 3s ease-in-out infinite;
				}
				.text-shimmer {
					background: linear-gradient(
						90deg,
						transparent 0%,
						rgba(255, 255, 255, 0.4) 50%,
						transparent 100%
					);
					background-size: 200% 100%;
					animation: shimmer 3s infinite;
				}

				.hover-lift {
					transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
				}
				.hover-lift:hover {
					transform: translateY(-3px) scale(1.02);
				}
				.perspective-1000 {
					perspective: 1000px;
					transform-style: preserve-3d;
				}

				@media (prefers-reduced-motion: reduce) {
					.text-gradient,
					.text-shimmer,
					.animate-pulse-soft {
						animation: none !important;
					}
					.text-gradient {
						background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
						-webkit-background-clip: text;
						background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}

				.gpu-accelerated {
					transform: translateZ(0);
					will-change: transform;
					backface-visibility: hidden;
				}
			`}</style>

			<section
				ref={containerRef}
				id='hero'
				className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30 pt-20 sm:pt-24 lg:pt-0'
				role='banner'
			>
				{/* Background Effects */}
				<div className='absolute inset-0 z-0'>
					{!prefersReducedMotion && (
						<div
							className='absolute inset-0 opacity-30 transition-all duration-1000 ease-out gpu-accelerated'
							style={{
								background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.08) 50%, transparent 70%)`,
							}}
						/>
					)}

					<div className='absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse-soft' />
					<div
						className='absolute bottom-1/3 right-1/5 w-52 h-52 bg-gradient-to-br from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse-soft'
						style={{ animationDelay: '3s' }}
					/>
				</div>

				{/* Main Content */}
				<div className='relative z-10 min-h-screen'>
					<div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full'>
						<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16'>
							{/* Left Content */}
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								className='space-y-8 z-20 relative'
							>
								{/* Status Badge */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									className='inline-flex items-center glass text-emerald-600 dark:text-emerald-400 px-4 py-2.5 rounded-full text-sm font-semibold'
								>
									<div className='w-2.5 h-2.5 bg-emerald-400 rounded-full mr-2.5 animate-pulse-soft' />
									<Sparkles className='w-4 h-4 mr-2' />
									<span>Available • {currentTime} IST</span>
								</motion.div>

								{/* Main Heading */}
								<div className='space-y-6'>
									<motion.h1
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3, duration: 0.8 }}
										className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'
									>
										<span className='block text-gray-900 dark:text-white mb-4'>
											Hi, I'm{' '}
											<span className='text-gradient relative'>
												{githubData?.user?.name?.split(' ')[0] || 'Sachin'}
												<div className='absolute inset-0 text-shimmer opacity-20' />
											</span>
										</span>

										{/* Professional Title */}
										<span className='block text-gradient font-bold text-3xl sm:text-4xl lg:text-5xl'>
											Frontend Developer
										</span>
									</motion.h1>

									{/* Description */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
										className='text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 space-y-3 max-w-xl'
									>
										<p className='font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-200'>
											{githubData?.user?.bio ||
												'Crafting exceptional digital experiences with modern web technologies'}
										</p>
										<p>
											Specialized in{' '}
											<span className='font-bold text-gradient'>
												React, Next.js & Performance Optimization
											</span>
										</p>
									</motion.div>
								</div>

								{/* CTA Buttons */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
									className='flex flex-col sm:flex-row gap-4 max-w-md'
								>
									<motion.button
										onClick={() => scrollToSection('projects')}
										className='group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-semibold flex items-center space-x-2.5 shadow-lg overflow-hidden hover-lift gpu-accelerated'
										whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
										whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
									>
										<div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
										<Rocket className='w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300' />
										<span className='relative z-10'>View Projects</span>
										<ArrowRight className='w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300' />
									</motion.button>

									<motion.button
										onClick={() => scrollToSection('contact')}
										className='glass hover:bg-white/90 dark:hover:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover-lift'
										whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
										whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
									>
										Get In Touch
									</motion.button>
								</motion.div>

								{/* Social Links */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.9 }}
									className='flex space-x-4'
								>
									{[
										{
											icon: Github,
											href: 'https://github.com/maurya-sachin',
											color: 'hover:text-gray-900 dark:hover:text-white',
										},
										{
											icon: Linkedin,
											href: 'https://www.linkedin.com/in/maurya-sachin/',
											color: 'hover:text-blue-600',
										},
										{
											icon: Mail,
											href: 'mailto:sachinmaurya1710@gmail.com',
											color: 'hover:text-emerald-600',
										},
									].map((social, index) => (
										<motion.a
											key={index}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											className={`p-3 rounded-xl glass text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover-lift gpu-accelerated`}
											whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
											whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.9 + index * 0.1 }}
										>
											<social.icon className='w-5 h-5' />
										</motion.a>
									))}
								</motion.div>

								{/* Footer Info */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.1 }}
									className='flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400'
								>
									<div className='flex items-center space-x-2'>
										<MapPin className='w-4 h-4' />
										<span>{githubData?.user?.location || 'Delhi, India'}</span>
									</div>

									<motion.button
										onClick={downloadResume}
										className='flex items-center space-x-2 bg-gray-900 dark:bg-gray-800 text-white px-4 py-2.5 rounded-lg font-medium hover-lift transition-all duration-300'
										whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
										whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
									>
										<Download className='w-4 h-4' />
										<span>Resume</span>
									</motion.button>
								</motion.div>
							</motion.div>

							{/* Right Content - 3D Scene */}
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4, duration: 0.8 }}
								className='relative h-[500px] lg:h-[600px] w-full flex items-center justify-center'
							>
								{!prefersReducedMotion ? (
									<canvas
										ref={canvasRef}
										className='max-w-full max-h-full'
										style={{
											filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
										}}
									/>
								) : (
									<Scene3DFallback />
								)}

								{/* Glassmorphism overlay for depth */}
								<div className='absolute inset-0 pointer-events-none'>
									<div className='absolute top-1/4 left-1/4 w-20 h-20 glass rounded-full opacity-10 animate-pulse-soft' />
									<div
										className='absolute bottom-1/3 right-1/4 w-28 h-28 glass rounded-full opacity-8 animate-pulse-soft'
										style={{ animationDelay: '2s' }}
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
