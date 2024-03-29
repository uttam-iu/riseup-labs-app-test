//imports
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	const { name, onBtnClik, isSubmit } = props;

	//on submit button jsx
	const submitBtn = () => {
		return (
			<div>
				<input className='contained-btn btn' type="submit" value={name} />
			</div>
		);
	};

	//on text button jsx
	const textBtn = () => {
		return (
			<div>
				<button className='text-btn btn' onClick={onBtnClik}>{name}</button>
			</div>
		);
	};

	return (
		<>
			{isSubmit ? submitBtn() : textBtn()}
		</>
	);
};

Button.propTypes = {
	onBtnClik: PropTypes.func,
	name: PropTypes.string.isRequired,
	isSubmit: PropTypes.bool,
};

export default Button;
