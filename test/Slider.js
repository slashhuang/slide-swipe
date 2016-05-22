/**
 * Created by slashhuang on 16/5/22.
 */
'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
var assert = require('assert');
import Slider from '../src/Slider.js';

describe("Slider", function(){
    it("tesing slider", function(){
        var init = new Slider();
        var consoleHello = console.log('hello')
        init.on('hello',consoleHello);
        init.trigger('hello');
        init.off('hello',consoleHello);
        init.trigger('hello');
    });
});