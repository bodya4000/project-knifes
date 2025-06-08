import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@services': path.resolve(__dirname, './src/services')
		}
	}
})
