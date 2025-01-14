import { FC } from 'react';
import BlackButton from '../../ui/common/BlackButton/BlackButton';

const ErrorPage: FC = () => {
	return (
		<div style={{ background: '#C0C0C0', height: '100vh' }}>
			<div
				style={{
					maxWidth: '500rem',
					textAlign: 'center',
					margin: 'auto',
					fontWeight: 500,
					position: 'relative',
					top: '50%',
				}}
			>
				Unexpected issue occurred, please be patient :) <br />
				Be sure our specialists are fixing right now!
				<div style={{ margin: '2rem auto', maxWidth: 300 }}>
					<BlackButton to='..//' text='Click to go to main page' />
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
