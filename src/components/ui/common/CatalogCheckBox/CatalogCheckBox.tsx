import { FC } from 'react';
import styles from './CatalogCheckBox.module.scss';

interface Props {
	id: number | string;
	label1?: string;
	label2?: string | number;
	stars?: number;
	value: boolean;
	callback: () => void;
}

const CatalogCheckBox: FC<Props> = ({
	id,
	value,
	callback,
	label1,
	label2,
	stars,
}) => {
	return (
		<div
			className={styles.checkbox}
			role='checkbox'
			aria-checked={value}
			onClick={callback}
			onKeyDown={e => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					callback();
				}
			}}
			tabIndex={0}
		>
			<div
				className={`${styles.checkbox__wrapper} ${
					value ? styles.checkbox__wrapper_active : ''
				}`}
			>
				<div
					className={`${styles.checkbox__item} ${
						value ? styles.checkbox__item_active : ''
					}`}
					id={String(id)}
				></div>
			</div>

			{label1 && (
				<label className={styles.checkbox__label} htmlFor={String(id)}>
					{label1}
				</label>
			)}

			{label2 && (
				<label className={styles.checkbox__amount} htmlFor={String(id)}>
					({label2})
				</label>
			)}

			{stars && (
				<label className={styles.checkbox__star_container}>
					{Array.from({ length: stars }, (_, index) => (
						<span className={styles.checkbox__star} key={index}>
							&#9733;
						</span>
					))}

					<span className={styles.checkbox__rate}>{`${stars}/5`}</span>
				</label>
			)}
		</div>
	);
};

export default CatalogCheckBox;
