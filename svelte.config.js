import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		experimental: {
			inspector: true,
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				post: 'src/routes/test/post.svelte'
			},
		})
	]
};

export default config;
