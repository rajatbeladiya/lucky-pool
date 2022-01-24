import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const AppHeader = ({ account }) => {
  return (
    <div className="app-header-container" id="app-header">
      <div className="app-name-wrapper">
        <div className="app-name">Lucky Pool</div>
      </div>
      <div className="metamask-address">{account && account}</div>
    </div>
  );
};

AppHeader.propTypes = {
  account: PropTypes.string
}

AppHeader.defaultProps =  {
  account: 'Connect'
}

export default withRouter(AppHeader);
