import axios, { AxiosInstance } from 'axios';

class AxiosService {
	private instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: 'https://project-knifes-back.onrender.com',
			// baseURL: 'http://localhost:8081',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		this.instance.interceptors.request.use(
			config => {
				const token = localStorage.getItem('accessToken');
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			error => {
				console.error('Request Error:', error);
				return Promise.reject(error);
			}
		);

		this.instance.interceptors.response.use(
			response => {
				return response;
			},
			error => {
				localStorage.removeItem('accessToken');
				// window.location.href = '/';
				return Promise.reject(error);
			}
		);
	}

	getInstance(): AxiosInstance {
		return this.instance;
	}
}

export default new AxiosService().getInstance();
