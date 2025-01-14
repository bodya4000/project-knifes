import { useEffect } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import NotificationsService from '../services/NotificationsService';

const useFormErrorNotifications = <T extends FieldValues>(errors: FieldErrors<T>): void => {
	useEffect(() => {
		const firstErrorKey = Object.keys(errors).find(key => {
			const error = errors[key as keyof T]?.message;
			return typeof error === 'string';
		});

		if (firstErrorKey) {
			const firstErrorMessage = errors[firstErrorKey as keyof T]?.message;
			if (typeof firstErrorMessage === 'string') {
				NotificationsService.error(firstErrorMessage);
			}
		}
	}, [errors]);
};

export default useFormErrorNotifications;
