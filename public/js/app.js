(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'ui.select', 'ngSanitize', 'ui.bootstrap'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) { 
      
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('landing', {
          url: '/',
          templateUrl: "../views/home.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "../views/login.html",
          controller: "loginController",
          controllerAs: 'loginVm'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: "../views/signup.html",
          controller:"signupController",
          controllerAs: 'signupVm'
        })

        .state('calendar', {
          url:'/calendar',
          templateUrl:'../views/calendar.html',
          controller: "calendarController"
        })
        .state('dashboard', {
          url:"/dashboard",
          templateUrl: "../views/dashboard.html",
          controller: "dashboardController",
          controllerAs: "dashboardVm"
        })
          .state('dashboard.main', {
            url: '/main',
            templateUrl: "../views/dashboard_main.html",
            controller: "dashboardMainController",
            controllerAs: "dashboardMainVm"
          })
    }

})();
