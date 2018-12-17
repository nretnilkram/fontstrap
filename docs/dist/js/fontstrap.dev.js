/*
 * Fontstrap v2.6.0 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2018 Mark Lintern
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
    jsPath = currSrc.substr(0, currSrc.lastIndexOf("/")) + '/', // "dist/js/";
    fontstrapAssetJsPath = jsPath + '../../assets/javascripts/fontstrap/',
    bootstrapJsPath = jsPath + '../../assets/javascripts/bootstrap/',
    fontawesomeJsPath = jsPath + '../../assets/javascripts/fontawesome/',
    thirdPartyAssetJsPath = jsPath + '../../assets/javascripts/third_party/';

var loadRequirements = function () {
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  });
  loadScript(bootstrapJsPath + "bootstrap.bundle.min.js", function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  loadScript(fontawesomeJsPath + "fontawesome-all.min.js", function(){ });
  loadScript(thirdPartyAssetJsPath + "lodash.min.js", function(){
    loadScript(fontstrapAssetJsPath + "storage.js", function(){ });
    loadScript(fontstrapAssetJsPath + "alignBlocks.jquery.js", function(){ });
    loadScript(fontstrapAssetJsPath + "fontstrap-utilities.js", function(){ });
    loadScript(fontstrapAssetJsPath + "fullScreenBackground.jquery.js", function(){ });
    loadScript(fontstrapAssetJsPath + "keepOnScreen.jquery.js", function(){ });
    loadScript(fontstrapAssetJsPath + "offcanvasMenu.jquery.js", function(){ });
    loadScript(fontstrapAssetJsPath + "imagePopOut.jquery.js", function(){ });
    loadScript(fontstrapAssetJsPath + "zoomIn.jquery.js", function(){ });
  });
};

if (!window.jQuery) { // Only load jQuery if it is not already loaded
  loadScript(jsPath + "jquery.min.js", function(){ $('html,body').scrollTop(0); loadRequirements(); });
} else {
  loadRequirements();
}
