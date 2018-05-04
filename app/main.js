// basically a loader
requirejs.config({
	paths: {
		'text': '../lib/require/text',
		'durandal': '../lib/durandal/js',
		'plugins': '../lib/durandal/js/plugins',
		'transitions': '../lib/durandal/js/transitions',
		'knockout': '../lib/knockout/knockout-3.4.0',
		'jquery': '../lib/jquery/jquery-1.9.1'
	}
});

define(function (require) {
	var system = require('durandal/system'),
		ko = require('knockout'),
		app = require('durandal/app');

	system.debug(true);

	app.title = 'Something';

	app.configurePlugins({
		router: true,
		dialog: true
	});

	app.start().then(function () {
		app.setRoot('shell');
		ko.components.register('test-component', {
			viewModel: { require: 'components/test-component/test-component' },
			template: { require: 'text!components/test-component/test-component.html' }
		});
	});
});