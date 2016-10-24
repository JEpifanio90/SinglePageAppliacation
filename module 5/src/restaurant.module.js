(function() {
"use strict";

/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('restaurant', ['public'])
.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');

  var signUpState = {
    name: 'signUp',
    url: '/sing-up',
    templateUrl: '/src/SignUp/SignUp.html',
    controller: 'SignUpCtrl as signCtrl'
  };

    var myInfoState = {
        name: 'myInfo',
        url: '/my-info',
        templateUrl: '/src/MyInfo/MyInfo.html',
        controller: 'myInfoCtrl as myInfoCtrl'
    };

  $stateProvider.state(signUpState);
  $stateProvider.state(myInfoState);

}

})();
