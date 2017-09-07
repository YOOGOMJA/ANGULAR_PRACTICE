var mod = mod || angular.module('BlankApp');

mod.controller('lect2Ctrl' , ['$scope' , function($s){
    $s.title = 'Angular Example';
    $s.desc = 'Angular JS Lecture Second Page.'
    $s.model ={
        name : 'KyeongSoo Yoo',
        age : 27
    }    


    $s.goto = function(page){
        location.href="lect" + page + '.html';
    }
}])