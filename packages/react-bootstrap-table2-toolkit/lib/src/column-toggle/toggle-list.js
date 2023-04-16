import React from 'react';
import PropTypes from 'prop-types';
const ToggleList = ({
  columns,
  onColumnToggle,
  toggles,
  contextual,
  className,
  btnClassName
}) => /*#__PURE__*/React.createElement("div", {
  className: `btn-group btn-group-toggle ${className}`,
  "data-toggle": "buttons"
}, columns.map(column => ({
  ...column,
  toggle: toggles[column.dataField]
})).map(column => /*#__PURE__*/React.createElement("button", {
  type: "button",
  key: column.dataField,
  className: `${btnClassName} btn btn-${contextual} ${column.toggle ? 'active' : ''}`,
  "data-toggle": "button",
  "aria-pressed": column.toggle ? 'true' : 'false',
  onClick: () => onColumnToggle(column.dataField)
}, column.text)));
ToggleList.propTypes = {
  columns: PropTypes.array.isRequired,
  toggles: PropTypes.object.isRequired,
  onColumnToggle: PropTypes.func.isRequired,
  btnClassName: PropTypes.string,
  className: PropTypes.string,
  contextual: PropTypes.string
};
ToggleList.defaultProps = {
  btnClassName: '',
  className: '',
  contextual: 'primary'
};
export default ToggleList;