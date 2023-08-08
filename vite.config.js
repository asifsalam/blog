import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('vite').UserConfig} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	plugins: [sveltekit()]
};

export default config;
