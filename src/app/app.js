(function() {
   'use strict';

    // Single Page Application - just because.
    angular.module('application', ['ui.router', 'ngMap'])

    .run(['$rootScope', '$state', function($rootScope, $state) {

        // this is available from all across the app
        $rootScope.appName = 'GoogleMaps API Test';
        $rootScope.WebAPI = "https://codedemon.co.uk";

    }])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();
