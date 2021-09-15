//object scaffolding
let utilities = {};

//return true if  no upper case letter
utilities._isOnlyLowerCase = (text = '') => {
	function hasUpperCase() {
		return (/[A-Z]/.test(text));
	}

	return !hasUpperCase();
}

//custom validation message showing
utilities._dispCustomError = (elem = null, message = '') => {
	if (elem) elem.setCustomValidity(message);
}

//finally export the object
module.exports = utilities;
