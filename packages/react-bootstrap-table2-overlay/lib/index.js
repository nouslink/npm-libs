function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint no-return-assign: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
export default (options => loading => class TableLoadingOverlayWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  componentDidMount() {
    if (loading) {
      const {
        wrapper
      } = this.overlay;
      const masker = wrapper.current.firstChild;
      const headerDOM = wrapper.current.parentElement.querySelector('thead');
      const bodyDOM = wrapper.current.parentElement.querySelector('tbody');
      const captionDOM = wrapper.current.parentElement.querySelector('caption');
      let marginTop = window.getComputedStyle(headerDOM).height;
      if (captionDOM) {
        marginTop = parseFloat(marginTop.replace('px', ''));
        marginTop += parseFloat(window.getComputedStyle(captionDOM).height.replace('px', ''));
        marginTop = `${marginTop}px`;
      }
      masker.style.marginTop = marginTop;
      masker.style.height = window.getComputedStyle(bodyDOM).height;
    }
  }
  render() {
    return /*#__PURE__*/React.createElement(LoadingOverlay, _extends({
      ref: n => this.overlay = n
    }, options, {
      active: loading
    }), this.props.children);
  }
});