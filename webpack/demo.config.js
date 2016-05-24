var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('../package.json');

var baseFileDir = path.join(process.cwd(), 'example/');

var getEntry =function() {
    var basedir =baseFileDir+'src';
    var files = glob.sync(path.join(basedir, '*.js'));

    var webpackConfigEntry = {};//webpackConfig.entry || (webpackConfig.entry = {});

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file);

        webpackConfigEntry[relativePath] = file;
    });
    return webpackConfigEntry;
};

module.exports =extend({}, {
    //entry:baseFileDir+'src/index.js',
    devtool:'eval',
    entry:[
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './example/src/index.js'
    ],
    output:{
        path:path.join(process.cwd(),'example'),
        filename:config.name+'.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
/*
 module:{
 module:{
 loaders:[
 {
 test: /\.js$/,
 loader: 'babel',
 exclude: /node_modules/
 },
 {
 test: /\.less$/,
 loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
 }
 ]
 }
 },
 plugins: [
 new ExtractTextPlugin(path.join('example.css'))
 ]
 */