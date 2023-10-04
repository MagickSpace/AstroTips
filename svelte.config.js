import { vitePreprocess } from '@astrojs/svelte';
import adapter from "svelte-adapter-bun";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter(),
	},
	preprocess: vitePreprocess(),
  };
  
  export default config;