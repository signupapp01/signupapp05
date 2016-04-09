'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('AppCtrl', function ($scope, $http, $location, user) {


}).controller('MyCtrl1', function ($scope, $http, $location, user) {
      $scope.user = user; // scope variables can be used in the controllers view

      $scope.stateOptions = [
        'California',
        'New York',
        'Washington'
      ];

      $scope.submitRegisterForm = function(isValid) {
          $http.post('/api/save-register-form', {'data': user}).success(function(response) {
              if(response.success == false) {
                  alert(response.message);
              } else {
                  $scope.user.mongoID = response.data._id;
                  $scope.visitConfirmPage($scope.user.mongoID);
              }
          })
      }

      $scope.visitConfirmPage = function(userID) {
          $location.path('/view2').search({id: userID});
      }

      $scope.checkPassword = function() {
          if($scope.password == $scope.passwordConfirm) {
              return true;
          } else {
              return false;
          }
      }

      $scope.reg = /(^\d{3}[.-\s]\d{3}[.-\s]\d{4}$)/;

  }).controller('MyCtrl2', function ($scope, $http, $location, user) {
      console.log('MyCtrl2');
      $scope.user = user; // scope variables can be used in the controllers view
      $scope.userConfirm = {};

      $scope.getUserData = function() {
          $scope.userID = $location.search().id;
          $http.post('/api/get-user-data', {'data': $scope.userID}).success(function(response) {
              console.log(response['success']);
              if(response['success'] == true) {
                  $scope.userConfirm.mongoID = response['data']['_id'];
                  $scope.userConfirm.email = response['data']['email'];
                  $scope.userConfirm.password = response['data']['password'];
                  $scope.userConfirm.fullname = response['data']['fullname'];
                  $scope.userConfirm.address = response['data']['address'];
                  $scope.userConfirm.city = response['data']['city'];
                  $scope.userConfirm.state = response['data']['state'];
                  $scope.userConfirm.country = response['data']['country'];
                  $scope.userConfirm.zipcode = response['data']['zipcode'];
                  $scope.userConfirm.phone = response['data']['phone'];
              } else {
                  alert('No customer found!');
                  $location.path('/').search('id', null)
              }
          })
      }

      $scope.getUserData();

  });
