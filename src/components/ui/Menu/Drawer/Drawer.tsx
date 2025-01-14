import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { drawerNav } from '../../../../assets/data/navigations';
import { changeMenuState } from '../../../../store/menu';
import { UserState } from '../../../../store/store';
import CustomImage from '../../common/CustomImage/CustomImage';
import styles from './Drawer.module.scss';
import NestedLink from './NestedLink/NestedLink';

interface Props {}

const Drawer: FC<Props> = ({}) => {
	const isDrawerOpen = useSelector((state: UserState) => state.menu.open);
	const dispatch = useDispatch();
	const onCloseClick = () => {
		dispatch(changeMenuState());
	};
	return (
		<div
			style={{ right: isDrawerOpen ? 0 : '-100%' }}
			className={styles.drawer}
		>
			<div className={styles.drawer__container}>
				<CustomImage
					onClick={onCloseClick}
					propsStyles={styles.drawer__close}
					src='assets/images/close.svg'
					alt='close'
				/>

				<div className={styles.drawer__menu}>
					<ul className={styles.drawer__list}>
						{Object.entries(drawerNav).map(([key, value], index) => (
							<li key={index}>
								<NestedLink rootLink={key} sublinks={value} />
								{/* <CustomLink propsStyles={styles.drawer__link} link={key}>
									<div>{renormalizeLink(key)}</div>
									<CustomImage
										alt='collapse'
										src='assets/images/collapse.svg'
									/>
								</CustomLink> */}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
