var mod = mod || angular.module('BlankApp');

mod.controller('lect1Ctrl' , ['$scope' , function($s){
    $s.title = 'Angular Example';
    $s.desc = 'Angular JS Lecture Intro Page.'


    $s.goto = function(page){
        location.href="lect" + page + '.html';
    }
}])