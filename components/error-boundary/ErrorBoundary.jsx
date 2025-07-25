// components/ErrorBoundary.jsx
'use client';

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RefreshCw } from 'lucide-react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
	<div className='min-h-[400px] flex items-center justify-center p-8'>
		<div className='text-center space-y-4 max-w-md'>
			<div className='w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center'>
				<RefreshCw className='w-8 h-8 text-red-600 dark:text-red-400' />
			</div>
			<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
				Something went wrong
			</h3>
			<p className='text-gray-600 dark:text-gray-400 text-sm'>
				{process.env.NODE_ENV === 'development'
					? error.message
					: 'Please try refreshing the page'}
			</p>
			<button
				onClick={resetErrorBoundary}
				className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
			>
				Try Again
			</button>
		</div>
	</div>
);

export const AppErrorBoundary = ({ children }) => (
	<ErrorBoundary
		FallbackComponent={ErrorFallback}
		onError={(error) => {
			console.error('App Error:', error);
		}}
	>
		{children}
	</ErrorBoundary>
);
