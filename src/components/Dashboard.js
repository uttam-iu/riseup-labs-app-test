//imports
import React from 'react';
import Button from './libs/Button';
import { _getUser } from './helpers/ApiHelper';
import Loader from './libs/Loader';

const Dashboard = props => {
	const { onCompChange } = props;
	const loggedInEmail = localStorage.getItem('email');
	const [loading, setLoading] = React.useState(true);

	//on signout button clicked
	const onLogout = () => {
		localStorage.removeItem('email');
		onCompChange('loginComp');
	}

	React.useEffect(() => {
		_getUser({ email: loggedInEmail })
			.then(resp => {
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				console.log(err);
			});
	}, [loggedInEmail]);

	return (
		<div className='dashboard-cont'>
			<h1 >RISEUP LABS</h1>
			{loggedInEmail && <div className='dashboard-title'>
				{"Hi " + loggedInEmail + ", welcome to dashboard"}
				<Button name='signout' onBtnClik={onLogout} />
			</div>}
			{loading && <Loader />}
		</div>
	);
};

export default Dashboard;
