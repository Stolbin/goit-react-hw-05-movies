"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoviesDetailsLink = exports.BtnMovieDetText = exports.MoviesDetailsInfoItem = exports.MoviesDetailsInfoText = exports.GenresTitle = exports.MoviesDetailsInfo = exports.CardInfo = exports.CardImage = exports.Icon = exports.BtnGoBackText = exports.BtnGoBack = exports.MoviesCard = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactRouterDom = require("react-router-dom");

var _fc = require("react-icons/fc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Raleway\", sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #006400;\n  text-shadow: 1px 1px 1px #6b8e23;\n  transition: all 900ms ease;\n  &:hover {\n    color: #0000cd;\n    transition: all 900ms ease;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 150px;\n  height: 50px;\n  padding: 10px 20px;\n  border-radius: 25px;\n  background-color: #fff;\n  box-shadow: 10px 10px 21px -9px rgba(0, 0, 0, 0.4);\n  transition: all 2000ms cubic-bezier(0, 0.11, 0.35, 2);\n  &:action {\n    transform: scale(0.97, 0.97);\n    transition: all 2000ms cubic-bezier(0, 0.11, 0.35, 2);\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 600;\n  padding: 10px;\n  color: black;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-style: italic;\n  font-weight: 600;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-between;\n  gap: 15px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  box-shadow: 3px 3px 5px #696969;\n  margin-bottom: 15px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: flex-start;\n  gap: 15px;\n  padding: 10px 20px;\n  background-color: #fff;\n  border-radius: 25px;\n  margin-bottom: 10px;\n  &: ;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MoviesCard = _styled["default"].section(_templateObject());

exports.MoviesCard = MoviesCard;
var BtnGoBack = (0, _styled["default"])(_reactRouterDom.NavLink)(_templateObject2());
exports.BtnGoBack = BtnGoBack;

var BtnGoBackText = _styled["default"].p(_templateObject3());

exports.BtnGoBackText = BtnGoBackText;
var Icon = (0, _styled["default"])(_fc.FcLeft)(_templateObject4());
exports.Icon = Icon;

var CardImage = _styled["default"].img(_templateObject5());

exports.CardImage = CardImage;

var CardInfo = _styled["default"].div(_templateObject6());

exports.CardInfo = CardInfo;

var MoviesDetailsInfo = _styled["default"].ul(_templateObject7());

exports.MoviesDetailsInfo = MoviesDetailsInfo;

var GenresTitle = _styled["default"].p(_templateObject8());

exports.GenresTitle = GenresTitle;

var MoviesDetailsInfoText = _styled["default"].p(_templateObject9());

exports.MoviesDetailsInfoText = MoviesDetailsInfoText;

var MoviesDetailsInfoItem = _styled["default"].button(_templateObject10());

exports.MoviesDetailsInfoItem = MoviesDetailsInfoItem;

var BtnMovieDetText = _styled["default"].p(_templateObject11());

exports.BtnMovieDetText = BtnMovieDetText;
var MoviesDetailsLink = (0, _styled["default"])(_reactRouterDom.NavLink)(_templateObject12());
exports.MoviesDetailsLink = MoviesDetailsLink;