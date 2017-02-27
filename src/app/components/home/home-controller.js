(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', 'uiGmapGoogleMapApi', HomeController]);

    function HomeController(HomeServices, $scope, uiGmapGoogleMapApi) {
        // Controller Variables
        var self = this;
        self.pictures = [];
        self.loading = false;



        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        // $scope.options = {scrollwheel: false};

        self.newLocationIsHome = function() {
            $scope.map = {center: {latitude: 51.608403, longitude: -0.0708741 }, zoom: 14};
        }

        self.newLocationIsOffice = function() {
            $scope.map = {center: {latitude: 51.5028777, longitude: -0.0864282 }, zoom: 15};
        }

        uiGmapGoogleMapApi.then(function(maps) {
          console.log(maps);
          // $scope.map     = { center: { latitude: 44.2126995, longitude: -100.2471641 }, zoom: 3};
          $scope.options = { scrollwheel: false };
        });


    };


})();
