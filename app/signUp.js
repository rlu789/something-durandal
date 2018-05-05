define(function (require) {
	var ko = require('knockout'),
		router = require('plugins/router');

	var signUpForm = function () {
		var self = this;

		self.username = ko.observable();
		self.password = ko.observable();
		self.passwordCheck = ko.observable();
		self.passwordSame = ko.pureComputed(function () {
			return (self.password() === self.passwordCheck()); // note undefined !== ""
		});
		self.signUp = function () {
			$.ajax({
				type: 'post',
				data: {
					username: self.username(),
					password: self.password(),
					'function': 'create',
				},
				url: 'app/services/login.php',
			})
				.done(function (response) {
					if (!response) {
						router.navigate("login");
					}
					else console.log("failed to sign up");
				});
		};
		return self;
	}

	return {
		signUpForm: signUpForm,
	};
});