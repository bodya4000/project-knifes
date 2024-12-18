import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setAttributeByKeyAndValue } from '../../../../store/catalog';
import { renormalizeLink } from '../../../../utils/LinkUtills';
import CustomLink from '../../common/CustomLink/CustomLink';
import styles from './NestedMenuItem.module.scss';

interface Props {
	onLinkClick: () => void;
	navKey: string;
	navValue: string[];
}

const NestedMenuItem: FC<Props> = ({ navKey, navValue, onLinkClick }) => {
	const dispatch = useDispatch();

	const onClick = (link: string) => {
		onLinkClick();
		dispatch(setAttributeByKeyAndValue({ key: navKey, value: link }));
	};

	return (
		<div className={styles.menu__item}>
			<div className={styles.menu__item_root}>{renormalizeLink(navKey)}</div>

			<nav className={styles.menu__item_nav}>
				{navValue.map((link: string) => {
					return (
						<CustomLink
							propsStyles={styles.menu__item_link}
							key={link}
							onClick={() => onClick(link)}
							link={'/products_catalog'}
						>
							{renormalizeLink(link)}
						</CustomLink>
					);
				})}
			</nav>
		</div>
	);
};

export default NestedMenuItem;
