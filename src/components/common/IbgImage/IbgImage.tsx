import { FC } from 'react';

import styles from './IbgImage.module.scss';

interface Props {
	src: string;
	propsStyles?: string;
}

const IbgImage: FC<Props> = ({ src, propsStyles }) => {
	return (
		<div className={`${styles.img} ${propsStyles && propsStyles}`}>
			<img src={src} alt='background image' />
		</div>
	);
};

export default IbgImage;
