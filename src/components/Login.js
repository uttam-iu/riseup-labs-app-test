import React from 'react';
import TextField from './libs/TextField';
import Button from './libs/Button';
import { _userLogin } from './helpers/ApiHelper';


const Login = props => {
	const { onCompChange } = props;
	const [formData, setFormData] = React.useState({ email: "eve.holt@reqres.in", password: 'cityslicka' });

	const onChange = (name, value) => {
		let fd = { ...formData };
		fd[name] = value;
		setFormData(fd);
	}

	const onSignup = () => onCompChange('signupComp');

	const onsubmit = (e) => {
		e.preventDefault();
		_userLogin(formData)
			.then(resp => {
				console.log(resp.token)
				if (resp.token) onCompChange('dashboardComp', { email: formData.email })
			})
			.catch(err => {
				console.log(err)
			});
	}

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
					// error='error' 
					/>

					<TextField
						name='password'
						label="password"
						type='password'
						onDataChange={onChange}
						value={formData.password}
						isRequired={true}
					// error='error' 
					/>
					<div className='login-btn-wra'>
						<Button name='login' isSubmit={true} />
					</div>
				</form>

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