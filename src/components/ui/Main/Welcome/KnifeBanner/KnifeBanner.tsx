import { FC, useEffect, useRef } from 'react'

import gsap from 'gsap'

import {
	BrightYellowButton,
	CustomImage,
	Feature,
	IbgImage,
	Line
} from '@/components'

import common from '../../../../../styles/common.module.scss'
import styles from './KnifeBanner.module.module.scss'

const KnifeBanner: FC = () => {
	const imageRef = useRef<HTMLDivElement | null>(null)
	const titleRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (imageRef.current && titleRef.current) {
			gsap.fromTo(
				imageRef.current,
				{ y: 200 },
				{ y: 0, duration: 1, ease: 'power4.out' }
			)
			gsap.fromTo(
				titleRef.current,
				{ x: -200 },
				{ x: 0, duration: 1, ease: 'power4.out' }
			)
		}
	}, [])
	return (
		<div className={styles.welcome}>
			<div className={styles.welcome__bg_image}>
				<IbgImage src="assets/images/welcome_bg.png" />
			</div>
			<Line
				pimp={'80%'}
				left={'17%'}
			/>
			<Line left={'25%'} />
			<Line
				pimp={'10%'}
				left={'37%'}
			/>
			<Line left={'45%'} />
			<Line
				pimp={'60%'}
				left={'57%'}
			/>
			<Line left={'65%'} />
			<Line left={'77%'} />
			<Line left={'85%'} />
			<Line left={'97%'} />

			<div
				className={`
					${common._container}
					${styles.welcome__container}`}
			>
				<div className={styles.welcome__top_container}>
					<div ref={titleRef} className={styles.welcome__info}>
						<h1 className={styles.welcome__title}>
							<span>Online store of certified</span> Zlatoust knives
						</h1>

						<div className={styles.welcome__text}>
							<span className={styles.welcome__text_1}>
								Welcome to the official website of "ZLATMAKS"! In our store
							</span>

							<br />
							<span className={styles.welcome__text_2}>
								The widest selection of Zlatoust knives from Zlatoust
							</span>

							<br />
							<span className={styles.welcome__text_3}>
								Weapons Factories and companies, we are official suppliers.
							</span>
						</div>

						<div className={styles.welcome__more}>
							<BrightYellowButton
								text="More"
								to="/"
							/>
						</div>
					</div>

					<div className={styles.welcome__image}>
						<div ref={imageRef}>
							<CustomImage
								propsStyles={styles.welcome__knifes}
								src="assets/images/knifes.svg"
								alt="knifes"
							/>
						</div>

						<CustomImage
							propsStyles={`${styles.welcome__ellipse}`}
							src="assets/images/ellipse.svg"
							alt="ellipse"
						/>
						<CustomImage
							propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_1}`}
							src="assets/images/pimp_big.svg"
							alt="ellipse"
						/>
						<CustomImage
							propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_2}`}
							src="assets/images/pimp_big.svg"
							alt="ellipse"
						/>
						<CustomImage
							propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_3}`}
							src="assets/images/pimp_big.svg"
							alt="ellipse"
						/>
					</div>
				</div>

				<div className={styles.welcome__bottom_container}>
					<Feature
						imageSrc="assets/images/features/guarantee.svg"
						alt="guarantee icon"
					>
						100% money-back guarantee
					</Feature>
					<Feature
						imageSrc="assets/images/features/delivery.svg"
						alt="delivery icon"
					>
						Delivery across Ukraine, Poland, and Germany
					</Feature>
					<Feature
						imageSrc="assets/images/features/apply.svg"
						alt="apply icon"
					>
						Ability to place an order without registration
					</Feature>
					<Feature
						imageSrc="assets/images/features/sale.svg"
						alt="sales icon"
					>
						Discounts for regular customers
					</Feature>
				</div>
			</div>
		</div>
	)
}

export default KnifeBanner
