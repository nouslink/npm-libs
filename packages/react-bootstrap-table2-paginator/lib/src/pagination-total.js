import React from 'react';
import PropTypes from 'prop-types';
const PaginationTotal = props => {
  if (props.paginationTotalRenderer) {
    return props.paginationTotalRenderer(props.from, props.to, props.dataSize);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "react-bootstrap-table-pagination-total"
  }, "\xA0Showing rows ", props.from, " to\xA0", props.to, " of\xA0", props.dataSize);
};
PaginationTotal.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  dataSize: PropTypes.number.isRequired,
  paginationTotalRenderer: PropTypes.func
};
PaginationTotal.defaultProps = {
  paginationTotalRenderer: undefined
};
export default PaginationTotal;