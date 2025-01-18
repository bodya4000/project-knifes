import { FC, useEffect } from 'react';
import styles from './CustomImage.module.scss';

interface Props {
	src: string;
	alt: string;
	width?: number | string;
	height?: number | string;
	maxHeight?: number | string;
	notLazy?: boolean;
	onClick?: () => void;
	propsStyles?: string;
}

const CustomImage: FC<Props> = props => {
	useEffect(() => {
		if (props.notLazy) {
			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'image';
			link.href = props.src;
			document.head.appendChild(link);

			return () => {
				document.head.removeChild(link);
			};
		}
	}, [props.notLazy, props.src]);

	return (
		<div
			className={`${styles.imgContainer} ${props.propsStyles ? props.propsStyles : ''}`}
			style={{
				width: props.width,
				height: props.height,
				maxHeight: props.maxHeight,
			}}
		>
			<img loading={props.notLazy ? 'eager' : 'lazy'} onClick={props.onClick} className={styles.img} src={props.src} alt={props.alt} width={props.width} height={props.height} />
		</div>
	);
};

export default CustomImage;
