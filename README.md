# Modest Typescript-Angular 1.x Boilerplate

### Summary

- This boilerplate uses the typescript compiler to bundle files into a single file with AMD JS-modules. The bundle includes a small (1kb when minified) AMD API shim called [Almond](https://github.com/requirejs/almond). This approach in considerably faster than any Browserify or Webpack builds I've encountered.

- I've also included the essential stylesheet and template related tasks you would except from a boilerplate. I tried not to bloat this repository too much, so the test runners, linting etc. are left out.
 

### Get started

- You need to have npm and node installed
- If you don't have gulp installed as a global package, you can get by using the defined npm scripts, but I would definitely advice installing gulp. To get a list of available gulp tasks, just run `gulp`.
- To install packages, run `npm install`
- To build the app, run `npm build`
- To start to application, run `npm start` and navigate to `localhost:7203` in your browser. 

##### Minify your app
- By default the application is build into dev folder un-minified and with sourcemaps.
- To get you application production ready, just run `gulp minify`. Note: this task expects you to have all of your html, js and css already in the dev folder.
- Alternatively, you can run `gulp minify-js` and `gulp minify-css`.
- Notice that the minified files end up in dist folder.c

##### Add new dependencies
- If you look in the gulp/config.js you'll see a list of vendor paths pointing to node_modules folder. 
- To add new dependencies, just install them through npm by running `npm install --save <new_dependency>`, and add a new filepath in  gulp/config.js. 
- Notice that JS and CSS dependencies are maintained separately.
 
