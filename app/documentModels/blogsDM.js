define(function (require) {
	var router = require('plugins/router');

	var blogDM = function (params) {
		this.username = params.username;
		this.title = params.title;
		this.content = params.content;
	};

	blogDM.prototype.addToDatabase = function (params) {
		var username = params.username !== undefined ? params.username : "No username given";
		var title = params.title !== undefined ? params.title : "No title";
		var content = params.content !== undefined ? params.content : "Default content";

		$.ajax({
			url: "app/documentModels/addBlog.php",
			type: "post",
			data: { title: title, content: content, username: username }
		})
			.done(function (response) {
				if ($.parseJSON(response) === 1) router.navigate(''); // go back to home page
				else console.log(response + "error")
			});
	}

	return blogDM;
});