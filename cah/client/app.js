if (Meteor.isClient) {
  angular.module('cah',['angular-meteor']);

  angular.module('cah').controller('GameCtrl', function ($scope, $meteor) {
    $scope.cards = $meteor.collection(Cards);

    $scope.remove = function(card){
      $scope.cards.splice($scope.cards.indexOf(card), 1);
    };
  });
}