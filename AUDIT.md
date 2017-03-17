# Performance audit
## Image optimization
I used [tinypng.com](tinypng.com) to compress the images that are used in the website. Then I converted the images to the webp  image format using [convertio.co](convertio.co). With the picture element I created a fallback for browsers that don't support webp.

### Timeline before optimizing images - 23s
![Screenshot of first timeline](https://github.com/dylanvans/performance-matters/blob/image-optimization/md-img/first-screenshot.png)

### Timeline after optimizing images - 15s
![Screenshot of timeline](https://github.com/dylanvans/performance-matters/blob/image-optimization/md-img/screenshot.png)

#### Sources
- [tinypng.com](tinypng.com)
- [convertio.co](convertio.co)
- [gulp imagemin](https://www.npmjs.com/package/gulp-imagemin)


