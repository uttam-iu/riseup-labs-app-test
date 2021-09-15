//imports
import React from 'react';
import Button from './libs/Button';
import { _getUser } from './helpers/ApiHelper';

const Dashboard = props => {
	const { onCompChange, initData } = props;
	const onLogout = () => onCompChange('loginComp');
	const [userInfo, setUserInfo] = React.useState({});
	// const [loading, setLoading] = React.useState(true);

	//coll when initdata is changed
	React.useEffect(() => {
		_getUser(initData)
			.then(resp => {
				setUserInfo(resp);
				//setLoading(false)
			})
			.catch(err => {
				//setLoading(false)
				console.log(err)
			});
	}, [initData]);

	return (
		<div>
			{userInfo.email && <div className='dashboard-title'>
				{"Hi " + userInfo.email + ", welcome to dashboard"}
				<Button name='signout' onBtnClik={onLogout} />
			</div>}
			{/* {loading && <div className="loader"></div>} */}
		</div>
	);
};

export default Dashboard;
