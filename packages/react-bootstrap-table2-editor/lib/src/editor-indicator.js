/* eslint no-return-assign: 0 */
import React from 'react';
import PropTypes from 'prop-types';
const EditorIndicator = ({
  invalidMessage
}) => /*#__PURE__*/React.createElement("div", {
  className: "alert alert-danger in",
  role: "alert"
}, /*#__PURE__*/React.createElement("strong", null, invalidMessage));
EditorIndicator.propTypes = {
  invalidMessage: PropTypes.string
};
EditorIndicator.defaultProps = {
  invalidMessage: null
};
export default EditorIndicator;