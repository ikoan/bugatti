(function() {
    'use strict';

    angular
        .module('app')
        .controller('signupController', signupController);

    function signupController ($state, Auth) { 
      var vm = this;
      vm.signup = function () {
        var user = {
          username: vm.username,
          password: vm.password
        }
        Auth.signup(user).then(function(data){
          console.log(data);
        });
        // $state.go("dashboard.child")

      }

    }


  })();