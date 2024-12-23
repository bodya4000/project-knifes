import { Bounce, toast } from 'react-toastify';

class NotificationsService {
	public success(message: string) {
		return toast.success(message, {
			position: 'top-center',
			autoClose: 500,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		});
	}

	public error(message: string) {
		return toast.error(message, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: false,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		});
	}
}

export default new NotificationsService();
