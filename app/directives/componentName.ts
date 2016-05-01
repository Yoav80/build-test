import {module} from "../common/module";

module.directive("componentName", function($parse) {
    return {
        restrict: "A",
        link: function(scope, element, attrs: any) {
            var componentScope = element.isolateScope();
            if(!componentScope) {
                return;
            }

            var component = componentScope.$ctrl;
            if(!component) {
                return;
            }

            var nameFn = $parse(attrs.componentName);
            if(!nameFn.assign) {
                return;
            }

            nameFn.assign(scope, component);
        }
    };
});
