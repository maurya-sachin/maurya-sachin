// components/Skeletons.jsx
'use client';

import React from 'react';

const Skeleton = ({ className = '' }) => (
	<div
		className={`bg-gray-200 dark:bg-gray-800 animate-pulse rounded ${className}`}
	/>
);

export const HeroSkeleton = () => (
	<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800'>
		<div className='container mx-auto px-4'>
			<div className='grid lg:grid-cols-2 gap-12 items-center'>
				<div className='space-y-6'>
					<Skeleton className='h-6 w-24' />
					<Skeleton className='h-14 w-full max-w-lg' />
					<Skeleton className='h-14 w-4/5 max-w-md' />
					<div className='space-y-3'>
						<Skeleton className='h-4 w-full max-w-xl' />
						<Skeleton className='h-4 w-5/6 max-w-lg' />
					</div>
					<div className='flex gap-4 pt-4'>
						<Skeleton className='h-12 w-32' />
						<Skeleton className='h-12 w-28' />
					</div>
				</div>
				<div className='relative'>
					<Skeleton className='aspect-square max-w-lg mx-auto' />
				</div>
			</div>
		</div>
	</div>
);

export const SectionSkeleton = ({ rows = 3 }) => (
	<div className='py-20'>
		<div className='container mx-auto px-4'>
			<div className='space-y-6'>
				<Skeleton className='h-8 w-48 mx-auto' />
				<Skeleton className='h-4 w-96 mx-auto' />
				<div className='grid gap-6 mt-12'>
					{[...Array(rows)].map((_, i) => (
						<div
							key={i}
							className='space-y-3'
						>
							<Skeleton className='h-6 w-3/4' />
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-4 w-5/6' />
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export const ChartSkeleton = () => (
	<div className='w-full h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg p-6'>
		<div className='space-y-4'>
			<Skeleton className='h-6 w-40' />
			<Skeleton className='h-80 w-full' />
			<div className='flex justify-between'>
				{[...Array(5)].map((_, i) => (
					<Skeleton
						key={i}
						className='h-4 w-12'
					/>
				))}
			</div>
		</div>
	</div>
);
