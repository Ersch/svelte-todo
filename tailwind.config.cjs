import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			colors: {
				google: {
					'text-gray': '#3c4043',
					'button-blue': '#1a73e8',
					'button-blue-hover': '#5195ee',
					'button-dark': '#202124',
					'button-dark-hover': '#555658',
					'button-border-light': '#dadce0',
					'logo-blue': '#4285f4',
					'logo-green': '#34a853',
					'logo-yellow': '#fbbc05',
					'logo-red': '#ea4335',
				},
			},
		}
	},

	plugins: [
		skeleton
	]
};

module.exports = config;