function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
const ExportCSVButton = props => {
  const {
    onExport,
    children,
    className,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `react-bs-table-csv-btn btn btn-default ${className}`,
    onClick: () => onExport()
  }, rest), children);
};
ExportCSVButton.propTypes = {
  children: PropTypes.node.isRequired,
  onExport: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};
ExportCSVButton.defaultProps = {
  className: '',
  style: {}
};
export default ExportCSVButton;