import { FC } from 'react';

import BrightYellowButton from '../../common/BrightYellowButton/BrightYellowButton';
import CustomImage from '../../common/CustomImage/CustomImage';
import TitleBlock from '../../common/TitleWithOrangeUnderlineBlock/TitleWithOrangeUnderlineBlock';
import styles from './LanternInfo.module.scss';

interface Props {
	src: string;
}

const LanternInfo: FC<Props> = ({ src }) => {
	return (
		<div className={styles.lantern}>
			<div className={styles.lantern__container}>
				<TitleBlock
					propsStyles={styles.lantern__title}
					title='Tactic Lanterns'
				/>
				<div className={styles.lantern__text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<CustomImage
					propsStyles={styles.lantern__image}
					alt='lantern'
					src={src}
				/>
				<div className={styles.lantern__button}>
					<BrightYellowButton onClick={() => {}} text='More' />
				</div>
			</div>
		</div>
	);
};

export default LanternInfo;
