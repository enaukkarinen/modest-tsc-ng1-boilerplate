/// <reference path="typings/browser.d.ts"/>

angular.module('app', [
    "app.templates" 
]);

require('templates');
require(['app'], (appModule:any) => {
    appModule.start();
});
