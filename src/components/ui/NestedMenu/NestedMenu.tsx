import { FC, useState } from 'react';
import {
	PCBottomHeaderNav,
	pcBottomHeaderNav,
} from '../../../assets/data/navigations';
import common from '../../../styles/common.module.scss';
import { renormalizeLink } from '../../../utils/LinkUtills';
import PCMenu from '../Menu/PCMenu';
import styles from './NestedMenu.module.scss';
import NestedMenuItem from './NestedMenuItem/NestedMenuItem';

const NestedMenu: FC = () => {
	const [active, setActive] = useState<keyof PCBottomHeaderNav | null>(null);
	const nav = pcBottomHeaderNav;

	const [nestedOpen, setNestedOpen] = useState<boolean>(false);

	const changeActive = (link: keyof PCBottomHeaderNav | null) => {
		if (active === link) {
			setActive(null);
			setNestedOpen(false);
		} else {
			setActive(link);
			setNestedOpen(true);
		}
	};

	let selectedNavKey: Record<string, any> = {};
	if (active !== null) {
		selectedNavKey = pcBottomHeaderNav?.[active] || {};
	}

	const renormalizedLinks = (links: string[]): string[] => {
		return links.map(link => renormalizeLink(link));
	};

	return (
		<div className={styles['nested_menu']}>
			<div
				className={`${common._container} ${styles['nested_menu__container']}`}
			>
				<div className={styles['nested_menu__top']}>
					<PCMenu
						listStyles={styles['nested_menu__top_list']}
						linkStyles={styles['nested_menu__top_link']}
						disablesLinks={true}
						nav={renormalizedLinks(Object.keys(nav))}
						active={active}
						setActive={changeActive}
						activeLinkStyle={styles.nested_menu__top_link_active}
					/>
				</div>

				{nestedOpen && (
					<div className={styles['nested_menu__bottom']}>
						<div className={`${common._container}`}>
							<div className={styles['nested_menu__body']}>
								<div className={styles['nested_menu__line']}></div>
								{Object.entries(selectedNavKey).map(([key, value]) => (
									<NestedMenuItem
										navKey={key}
										onLinkClick={() => {
											changeActive(active);
											setNestedOpen(false);
										}}
										navValue={value}
										key={key}
									/>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NestedMenu;
