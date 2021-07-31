why webpack ?
> Managing order of the scripts 
> Bundling the app code (all JS files, all CSS) into single or multiple bundles
> transpile the code

dependencies need to use webpack
> webpack
> webpack cli


commands
> npx webpack

mode option ?

webpack by default create a dist folder which contain the optimized code created by webpack
main.js is the entry point in src
if there is no entry point it takes index,js


-- asset modules --

assert modules (object)
- in modules we can set rules like what kind of asserts can be included 
- the assert modules contains a rules that is arry of objects which contrain specific rules

rules 
the object in the rules contain 

ex :  module :{
    rules: [
        {
            test : /\.(png|jpg)$/, //(define what image formates can be accepted)
            type : 'asset/resource'

        }
    ]
}

type - the type can be any of the 4 assert module types  (asset/resource,asset /inline, asset, asset/source )



4 types of assert modules

1) asset/resource 
- are used to import large images .. 
- asset/resource type will create a new file into the dist folder
- if the file is greater than 8kb, then the file will be treated as resoure assert module
- by default if the assert size  is < 8kb then the assert will be treated as inline assert or it will be treated as resource assert, however the file size limit can be changed

2) asset /inline 
- if the file is less than 8kb, then the file will be treated as inline module.
asset inline, generates a base64 code and bake it directly into the javascript bundle
- it used to import small file like svg

3) asset
- the general assert type is comibination of both the asset/resource  and  asset /inline 

4) asset/source 
- does not generate any file in the output directory
- the asset/source module type read the asset source content to javascript string and inject the string directly into the javascript file


--- loaders ---

Loaders allow you to import all other kinds of files that you can't handle using Asset Modules.

With Webpack, you can import css files right into your JavaScript code,you can import SASS, LESS, handlebars, XML and so much more!

this feature will help to import css into the componets 


---  plugins ---

plugins are additional javascript libraies that do everything that loaders cannot do.

plugins can also modify how bundles themselves are created 

using plugins we can define global constants to access accross the application.

We can minify the result in bundle so it consume less space and can be easily downloaded 

Ex :
UglifyJS plugin takes the bundle.js and minimizes the content to decrease the bundle size 

loading css and js in seperate bundles

MiniCssExtractPlugin to extract the css into a seperate file







