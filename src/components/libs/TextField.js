import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => {
	const { value, onDataChange, label, type, isRequired, name } = props;
	const txtLabel = label.replace(/_/g, ' ') + (isRequired ? ' *' : '');
	const [txtVal, setTxtVal] = React.useState(value ? value : '');
	const valRequired = isRequired ? isRequired : false;

	const onValueChange = (e) => {
		setTxtVal(e.target.value);
		onDataChange(name, e.target.value);
	}

	return (
		<div className="textfield-cont">
			<div className="textfield-wra">
				<input type={type}  value={txtVal} onChange={onValueChange} required={valRequired} />
				<label>{txtLabel}</label>
			</div>
		</div>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	onDataChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text','email', 'password']).isRequired,
	isRequired: PropTypes.bool,
	// error: PropTypes.string,
	value: PropTypes.string,
};

export default TextField;