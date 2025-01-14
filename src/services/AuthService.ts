import AxiosService from './AxiosService';

class AuthService {
	private BASE_URL = '/user/auth';

	public login(phoneNumber: string, password: string) {
		return AxiosService.post(this.BASE_URL, { phoneNumber, password });
	}

	public register(phoneNumber: string, password: string) {
		return AxiosService.post(`${this.BASE_URL}/create`, {
			phoneNumber,
			password,
		});
	}

	public async ping() {
		const response = await AxiosService.post(`${this.BASE_URL}/ping`);
		const {data} = response
		return !!data.body.ping;
	}
}

export default new AuthService();
