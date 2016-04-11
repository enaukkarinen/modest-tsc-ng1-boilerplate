
class HomeController {
	title: string;
	constructor () {
        this.title = 'My App';
	}
}

angular.module("app").controller("HomeController", HomeController);

export {};