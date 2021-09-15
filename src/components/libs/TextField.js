//imports
import React from 'react';
import PropTypes from 'prop-types';
import { _isOnlyLowerCase, _dispCustomError } from '../helpers/Utilities';

const TextField = props => {
	const { value, onDataChange, label, type, isRequired, name } = props;
	const txtLabel = label.replace(/_/g, ' ') + (isRequired ? ' *' : '');
	const [txtVal, setTxtVal] = React.useState(value ? value : '');
	const valRequired = isRequired ? isRequired : false;

	//on change value
	const onValueChange = (e) => {
		setTxtVal(e.target.value);
		if (e.target.type === 'email') {
			if (_isOnlyLowerCase(e.target.value)) {
				_dispCustomError(e.target, '');
				onDataChange(name, e.target.value);
			} else {
				_dispCustomError(e.target, 'Enter only lower case latter');
			}
		} else {
			onDataChange(name, e.target.value);
		}
	};

	return (
		<div className="textfield-cont">
			<div className="textfield-wra">
				<input type={type} id={name} value={txtVal} onChange={onValueChange} required={valRequired} />
				<label>{txtLabel}</label>
			</div>
		</div>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	onDataChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
	isRequired: PropTypes.bool,
	value: PropTypes.string,
};

export default TextField;
