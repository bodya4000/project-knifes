import axios, { AxiosInstance } from 'axios';

class AxiosService {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://192.168.1.102:8081',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        this.instance.interceptors.request.use(
            (config) => {
                console.log('Request:', config);
                return config;
            },
            (error) => {
                console.error('Request Error:', error);
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response) => {
                console.log('Response:', response);
                return response;
            },
            (error) => {
                console.error('Response Error:', error);
                return Promise.reject(error);
            }
        );
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }
}

export default new AxiosService().getInstance();
