export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "app/main/main.html",
			controller: "MainController",
			controllerAs: "main"
	})
		.state('brands', {
			url: "/brands",
			templateUrl: "app/brands/brands.html"
			});

	$urlRouterProvider.otherwise('/');
}
