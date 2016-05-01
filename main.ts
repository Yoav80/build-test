/// <reference path="typings/globals.d.ts" />

import "angular";
import {module} from "./app/common/module";
import "./app/directives/componentName";
import "./app/components/app";

init();

function init() {
    var element = document.getElementById("html");
    if(!element) {
        console.error("Root element was not found");
        return;
    }
    
    angular.bootstrap(element, [module.name]);
}
