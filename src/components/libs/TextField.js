import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => {
	const { val, onDataChange, label, type, isRequired, name } = props;
	const txtLabel = label.replace(/_/g, ' ') + (isRequired ? ' *' : '');
	const [txtVal, setTxtVal] = React.useState(val ? val : '');
	const valRequired = isRequired ? isRequired : false;

	const onValueChange = (e) => {
		setTxtVal(e.target.value);
		onDataChange(name, e.target.value);
	}

	return (
		<div className="textfield-cont">
			<div className="textfield-wra">
				<input type={type} value={txtVal} onChange={onValueChange} required={valRequired} />
				<label>{txtLabel}</label>
			</div>
		</div>
	);
};

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	onDataChange: PropTypes.func.isRequired,
	isRequired: PropTypes.bool,
	label: PropTypes.string.isRequired,
	// error: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password']).isRequired
};

export default TextField;