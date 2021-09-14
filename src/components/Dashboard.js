import React from 'react';
import Button from './libs/Button';
import { _getUser } from './helpers/ApiHelper';

const Dashboard = props => {
	const { onCompChange, initData } = props;
	const onLogout = () => onCompChange('loginComp');
	// const [userInfo, setUserInfo] = React.useState({});
	console.log(props)

	React.useEffect(() => {
		_getUser(initData)
			.then(resp => {
				console.log(resp)
				// if (resp.token) onCompChange('dashboardComp', { email: formData.email })
			})
			.catch(err => {
				console.log(err)
			});
	}, [initData]);

	return (
		<div>
			welcome to dashboard
			<Button name='signout' onBtnClik={onLogout} />
		</div>
	);
};

export default Dashboard;