loginSignupApp.controller('loginCtrl',['$scope', '$location', '$cookies', function($scope, $location, $cookies){
  $scope.login = function() {
    if($scope.loginForm.$valid) {
      if(getItemLocal($scope.user.email) != null) {
        const tempData = getObjlocal($scope.user.email)
        if(tempData.pass === $scope.user.pass) {
          $cookies.put('loggedInUser', JSON.stringify(tempData))
          alert('Login Successful 👍');
          $location.path('/usrDboard')
        } else {
          $scope.user.pass = ''
          $scope.loginForm.$setPristine()
          $scope.loginForm.$setUntouched()
          alert('Invalid Credentials, try again!!!');
        }
      } else {
        $scope.user = {}
        $scope.loginForm.$setPristine()
        $scope.loginForm.$setUntouched()
        alert('No Matching Credentials Found!!!!')
      }
    }
  }
  $scope.initFxn = function() {
    if($cookies.get('loggedInUser') != null) {
      $cookies.remove('loggedInUser')
    }
  }
}]);
