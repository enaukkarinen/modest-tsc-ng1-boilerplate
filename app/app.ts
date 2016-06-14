/// <reference path="typings/index.d.ts"/>
import "./templates";
import "./features/home/home";

export function start() {

    angular.element(document).ready( () => {

        angular.module("app")
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'features/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }]);

        // manually bootstrap angular
        angular.bootstrap(document, ['app']);
    });
}


