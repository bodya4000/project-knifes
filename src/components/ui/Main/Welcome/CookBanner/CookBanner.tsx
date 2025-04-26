import { FC } from 'react'

import videoBg from '@/assets/videos/welcome/knifes_for_cooking.mp4'

import styles from './CookBanner.module.scss'

const CookBanner: FC = () => {
	return (
		<div
			style={{ height: 800 }}
			className={styles.banner}
		>
			<video
				autoPlay
				loop
				muted
				src={videoBg}
				className={styles.video}
			></video>
			<div className={styles.overlay}></div>
		</div>
	)
}

export default CookBanner
