function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint no-return-assign: 0 */
import React, { Component } from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';
class DropDownEditor extends Component {
  constructor(props) {
    super(props);
    let options = props.options;
    if (props.getOptions) {
      options = props.getOptions(this.setOptions.bind(this), {
        row: props.row,
        column: props.column
      }) || [];
    }
    this.state = {
      options
    };
  }
  componentDidMount() {
    const {
      defaultValue,
      didMount
    } = this.props;
    this.select.value = defaultValue;
    this.select.focus();
    if (didMount) didMount();
  }
  setOptions(options) {
    this.setState({
      options
    });
  }
  getValue() {
    return this.select.value;
  }
  render() {
    const {
      defaultValue,
      didMount,
      getOptions,
      className,
      ...rest
    } = this.props;
    const editorClass = cs('form-control editor edit-select', className);
    const attr = {
      ...rest,
      className: editorClass
    };
    return /*#__PURE__*/React.createElement("select", _extends({}, attr, {
      ref: node => this.select = node,
      defaultValue: defaultValue
    }), this.state.options.map(({
      label,
      value
    }) => /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label)));
  }
}
DropDownEditor.propTypes = {
  row: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any
  }))]),
  didMount: PropTypes.func,
  getOptions: PropTypes.func
};
DropDownEditor.defaultProps = {
  className: '',
  defaultValue: '',
  style: {},
  options: [],
  didMount: undefined,
  getOptions: undefined
};
export default DropDownEditor;