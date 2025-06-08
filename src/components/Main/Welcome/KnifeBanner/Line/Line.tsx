import { FC } from 'react';

interface Props {
	left: number | string;
	pimp?: number | string;
}

const Line: FC<Props> = ({ left, pimp }) => {
	const calculatedLeft =
		typeof left === 'string' ? `calc(${left} - 25px)` : left - 4;
	return (
		<div
			style={{
				background: `rgba(255, 255, 255, 0.10)`,
				top: 0,
				left: left,
				position: 'absolute',
				width: 2,
				height: '100%',
				zIndex: 50,
			}}
		>
			{pimp && (
				<img
					style={{
						position: 'absolute',
						left: calculatedLeft,
						top: pimp,
						zIndex: 0,
					}}
					src='assets/images/pimp.svg'
					alt='pimp'
				/>
			)}
		</div>
	);
};

export default Line;
