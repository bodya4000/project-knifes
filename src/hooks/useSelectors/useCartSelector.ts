import { useSelector } from 'react-redux';
import { UserState } from '../../store/store.ts';

const useCartSelector = () => {
	return useSelector((state: UserState) => state.cart);
};

export default useCartSelector;
