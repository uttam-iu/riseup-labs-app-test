//imports
import React from 'react';
import TextField from './libs/TextField';
import Button from './libs/Button';
import { _userLogin } from './helpers/ApiHelper';

const Login = props => {
	const { onCompChange } = props;
	const [formData, setFormData] = React.useState({ email: "eve.holt@reqres.in", password: 'cityslicka' });
	const [gError, setGError] = React.useState('');
	// const [loading, setLoading] = React.useState(false);

	//on text field valu change
	const onChange = (name, value) => {
		let fd = { ...formData };
		fd[name] = value;
		setFormData(fd);
	};

	//on sign up button clicked
	const onSignup = () => onCompChange('signupComp');

	//on submit button clicked
	const onsubmit = (e) => {
		e.preventDefault();
		// setLoading(true);
		_userLogin(formData)
			.then(resp => {
				setGError('');
				// setLoading(false);

				if (resp.token) {
					localStorage.setItem('email', formData.email);
					onCompChange('dashboardComp', { email: formData.email });
				}
			})
			.catch(err => {
				// setLoading(false);
				setGError(err.responseJSON.error);
			});
	};

	return (
		<div className='login-cont'>
			<div className='login-wra'>
				<h1 >Login</h1>
				<form onSubmit={onsubmit}>
					<TextField
						name='email'
						label="email"
						type='text'
						onDataChange={onChange}
						value={formData.email}
						isRequired={true}
					/>

					<TextField
						name='password'
						label="password"
						type='password'
						onDataChange={onChange}
						value={formData.password}
						isRequired={true}
					/>
					<div className='login-btn-wra'>
						<Button name='login' isSubmit={true} />
					</div>
				</form>

				<div className='warning'>{gError}</div>
				{/* {loading && <div style={{ display: 'flex', justifyContent: 'center' }}>
					<div className="loader" />
				</div>} */}
				<div className='link-btn-wra'>
					<p >Haven't any account? </p>
					<div>
						<Button name='signup' onBtnClik={onSignup} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
