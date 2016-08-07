/**
 * Created by Administrator on 2016/5/31.
 */
'use strict';

var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/layout-demo1',{
        templateUrl: 'tpls/layout/demo1/demo1.html',
        controller: ''
    }).when('/layout-demo2',{
        templateUrl: 'tpls/layout/demo2/demo2.html',
        controller: ''
    }).when('/layout-demo3',{
        templateUrl: 'tpls/layout/demo3/demo3.html',
        controller: ''
    }).when('/AnimatedButtons',{
        templateUrl: 'tpls/animation/AnimatedButtons/AnimatedButtons.html',
        controller: ''
    }).when('/CircleHoverEffects',{
        templateUrl: 'tpls/animation/CircleHoverEffects/CircleHoverEffects.html',
        controller: ''
    }).when('/CSS3Tooltips',{
        templateUrl: 'tpls/animation/CSS3Tooltips/CSS3Tooltips.html',
        controller: ''
    }).when('/css3_loading',{
        templateUrl: 'tpls/animation/css3_loading/css3_loading.html',
        controller: ''
    }).when('/animation-demo1',{
        templateUrl: 'tpls/animation/demo1/demo1.html',
        controller: ''
    }).when('/animation-demo2',{
        templateUrl: 'tpls/animation/demo2/demo2.html',
        controller: ''
    }).when('/animation-demo3',{
        templateUrl: 'tpls/animation/demo3/demo3.html',
        controller: ''
    }).when('/animation-demo4',{
        templateUrl: 'tpls/animation/demo4/demo4.html',
        controller: ''
    }).when('/animation-demo5',{
        templateUrl: 'tpls/animation/demo5/demo5.html',
        controller: ''
    }).when('/animation-demo6',{
        templateUrl: 'tpls/animation/demo6/demo6.html',
        controller: ''
    }).when('/animation-demo7',{
        templateUrl: 'tpls/animation/demo7/demo7.html',
        controller: ''
    }).when('/animation-demo8',{
        templateUrl: 'tpls/animation/demo8/demo8.html',
        controller: ''
    }).when('/css3buttons',{
        templateUrl: 'tpls/button/css3buttons/css3buttons.html',
        controller: ''
    }).when('/CSS3ButtonSwitches',{
        templateUrl: 'tpls/button/CSS3ButtonSwitches/CSS3ButtonSwitches.html',
        controller: ''
    }).when('/button-demo1',{
        templateUrl: 'tpls/button/demo1/demo1.html',
        controller: ''
    }).when('/button-demo2',{
        templateUrl: 'tpls/button/demo2/demo2.html',
        controller: ''
    }).when('/button-demo3',{
        templateUrl: 'tpls/button/demo3/demo3.html',
        controller: ''
    }).when('/css-demo1',{
        templateUrl: 'tpls/css/demo1/demo1.html',
        controller: ''
    }).when('/css-demo2',{
        templateUrl: 'tpls/css/demo2/demo2.html',
        controller: ''
    }).otherwise({
        redirectTo: '/layout-demo1'
    });
}]);
