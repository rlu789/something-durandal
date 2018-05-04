define(function (require) {
	var app = require('durandal/app'),
		ko = require('knockout'),
		blogsCollectionDM = require('documentModels/blogsCollectionDM'),
		blogsDM = require('documentModels/blogsDM');

	return {
		blogsCollectionDM: blogsCollectionDM,
		activate: function () { // app assumes everthings ok, then calls this func
			var self = this
			//self.blogsCollectionDM.prototype.init(); // why do i need to go into prototype??
		},
		binding: function () { // called after activate
			var self = this;
			self.blogsCollectionDM.prototype.clear();
			self.blogsCollectionDM.prototype.init();
		}
	};
});