/**
 * Created by mac on 15/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('../package.json');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
    entry:[path.join(process.cwd(),'src/index.js')],
    resolve:{
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'lib'
        ]
    },
    output:{
        libraryTarget: 'umd',
        path:path.join(process.cwd(),'dist'),
        filename:config.name+'.js'
    },
    externals:[{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react/lib/ReactDOM': {
            root: 'ReactDom',
            commonjs2: 'react/lib/ReactDOM',
            commonjs: 'react/lib/ReactDOM',
            amd: 'react/lib/ReactDOM'
        }
    }],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.join('example.css'))
    ]
};