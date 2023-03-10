import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
