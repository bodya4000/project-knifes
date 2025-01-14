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
				This page haven't been added yet :( <br />
				Get back and be sure our specialists are fixing right now!
				<div style={{ margin: '2rem auto', maxWidth: 300 }}>
					<BlackButton to='..//' text='Click to go to main page' />
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
