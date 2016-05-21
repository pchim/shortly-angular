angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  console.log('Are we hitting this?');
  Links.getAll().then(function(links) {

    $scope.data.links = links; //[
      //   { title: 'Twitter',
      //     url: 'https://twitter.com' },
      //   { title: 'Reddit',
      //     url: 'https://reddit.com/r/javascript' }
      // ];

    console.log('GOT IT! ', $scope.data.links);
  });
});
