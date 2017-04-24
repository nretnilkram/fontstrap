# fontstrap v1.2.0

### Fontstrap is a combination project where the latest Bootstrap and Fontawesome css versions are combined into a single css file using their SASS versions.  Currently those versions are:

* Bootstrap: 4.0.0-beta
* FontAwesome: 4.7.0

### Some necessary and useful javascript files are also loaded from a single file. Those versions are:

* JQuery: 3.2.0
* Tether: 1.3.3
* Bootstrap: 4.0.0-beta
* Lodash 4.17.4

### How to Customize:

1. Download
2. Customize
3. Compile CSS
```
rake sass:compile
```

### How to use:

* Copy over entire dist directory to root of site. The fontstrap.js file will pull in all other required javascript files from dist/js.

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
	<script type="text/javascript" src="dist/js/jquery.min.js"></script> <!-- optional jQuery load if needed -->
	<script type="text/javascript" src="dist/js/fontstrap.js"></script>
	<script>
		$(window).on('load', function() {
			// Additional JS Here
		});
	</script>
</body>
</html>
```

### Additional jQuery Features:

* $().fullScreenBackground()

```html
...
<div class="full-screen-bg dark" data-image="dist/img/boot.jpg">
	<div class="title">Full Screen Dark Background Title</div>
</div>
...
<script>
	$('.full-screen-bg').fullScreenBackground();
</script>
...
```

* $().keepAtTop() - When element reaches top of screen that element will remain fixed to the top of the screen until scrolled to a position where it would be below the top again.

```html
...
<script>
	$('.navbar').keepAtTop();
</script>
...
```

* $().keepAtBottom() - When element reaches bottom of screen that element will remain fixed to the bottom of the screen until scrolled to a position where it would be above the bottom again.

```html
...
<script>
	$('.navbar').keepAtBottom();
</script>
...
```

* $().keepOnScreen() - Combination of $().keepAtTop() and $().keepAtBottom().

```html
...
<script>
	$('.navbar').keepOnScreen();
</script>
...
```

* $().alignBlocks({countPerRow: 4, block: '.list-item'}); - This will take a set of block and align them based on their height. The options and defaults are shown.

```html
...
<script>
	$('.uneven-list').alignBlocks({countPerRow: 4, block: '.list-item'});
</script>
...
```

### Other Variations
* Fontstrap Square can be found minified in dist directory.  This variation sets the default border-radius for all elements to 0 so they have square corners.
