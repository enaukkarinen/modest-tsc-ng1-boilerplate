
import "./templates";
import "./features/home/home";

angular.module("app", [
  "app.templates",
  "app.home"
  ])
 .config(['$stateProvider', '$urlRouterProvider', function($routeProvider) {
     $routeProvider.
      when('/home', {
        templateUrl: 'features/home/home.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);

