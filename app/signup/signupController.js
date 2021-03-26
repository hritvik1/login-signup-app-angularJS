loginSignupApp.controller('signupCtrl',['$scope', '$location', function($scope, $location){
  $scope.user = {
    pass: "",
    confirmPass: ""
  };

  $scope.signup = function() {
    let formData = {
        username    : $scope.user.userName,
        email       : $scope.user.email,
        address     : $scope.user.address,
        phoneNumber : $scope.user.phoneNumber,
        pass        : $scope.user.pass
    }

    if($scope.signupForm.$valid && getItemLocal($scope.user.email) === null) {
      setItemLocal($scope.user.email, JSON.stringify(formData))
      $scope.user = {}
      $scope.signupForm.$setPristine()
      $scope.signupForm.$setUntouched()
      alert('Account Created Successfully 👍')
      $location.path('/login')
    } else {
      alert('Given email id is already in use!!!!!')
    }
  }
}]);
