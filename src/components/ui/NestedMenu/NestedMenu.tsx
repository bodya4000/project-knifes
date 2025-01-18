import { FC, lazy, Suspense, useCallback, useState } from 'react';
import { pcBottomHeaderNav as nav, PCBottomHeaderNav } from '../../../assets/data/navigations';
import common from '../../../styles/common.module.scss';
import { renormalizeLink } from '../../../utils/LinkUtills';
import PCMenu from '../Menu/PCMenu';
import styles from './NestedMenu.module.scss';

const NestedMenuBody = lazy(() => import('./NestedMenuBody/NestedMenuBody'));

const NestedMenu: FC = () => {
	const [active, setActive] = useState<keyof PCBottomHeaderNav | null>(null);
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

	const renormalizedLinks = useCallback((links: string[]): string[] => {
		return links.map(link => renormalizeLink(link));
	}, []);

	return (
		<div className={styles['nested_menu']}>
			<div className={`${common._container} ${styles['nested_menu__container']}`}>
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
					<Suspense>
						<NestedMenuBody
							onLinkClick={() => {
								changeActive(active);
								setNestedOpen(false);
							}}
							active={active}
							nav={nav}
						/>
					</Suspense>
				)}
			</div>
		</div>
	);
};

export default NestedMenu;
