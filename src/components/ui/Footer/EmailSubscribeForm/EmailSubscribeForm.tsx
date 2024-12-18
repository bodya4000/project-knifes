import { FC } from 'react';

import CustomCheckbox from '../../common/CustomCheckbox/CustomCheckBox';
import styles from './EmailSubscribeForm.module.scss';

interface Props {}

const EmailSubscribeForm: FC<Props> = ({}) => {
	return (
		<form className={styles.form}>
			<div className={styles.form__top}>
				<input
					className={styles.form__input}
					type={'text'}
					placeholder='example@gmail.com'
				/>
				<button className={styles.form__submit} type='submit'>
					<img src='src/assets/images/collapse.svg' alt='submit' />
				</button>
			</div>

			<div className={styles.form__bottom}>
				<CustomCheckbox
					propsStyles={styles.form__checkbox}
					checked={false}
					label='I have read the Terms of Agreement and agree to the terms.'
					onChange={() => {}}
				/>
			</div>
		</form>
	);
};

export default EmailSubscribeForm;
