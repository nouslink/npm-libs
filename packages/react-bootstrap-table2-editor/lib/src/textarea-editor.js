function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
class TextAreaEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    const {
      defaultValue,
      didMount,
      autoSelectText
    } = this.props;
    this.text.value = defaultValue;
    this.text.focus();
    if (autoSelectText) this.text.select();
    if (didMount) didMount();
  }
  getValue() {
    return this.text.value;
  }
  handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) return;
    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }
  render() {
    const {
      defaultValue,
      didMount,
      className,
      autoSelectText,
      ...rest
    } = this.props;
    const editorClass = cs('form-control editor edit-textarea', className);
    return /*#__PURE__*/React.createElement("textarea", _extends({
      ref: node => this.text = node,
      type: "textarea",
      className: editorClass
    }, rest, {
      onKeyDown: this.handleKeyDown
    }));
  }
}
TextAreaEditor.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onKeyDown: PropTypes.func,
  autoSelectText: PropTypes.bool,
  didMount: PropTypes.func
};
TextAreaEditor.defaultProps = {
  className: '',
  defaultValue: '',
  autoSelectText: false,
  onKeyDown: undefined,
  didMount: undefined
};
export default TextAreaEditor;