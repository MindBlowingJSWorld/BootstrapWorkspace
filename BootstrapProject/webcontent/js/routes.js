//Define Routing for app
var bootstrapApp = angular.module('bootstrapApp');

bootstrapApp.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: './partials/quickStartPlain.html',
            controller: 'quickStartController'
		})
		.when('/customerInfo', {
			templateUrl: './partials/customerInfo.html',
			controller: 'customerInfoController'
		})
		.otherwise({
        	redirectTo: '/'
      });
	
});

