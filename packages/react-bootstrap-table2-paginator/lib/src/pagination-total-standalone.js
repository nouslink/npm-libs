import React from 'react';
import PaginationTotal from './pagination-total';
import standaloneAdapter from './standalone-adapter';
import paginationTotalAdapter from './pagination-total-adapter';
const PaginationTotalStandalone = props => /*#__PURE__*/React.createElement(PaginationTotal, props);
export default standaloneAdapter(paginationTotalAdapter(PaginationTotalStandalone));