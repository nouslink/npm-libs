function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/require-default-props: 0 */
/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint react/no-unused-prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LIKE, EQ } from '../comparison';
import { FILTER_TYPE } from '../const';
function optionsEquals(currOpts, prevOpts) {
  const keys = Object.keys(currOpts);
  for (let i = 0; i < keys.length; i += 1) {
    if (currOpts[keys[i]] !== prevOpts[keys[i]]) {
      return false;
    }
  }
  return Object.keys(currOpts).length === Object.keys(prevOpts).length;
}
const getSelections = container => {
  if (container.selectedOptions) {
    return Array.from(container.selectedOptions).map(item => item.value);
  }
  const selections = [];
  const totalLen = container.options.length;
  for (let i = 0; i < totalLen; i += 1) {
    const option = container.options.item(i);
    if (option.selected) selections.push(option.value);
  }
  return selections;
};
class MultiSelectFilter extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    const isSelected = props.defaultValue.map(item => props.options[item]).length > 0;
    this.state = {
      isSelected
    };
  }
  componentDidMount() {
    const {
      getFilter
    } = this.props;
    const value = getSelections(this.selectInput);
    if (value && value.length > 0) {
      this.applyFilter(value);
    }

    // export onFilter function to allow users to access
    if (getFilter) {
      getFilter(filterVal => {
        this.selectInput.value = filterVal;
        this.applyFilter(filterVal);
      });
    }
  }
  componentDidUpdate(prevProps) {
    let needFilter = false;
    if (this.props.defaultValue !== prevProps.defaultValue) {
      needFilter = true;
    } else if (!optionsEquals(this.props.options, prevProps.options)) {
      needFilter = true;
    }
    if (needFilter) {
      this.applyFilter(getSelections(this.selectInput));
    }
  }
  getDefaultValue() {
    const {
      filterState,
      defaultValue
    } = this.props;
    if (filterState && typeof filterState.filterVal !== 'undefined') {
      return filterState.filterVal;
    }
    return defaultValue;
  }
  getOptions() {
    const optionTags = [];
    const {
      options,
      placeholder,
      column,
      withoutEmptyOption
    } = this.props;
    if (!withoutEmptyOption) {
      optionTags.push( /*#__PURE__*/React.createElement("option", {
        key: "-1",
        value: ""
      }, placeholder || `Select ${column.text}...`));
    }
    Object.keys(options).forEach(key => optionTags.push( /*#__PURE__*/React.createElement("option", {
      key: key,
      value: key
    }, options[key])));
    return optionTags;
  }
  cleanFiltered() {
    const value = this.props.defaultValue !== undefined ? this.props.defaultValue : [];
    this.selectInput.value = value;
    this.applyFilter(value);
  }
  applyFilter(value) {
    if (value.length === 1 && value[0] === '') {
      value = [];
    }
    this.setState(() => ({
      isSelected: value.length > 0
    }));
    this.props.onFilter(this.props.column, FILTER_TYPE.MULTISELECT)(value);
  }
  filter(e) {
    const value = getSelections(e.target);
    this.applyFilter(value);
  }
  render() {
    const {
      id,
      style,
      className,
      filterState,
      defaultValue,
      onFilter,
      column,
      options,
      comparator,
      withoutEmptyOption,
      caseSensitive,
      getFilter,
      ...rest
    } = this.props;
    const selectClass = `filter select-filter form-control ${className} ${this.state.isSelected ? '' : 'placeholder-selected'}`;
    const elmId = `multiselect-filter-column-${column.dataField}${id ? `-${id}` : ''}`;
    return /*#__PURE__*/React.createElement("label", {
      className: "filter-label",
      htmlFor: elmId
    }, /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, "Filter by ", column.text), /*#__PURE__*/React.createElement("select", _extends({}, rest, {
      ref: n => this.selectInput = n,
      id: elmId,
      style: style,
      multiple: true,
      className: selectClass,
      onChange: this.filter,
      onClick: e => e.stopPropagation(),
      defaultValue: this.getDefaultValue()
    }), this.getOptions()));
  }
}
MultiSelectFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  column: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  id: PropTypes.string,
  filterState: PropTypes.object,
  comparator: PropTypes.oneOf([LIKE, EQ]),
  placeholder: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  withoutEmptyOption: PropTypes.bool,
  defaultValue: PropTypes.array,
  caseSensitive: PropTypes.bool,
  getFilter: PropTypes.func
};
MultiSelectFilter.defaultProps = {
  defaultValue: [],
  filterState: {},
  className: '',
  withoutEmptyOption: false,
  comparator: EQ,
  caseSensitive: true,
  id: null
};
export default MultiSelectFilter;