/* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */
import cs from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PageButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onPageChange(this.props.page);
  }
  render() {
    const {
      page,
      title,
      active,
      disabled,
      className
    } = this.props;
    const classes = cs({
      active,
      disabled,
      'page-item': true
    }, className);
    return /*#__PURE__*/React.createElement("li", {
      className: classes,
      title: title
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: this.handleClick,
      className: "page-link"
    }, page));
  }
}
PageButton.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.oneOfType([PropTypes.node, PropTypes.number, PropTypes.string]).isRequired,
  active: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};
export default PageButton;