define(function (require) {
	var router = require('plugins/router'),
		ko = require('knockout');

	return {
		name: ko.observable(),
		logout: function () {
			$.ajax({
				type: 'post',
				data: {
					'function': 'logout',
				},
				url: 'app/services/login.php',
			})
				.done(function (response) {
					router.navigate("login"); 
				});
		}
	};
});