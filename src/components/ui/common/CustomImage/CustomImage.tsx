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
			onClick={props.onClick}
			className={`${styles.img} ${props.propsStyles ? props.propsStyles : ''}`}
		>
			<img
				width={props.width}
				height={props.height}
				src={props.src}
				alt={props.alt}
			/>
		</div>
	);
};

export default CustomImage;
