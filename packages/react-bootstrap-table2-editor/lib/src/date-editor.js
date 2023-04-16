function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
class DateEditor extends Component {
  componentDidMount() {
    const {
      defaultValue,
      didMount
    } = this.props;
    this.date.valueAsDate = new Date(defaultValue);
    this.date.focus();
    if (didMount) didMount();
  }
  getValue() {
    return this.date.value;
  }
  render() {
    const {
      defaultValue,
      didMount,
      className,
      ...rest
    } = this.props;
    const editorClass = cs('form-control editor edit-date', className);
    return /*#__PURE__*/React.createElement("input", _extends({
      ref: node => this.date = node,
      type: "date",
      className: editorClass
    }, rest));
  }
}
DateEditor.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultValue: PropTypes.string,
  didMount: PropTypes.func
};
DateEditor.defaultProps = {
  className: '',
  defaultValue: '',
  didMount: undefined
};
export default DateEditor;