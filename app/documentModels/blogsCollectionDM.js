define(function (require) {
	var ko = require('knockout'),
		blogsDM = require('documentModels/blogsDM');
	
	var self = this;
	self.collection = ko.observableArray();

	collection.prototype.init = function () {
		$.ajax({ //ajax request to locahost mysql database
			type: 'post',
			url: 'app/documentModels/blogs.php',
		})
			.done(function (response) {
				$.parseJSON(response).forEach(function (data) {
					self.collection.prototype.add(data);
				})
			});
	}

	collection.prototype.add = function (params) {
		self.collection.push(new blogsDM(params))
	}

	collection.prototype.clear = function () {
		self.collection([]);
	}

	return collection;
});