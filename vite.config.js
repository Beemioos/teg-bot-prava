import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	base: './', // важное исправление, чтобы работало на Netlify

	server: {
		headers: {
			'Content-Security-Policy':
				"script-src 'self' 'unsafe-inline' https://telegram.org",
		},
	},
	build: {
		outDir: 'dist', // Убедись, что сборка идёт в папку dist
	},
})
