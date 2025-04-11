import { AuthService } from './auth';

class ApplicationService {
	public async login(phoneNumber: string, password: string, onSuccess: CallableFunction) {
		return AuthService.login(phoneNumber, password, onSuccess);
	}

	public async register(phoneNumber: string, password: string, onSuccess: CallableFunction) {
		return AuthService.register(phoneNumber, password, onSuccess);
	}
}

export default new ApplicationService();
