/// <reference path="typings/browser.d.ts"/>

angular.module('app', [
            "ngRoute",
    "app.templates" 
]);

require('templates');
require(['app'], (appModule:any) => {
    appModule.start();
});
