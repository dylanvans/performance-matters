const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const routeStatic = require('./lib/route-static');
const redirectIndices = require('./lib/redirect-indices');
const critical = require('critical');
const app = express();
const baseDir = 'src';
const port = process.env.PORT || 3004;

app.set('etag', false);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

// static routes
app.use(routeStatic);
app.use('/static', express.static(path.join(__dirname, baseDir), { etag: false, lastModified: false }));

// dynamic pages
app.use(redirectIndices);
nunjucks.configure(baseDir, {
    autoescape: true,
    express: app,
    watch: true
});

critical.generate({
    inline: false,
    base: 'src/',
    src: 'index.html',
    css: ['src/dist/css/bootstrap.css', 'src/assets/css/src/docs.css'],
    width: 1300,
    height: 900,
    dest: 'dist/css/critical.css',
    minify: true,
    extract: true
});

app.get('*', (req, res, next) => {
    res.render(path.join('./', req.url, 'index.html'), {});
});

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`app running on http://localhost:${port}`);
});

