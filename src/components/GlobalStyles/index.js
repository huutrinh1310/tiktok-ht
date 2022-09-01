import PropTypes from 'prop-types'
// import React from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
    // chỉ chấp nhận 1 children
    // return React.Children.only(children);
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;