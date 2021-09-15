import React from 'react';
import './resources/styles/style.css';
import LogIn from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
	const loggedInEmail = localStorage.getItem('email');
	const [dispComp, setDisComp] = React.useState(loggedInEmail ? 'dashboardComp' : 'loginComp');

	//for component changing
	const onCompChange = (comp = 'loginComp') => {
		setDisComp(comp);
	};

	return (
		<div className="App">
			{dispComp === 'loginComp' && <LogIn onCompChange={onCompChange} />}
			{dispComp === 'signupComp' && <Signup onCompChange={onCompChange} />}
			{dispComp === 'dashboardComp' && <Dashboard onCompChange={onCompChange} />}
		</div>
	);
};

export default App;
