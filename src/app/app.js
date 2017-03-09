(function() {
   'use strict';

    // Single Page Application - just because.
    angular.module('application', ['ui.router', 'uiGmapgoogle-maps', 'ngGPlaces'])

    .config( ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
            GoogleMapApiProviders.configure({
                key: 'AIzaSyCuCy0Mx3tj0A6AFk1oF02VIDv_rYyVEY8',
                v: '3.28',
                libraries: 'weather,geometry,visualization',
                china: true
            });
        }]
    )

    .run(['$rootScope', '$state', function($rootScope, $state) {

        // this is available from all across the app
        $rootScope.appName = 'GoogleMaps API Test';
        $rootScope.WebAPI = "https://codedemon.co.uk";

    }])

    // .config(function(uiGmapGoogleMapApiProvider) {
    //     uiGmapGoogleMapApiProvider.configure({
    //         key: 'AIzaSyDR5BMPcNmdr9gD8SpIPHCYBGuJNqnUrJQ',
    //         v: '3.20',
    //         libraries: 'weather,geometry,visualization'
    //     });
    // })

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

})();
