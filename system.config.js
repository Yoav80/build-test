System.config({
    baseURL: "",
    defaultJSExtensions: true,
    transpiler: false,
    buildCSS: false,

    meta: {
        "angular": {
            "format": "global",
            "exports": "angular",
            deps: [
                "jquery"
            ]
        },
        "jquery": {
            "format": "global",
            "exports": "jQuery",
        },
    },

    map: {
        "jquery": "lib/jquery.js",
        "angular": "lib/angular.js",
        "css": "lib/system.css.js",
        "text": "lib/system.text.js",
    }
});
