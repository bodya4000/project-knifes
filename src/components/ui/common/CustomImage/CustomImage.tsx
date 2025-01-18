import { FC } from 'react';

import styles from './CustomImage.module.scss';

interface Props {
	src: string;
	alt: string;
	propsStyles?: string;
	onClick?: () => void;
	width?: number;
	height?: number;
}

const CustomImage: FC<Props> = props => {
	return (
		<div
			className={`${styles.imgContainer} ${props.propsStyles ? props.propsStyles : ''}`}
			style={{
				width: props.width,
				height: props.height,
			}}
		>
			<img loading='lazy' onClick={props.onClick} className={styles.img} src={props.src} alt={props.alt} width={props.width} height={props.height} />
		</div>
	);
};

export default CustomImage;
