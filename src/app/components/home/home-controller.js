(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', 'NgMap', HomeController]);

    function HomeController(HomeServices, $scope, NgMap) {
        // Controller Variables
        self = this;
        self.pictures = [];
        self.loading = false;

        // NgMap.getMap().then(function(map) {
        //   console.log(map.getCenter());
        //   console.log('markers', map.markers);
        //   console.log('shapes', map.shapes);
        // });


    };


})();
