"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _calendar = _interopRequireDefault(require("./calendar.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  animationData: _calendar["default"],
  animationKey: 'calendar'
};
exports["default"] = _default;