import { FC } from 'react'

import common from '@styles/common.module.scss'

import { HeaderBottom, MobHeader, PCHeader } from '@components/ui'

import NestedMenu from '../NestedMenu/NestedMenu'
import styles from './Header.module.scss'

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
	)
}

export default Header
