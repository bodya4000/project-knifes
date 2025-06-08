import { FC } from 'react'

import { HeaderBottom, HeaderNestedMenu, HeaderTop } from '@/components'

import styles from './Header.module.scss'

interface Props {}

const Header: FC<Props> = ({}) => {
	return (
		<>
			<header className={styles.header}>
				<HeaderTop />
				<HeaderBottom />
				<HeaderNestedMenu />
			</header>
		</>
	)
}

export default Header
