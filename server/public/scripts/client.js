// test for handshake
console.log("Hello from the Client Script!");

//create angular app
var myApp = angular.module("myApp", ["ngRoute"]);

//config NG routes
myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
  //home
  when("/home", {
    templateUrl:'/views/partials/home.html',
    controller:'homeController'
  }).
  //about
  when("/about", {
    templateUrl:'/views/partials/about.html',
    controller:'aboutController'
  }).
  //photo
  when("/photo", {
    templateUrl:'/views/partials/photo.html',
    controller:'photoController'
  }).
  //video
  when("/video",{
    templateUrl:'/views/partials/video.html',
    controller: 'videoController'
  }).
  //web
  when("/web",{
    templateUrl:'/views/partials/web.html',
    controller: 'webController'
  }).
  otherwise({
    redirectTo:"/home"
  });
}]);//end config routes
