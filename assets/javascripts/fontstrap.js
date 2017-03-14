function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

var currSrc = document.currentScript.src,
    jsPath = currSrc.substr(0, currSrc.lastIndexOf("/")) + '/'; // "dist/js/";

var loadRequirements = function () {
    loadScript(jsPath + "tether.min.js", function(){
        loadScript(jsPath + "bootstrap.min.js", function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    });
    loadScript(jsPath + "lodash.min.js", function(){ });
    loadScript(jsPath + "fontstrap-features.js", function(){ });
};

if (!window.jQuery) { // Only load jQuery if it is not already loaded
    loadScript(jsPath + "jquery-3.1.1.min.js", function(){ loadRequirements(); });
} else {
    loadRequirements();
}
