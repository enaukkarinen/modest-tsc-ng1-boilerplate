
import {Calculator} from './features/calculator';

export class App {

    calculator: Calculator;

    constructor() {
        this.calculator = new Calculator();
        console.log('App instantiated');

    }

}

(function() {
    new App();
})();
