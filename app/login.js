define(function (require) {
	var ko = require('knockout');

	return {
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
				url: 'app/documentModels/login.php',
			})
				.done(function (response) {
					console.log(response);
				});
		}
	};
});