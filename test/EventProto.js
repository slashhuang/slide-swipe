'use strict';

// To know the usage of `assert`, see: http://nodejs.org/api/assert.html
var assert = require('assert');
import EventProto from '../src/EventProto.js';

describe("EventProto", function(){
  it("should do blah blah blah", function(){
    var init = new EventProto();
    var consoleHello = console.log('hello')
    init.on('hello',consoleHello);
    init.trigger('hello');
    init.off('hello',consoleHello);
    init.trigger('hello');
  });
});