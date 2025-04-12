import axios, { AxiosInstance } from 'axios'

import { AuthTokenService } from '.'

class AxiosService {
	private instance: AxiosInstance

	constructor() {
		this.instance = axios.create({
			baseURL: 'https://project-knifes-back.onrender.com',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})

		this.setupInterceptors()
	}

	private setupInterceptors() {
		this.instance.interceptors.request.use(
			async config => {
				const token = await AuthTokenService.getToken()
				if (token) {
					config.headers.Authorization = `Bearer ${token}`
				}
				return config
			},
			error => {
				console.error('Request Error:', error)
				return Promise.reject(error)
			}
		)

		this.instance.interceptors.response.use(
			response => response,
			error => Promise.reject(error)
		)
	}

	getInstance(): AxiosInstance {
		return this.instance
	}
}

export default new AxiosService().getInstance()
