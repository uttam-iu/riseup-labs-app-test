import React from 'react';
import TextField from './libs/TextField';
import Button from './libs/Button';

const Login = props => {
	const onChange = (name, value) => {
		console.log(name, value)
	}

	const onSignup = () => {
		console.log('signup btn')
	}

	const onsubmit = (e) => {
		console.log('submit btn')
	}

	return (
		<div className='login-cont'>
			<div className='login-wra'>
				<h1 >Login Page</h1>
				<form onSubmit={onsubmit}>
					<TextField
						name='email'
						label="username"
						type='text'
						onDataChange={onChange}
						value=''
						isRequired={true}
					// error='error' 
					/>

					<TextField
						name='password'
						label="password"
						type='password'
						onDataChange={onChange}
						value=''
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