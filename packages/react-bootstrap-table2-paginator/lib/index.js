import React from 'react';
import PropTypes from 'prop-types';
import createBaseContext from './src/state-context';
import createDataContext from './src/data-context';
import PaginationListStandalone from './src/pagination-list-standalone';
import SizePerPageDropdownStandalone from './src/size-per-page-dropdown-standalone';
import PaginationTotalStandalone from './src/pagination-total-standalone';
export default ((options = {}) => ({
  createContext: createDataContext,
  options
}));
const {
  Provider,
  Consumer
} = createBaseContext();
const CustomizableProvider = props => /*#__PURE__*/React.createElement(Provider, props, /*#__PURE__*/React.createElement(Consumer, null, paginationProps => props.children(paginationProps)));
CustomizableProvider.propTypes = {
  children: PropTypes.func.isRequired
};
export const PaginationProvider = CustomizableProvider;
export { PaginationListStandalone, SizePerPageDropdownStandalone, PaginationTotalStandalone };