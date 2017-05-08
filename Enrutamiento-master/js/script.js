var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // Home View
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homePage.html'
        })

        // Info Vies
        .state('about', {
            url: '/about',
            templateUrl: 'templates/info.html'
        })
    
// Info Vies
        .state('Mismetas', {
            url: '/Mismetas',
            templateUrl: 'templates/Mismetas.html'
        })
    
// Info Vies
        .state('Comosoy', {
            url: '/Comosoy',
            templateUrl: 'templates/Comosoy.html'
        })

});
