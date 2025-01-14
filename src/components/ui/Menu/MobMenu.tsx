import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeMenuState } from '../../../store/menu';
import { normalizeLink } from '../../../utils/LinkUtills';
import CustomImage from '../common/CustomImage/CustomImage';
import CustomLink from '../common/CustomLink/CustomLink';
import Drawer from './Drawer/Drawer';
import styles from './Menu.module.scss';

interface Props {
	nav: string[];
	propsStyles?: string;
}

const MobMenu: FC<Props> = ({ propsStyles, nav }) => {
	const [active, setActive] = useState('/');

	const dispacth = useDispatch();

	const onMenuCLick = () => {
		dispacth(changeMenuState());
	};
	return (
		<nav className={`${propsStyles} ${styles.menu_mob}`}>
			<ul className={styles.menu_mob__list}>
				{nav.map((link: string) => {
					return (
						<li key={link}>
							<CustomLink
								active={active === link}
								onClick={() => setActive(link)}
								link={link}
							>
								<CustomImage
									src={`assets/images/${normalizeLink(link)}.svg`}
									alt={link}
								/>
							</CustomLink>
						</li>
					);
				})}

				<li key={'menu'}>
					<button className={styles.menu_mob__burger} onClick={onMenuCLick}>
						<CustomImage src='assets/images/menu.svg' alt='menu' />
					</button>
				</li>
			</ul>

			<Drawer />
		</nav>
	);
};

export default MobMenu;
