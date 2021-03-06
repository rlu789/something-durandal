define(function (require) {
	var ko = require('knockout'),
		home = require('home'),
		blogsDM = require('documentModels/blogsDM'),
		userDM = require('documentModels/userDM');

	return {
		username: ko.observable(),
		title: ko.observable(),
		content: ko.observable(),
		addBlog: function () {
			var self = this;
			blogsDM.prototype.addToDatabase({ title: self.title(), content: self.content(), username: self.username() });
		},
		activate: function () {
			var self = this;
			self.username(userDM.name());
		}
	};
});