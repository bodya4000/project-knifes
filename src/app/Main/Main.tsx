import { FC } from 'react'

import { Articles, KnifeCategories, Lanterns, Welcome } from '@/components'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<>
			<div className={styles.main}>
				<Welcome />
				<KnifeCategories />
				<Articles />
				<Lanterns />
			</div>
		</>
	)
}

export default Main
