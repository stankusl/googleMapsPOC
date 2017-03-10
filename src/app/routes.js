(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('homepage', {
            url: '/',
            templateUrl: './app/components/home/home-view.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })

        .state('ngmap', {
            url: '/ng-map',
            templateUrl: './app/components/ngmap/ngmap-view.html',
            controller: 'NgMapController',
            controllerAs: 'NgMap'
        })

        $urlRouterProvider.otherwise('/');
    }]);

})();
