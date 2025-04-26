import { FC } from 'react'

import Lottie from 'lottie-react'

import videoBg from '@/assets/videos/welcome/knifes_for_cooking.mp4'
import animation from '@/assets/videos/welcome/welcome_cook_animated.json'
import { BrightYellowButton } from '@/components'

import common from '../../../../../styles/common.module.scss'
import styles from './CookBanner.module.scss'

const CookBanner: FC = () => {
	return (
		<div
			style={{ height: '100%' }}
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

			<div className={`${common._container} ${styles.body}`}>
				<div className={`${styles.content}`}>
					<h1>Cook like a professional chef – using the perfect tool!</h1>

					<p>Find the most Comfortable knives exact for you</p>

					<BrightYellowButton
						propsStyles={styles.btn}
						text="Go get knives!"
						to="/"
					/>
				</div>

				<div className={styles.animation}>
					<Lottie
						animationData={animation}
						className={styles.animation_item}
					/>
				</div>
			</div>
		</div>
	)
}

export default CookBanner
