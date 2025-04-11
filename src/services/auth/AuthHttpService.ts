import AxiosService from '../AxiosService';

class AuthHttpService {
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
}

export default new AuthHttpService();
