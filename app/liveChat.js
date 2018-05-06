define(function (require) {
	var ko = require('knockout'),
		userDM = require('documentModels/userDM');

	return {
		userDM: userDM,
		allMessages: ko.observableArray(),
		message: ko.observable(),
		state: ko.observable(),
		get: function () {
			var self = this;
			$.ajax({
				type: "POST",
				url: "app/services/liveChat.php",
				data: {
					'function': 'get',
				},
				success: function (data) {
					console.log($.parseJSON(data));
					var messages = $.parseJSON(data);
					messages.forEach(function (msg) {
						self.allMessages.push(msg); //THINK ABOUT DONT PUSH, JUST WAIT FOR NEW MESSAGES OR SCREEN IS CLUSTERFUCK
						self.state(msg.id);
					})
				},
			})

		},
		update: function () {
			var self = this;
			$.ajax({
				type: "POST",
				url: "app/services/liveChat.php",
				data: {
					'function': 'update',
					state: self.state()
				},
				success: function (data) {
					console.log($.parseJSON(data));
					var messages = $.parseJSON(data);
					messages.forEach(function (msg) {
						self.allMessages.push(msg);
						self.state(msg.id);
					})
				},
			});

		},
		send: function(data, event) {
			var self = this;
			if (event.keyCode === 13) {
				console.log(self.message());
				$.ajax({
					type: "POST",
					url: "app/services/liveChat.php",
					data: {
						'function': 'send',
						message: self.message(),
						username: self.userDM.name()
					},
				})
					.done(function (response) {
						console.log(response);
					});
				self.message(undefined);
			}
		},
		activate: function(){
			var self = this;

			self.get();
			self.interval = setInterval(function () {
				self.update();
			}, 1000);
		},
		compositionComplete: function () {
			var objDiv = document.getElementById("chat-area");
			objDiv.scrollTop = objDiv.scrollHeight;
		},
		deactivate: function () {
			var self = this;
			clearInterval(self.interval);
			self.allMessages([]);
		}
	}
});