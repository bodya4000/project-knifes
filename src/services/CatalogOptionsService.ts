import axios, { AxiosResponse } from 'axios';
import { IOptions } from '../models/Catalog';

class CatalogOptionsService {
	private URL = 'http://localhost:8081/options';

	getOptions(): Promise<AxiosResponse<IOptions>> {
		return axios.get<IOptions>(this.URL);
	}
}

export default new CatalogOptionsService();
