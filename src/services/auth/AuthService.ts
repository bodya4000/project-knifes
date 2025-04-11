import { AuthHttpService, AuthTokenService } from '.';
import NotificationsService from '../NotificationsService';

class AuthService {
	private handleAuthResponse(data: any, onSuccess: CallableFunction): boolean {
		const { status, message, body } = data;
		if (status === 200 && body?.accessToken) {
			onSuccess();
			AuthTokenService.saveToken(body.accessToken);
			NotificationsService.success(message);
			return true;
		}
		return false;
	}

	public async login(phoneNumber: string, password: string, onSuccess: CallableFunction) {
		const { data } = await AuthHttpService.login(phoneNumber, password);
		return this.handleAuthResponse(data, onSuccess);
	}

	public async register(
		phoneNumber: string,
		password: string,
		onSuccess: CallableFunction
	): Promise<boolean> {
		const { data } = await AuthHttpService.register(phoneNumber, password);
		return this.handleAuthResponse(data, onSuccess);
	}
}

export default new AuthService();
