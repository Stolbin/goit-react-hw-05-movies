"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieByName = exports.getMovieById = exports.getTrendMovies = void 0;

var _propTypes = require("prop-types");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = "af36a8e543b2cdf1ea4b27ac643d9907";
_axios["default"].defaults.baseURL = "https://api.themoviedb.org/3/";
_axios["default"].defaults.params = {
  api_key: API_KEY
};

var getTrendMovies = function getTrendMovies() {
  var _ref, data;

  return regeneratorRuntime.async(function getTrendMovies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("trending/movie/day?api_key=".concat(API_KEY)));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getTrendMovies = getTrendMovies;

var getMovieById = function getMovieById(id) {
  var _ref2, data;

  return regeneratorRuntime.async(function getMovieById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("/movie/".concat(id, "?api_key=").concat(API_KEY, "&language=en-US")));

        case 2:
          _ref2 = _context2.sent;
          data = _ref2.data;
          return _context2.abrupt("return", data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getMovieById = getMovieById;

var getMovieByName = function getMovieByName(query) {
  var _ref3, data;

  return regeneratorRuntime.async(function getMovieByName$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("search/movie?api_key=".concat(API_KEY, "&language=en-US&query=").concat(query, "&page=1&include_adult=false"), {
            params: {
              query: query
            }
          }));

        case 2:
          _ref3 = _context3.sent;
          data = _ref3.data;
          return _context3.abrupt("return", data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getMovieByName = getMovieByName;
getTrendMovies.propTypes = {
  query: _propTypes.PropTypes.string.isRequired
};
getMovieById.propTypes = {
  id: _propTypes.PropTypes.number.isRequired
};
getMovieByName.propTypes = {
  query: _propTypes.PropTypes.number.isRequired
};