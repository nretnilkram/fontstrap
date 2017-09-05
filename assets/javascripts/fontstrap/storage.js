/*
 * Fontstrap v1.2.4 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */

var storage;

/*
 * Store values using local storgae
 */

function BrowserStorage(session){

  this.session = session || false;

  this.save = function (name, value){
    if ( this.session ) {
      sessionStorage.setItem(name, value);
    } else {
      localStorage.setItem(name, value);
    }
  };

  this.get = function (name) {
    if ( this.session ) {
      return sessionStorage.getItem(name);
    } else {
      return localStorage.getItem(name);
    }
  };

  this.delete = function (name){
    if ( this.session ) {
      return sessionStorage.removeItem(name);
    } else {
      return localStorage.removeItem(name);
    }
  };
}

/*
 * Store Values using Cookies
 */

function CookieStorage(){

  this.save = function (cname, cvalue){
    document.cookie = cname + "=" + cvalue;
  };

  this.get = function (cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  };

  this.delete = function (cname){
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  };
}

if (typeof(Storage) !== "undefined") {
  storage = new BrowserStorage();
} else {
  // No Web Storage support.  Use Cookies instead.
  console.log('Your browser does not support local storage. Going to try cookies instead.');
  storage = new CookieStorage();
}
