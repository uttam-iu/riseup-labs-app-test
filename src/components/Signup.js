import React from 'react';
import TextField from './libs/TextField';
import Button from './libs/Button';
import { _userRegister } from './helpers/ApiHelper';

const Signup = props => {
	const { onCompChange } = props;

	const [formData, setFormData] = React.useState({});

	const onChange = (name, value) => {
		let fd = { ...formData };
		fd[name] = value;
		setFormData(fd);
	}

	const onLogin = () => onCompChange('loginComp');

	const onsubmit = (e) => {
		e.preventDefault();
		console.log(formData)
		if (formData.password !== formData.re_type_password) {
			console.log('password and re pass mismatch')
		} else {
			let fd = { ...formData };
			delete fd.re_type_password;
			_userRegister(fd)
				.then(resp => {
					if (resp.token) onCompChange('dashboardComp', { email: formData.email })
				})
				.catch(err => {
					// console.log('abc', err)
				});
		}
	}

	const getTextField = (name, label, type, cb, value = '', required = false) => {
		return (
			<TextField
				name={name}
				label={label}
				type={type}
				onDataChange={cb}
				value={value}
				isRequired={required}
			// error='error' 
			/>
		);
	}

	return (
		<div className='login-cont'>
			<div className='login-wra'>
				<h1 >Signup</h1>
				<form onSubmit={onsubmit}>
					{getTextField('email', 'email', 'email', onChange, '', true)}
					{getTextField('first_name', 'first_name', 'text', onChange, '', true)}
					{getTextField('last_name', 'last_name', 'text', onChange, '', true)}
					{getTextField('password', 'password', 'password', onChange, '', true)}
					{getTextField('re_type_password', 're_type_password', 'password', onChange, '', true)}

					<div className='login-btn-wra'>
						<Button name='signup' isSubmit={true} />
					</div>
				</form>

				<div className='link-btn-wra'>
					<p >Already, have any account? </p>
					<div>
						<Button name='login' onBtnClik={onLogin} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;