import { FC, useState } from 'react';

import styles from './CustomSelector.module.scss';

interface Props {
	onOptionClick: (option: string) => void;
	currentOption: string;
	options: { name: string }[] | undefined;

	optionParser?: (option: string) => string;
	propsStyles?: string;
}

const CustomSelector: FC<Props> = ({
	onOptionClick,
	currentOption,
	options,

	propsStyles,
	optionParser,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const optionClick = (option: string) => {
		onOptionClick(option);
		setIsOpen(false);
	};
	if (options)
		return (
			<div className={`${styles.selector} ${propsStyles ? propsStyles : ''}`}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`${styles.selector_option} ${styles.selector_button}`}
				>
					{currentOption}
				</button>

				{isOpen && (
					<div className={styles.selector_dropdown}>
						{Object.values(options).map(option => (
							<div
								key={option.name}
								className={styles.selector_dropdown_item}
								onClick={() => optionClick(option.name)}
							>
								{optionParser ? optionParser(option.name) : option.name}
							</div>
						))}
					</div>
				)}
			</div>
		);
};

export default CustomSelector;
