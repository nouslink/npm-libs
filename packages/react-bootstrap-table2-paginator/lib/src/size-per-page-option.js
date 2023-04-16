/* eslint jsx-a11y/href-no-hash: 0 */
import React from 'react';
import PropTypes from 'prop-types';
const SizePerPageOption = ({
  text,
  page,
  onSizePerPageChange,
  bootstrap4
}) => bootstrap4 ? /*#__PURE__*/React.createElement("a", {
  href: "#",
  tabIndex: "-1",
  role: "menuitem",
  className: "dropdown-item",
  "data-page": page,
  onMouseDown: e => {
    e.preventDefault();
    onSizePerPageChange(page);
  }
}, text) : /*#__PURE__*/React.createElement("li", {
  key: text,
  role: "presentation",
  className: "dropdown-item"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  tabIndex: "-1",
  role: "menuitem",
  "data-page": page,
  onMouseDown: e => {
    e.preventDefault();
    onSizePerPageChange(page);
  }
}, text));
SizePerPageOption.propTypes = {
  text: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired,
  bootstrap4: PropTypes.bool
};
SizePerPageOption.defaultProps = {
  bootstrap4: false
};
export default SizePerPageOption;