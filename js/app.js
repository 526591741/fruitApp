
var app = angular.module('fruitApp',['ionic','ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:'/view/home.html',
		controller:'homeCtrl'
	}).when('/cart',{
		templateUrl:'/view/cart.html',
		controller:'cartCtrl'
	}).when('/mine',{
		templateUrl:'/view/mine.html',
		controller:'mineCtrl'
	}).when('/brand',{
		templateUrl:'/view/brand.html',
		controller:'brandCtrl'
	}).otherwise({
 		redirectTo: "/home"
 	})
})