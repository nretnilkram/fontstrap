# Fontstrap v2.3.4

### Fontstrap is a combination project where the latest Bootstrap and Font Awesome css versions are combined into a single css file using their SASS versions.  Currently those versions are:

* Bootstrap: 4.1.1 - http://getbootstrap.com/
* Font Awesome: 5.0.13 - https://fontawesome.com/

### Additionally some necessary and useful javascript files are also combined and loaded from a single file. Those tools and versions are:

* jQuery: 3.3.1
* bootstrap.bundle.js: 4.1.1 (contains Popper.js: 1.14.0)
* Lodash.js: 4.17.10
* fontstrap-features.js - functionality added for the Fontstrap suite

### How to Customize:

1. Download
2. Customize / Add SASS files in assets directory
3. Compile CSS

```
bundle install
bundle exec rake fs:compile
```

### How To Use:

* Copy over entire dist directory to root of site. Then include the css file (or theme) and js files (indcluding jquery) to your project.

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
	<script type="text/javascript" src="dist/js/fontstrap.min.js"></script>
	<script>
		$(document).ready(function() {
			// Additional JS Here
		});
	</script>
</body>
</html>
```

### Additional Fontstrap Features:

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

* $().offcanvasMenu({width: 20, responsive: false, mainBlock: '.offcanvas-main-content', triggerEl: '.offcanvas-menu-toggle', submenuTrigger: '.submenu-toggle', submenuEl: '.submenu'}); - This will take a menu and turn it into an offcanvas menu.  It has many customizable elements and can be set for different widths based on screen size with the standard break points.

```html
...
<div class="offcanvas-menu bg-secondary">
	<div class="offcanvas-menu-header clearfix">
		<button class="pull-right offcanvas-menu-toggle p-3 text-white"><i class="fa fa-times"></i></button>
	</div>
	<ul>
		<li><a href="#"><i class="fa fa-home fa-fw mr-2"></i> Home</a></li>
		<li class='submenu-toggle'>
			<a href='#'><i class="fa fa-text fa-fw mr-2">WS</i> With Sub</a>
			<ul class="submenu">
				<li><a target="_blank" href="#"><i class="fa fa-text fa-fw mr-2">1</i> One</a></li>
				<li><a target="_blank" href="#"><i class="fa fa-text fa-fw mr-2">2</i> Two</a></li>
			</ul>
		</li>
		<li><a href="#"><i class="fa fa-text fa-fw mr-2">A</i> About</a></li>
	</ul>
</div>

<div class="offcanvas-main-content">
...
</div>
...
```

* $().imagePopOut(); - This will take an image or set of images and setup events so that when you click on the images they will show you a full screen view of that image.

```html
...
<div class="card">
	<img class="card-img-top" src="img/example.jpg" alt="Image">
	<div class="card-body">
		<p class="card-text">Sed viverra augue tellus nulla sollicitudin scelerisque, scelerisque rutrum mauris pharetra tempor donec arcu, ante nunc ipsum donec nec dis vitae, ipsum tempor.</p>
	</div>
</div>
...
<script type="text/javascript">
	$(document).ready(function() {
		$('.card-img-top').imagePopOut();
	});
</script>
```

* $().zoomIn(); - This will take an image or set of images and setup events so that when you hover over the image it will become larger.

```html
...
<div class="card">
	<img class="card-img-top" src="img/example.jpg" data-magnification-times="3" data-magnification-direction="right" alt="Image">
	<div class="card-body">
		<p class="card-text">Sed viverra augue tellus nulla sollicitudin scelerisque, scelerisque rutrum mauris pharetra tempor donec arcu, ante nunc ipsum donec nec dis vitae, ipsum tempor.</p>
	</div>
</div>
...
<script type="text/javascript">
	$(document).ready(function() {
		$('.card-img-top').zoomIn();
	});
</script>
```

### Local Storage:

I created a jquery helper that is used by the offcanvas menu, but can also be used for other local storage needs.  You can initialize a new storage helper as follows.  The BrowserStorage class has an optional boolean variable for whether or not to use session instead of local storage, which defaults to false.

```javascript
var storage = new BrowserStorage(true);
```

* storage.get(id) - get data from storage with id.
* storage.save(id, data) - save data to storage with id and data to save.
* storage.delete(id) - delete data from storage with id.
* storage.exists(id) - check if data exist with given id.

### Other CSS Default Variations:

* Fontstrap Square can be found minified in `dist/css/theme` directory.  This variation sets the default border-radius for all elements to 0 so they have square corners. fonstrap-square.min.css
* Fonstrap Ice Cream can be found minified in `dist/css/theme` directory.  This variation sets the default color scheme to yummy ice cream looking colors like chocolate, vanilla, and strawberry. fonstrap-ice-cream.min.css


### Examples:

Examples can be found in the examples directory.
* advanced.html - A large compilation of features and functionality that are included in Fontstrap.
* basic.html - A very small starter site of Fontstrap.
* blog.html - An example of a crude 2 column blog layout, which was built with Fontstrap.
* depth.html - Demonstrates the bg-gradient-* option available in fontstrap-depth css file.
* fixed.html - An example of the fixed position css utilities, which can be found in Fontstrap.
* grid-list.html - An example of the alignBlocks query function which can be found in Fontstrap.
* ice-cream.html - An example of the ice-cream color theme found in `dist/css/theme`.
* icons.html - Displays current icons available from Font Awesome.
* image-pop-out.html - An example of the imagePopOut jquery functionality.
* kitchen-sink.html - An example of all features and functionality added and found within Fontstrap.
* multi-level-dropdown.html - An example of the multi-level dropdowns, which was built with Fontstrap.
* neon.html - An example of the neon color theme found in `dist/css/theme`.
* offcanvas.html - An example of the offCanvas Menu feature in action.
* square.html - An example of the square theme found in `dist/css/theme`, which removes all border radius css.
* width.html - An example of the added widths w-*, which is included in Fontstrap.


### Troubleshooting/Development:

* fontstrap.dev.js - This will pull in all the Fontstrap js files individually from the assets directory so that you can work directly with the un minified files.  You will likely need to update your `$(document).ready(function() {` to `$(window).on('load', function() {` so you are sure that all of the js files are loaded before envoking a function.
