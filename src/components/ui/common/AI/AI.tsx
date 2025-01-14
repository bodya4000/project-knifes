import { FC } from 'react'
import { ColorRing } from 'react-loader-spinner'

interface AIProps {
	color?: string;
}

const AI: FC<AIProps> = ({ color = 'white' }) => {
	const colors: [string, string, string, string, string] = Array(5).fill(color) as [string, string, string, string, string];
	return (
		<ColorRing
			visible={true}
			height='40'
			width='40'
			ariaLabel='color-ring-loading'
			wrapperStyle={{}}
			wrapperClass='color-ring-wrapper'
			colors={colors}
		/>
	);
};

export default AI;
