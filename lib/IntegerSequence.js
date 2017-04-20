'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IntegerSequence = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsItertools = require('@aureooms/js-itertools');

var _jsError = require('@aureooms/js-error');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntegerSequence = exports.IntegerSequence = function () {
	function IntegerSequence(integer) {
		_classCallCheck(this, IntegerSequence);

		this.integer = integer;
	}

	_createClass(IntegerSequence, [{
		key: 'nth',
		value: function nth(n) {

			return (0, _jsItertools.last)(this.range(n + 1));
		}
	}, {
		key: 'range',
		value: function range(i, j) {

			if (j === undefined) return (0, _jsItertools.take)(this.all(), i);

			return (0, _jsItertools.drop)((0, _jsItertools.take)(this.all(), j), i);
		}
	}, {
		key: 'all',
		value: function all() {

			throw (0, _jsError.NotImplementedError)('IntegerSequence#all is not implemented.');
		}
	}]);

	return IntegerSequence;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlZ2VyU2VxdWVuY2UuanMiXSwibmFtZXMiOlsiSW50ZWdlclNlcXVlbmNlIiwiaW50ZWdlciIsIm4iLCJyYW5nZSIsImkiLCJqIiwidW5kZWZpbmVkIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQUVhQSxlLFdBQUFBLGU7QUFFWiwwQkFBY0MsT0FBZCxFQUF3QjtBQUFBOztBQUV2QixPQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFFQTs7OztzQkFFS0MsQyxFQUFJOztBQUVULFVBQU8sdUJBQU0sS0FBS0MsS0FBTCxDQUFZRCxJQUFJLENBQWhCLENBQU4sQ0FBUDtBQUVBOzs7d0JBRU9FLEMsRUFBSUMsQyxFQUFJOztBQUVmLE9BQUtBLE1BQU1DLFNBQVgsRUFBdUIsT0FBTyx1QkFBTSxLQUFLQyxHQUFMLEVBQU4sRUFBb0JILENBQXBCLENBQVA7O0FBRXZCLFVBQU8sdUJBQU0sdUJBQU0sS0FBS0csR0FBTCxFQUFOLEVBQW9CRixDQUFwQixDQUFOLEVBQWdDRCxDQUFoQyxDQUFQO0FBRUE7Ozt3QkFFTzs7QUFFUCxTQUFNLGtDQUFvQix5Q0FBcEIsQ0FBTjtBQUVBIiwiZmlsZSI6IkludGVnZXJTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhc3QgLCB0YWtlICwgZHJvcCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCB7IE5vdEltcGxlbWVudGVkRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuZXhwb3J0IGNsYXNzIEludGVnZXJTZXF1ZW5jZSB7XG5cblx0Y29uc3RydWN0b3IgKCBpbnRlZ2VyICkge1xuXG5cdFx0dGhpcy5pbnRlZ2VyID0gaW50ZWdlciA7XG5cblx0fVxuXG5cdG50aCAoIG4gKSB7XG5cblx0XHRyZXR1cm4gbGFzdCggdGhpcy5yYW5nZSggbiArIDEgKSApIDtcblxuXHR9XG5cblx0cmFuZ2UgKCBpICwgaiApIHtcblxuXHRcdGlmICggaiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIHRha2UoIHRoaXMuYWxsKCApICwgaSApIDtcblxuXHRcdHJldHVybiBkcm9wKCB0YWtlKCB0aGlzLmFsbCggKSAsIGogKSAsIGkgKSA7XG5cblx0fVxuXG5cdGFsbCAoICkge1xuXG5cdFx0dGhyb3cgTm90SW1wbGVtZW50ZWRFcnJvcignSW50ZWdlclNlcXVlbmNlI2FsbCBpcyBub3QgaW1wbGVtZW50ZWQuJykgO1xuXG5cdH1cblxufVxuIl19