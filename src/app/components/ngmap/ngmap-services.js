(function() {
  'use strict'

  angular.module('application').factory('NgMapServices', ['$rootScope', '$http', '$q', '$log', NgMapServices]);

  function NgMapServices($rootScope, $http, $q, $log) {


      var propertiesMock = 'app/api/listing.json';

      return {
          getProperties: getProperties
      };


      function getProperties() {

          var deferred = $q.defer();
          $http({
                  method: "GET",
                  url: propertiesMock,
              })
              .then(function(response) {
                  deferred.resolve(response.data);
              })
              .catch(function(response) {
                  $log.error('Error retrieving image data from proxy: ' + status);
                  deferred.reject('Error retrieving current user data');
              });
          return deferred.promise;
      }

}
})();
