(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

    function dashboardController ($scope, show) { 
      var vm = this;
      vm.test = "is this working"      

      vm.itemArray = [];
      //event handler function for every change in input
      vm.searchImdb = function(title){
        if(title.length > 1){
          show.search(title).then(function(data){
            if(data !== undefined){
              vm.itemArray = data;
            }
          })
        } else {
          vm.itemArray = [];
        }
      }
      //save selected show to user
      vm.selection= function(selected){
        show.save(selected).then(function(data){
          console.log(data);
          vm.userRecords.unshift(data.data)
        });
      }


      vm.userRecords = [
          {
            Title: "How I Met Your Mother",
            Year: "2005 - 2014",
            Poster: "http://ia.media-imdb.com/images/M/MV5BMTA5MzAzNTcyNjZeQTJeQWpwZ15BbWU3MDUyMzE1MTk@._V1_SX300.jpg",
            seasons: 
              [
                {
                  name: "season #1",
                  episodes: 
                    [
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      },
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      }
                    ]
                },
                {
                  name: "season #2",
                  episodes: 
                    [
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      },
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      }
                    ]
                }

              ]
          },
          {
            Title: "Breaking Bad",
            Year: "2008–2013",
            Poster: "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
            seasons: 
              [
                {
                  name: "season #1",
                  episodes: 
                    [
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      },
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      }
                    ]
                },
                {
                  name: "season #2",
                  episodes: 
                    [
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      },
                      {
                        title: "name of episode",
                        runTime: "52 mins"
                      }
                    ]
                }

              ]
          }
        ];

    
    }

  })();