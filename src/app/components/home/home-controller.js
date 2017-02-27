(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', 'uiGmapGoogleMapApi', HomeController]);

    function HomeController(HomeServices, $scope, uiGmapGoogleMapApi) {
        // Controller Variables
        var self = this;
        self.pictures = [];
        self.loading = false;

        $scope.circles = [
         {
             id: 1,
             center: {
                 latitude: 51.608403,
                 longitude: -0.0708741
             },
             radius: 500,
             stroke: {
                 color: '#ff590a',
                 weight: 2,
                 opacity: 1
             },
             fill: {
                 color: '#ff590a',
                 opacity: 0.5
             },
             geodesic: true, // optional: defaults to false
             draggable: true, // optional: defaults to false
             clickable: true, // optional: defaults to true
             editable: true, // optional: defaults to false
             visible: true, // optional: defaults to true
             control: {}
         }
        ];

       $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
       $scope.polygons = [
           {
               id: 1,
               path: [
                   {
                       latitude: 50,
                       longitude: -80
                   },
                   {
                       latitude: 30,
                       longitude: -120
                   },
                   {
                       latitude: 20,
                       longitude: -95
                   }
               ],
               stroke: {
                   color: '#6060FB',
                   weight: 3
               },
               editable: true,
               draggable: true,
               geodesic: false,
               visible: true,
               fill: {
                   color: '#ff0000',
                   opacity: 0.8
               }
           }
       ];

        // $scope.map = {center: {latitude: 51.608403, longitude: -0.0708741 }, zoom: 14 };


        self.newLocationIsHome = function() {
            $scope.map = {center: {latitude: 51.608403, longitude: -0.0708741 }, zoom: 14};
        }

        self.newLocationIsOffice = function() {
            $scope.map = {center: {latitude: 51.5028777, longitude: -0.0864282 }, zoom: 15};
        }

        uiGmapGoogleMapApi.then(function(maps) {
          $scope.options = { scrollwheel: false };
        });


    };


})();
