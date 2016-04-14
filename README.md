# Modest TypeScript-Angular 1.x Boilerplate

### Summary

- This boilerplate uses the TypeScript compiler directly to bundle files into a single file with AMD-modules. The bundle includes a small (1kb when minified) AMD API shim called [Almond](https://github.com/requirejs/almond). Unscientific benchmarks suggest this approach to be considerably faster than Browserify or Webpack.

- The essential stylesheet, template and watch related tasks you would except in a boilerplate are also included. Test runners, linting etc. are left out to avoid bloating the repository too much.
 

### Getting started

- You need to have npm and node installed
- If you don't have gulp installed as a global package, you can get by by using the defined npm scripts, but I would definitely advice installing [gulp](https://www.npmjs.com/package/gulp). To get a list of available gulp tasks, just run `gulp`.
- To install packages, run `npm install`
- To build the app, run `npm build`
- To start the application, run `npm start` and navigate to `localhost:7203` in your browser. 

##### Minifying your app
- By default the application is build into dev folder un-minified and with sourcemaps.
- To get your application production ready, just run `gulp minify`. Note: this task expects you to have all of your html, js and css already in the dev folder.
- Alternatively, you can run `gulp minify-js` and `gulp minify-css`.
- Notice that the minified files end up in dist folder.

##### Adding new dependencies
- In gulp/config.js you'll see a list of vendor paths pointing to node_modules folder. 
- To add new dependencies, just install them through npm by running `npm install --save <new_dependency>`, and add a new filepath in  gulp/config.js. 
- Notice that JS and CSS dependencies are maintained separately.
 
####References
- [With latest TypeScript, you may not need Webpack by @vivainio](https://medium.com/@vivainio/with-latest-typescript-you-may-not-need-webpack-417d2ef0e773#.alctiog2l)
- [What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)
- [RequireJS docs about Almond](http://requirejs.org/docs/faq-optimization.html)
