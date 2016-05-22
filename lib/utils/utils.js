/**
 * Created by slashhuang on 16/5/22.
 */

"use strict";

exports.__esModule = true;
var utils = {
  isMobile: function isMobile() {
    /**
     * 使用TouchEvent来实验是否为移动端
     */
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
};
exports["default"] = utils;
module.exports = exports["default"];