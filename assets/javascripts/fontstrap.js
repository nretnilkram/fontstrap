function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("dist/js/jquery-3.1.1.min.js", function(){ 
    loadScript("dist/js/tether.min.js", function(){ 
        loadScript("dist/js/bootstrap.min.js", function(){
            $(function () {$('[data-toggle="tooltip"]').tooltip();});
        });
    });
    loadScript("dist/js/lodash.min.js", function(){ });
});
