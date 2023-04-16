function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
import SizePerPageOption from './size-per-page-option';
const sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';
const SizePerPageDropDown = props => {
  const {
    open,
    tableId,
    hidden,
    onClick,
    onBlur,
    options,
    className,
    variation,
    bootstrap4,
    btnContextual,
    optionRenderer,
    currSizePerPage,
    onSizePerPageChange
  } = props;
  const dropDownStyle = {
    visibility: hidden ? 'hidden' : 'visible'
  };
  const openClass = open ? 'open show' : '';
  const dropdownClasses = cs(openClass, sizePerPageDefaultClass, variation, className);
  const id = tableId ? `${tableId}-pageDropDown` : 'pageDropDown';
  return /*#__PURE__*/React.createElement("span", {
    style: dropDownStyle,
    className: dropdownClasses
  }, /*#__PURE__*/React.createElement("button", {
    id: id,
    type: "button",
    className: `btn ${btnContextual} dropdown-toggle`,
    "data-toggle": "dropdown",
    "aria-expanded": open,
    onClick: onClick,
    onBlur: onBlur
  }, currSizePerPage, ' ', bootstrap4 ? null : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "caret"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: `dropdown-menu ${openClass}`,
    role: "menu",
    "aria-labelledby": id
  }, options.map(option => {
    if (optionRenderer) {
      return optionRenderer({
        ...option,
        onSizePerPageChange
      });
    }
    return /*#__PURE__*/React.createElement(SizePerPageOption, _extends({}, option, {
      key: option.text,
      bootstrap4: bootstrap4,
      onSizePerPageChange: onSizePerPageChange
    }));
  })));
};
SizePerPageDropDown.propTypes = {
  currSizePerPage: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired,
  bootstrap4: PropTypes.bool,
  tableId: PropTypes.string,
  open: PropTypes.bool,
  hidden: PropTypes.bool,
  btnContextual: PropTypes.string,
  variation: PropTypes.oneOf(['dropdown', 'dropup']),
  className: PropTypes.string,
  optionRenderer: PropTypes.func
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: '',
  optionRenderer: null,
  bootstrap4: false,
  tableId: null
};
export default SizePerPageDropDown;