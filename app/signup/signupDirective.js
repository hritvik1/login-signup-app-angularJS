loginSignupApp.directive("comparePass", function () {
  return {
    require: "ngModel",
    scope: {
      confirmPass: "=comparePass"
    },
    link: function (scope, element, attributes, modelVal) {
      modelVal.$validators.comparePass = function (val) {
        return val === scope.confirmPass;
      };
      scope.$watch("confirmPass", function () {
        modelVal.$validate();
      });
    }
  };
});
