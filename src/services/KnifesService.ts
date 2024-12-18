import { IKnife, IKnifeDetail, IKnifeOptionsRequest } from '../models/Knife';
import AxiosService from './AxiosService';

class KnifesService {
	private URL = '/knives';

	private __parseQueryParamObjToString = (
		params: Record<string, string | number | boolean>
	): string => {
		return (
			'?' +
			Object.keys(params)
				.map(
					key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
				)
				.join('&')
		);
	};

	public async getKnives(
		body: IKnifeOptionsRequest,
		params: Record<string, string | number | boolean>
	) {
		const queryParamsString = this.__parseQueryParamObjToString(params);
		return AxiosService.post<{ knives: IKnife[]; totalPages: number }>(
			`${this.URL}${queryParamsString}`,
			body
		);
	}

	public async getKniveById(id: number) {
		return AxiosService.get<IKnifeDetail>(`${this.URL}/${id}`);
	}
}

export default new KnifesService();
