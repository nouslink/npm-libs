function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/prop-types: 0 */
import React from 'react';
import { Consumer } from './context';
import createEditingCell from './editing-cell';
export default ((_, onStartEdit) => {
  const EditingCell = createEditingCell(_, onStartEdit);
  const renderWithEditingCell = (props, cellEdit) => {
    const content = _.get(props.row, props.column.dataField);
    let editCellstyle = props.column.editCellStyle || {};
    let editCellclasses = props.column.editCellClasses;
    if (_.isFunction(props.column.editCellStyle)) {
      editCellstyle = props.column.editCellStyle(content, props.row, props.rowIndex, props.columnIndex);
    }
    if (_.isFunction(props.column.editCellClasses)) {
      editCellclasses = props.column.editCellClasses(content, props.row, props.rowIndex, props.columnIndex);
    }
    return /*#__PURE__*/React.createElement(EditingCell, _extends({}, props, {
      className: editCellclasses,
      style: editCellstyle
    }, cellEdit));
  };
  return props => /*#__PURE__*/React.createElement(Consumer, null, cellEdit => renderWithEditingCell(props, cellEdit));
});