import { FC } from 'react';

import styles from './IbgImage.module.scss';

interface Props {
	src: string;
	propsStyles?: string;
	lazy?: boolean;
}

const IbgImage: FC<Props> = ({ src, propsStyles, lazy }) => {
	return (
		<div className={`${styles.img} ${propsStyles && propsStyles}`}>
			<img loading={`${lazy ? 'lazy' : 'eager'}`} src={src} alt='background image' />
		</div>
	);
};

export default IbgImage;
