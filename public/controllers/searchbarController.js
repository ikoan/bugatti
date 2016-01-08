(function() {
    'use strict';

    angular
        .module('app')
        .controller('searchbarController', searchbarController)
        .factory('show', shows)
    
    function searchbarController($scope, show) {
   
      $scope.itemArray = [];
      $scope.searchImdb = function(title){
        if(title.length > 1){
          show.search(title).then(function(data){
            if(data !== undefined){
              $scope.itemArray = data;
            }
          })
        } else {
          $scope.itemArray = [];
        }
      }
      $scope.selection= function(show){
        //selected show
        console.log(show);
      }      
    }

    
    function shows($http) {
      
      function search(show){
        var query = show.split(' ').join('+');
        return $http({
          method: "GET",
          url: "http://www.omdbapi.com/?s=" + query
        }).then(function(res){
          return res.data.Search;
        })
      }
      return {
        search: search
      }
    }

  })();