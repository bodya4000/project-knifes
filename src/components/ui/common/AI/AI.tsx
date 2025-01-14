import { FC } from 'react'
import { ColorRing } from 'react-loader-spinner'

interface AIProps {
	color?: string;
	size?:number | string
}

const AI: FC<AIProps> = ({ color = 'white', size }) => {
	const colors: [string, string, string, string, string] = Array(5).fill(color) as [string, string, string, string, string];
	return (
		<ColorRing
			visible={true}
			height={size}
			width={size}
			ariaLabel='color-ring-loading'
			wrapperStyle={{}}
			wrapperClass='color-ring-wrapper'
			colors={colors}
		/>
	);
};

export default AI;
