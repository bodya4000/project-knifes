import { FC } from 'react';

import common from '../../../../styles/common.module.scss';
import BrightYellowButton from '../../common/BrightYellowButton/BrightYellowButton';
import CustomImage from '../../common/CustomImage/CustomImage';
import IbgImage from '../../common/IbgImage/IbgImage';
import Feature from './Feature/Feature';
import Line from './Line/Line';
import styles from './Welcome.module.module.scss';

const Welcome: FC = () => {
	return (
		<section className={styles.welcome}>
			<div className={styles.welcome__bg_image}>
				<IbgImage lazy src='assets/images/welcome_bg.webp' />
			</div>
			<Line pimp={'80%'} left={'17%'} />
			<Line left={'25%'} />
			<Line pimp={'10%'} left={'37%'} />
			<Line left={'45%'} />
			<Line pimp={'60%'} left={'57%'} />
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
					<div className={styles.welcome__info}>
						<h1 className={styles.welcome__title}>
							<span>Online store of certified</span> Zlatoust knives
						</h1>

						<div className={styles.welcome__text}>
							<span className={styles.welcome__text_1}>Welcome to the official website of "ZLATMAKS"! In our store</span>

							<br />
							<span className={styles.welcome__text_2}>The widest selection of Zlatoust knives from Zlatoust</span>

							<br />
							<span className={styles.welcome__text_3}>Weapons Factories and companies, we are official suppliers.</span>
						</div>

						<div className={styles.welcome__more}>
							<BrightYellowButton text='See knives in catalog' to='../products_catalog' />
						</div>
					</div>

					<div className={styles.welcome__image}>
						<CustomImage propsStyles={styles.welcome__knifes} src='assets/images/knifes.svg' alt='knifes' />
						<CustomImage propsStyles={`${styles.welcome__ellipse}`} src='assets/images/ellipse.svg' alt='ellipse' />
						<CustomImage propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_1}`} src='assets/images/pimp_big.svg' alt='ellipse' />
						<CustomImage propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_2}`} src='assets/images/pimp_big.svg' alt='ellipse' />
						<CustomImage propsStyles={`${styles.welcome__pimp} ${styles.welcome__pimp_3}`} src='assets/images/pimp_big.svg' alt='ellipse' />
					</div>
				</div>

				<div className={styles.welcome__bottom_container}>
					<Feature imageSrc='assets/images/features/guarantee.svg' alt='guarantee icon'>
						100% money-back guarantee
					</Feature>
					<Feature imageSrc='assets/images/features/delivery.svg' alt='delivery icon'>
						Delivery across Ukraine, Poland, and Germany
					</Feature>
					<Feature imageSrc='assets/images/features/apply.svg' alt='apply icon'>
						Ability to place an order without registration
					</Feature>
					<Feature imageSrc='assets/images/features/sale.svg' alt='sales icon'>
						Discounts for regular customers
					</Feature>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
