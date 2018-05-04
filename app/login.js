define(function (require) {
	var ko = require('knockout'),
		router = require('plugins/router'),
		userDM = require('documentModels/userDM');

	return {
		userDM: userDM,
		username: ko.observable(),
		password: ko.observable(),
		login: function () {
			var self = this;
			$.ajax({
				type: 'post',
				data: {
					username: self.username(),
					password: self.password(),
					'function': 'login',
				},
				url: 'app/services/login.php',
			})
				.done(function (response) {
					if (response == 1) {
						self.userDM.name(self.username());
						router.navigate("");
					}
					else console.log("failed to log in");
				});
		}
	};
});