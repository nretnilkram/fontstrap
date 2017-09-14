var storage;

/*
 * Storage Helpers
 */

function whatIsIt(object) {
	var stringConstructor = "test".constructor;
	var arrayConstructor = [].constructor;
	var objectConstructor = {}.constructor;

	if (object === null) {
		return "null";
	} else if (object === undefined) {
		return "undefined";
	} else if (object.constructor === stringConstructor) {
		return "string";
	} else if (object.constructor === arrayConstructor) {
		return "array";
	} else if (object.constructor === objectConstructor) {
		return "object";
	} else {
	return "don't know";
	}
}

function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

/*
 * Store values using local storgae
 */

function BrowserStorage(session){

	this.session = session || false;

	this.save = function (name, value){
		if ( this.session ) {
			if (whatIsIt(value) == 'object' || whatIsIt(value) == 'array') {
				sessionStorage.setItem(name, JSON.stringify(value));
			} else {
				sessionStorage.setItem(name, value);
			}
		} else {
			if (whatIsIt(value) == 'object' || whatIsIt(value) == 'array') {
				localStorage.setItem(name, JSON.stringify(value));
			} else {
				localStorage.setItem(name, value);
			}
		}
	};

	this.get = function (name) {
		var value;
		if ( this.session ) {
			value = sessionStorage.getItem(name);
			if (isJson(value)) {
				return JSON.parse(value);
			} else {
				return value;
			}
		} else {
			value = localStorage.getItem(name);
			if (isJson(value)) {
				return JSON.parse(value);
			} else {
				return value;
			}
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
	// No Web Storage support.	Use Cookies instead.
	console.log('Your browser does not support local storage. Going to try cookies instead.');
	storage = new CookieStorage();
}
