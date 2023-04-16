function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/prop-types: 0 */
import React from 'react';
export default (WrappedComponent => ({
  page,
  sizePerPage,
  ...rest
}) => /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, rest, {
  currPage: page,
  currSizePerPage: sizePerPage
})));