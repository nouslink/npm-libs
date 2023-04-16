function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import PageButton from './page-button';
const PaginatonList = props => /*#__PURE__*/React.createElement("ul", {
  className: "pagination react-bootstrap-table-page-btns-ul"
}, props.pages.map(pageProps => {
  if (props.pageButtonRenderer) {
    return props.pageButtonRenderer({
      ...pageProps,
      onPageChange: props.onPageChange
    });
  }
  return /*#__PURE__*/React.createElement(PageButton, _extends({
    key: pageProps.page
  }, pageProps, {
    onPageChange: props.onPageChange
  }));
}));
PaginatonList.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.oneOfType([PropTypes.node, PropTypes.number, PropTypes.string]),
    active: PropTypes.bool,
    disable: PropTypes.bool,
    title: PropTypes.string
  })).isRequired,
  onPageChange: PropTypes.func.isRequired,
  pageButtonRenderer: PropTypes.func
};
PaginatonList.defaultProps = {
  pageButtonRenderer: null
};
export default PaginatonList;