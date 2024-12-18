import { FC, ReactNode } from 'react';
import { PCBottomHeaderNav } from '../../../assets/data/navigations';
import { normalizeLink } from '../../../utils/LinkUtills';
import CustomLink from '../common/CustomLink/CustomLink';
import styles from './Menu.module.scss';

interface Props {
	nav?: string[];
	nestedNav?: { [key: string]: string[] | { [key: string]: string[] } };
	propsStyles?: string;
	linkStyles?: string;
	listStyles?: string;
	children?: ReactNode;
	disablesLinks?: boolean;
	disablesClicks?: boolean;
	active: string | null;
	setActive: (link: keyof PCBottomHeaderNav) => void;
	activeLinkStyle?: string;
}

const PCMenu: FC<Props> = ({
	nav,
	propsStyles = '',
	linkStyles = '',
	listStyles = '',
	children,
	disablesLinks = false,
	disablesClicks = false,
	active,
	setActive,
	activeLinkStyle = '',
}) => {
	if (!nav || !Array.isArray(nav)) {
		return <div style={{ color: 'red' }}>Loading...</div>;
	}

	return (
		<div className={`${propsStyles} ${styles.menu_pc}`}>
			<ul className={`${styles.menu_pc__list} ${listStyles}`}>
				{children
					? children
					: nav.map(link => (
							<li key={link}>
								<CustomLink
									noRedirect={disablesLinks && disablesLinks}
									onClick={() =>
										disablesClicks
											? {}
											: setActive(
													normalizeLink(link) as keyof PCBottomHeaderNav
											  )
									}
									active={active === link}
									link={link}
									propsStyles={`${linkStyles} ${
										active === normalizeLink(link) && activeLinkStyle
									}`}
								>
									{link}
								</CustomLink>
							</li>
					  ))}
			</ul>
		</div>
	);
};

export default PCMenu;
