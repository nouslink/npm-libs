function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */
import cs from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pageResolver from './page-resolver';
import paginationHandler from './pagination-handler';
import { SizePerPageDropdownWithAdapter } from './size-per-page-dropdown-adapter';
import { PaginationListWithAdapter } from './pagination-list-adapter';
import { PaginationTotalWithAdapter } from './pagination-total-adapter';
import Const from './const';
class Pagination extends pageResolver(Component) {
  render() {
    const {
      tableId,
      currPage,
      pageStartIndex,
      showTotal,
      dataSize,
      pageListRenderer,
      pageButtonRenderer,
      paginationTotalRenderer,
      hidePageListOnlyOnePage,
      totalPages,
      lastPage,
      onPageChange,
      sizePerPageList,
      currSizePerPage,
      hideSizePerPage,
      sizePerPageRenderer,
      sizePerPageOptionRenderer,
      onSizePerPageChange,
      bootstrap4,
      ...rest
    } = this.props;
    const pages = this.calculatePageStatus(this.calculatePages(totalPages, lastPage), lastPage);
    const pageListClass = cs('react-bootstrap-table-pagination-list', 'col-md-6 col-xs-6 col-sm-6 col-lg-6', {
      'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "row react-bootstrap-table-pagination"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 col-xs-6 col-sm-6 col-lg-6"
    }, /*#__PURE__*/React.createElement(SizePerPageDropdownWithAdapter, {
      bootstrap4: bootstrap4,
      tableId: tableId,
      sizePerPageList: sizePerPageList,
      currSizePerPage: currSizePerPage,
      hideSizePerPage: hideSizePerPage,
      sizePerPageRenderer: sizePerPageRenderer,
      sizePerPageOptionRenderer: sizePerPageOptionRenderer,
      onSizePerPageChange: onSizePerPageChange
    }), showTotal ? /*#__PURE__*/React.createElement(PaginationTotalWithAdapter, {
      currPage: currPage,
      currSizePerPage: currSizePerPage,
      pageStartIndex: pageStartIndex,
      dataSize: dataSize,
      paginationTotalRenderer: paginationTotalRenderer
    }) : null), pageListRenderer ? pageListRenderer({
      pages,
      onPageChange
    }) : /*#__PURE__*/React.createElement("div", {
      className: pageListClass
    }, /*#__PURE__*/React.createElement(PaginationListWithAdapter, _extends({}, rest, {
      currPage: currPage,
      currSizePerPage: currSizePerPage,
      pageStartIndex: pageStartIndex,
      lastPage: lastPage,
      totalPages: totalPages,
      pageButtonRenderer: pageButtonRenderer,
      onPageChange: onPageChange
    }))));
  }
}
Pagination.propTypes = {
  dataSize: PropTypes.number.isRequired,
  sizePerPageList: PropTypes.array.isRequired,
  currPage: PropTypes.number.isRequired,
  currSizePerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onSizePerPageChange: PropTypes.func.isRequired,
  disablePageTitle: PropTypes.bool,
  pageStartIndex: PropTypes.number,
  paginationSize: PropTypes.number,
  showTotal: PropTypes.bool,
  pageListRenderer: PropTypes.func,
  pageButtonRenderer: PropTypes.func,
  sizePerPageRenderer: PropTypes.func,
  paginationTotalRenderer: PropTypes.func,
  sizePerPageOptionRenderer: PropTypes.func,
  firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  prePageText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  nextPageTitle: PropTypes.string,
  prePageTitle: PropTypes.string,
  firstPageTitle: PropTypes.string,
  lastPageTitle: PropTypes.string,
  withFirstAndLast: PropTypes.bool,
  alwaysShowAllBtns: PropTypes.bool,
  hideSizePerPage: PropTypes.bool,
  hidePageListOnlyOnePage: PropTypes.bool,
  bootstrap4: PropTypes.bool
};
Pagination.defaultProps = {
  disablePageTitle: false,
  bootstrap4: false,
  pageStartIndex: Const.PAGE_START_INDEX,
  paginationSize: Const.PAGINATION_SIZE,
  withFirstAndLast: Const.With_FIRST_AND_LAST,
  alwaysShowAllBtns: Const.SHOW_ALL_PAGE_BTNS,
  showTotal: Const.SHOW_TOTAL,
  pageListRenderer: null,
  pageButtonRenderer: null,
  sizePerPageRenderer: null,
  paginationTotalRenderer: Const.PAGINATION_TOTAL,
  sizePerPageOptionRenderer: null,
  firstPageText: Const.FIRST_PAGE_TEXT,
  prePageText: Const.PRE_PAGE_TEXT,
  nextPageText: Const.NEXT_PAGE_TEXT,
  lastPageText: Const.LAST_PAGE_TEXT,
  sizePerPageList: Const.SIZE_PER_PAGE_LIST,
  nextPageTitle: Const.NEXT_PAGE_TITLE,
  prePageTitle: Const.PRE_PAGE_TITLE,
  firstPageTitle: Const.FIRST_PAGE_TITLE,
  lastPageTitle: Const.LAST_PAGE_TITLE,
  hideSizePerPage: Const.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: Const.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};
export default paginationHandler(Pagination);