
export default class HomeController {
	title: string;
	constructor () {
        this.title = 'My App';
	}
}

angular.module("app.home").controller("HomeController", HomeController);
