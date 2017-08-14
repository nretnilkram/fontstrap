# fontstrap v1.2.1

### Fontstrap is a combination project where the latest Bootstrap and Font Awesome css versions are combined into a single css file using their SASS versions.  Currently those versions are:

* Bootstrap: 4.0.0-beta
* Font Awesome: 4.7.0

### Some necessary and useful javascript files are also loaded from a single file. Those versions are:

* jQuery: 3.2.1
* popper-bootstrap.js - generated combination of popper.js version 1.11.0 and bootstrap.js from the 4.0.0-beta build
* Lodash.js: 4.17.4
* fontstrap-features.min.js - functionality added for fontstrap suite

### How to Customize:

1. Download
2. Customize SASS files in assets directory
3. Compile CSS
```
bundle install
bundle exec rake sass:compile
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
<nav class="navbar navbar-expand-lg">
	<a class="navbar-brand" href="#">Title</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="nav navbar-nav">
			<li class="nav-item"><a class="nav-link" target="_blank" href="#">Bootstrap</a></li>
		</ul>
	</div>
</nav>
...
<script>
	$('.navbar').keepAtTop();
</script>
...
```

* $().keepAtBottom() - When element reaches bottom of screen that element will remain fixed to the bottom of the screen until scrolled to a position where it would be above the bottom again.

```html
...
<nav class="navbar navbar-expand-lg">
	<a class="navbar-brand" href="#">Title</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="nav navbar-nav">
			<li class="nav-item"><a class="nav-link" target="_blank" href="#">Bootstrap</a></li>
		</ul>
	</div>
</nav>
...
<script>
	$('.navbar').keepAtBottom();
</script>
...
```

* $().keepOnScreen() - Combination of $().keepAtTop() and $().keepAtBottom().

```html
...
<nav class="navbar navbar-expand-lg">
	<a class="navbar-brand" href="#">Title</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="nav navbar-nav">
			<li class="nav-item"><a class="nav-link" target="_blank" href="#">Bootstrap</a></li>
		</ul>
	</div>
</nav>
...
<script>
	$('.navbar').keepOnScreen();
</script>
...
```

* $().alignBlocks({countPerRow: 4, block: '.list-item', spaceBetween: 0}); - This will take a set of block and align them based on their height. The options and defaults are shown.

```html
...
<div class="uneven-list">
	<div class="list-item" style="height: 327px;"></div>
	<div class="list-item" style="height: 132px;"></div>
	<div class="list-item" style="height: 284px;"></div>
	<div class="list-item" style="height: 272px;"></div>
	<div class="list-item" style="height: 93px;"></div>
	<div class="list-item" style="height: 112px;"></div>
	<div class="list-item" style="height: 241px;"></div>
	<div class="list-item" style="height: 108px;"></div>
	<div class="list-item" style="height: 243px;"></div>
	<div class="list-item" style="height: 202px;"></div>
</div>
...
<script>
	$('.uneven-list').alignBlocks({
		countPerRow: 4,
		block: '.list-item',
		spaceBetween: 0
	});
</script>
...
```

### Other Variations
* Fontstrap Square can be found minified in dist directory.  This variation sets the default border-radius for all elements to 0 so they have square corners.


### Examples
Four examples can be located in the examples directory.
* advanced.html - A large compilation of features and functionality that are included in fontstrap.
* square.html - Similar to advanced, but utilizes the fontstrap-square css which removes the border radius from elements.
* basic.html - A very small starter site of fontstrap.
* grid-list.html - An example of the alignBlocks() query function which can be found in fontstrap.
