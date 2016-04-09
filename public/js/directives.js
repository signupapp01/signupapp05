'use strict';

/* Directives */


  angular.module('myApp.directives', []).directive('zipcheck', function() {
      return {
          restrict: 'A', // only activate on element attribute
          require: '?ngModel', // get a hold of NgModelController
          link: function(scope, elem, attrs, ngModel) {
              if(!ngModel) return; // do nothing if no ng-model
                  // watch own value and re-validate on change
                  scope.$watch(attrs.ngModel, function() {
                      validate();
              });

              var validate = function() {
                  // values
                  var val1 = ngModel.$viewValue;
                  var result = /^[0-9]+$/.test(val1);
                  console.log(result);
                  // set validity
                  if(result == true) {
                      ngModel.$setValidity('zipcheck', false);
                  } else {
                      ngModel.$setValidity('zipcheck', true);
                  }
              };
          }
      }
  });

  angular.module('myApp.directives', []).directive('matchpassword', function(user) {
      return {
          restrict: 'A', // only activate on element attribute
          require: '?ngModel', // get a hold of NgModelController
          link: function(scope, elem, attrs, ngModel) {
              if(!ngModel) return; // do nothing if no ng-model
                  // watch own value and re-validate on change
                  scope.$watch(attrs.ngModel, function() {
                      validate();
              });

              var validate = function() {
                  // values
                  if(user.password == user.passwordConfirm) {
                      ngModel.$setValidity('matchpassword', true);
                  } else {
                      ngModel.$setValidity('matchpassword', false);
                  }
              };
          }
      }
  });
