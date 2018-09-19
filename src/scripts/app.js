var app = angular.module('fullStackApp', [
	'ui.router',
	'ui.bootstrap',
	'mainController',
	'shopController'
]);

app.config(function ($stateProvider) {
	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: '../about.html'
	}

	$stateProvider.state(aboutState);
});
