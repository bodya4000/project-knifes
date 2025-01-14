import { FC, useState } from 'react';

import useIsMobile from '../../../../hooks/useIsMobile';
import common from '../../../../styles/common.module.scss';
import IbgImage from '../../common/IbgImage/IbgImage';
import styles from './ChoiceAdvice.module.scss';

const ChoiceAdvice: FC = () => {
	const [showMore, setShowmore] = useState<boolean>(false);
	const isMobile = useIsMobile();
	return (
		<section className={styles.advice}>
			<div className={styles.advice__bg}>
				<IbgImage lazy src='assets/images/footer_bg.webp' />
			</div>

			<div className={`${common._container} ${styles.advice__container}`}>
				<h2 className={styles.advice__title}>
					Zlatoust Knives Online Store "ZLATMAX"
				</h2>
				<div
					className={`${styles.advice__text} ${
						showMore && isMobile ? styles.advice__text_show_all : ''
					}`}
				>
					<p>
						When choosing such a product, it's important to consider several key
						factors. Pay special attention to the fact that carving knives,
						which are significantly more expensive than their counterparts, are
						not always of higher quality. Therefore, when selecting a knife,
						take into account the following features:
					</p>

					<p style={{ display: showMore || !isMobile ? 'block' : 'none' }}>
						The handle of such a tool should ensure a firm grip. Additionally,
						the carving knife should not only fit well in the hand but also not
						slip during use, regardless of whether it is clean or dirty and wet.
					</p>

					<p style={{ display: showMore || !isMobile ? 'block' : 'none' }}>
						The second point is sharpening, particularly its type and angle. All
						the products in our catalog feature the most optimal sharpening
						characteristics, achieved using laser technologies.
					</p>

					<p style={{ display: showMore || !isMobile ? 'block' : 'none' }}>
						Another important factor is the attachment of the blade to the
						handle, which must be as reliable as possible to create a solid,
						unified system.
					</p>

					<p style={{ display: showMore || !isMobile ? 'block' : 'none' }}>
						If you are unsure about which carving knife to choose, we recommend
						consulting with our specialists, who will help you make a decision
						and select the product that best suits your needs.
					</p>

					{!showMore && isMobile && (
						<button
							onClick={() => {
								setShowmore(true);
							}}
							className={styles.advice__text_show_more}
						>
							show more
						</button>
					)}

					{showMore && isMobile && (
						<button
							onClick={() => {
								setShowmore(false);
							}}
							className={styles.advice__text_show_more}
						>
							show less
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default ChoiceAdvice;
