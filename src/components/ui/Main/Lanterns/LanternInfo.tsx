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
		<article className={styles.lantern}>
			<section className={styles.lantern__container}>
				<TitleBlock propsStyles={styles.lantern__title} title='Tactic Lanterns' />
				<p className={styles.lantern__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<CustomImage propsStyles={styles.lantern__image} alt='lantern' src={src} />
				<BrightYellowButton to='/' propsStyles={styles.lantern__button} onClick={() => {}} text='See others' />
			</section>
		</article>
	);
};

export default LanternInfo;
