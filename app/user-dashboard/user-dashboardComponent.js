loginSignupApp.controller('dboardCtrl',['$scope', '$location', '$cookies', function($scope, $location, $cookies){
  if($cookies.get('loggedInUser') != null) {
    const tempData = $cookies.getObject('loggedInUser')
     $scope.userName = tempData.username
     $scope.email    = tempData.email
     $scope.address  = tempData.address
     $scope.phoneNo  = tempData.phoneNumber
  } else {
    $location.path('/login')
  }
}]);
