import axios, { AxiosInstance } from 'axios'

import { AuthTokenService } from '.'

class AxiosService {
	private instance: AxiosInstance

	constructor() {
		this.instance = axios.create({
			baseURL: 'https://project-knifes-back.onrender.com',
			// baseURL: 'http://localhost:8081',
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
				console.log(token)

				config.headers.Authorization = `Bearer ${token}`
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)
		this.instance.interceptors.response.use(
			response => {
				return response
			},
			error => {
				console.log('errorrr!!!')
				AuthTokenService.clearToken()
				location.href = '/project-knifes/'
				return Promise.reject(error)
			}
		)
	}

	getInstance(): AxiosInstance {
		return this.instance
	}
}

export default new AxiosService().getInstance()
