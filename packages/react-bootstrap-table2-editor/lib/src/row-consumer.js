function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/prop-types: 0 */
import React from 'react';
import { DELAY_FOR_DBCLICK, DBCLICK_TO_CELL_EDIT, CLICK_TO_CELL_EDIT } from './const';
import { Consumer } from './context';
export default ((Component, selectRowEnabled) => {
  const renderWithCellEdit = (props, cellEdit) => {
    const key = props.value;
    const editableRow = !(cellEdit.nonEditableRows.length > 0 && cellEdit.nonEditableRows.indexOf(key) > -1);
    const attrs = {};
    if (selectRowEnabled && cellEdit.mode === DBCLICK_TO_CELL_EDIT) {
      attrs.DELAY_FOR_DBCLICK = DELAY_FOR_DBCLICK;
    }
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, attrs, {
      editingRowIdx: cellEdit.ridx,
      editingColIdx: cellEdit.cidx,
      editable: editableRow,
      onStart: cellEdit.onStart,
      clickToEdit: cellEdit.mode === CLICK_TO_CELL_EDIT,
      dbclickToEdit: cellEdit.mode === DBCLICK_TO_CELL_EDIT
    }));
  };
  function withConsumer(props) {
    return /*#__PURE__*/React.createElement(Consumer, null, cellEdit => renderWithCellEdit(props, cellEdit));
  }
  withConsumer.displayName = 'WithCellEditingRowConsumer';
  return withConsumer;
});