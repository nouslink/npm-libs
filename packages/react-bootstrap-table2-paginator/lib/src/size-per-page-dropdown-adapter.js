function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import pageResolver from './page-resolver';
import SizePerPageDropDown from './size-per-page-dropdown';
const sizePerPageDropdownAdapter = WrappedComponent => class SizePerPageDropdownAdapter extends pageResolver(Component) {
  constructor(props) {
    super(props);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleChangeSizePerPage = this.handleChangeSizePerPage.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggleDropDown() {
    const dropdownOpen = !this.state.dropdownOpen;
    this.setState(() => ({
      dropdownOpen
    }));
  }
  closeDropDown() {
    this.setState(() => ({
      dropdownOpen: false
    }));
  }
  handleChangeSizePerPage(sizePerPage) {
    this.props.onSizePerPageChange(sizePerPage);
    this.closeDropDown();
  }
  render() {
    const {
      tableId,
      bootstrap4,
      sizePerPageList,
      currSizePerPage,
      hideSizePerPage,
      sizePerPageRenderer,
      sizePerPageOptionRenderer
    } = this.props;
    const {
      dropdownOpen: open
    } = this.state;
    if (sizePerPageList.length > 1 && !hideSizePerPage) {
      if (sizePerPageRenderer) {
        return sizePerPageRenderer({
          options: this.calculateSizePerPageStatus(),
          currSizePerPage: `${currSizePerPage}`,
          onSizePerPageChange: this.handleChangeSizePerPage
        });
      }
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, {
        currSizePerPage: `${currSizePerPage}`,
        options: this.calculateSizePerPageStatus(),
        optionRenderer: sizePerPageOptionRenderer,
        onSizePerPageChange: this.handleChangeSizePerPage,
        onClick: this.toggleDropDown,
        onBlur: this.closeDropDown,
        open: open,
        tableId: tableId,
        bootstrap4: bootstrap4
      }));
    }
    return null;
  }
};
export const SizePerPageDropdownWithAdapter = sizePerPageDropdownAdapter(SizePerPageDropDown);
export default sizePerPageDropdownAdapter;