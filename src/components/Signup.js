//imports
import React from 'react';
import TextField from './libs/TextField';
import Button from './libs/Button';
import Loader from './libs/Loader';
import { _userRegister } from './helpers/ApiHelper';
import { _dispCustomError } from './helpers/Utilities';

const Signup = props => {
	const { onCompChange } = props;

	const [formData, setFormData] = React.useState({});
	const [gError, setGError] = React.useState('');
	const [loading, setLoading] = React.useState(false);

	//on textfield value change
	const onChange = (name, value) => {
		if(name === 'confirm_password'){
			const elem = document.getElementById('confirm_password');
			_dispCustomError(elem, '');
		}

		let fd = { ...formData };
		fd[name] = value;
		setFormData(fd);
	};

	//on login button clicked
	const onLogin = () => onCompChange('loginComp');

	//on submit button clicked
	const onsubmit = (e) => {
		e.preventDefault();
		const elem = document.getElementById('confirm_password');
		if (formData.password !== formData.confirm_password) {
			_dispCustomError(elem, 'password and confirm password mismatch');
		} else {
			setLoading(true);
			_dispCustomError(elem, '');
			let fd = { ...formData };
			delete fd.confirm_password;
			_userRegister(fd)
				.then(resp => {
					setLoading(false);
					if (resp.token) {
						localStorage.setItem('email', formData.email);
						onCompChange('dashboardComp');
					}
				})
				.catch(err => {
					setLoading(false);
					setGError(err.responseJSON.error);
				});
		}
	};

	//single text field
	const getTextField = (name, label, type, cb, value = '', required = false) => {
		return (
			<TextField
				name={name}
				label={label}
				type={type}
				onDataChange={cb}
				value={value}
				isRequired={required}
			/>
		);
	};

	return (
		<div className='parent'>
			<div className='login-cont'>
				<div className='login-wra'>
					<h1 >RISEUP LABS</h1>
					<div className='heading'>Signup</div>
					<form onSubmit={onsubmit}>
						{getTextField('email', 'email', 'email', onChange, '', true)}
						{getTextField('first_name', 'first_name', 'text', onChange, '', true)}
						{getTextField('last_name', 'last_name', 'text', onChange, '', true)}
						{getTextField('password', 'password', 'password', onChange, '', true)}
						{getTextField('confirm_password', 'confirm_password', 'password', onChange, '', true)}

						<div className='login-btn-wra'>
							<Button name='signup' isSubmit={true} />
						</div>
					</form>
					<div className='warning'>{gError}</div>
					{loading && <Loader />}
					<div className='link-btn-wra'>
						<p >Already, have any account? </p>
						<div>
							<Button name='login' onBtnClik={onLogin} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
