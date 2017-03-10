(function() {
    'use strict'
    angular.module('application').controller('NgMapController', ['NgMapServices', '$scope', NgMapController]);

    function NgMapController(NgMapServices, $scope) {
        // Controller Variables
        var self = this;
        self.loading = false;
        self.properties = {};

        NgMapServices.getProperties().then(function(result) {
            self.properties = result.listing;
        });


    };


})();
