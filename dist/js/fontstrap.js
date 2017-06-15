/*!
 * Fontstrap v1.2.0 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */
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
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  loadScript(jsPath + "popper-bootstrap.min.js", function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  loadScript(jsPath + "lodash.min.js", function(){
    loadScript(jsPath + "fontstrap-features.min.js", function(){ });
  });
};

if (!window.jQuery) { // Only load jQuery if it is not already loaded
  loadScript(jsPath + "jquery.min.js", function(){ $('html,body').scrollTop(0); loadRequirements(); });
} else {
  loadRequirements();
}
