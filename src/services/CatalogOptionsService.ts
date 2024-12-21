import { AxiosResponse } from 'axios';
import { IOptions } from '../models/Catalog';
import AxiosService from './AxiosService';

class CatalogOptionsService {
	private URL = '/options';

	getOptions(): Promise<AxiosResponse<IOptions>> {
		return AxiosService.get<IOptions>(this.URL);
	}
}

export default new CatalogOptionsService();
