'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Fibonacci = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IntegerSequence2 = require('./IntegerSequence');

var _jsFibonacci = require('@aureooms/js-fibonacci');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fibonacci = exports.Fibonacci = function (_IntegerSequence) {
	_inherits(Fibonacci, _IntegerSequence);

	function Fibonacci() {
		_classCallCheck(this, Fibonacci);

		return _possibleConstructorReturn(this, (Fibonacci.__proto__ || Object.getPrototypeOf(Fibonacci)).apply(this, arguments));
	}

	_createClass(Fibonacci, [{
		key: 'all',
		value: function all() {
			var _integer = this.integer,
			    iadd = _integer.iadd,
			    $0 = _integer.$0,
			    $1 = _integer.$1;

			var generator = (0, _jsFibonacci.__generator__)(iadd, $0, $1);
			var F = generator();
			return F;
		}
	}]);

	return Fibonacci;
}(_IntegerSequence2.IntegerSequence);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaWJvbmFjY2kuanMiXSwibmFtZXMiOlsiRmlib25hY2NpIiwiaW50ZWdlciIsImlhZGQiLCIkMCIsIiQxIiwiZ2VuZXJhdG9yIiwiRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLFMsV0FBQUEsUzs7Ozs7Ozs7Ozs7d0JBRUo7QUFBQSxrQkFFb0IsS0FBS0MsT0FGekI7QUFBQSxPQUVDQyxJQUZELFlBRUNBLElBRkQ7QUFBQSxPQUVRQyxFQUZSLFlBRVFBLEVBRlI7QUFBQSxPQUVhQyxFQUZiLFlBRWFBLEVBRmI7O0FBR1AsT0FBTUMsWUFBYSxnQ0FBZUgsSUFBZixFQUFzQkMsRUFBdEIsRUFBMkJDLEVBQTNCLENBQW5CO0FBQ0EsT0FBTUUsSUFBSUQsV0FBVjtBQUNBLFVBQU9DLENBQVA7QUFFQSIsImZpbGUiOiJGaWJvbmFjY2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ2VyU2VxdWVuY2UgfSBmcm9tICcuL0ludGVnZXJTZXF1ZW5jZScgO1xuaW1wb3J0IHsgX19nZW5lcmF0b3JfXyB9IGZyb20gJ0BhdXJlb29tcy9qcy1maWJvbmFjY2knIDtcblxuZXhwb3J0IGNsYXNzIEZpYm9uYWNjaSBleHRlbmRzIEludGVnZXJTZXF1ZW5jZSB7XG5cblx0YWxsICggKSB7XG5cblx0XHRjb25zdCB7IGlhZGQgLCAkMCAsICQxIH0gPSB0aGlzLmludGVnZXIgO1xuXHRcdGNvbnN0IGdlbmVyYXRvciA9ICBfX2dlbmVyYXRvcl9fKCBpYWRkICwgJDAgLCAkMSApIDtcblx0XHRjb25zdCBGID0gZ2VuZXJhdG9yKCApIDtcblx0XHRyZXR1cm4gRiA7XG5cblx0fVxuXG59XG4iXX0=