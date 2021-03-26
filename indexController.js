loginSignupApp.controller('indexCtrl',['$scope', '$location', '$cookies', function($scope, $location, $cookies){
  $scope.login = function() {
    window.location = "#!login";
  }
  $scope.signup = function() {
    window.location = "#!signup";
  }
  $scope.logout = function() {
    $cookies.remove('loggedInUser')
    $location.path('/login')
  }
  $scope.deleteAccount = function() {
    const conf = confirm('Are you sure you want to delete your account!!!!');
    if (conf === true) {
      const tempData = $cookies.getObject('loggedInUser');
      removeItemLocal(tempData.email);
      this.logout();
    }
  }
  $scope.loginStatus = function() {
    if($cookies.get('loggedInUser') != null) {
      return true
    } else {
      return false
    }
  }
}]);
