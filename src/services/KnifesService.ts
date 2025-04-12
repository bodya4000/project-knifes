import { IKnife, IKnifeDetail, IKnifeOptionsRequest } from '../models/Knife'
import AxiosService from './AxiosService'

class KnivesService {
	private URL = '/knives'

	private __parseQueryParamObjToString = (
		params: Record<string, string | number | boolean>
	): string => {
		const searchParams = new URLSearchParams()
		Object.entries(params).forEach(([key, value]) =>
			searchParams.append(key, value.toString())
		)
		return '?' + searchParams.toString()
	}

	public async getKnives(
		body: IKnifeOptionsRequest,
		params: Record<string, string | number | boolean>
	): Promise<{ knives: IKnife[]; totalPages: number }> {
		const queryParamsString = this.__parseQueryParamObjToString(params)
		const response = await AxiosService.post(
			`${this.URL}${queryParamsString}`,
			body
		)
		return response.data
	}

	public async getKnifeById(id: number): Promise<IKnifeDetail> {
		const response = await AxiosService.get(`${this.URL}/${id}`)
		return response.data
	}
}

export default new KnivesService()
