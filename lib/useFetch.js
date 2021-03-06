"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useFetch(url, options, dependencies) {
  const _useState = (0, _react.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];

  const _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        data = _useState4[0],
        setData = _useState4[1];

  const _useState5 = (0, _react.useState)(null),
        _useState6 = _slicedToArray(_useState5, 2),
        error = _useState6[0],
        setError = _useState6[1];

  (0, _react.useEffect)(() => {
    fetch(url, options).then(response => response.json()).then(d => {
      setLoading(false);
      setData(d);

      if (error) {
        setError(null);
      }
    }).catch(err => {
      setLoading(false);
      setData(null);
      setError(err);
    });
  }, dependencies);
  return {
    loading,
    data,
    error
  };
}

var _default = useFetch;
exports.default = _default;