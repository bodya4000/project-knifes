import { FC } from 'react';
import { mobTopHeaderNav } from '../../../assets/data/navigations';
import MobMenu from '../Menu/MobMenu';

interface Props {
	propsStyles: string;
}

const MobHeader: FC<Props> = ({ propsStyles }) => {
	return <MobMenu nav={mobTopHeaderNav} propsStyles={propsStyles} />;
};

export default MobHeader;
