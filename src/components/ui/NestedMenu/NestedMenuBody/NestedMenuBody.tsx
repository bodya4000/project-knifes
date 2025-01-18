import { FC } from 'react';
import { PCBottomHeaderNav } from '../../../../assets/data/navigations';
import common from '../../../../styles/common.module.scss';
import NestedMenuItem from '../NestedMenuItem/NestedMenuItem';
import styles from '../NestedMenu.module.scss';

interface NestedMenuBodyProps {
	active: keyof PCBottomHeaderNav | null;
	nav: PCBottomHeaderNav;
	onLinkClick: () => void;
}

const NestedMenuBody: FC<NestedMenuBodyProps> = ({ active, nav, onLinkClick }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let selectedNavKey: Record<string, any> = {};
	if (active !== null) {
		selectedNavKey = nav?.[active] || {};
	}
	return (
		<div className={styles['nested_menu__bottom']}>
			<div className={`${common._container}`}>
				<div className={styles['nested_menu__body']}>
					<div className={styles['nested_menu__line']}></div>
					{Object.entries(selectedNavKey).map(([key, value]) => (
						<NestedMenuItem navKey={key} onLinkClick={onLinkClick} navValue={value} key={key} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NestedMenuBody;
