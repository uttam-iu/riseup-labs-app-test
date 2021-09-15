import React from 'react';
import './resources/styles/style.css';
import LogIn from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
	const [dispComp, setDisComp] = React.useState('loginComp');
	const [initData, setInitData] = React.useState({});

	//for component changing
	const onCompChange = (comp = 'loginComp', dataObj = {}) => {
		setInitData(dataObj);
		setDisComp(comp);
	}

	return (
		<div className="App">
			{dispComp === 'loginComp' && <LogIn onCompChange={onCompChange} />}
			{dispComp === 'signupComp' && <Signup onCompChange={onCompChange} />}
			{dispComp === 'dashboardComp' && <Dashboard onCompChange={onCompChange} initData={initData} />}
		</div>
	);
}

export default App;
