const loginSignupApp = angular.module('loginSignupApp', ['ngRoute', 'ngCookies']);

loginSignupApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'loginCtrl'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupCtrl'
    })
    .when('/usrDboard', {
      templateUrl: 'app/user-dashboard/user-dashboard.html',
      controller: 'dboardCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    })
});
