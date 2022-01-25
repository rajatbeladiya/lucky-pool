import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';

import { noop } from '../../../utils';


const AppHeader = ({ account, onConnectClick, onCreatePool, admin }) => {
  return (
    <div className="app-header-container" id="app-header">
      <div className="app-name-wrapper">
        <div className="app-name">Lucky Pool</div>
      </div>
      <div className="menu-items">
        {
          admin && (
            <Button
              type="button"
              className="create-pool"
              variant='outlined'
              onClick={() => onCreatePool()}
            >
              Create Pool
            </Button>
          )
        }
      </div>
      <div className="connect-wallet-wrapper">
        {
          account ? 
            <div className="metamask-address">{account}</div>
          :
            <Button
              type="button"
              className="connect-wallet"
              variant='outlined'
              onClick={() => onConnectClick()}
            >
              Connect
            </Button>
        }
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  account: PropTypes.string,
  admin: PropTypes.string,
  onConnectClick: PropTypes.func,
  onCreatePool: PropTypes.func,
}

AppHeader.defaultProps =  {
  account: '',
  admin: '',
  onConnectClick: noop,
  onCreatePool: noop
}

export default withRouter(AppHeader);
