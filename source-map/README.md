# source-map

A site that contains a script with a call tree along with its minified bundle and source map generated by terser with the following command:

`terser main.js -m --toplevel -o gen.js --source-map="url=gen.js.map"`
