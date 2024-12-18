import { FC } from 'react';
import PCHeader from './PCHeader';

import common from '../../../styles/common.module.scss';
import NestedMenu from '../NestedMenu/NestedMenu';
import styles from './Header.module.scss';
import HeaderBottom from './HeaderBottom';
import MobHeader from './MobHeader';

interface Props {}

const Header: FC<Props> = ({}) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__top}>
					<div className={`${common._container}`}>
						<PCHeader propsStyles={styles.header_pc} />
						<MobHeader propsStyles={styles.header_mob} />
					</div>
				</div>
				<HeaderBottom />
				<NestedMenu />
			</header>
		</>
	);
};

export default Header;
