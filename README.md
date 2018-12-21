# Fontstrap v2.8.0

### Fontstrap is a combination project where the latest Bootstrap and Font Awesome css versions are combined into a single css file using their SASS versions.  Currently those versions are:

* Bootstrap: 4.2.0 - http://getbootstrap.com
* Font Awesome: 5.6.3 - https://fontawesome.com

### Additionally some necessary and useful javascript files are also combined and loaded from a single file. Those tools and versions are:

* jQuery: 3.3.1 http://jquery.com
* bootstrap.js: 4.2.0 http://getbootstrap.com
* Popper.js: 1.14.6 https://popper.js.org (umd)
* Lodash.js: 4.17.11 https://lodash.com
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
	<script type="text/javascript" src="dist/js/third_party/jquery.min.js"></script> <!-- optional jQuery load if needed -->
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

#### $().fullScreenBackground()
[Demo](https://nretnilkram.github.io/fontstrap/examples/kitchen-sink.html)

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

#### $().keepAtTop() - When element reaches top of screen that element will remain fixed to the top of the screen until scrolled to a position where it would be below the top again.
[Demo](https://nretnilkram.github.io/fontstrap/examples/kitchen-sink.html)

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

#### $().keepAtBottom() - When element reaches bottom of screen that element will remain fixed to the bottom of the screen until scrolled to a position where it would be above the bottom again.
[Demo](https://nretnilkram.github.io/fontstrap/examples/kitchen-sink.html)

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

#### $().keepOnScreen() - Combination of $().keepAtTop() and $().keepAtBottom().
[Demo](https://nretnilkram.github.io/fontstrap/examples/kitchen-sink.html)

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


#### $().alignBlocks({countPerRow: 4, block: '.list-item', spaceBetween: 0}); - This will take a set of block and align them based on their height. The options and defaults are shown.
[JSFiddle Demo](https://jsfiddle.net/mlintern/xz8wqg9v/) [Demo](https://nretnilkram.github.io/fontstrap/examples/grid-list.html)

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

#### $().offcanvasMenu({width: 20, responsive: false, mainBlock: '.offcanvas-main-content', triggerEl: '.offcanvas-menu-toggle', submenuTrigger: '.submenu-toggle', submenuEl: '.submenu'}); - This will take a menu and turn it into an offcanvas menu.  It has many customizable elements and can be set for different widths based on screen size with the standard break points.
[Demo](https://nretnilkram.github.io/fontstrap/examples/grid-list.html)

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

#### $().imagePopOut(); - This will take an image or set of images and setup events so that when you click on the images they will show you a full screen view of that image.
[Demo](https://nretnilkram.github.io/fontstrap/examples/image-pop-out.html)

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

#### $().zoomIn(); - This will take an image or set of images and setup events so that when you hover over the image it will become larger.  The options for direction are middle, up, down, left, and right
[Demo](https://nretnilkram.github.io/fontstrap/examples/image-pop-out.html)

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

## Checkbox switch
[Demo](https://nretnilkram.github.io/fontstrap/examples/switch.html)

### Icons
```
<div class="fs-switch">
	<input type="checkbox" name="admin" value="user">
	<label class="fs-switch-magic"><i class="fa fa-check"></i><i class="fa fa-times"></i><div class="switch-handle"></div></label>
</div>
```

### No Icons
```
<div class="fs-switch no-icons">
	<input type="checkbox" name="admin" value="user">
	<label class="fs-switch-magic"><i class="fa fa-check"></i><i class="fa fa-times"></i><div class="switch-handle"></div></label>
</div>
```

### Custom Icon
```
<div class="fs-switch">
	<input type="checkbox" name="admin" value="user">
	<label class="fs-switch-magic"><i class="fa-text fs-switch-positive">Y</i><i class="fa-text fs-switch-negative">N</i><div class="switch-handle"></div></label>
</div>
```

## Radio

### Checkmark
```
<div class="fs-radio check">
	<input class="fs-radio-input checkmark" type="radio" name="inlineRadioOptions2" id="inlineRadio6" value="A">
	<label for="inlineRadio6">A</label>
</div>
```

### Overlay
```
<div class="fs-radio">
	<input class="fs-radio-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="A">
	<label class="fs-radio-label" for="inlineRadio1">A</label>
</div>
```

### No Checkmark
```
<div class="fs-radio">
	<input class="fs-radio-input" type="radio" name="inlineRadioOptions2" id="inlineRadio6" value="A">
	<label for="inlineRadio6">A</label>
</div>
```

### Local Storage:
[Demo](https://nretnilkram.github.io/fontstrap/examples/local-storage.html)

I created a jquery helper that is used by the offcanvas menu, but can also be used for other local storage needs.  You can initialize a new storage helper as follows.  The BrowserStorage class has an optional boolean variable for whether or not to use session instead of local storage, which defaults to false.

```javascript
var storage = new BrowserStorage(true);
```

* storage.get(id) - get data from storage with id.
* storage.save(id, data) - save data to storage with id and data to save.
* storage.delete(id) - delete data from storage with id.
* storage.exists(id) - check if data exist with given id.

### Other CSS Default Variations:

* Fonstrap Depth allows for the bg-gradient-* option and can be found in the minified file in `dist/css/theme` directory. fontstrap-depth.min.css [Demo](https://nretnilkram.github.io/fontstrap/master/example/depth.html)
* Fonstrap Ice Cream can be found minified in `dist/css/theme` directory.  This variation sets the default color scheme to yummy ice cream looking colors like chocolate, vanilla, and strawberry. fonstrap-ice-cream.min.css [Demo](https://nretnilkram.github.io/fontstrap/examples/ice-cream.html)
* Fonstrap Neon can be found minified in `dist/css/theme` directory.  This variation sets the default color scheme to vibrant neon colors. fonstrap-neon.min.css [Demo](https://nretnilkram.github.io/fontstrap/examples/neon.html)
* Fontstrap Square can be found minified in `dist/css/theme` directory.  This variation sets the default border-radius for all elements to 0 so they have square corners. fonstrap-square.min.css [Demo](https://nretnilkram.github.io/fontstrap/examples/square.html)


### All Examples:

Examples can be found in the `docs/examples` directory.
* advanced.html - A large compilation of features and functionality that are included in Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/advanced.html)
* basic.html - A very small starter site of Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/basic.html)
* blog.html - An example of a crude 2 column blog layout, which was built with Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/blog.html)
* depth.html - Demonstrates the bg-gradient-* option available in fontstrap-depth css file. [Demo](https://nretnilkram.github.io/fontstrap/master/example/depth.html)
* fixed.html - An example of the fixed position css utilities, which can be found in Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/fixed.html)
* grid-list.html - An example of the alignBlocks query function which can be found in Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/grid-list.html)
* ice-cream.html - An example of the ice-cream color theme found in `dist/css/theme`. [Demo](https://nretnilkram.github.io/fontstrap/master/example/ice-cream.html)
* image-pop-out.html - An example of the imagePopOut jquery functionality. [Demo](https://nretnilkram.github.io/fontstrap/master/image-pop-out.html)
* kitchen-sink.html - An example of all features and functionality added and found within Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/kitchen-sink.html)
* local-storage.html - An example of local storage functionality. [Demo](https://nretnilkram.github.io/fontstrap/master/example/local-storage.html)
* multi-level-dropdown.html - An example of the multi-level dropdowns, which was built with Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/multi-level-dropdown.html)
* neon.html - An example of the neon color theme found in `dist/css/theme`. [Demo](https://nretnilkram.github.io/fontstrap/master/example/neon.html)
* offcanvas.html - An example of the offCanvas Menu feature in action. [Demo](https://nretnilkram.github.io/fontstrap/master/example/offcanvas.html)
* square.html - An example of the square theme found in `dist/css/theme`, which removes all border radius css. [Demo](https://nretnilkram.github.io/fontstrap/master/example/square.html)
* switch.html - An example of the custom radio buttons. [Demo](https://nretnilkram.github.io/fontstrap/master/example/switch.html)
* width.html - An example of the added widths w-*, which is included in Fontstrap. [Demo](https://nretnilkram.github.io/fontstrap/master/example/width.html)


### Troubleshooting/Development:

* fontstrap.dev.js - This will pull in all the Fontstrap js files individually from the assets directory so that you can work directly with the un minified files.  You will likely need to update your `$(document).ready(function() {` to `$(window).on('load', function() {` so you are sure that all of the js files are loaded before envoking a function.
