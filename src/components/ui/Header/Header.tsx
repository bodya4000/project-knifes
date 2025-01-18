import { FC, lazy, Suspense } from 'react';

import useIsMobile from '../../../hooks/useIsMobile';
import common from '../../../styles/common.module.scss';
import AI from '../common/AI/AI';
import NestedMenu from '../NestedMenu/NestedMenu';
import styles from './Header.module.scss';
import HeaderBottom from './HeaderBottom';

const MobHeader = lazy(() => import('./MobHeader'));
const PCHeader = lazy(() => import('./PCHeader'));

const Header: FC = () => {
	const isMobile = useIsMobile();
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__top}>
					<div className={`${common._container}`}>
						{!isMobile ? (
							<Suspense fallback={<AI color='white' />}>
								<PCHeader propsStyles={styles.header_pc} />
							</Suspense>
						) : (
							<Suspense fallback={<AI color='white' />}>
								<MobHeader propsStyles={styles.header_mob} />
							</Suspense>
						)}
					</div>
				</div>
				<HeaderBottom />
				<NestedMenu />
			</header>
		</>
	);
};

export default Header;
