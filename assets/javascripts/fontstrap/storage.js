/*!
 * Fontstrap v1.2.3 (https://github.com/nretnilkram/fontstrap)
 * Copyright 2017 Mark Lintern
 * Licensed under MIT (https://github.com/nretnilkram/fontstrap/blob/master/LICENSE)
 */

var storage;

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


function CookieStorage(){

  this.save = function (name, value){

  };

  this.get = function (name){

  };

  this.delete = function (name){

  };
}

if (typeof(Storage) !== "undefined") {
  storage = new BrowserStorage;
} else {
  // No Web Storage support.  Use Cookies instead.
  storage = new CookieStorage;
}
