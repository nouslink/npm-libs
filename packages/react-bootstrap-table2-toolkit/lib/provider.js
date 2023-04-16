import React from 'react';
import PropTypes from 'prop-types';
import ToolkitContext from './context';
const Toolkitprovider = props => /*#__PURE__*/React.createElement(ToolkitContext.Provider, props, /*#__PURE__*/React.createElement(ToolkitContext.Consumer, null, tookKitProps => props.children(tookKitProps)));
Toolkitprovider.propTypes = {
  children: PropTypes.func.isRequired
};
export default Toolkitprovider;