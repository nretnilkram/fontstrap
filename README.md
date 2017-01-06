# fontstrap v1.1.0

### Fontstrap is a combination project where the lastest Bootstrap and Fontawesome css versions are combined into a single css file using their SASS versions.  Currently those versions are:

* Bootstrap: 4.0.0-alpha.6
* FontAwesome: 4.7.0

### Some neccessary and useful javascript files are also loaded from a single file. Those versions are:

* JQuery: 3.1.1
* Tether: 1.3.3
* Bootstrap: 4.0.0-alpha.6
* Lodash 4.17.4

### How to Customize:

1. Download
2. Customize
3. Compile CSS
```
rake sass:compile
```

### How to use:

* copy over entire dist directory to root of site. The fontstrap.js file will pull in all other required js files from dist/js.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Fontstrap</title>
	<link rel="icon" href="dist/img/favicon.png">
	<link type="text/css" href="dist/css/fontstrap.min.css" rel="stylesheet">
</head>
<body>
	<!-- Insert HTML code here. -->
	<script type="text/javascript" src="dist/js/fontstrap.js"></script>
</body>
</html>
```
