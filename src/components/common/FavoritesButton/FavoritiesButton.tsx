import { FC, useState } from 'react';

interface Props {
	propsStyles?: string;
}

const FavoritiesButton: FC<Props> = ({ propsStyles }) => {
	const [filled, setFilled] = useState(false);

	return (
		<div
			onClick={() => setFilled(!filled)}
			style={{
				color: '#E8AA31',
				fontSize: '2.5rem',
				cursor: 'pointer',
				width: 10
			}}
			className={propsStyles ? propsStyles : ''}
		>
			{filled ? '\u2665' : '\u2661'}{' '}
			{/* Unicode for filled and outlined hearts */}
		</div>
	);
};

export default FavoritiesButton;
