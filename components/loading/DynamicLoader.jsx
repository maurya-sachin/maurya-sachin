// components/DynamicSections.jsx
'use client';

import dynamic from 'next/dynamic';

// Simple skeleton loader
const SectionSkeleton = ({ rows = 3 }) => (
	<div className='py-20'>
		<div className='container mx-auto px-4'>
			<div className='space-y-6 animate-pulse'>
				<div className='h-8 bg-gray-200 dark:bg-gray-800 rounded w-48 mx-auto' />
				<div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-96 mx-auto' />
				<div className='grid gap-6 mt-12'>
					{[...Array(rows)].map((_, i) => (
						<div
							key={i}
							className='space-y-3'
						>
							<div className='h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4' />
							<div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-full' />
							<div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6' />
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

const HeroSkeleton = () => (
	<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800'>
		<div className='container mx-auto px-4'>
			<div className='grid lg:grid-cols-2 gap-12 items-center'>
				<div className='space-y-6 animate-pulse'>
					<div className='h-6 bg-gray-200 dark:bg-gray-800 rounded w-24' />
					<div className='h-14 bg-gray-200 dark:bg-gray-800 rounded w-full max-w-lg' />
					<div className='h-14 bg-gray-200 dark:bg-gray-800 rounded w-4/5 max-w-md' />
					<div className='space-y-3'>
						<div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-full max-w-xl' />
						<div className='h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 max-w-lg' />
					</div>
					<div className='flex gap-4 pt-4'>
						<div className='h-12 bg-gray-200 dark:bg-gray-800 rounded w-32' />
						<div className='h-12 bg-gray-200 dark:bg-gray-800 rounded w-28' />
					</div>
				</div>
				<div className='relative'>
					<div className='aspect-square max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 rounded animate-pulse' />
				</div>
			</div>
		</div>
	</div>
);

const ChartSkeleton = () => (
	<div className='w-full h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg p-6 animate-pulse'>
		<div className='space-y-4'>
			<div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-40' />
			<div className='h-80 bg-gray-200 dark:bg-gray-700 rounded w-full' />
			<div className='flex justify-between'>
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-12'
					/>
				))}
			</div>
		</div>
	</div>
);

// Dynamic imports with loading states
export const DynamicHeroSection = dynamic(() => import('../HeroSection'), {
	ssr: false,
	loading: () => <HeroSkeleton />,
});

export const DynamicAboutSection = dynamic(() => import('../AboutSection'), {
	loading: () => <SectionSkeleton rows={2} />,
});

export const DynamicSkillsSection = dynamic(() => import('../SkillsSection'), {
	loading: () => <SectionSkeleton rows={3} />,
});

export const DynamicExperienceSection = dynamic(
	() => import('../ExperienceSection'),
	{
		loading: () => <SectionSkeleton rows={2} />,
	}
);

export const DynamicProjectsSection = dynamic(
	() => import('../ProjectsSection'),
	{
		loading: () => <SectionSkeleton rows={4} />,
	}
);

export const DynamicGitHubStatsSection = dynamic(
	() => import('../GitHubStatsSection'),
	{
		loading: () => <ChartSkeleton />,
	}
);

export const DynamicBlogSection = dynamic(() => import('../BlogSection'), {
	loading: () => <SectionSkeleton rows={3} />,
});

export const DynamicContactSection = dynamic(
	() => import('../ContactSection'),
	{
		loading: () => <SectionSkeleton rows={2} />,
	}
);
