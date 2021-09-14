var $ = require("jquery");
//BASE_URL
const BASE_URL = 'https://reqres.in/api/';


//object scaffolding
let apiRequest = {};

apiRequest._getUser = (data = {}) => {
	const loginApi = BASE_URL + 'users/';

	return $.ajax({
		url: loginApi,
		type: "POST",
		data: data,
		success: function (response) {
			return response;
		},
		error: function (err) {
			return err;
		}
	});
}

apiRequest._userLogin = (data = {}) => {
	const loginApi = BASE_URL + 'login/';

	return $.ajax({
		url: loginApi,
		type: "POST",
		data: data,
		success: function (response) {
			return response;
		},
		error: function (err) {
			return err;
		}
	});
}

apiRequest._userRegister = (data) => {
	const registerApi = BASE_URL + 'register';

	return $.ajax({
		url: registerApi,
		type: "POST",
		data: data,
		success: function (response) {
			return response;
		},
		error: function (err) {
			return err;
		}
	});
}

//finally export the object
module.exports = apiRequest;
