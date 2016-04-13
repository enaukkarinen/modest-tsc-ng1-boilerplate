
class HomeController {
	message: string;
	constructor () {
        this.message = 'a lot to do here...';
	}
}

angular.module("app").controller("HomeController", HomeController);

export {};