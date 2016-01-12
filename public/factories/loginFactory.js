(function() {
    'use strict';

    angular
        .module('app')
        .factory('Auth', login)

    function login($http) {
      //login post request
      function signin(user){
        return $http({
          method: "POST",
          url: "/login",
          data: user
        }).then(function(res){
          return res;
        })
      } 

    function signup (user) {
      return $http.post('/signup', user)
        .then(function (res) {
          console.log(res);
        }, function (err) {
          console.log(err);
        })
    }


      return {
        signin: signin,
        signup: signup
      }
    }



  })();