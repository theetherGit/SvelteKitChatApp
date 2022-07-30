import { sveltekit } from '@sveltejs/kit/vite';
import { webSocketServer } from './webSocket.js';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	plugins: [sveltekit(), webSocketServer]
};

export default config;
