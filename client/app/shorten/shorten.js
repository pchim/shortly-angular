
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  //var utils = require(__dirname + '/server/config/utils.js');
  $scope.link = {};
  $scope.addLink = function(link) {
  
    Links.addOne(link);
  };




});
