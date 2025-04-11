import { FC, ReactNode } from 'react';
import styles from './Feature.module.scss';
import { CustomImage } from '@/components'
interface Props {
	imageSrc: string;
	alt: string;
	children: ReactNode;
}

const Feature: FC<Props> = ({ imageSrc, alt, children }) => {
	return (
		<div className={styles.feature}>
			<CustomImage
				propsStyles={styles.feature__image}
				src={imageSrc}
				alt={alt}
			/>

			<div className={styles.feature__text}>{children}</div>
		</div>
	);
};

export default Feature;
