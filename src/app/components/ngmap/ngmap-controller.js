(function() {
    'use strict'
    angular.module('application').controller('NgMapController', ['NgMapServices', '$scope', 'NgMap', NgMapController]);

    function NgMapController(NgMapServices, $scope, NgMap) {
        // Controller Variables
        var self = this;
        self.loading = false;
        self.properties = {};

        NgMapServices.getProperties().then(function(result) {
            self.properties = result.listing;
        });

        NgMap.getMap().then(function(map) {
         console.log(map.getCenter());
         console.log('markers', map.markers);
         console.log('shapes', map.shapes);
        });

    };


})();
