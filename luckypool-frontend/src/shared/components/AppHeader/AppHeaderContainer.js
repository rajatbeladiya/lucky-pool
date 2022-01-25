import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeb3 } from '../../../utils';

import { luckyPoolContract } from '../../../utils/ethersIndex';

import AppHeader from './AppHeader';
import * as landingActions from '../../../modules/landing/redux/actions';

class AppHeaderContainer extends Component {

  state = {
    admin: '',
  };

  async componentDidMount() {
    const { setAccount } = this.props;
    const web3 = await getWeb3();
    const [account] = await web3.eth.getAccounts();
    setAccount(account);
    try {
      const admin = await luckyPoolContract.owner();
      this.setState({
        admin
      });
    } catch (e) {
      console.log('error======', e);
    }
  }

  onConnectClick = async () => {
    await window.ethereum.enable();
  }

  onCreatePool = async () => {
    
  }

  render() {
    const { admin } = this.state;
    const { account } = this.props;
    return (
      <AppHeader
        onConnectClick={this.onConnectClick}
        onCreatePool={this.onCreatePool}
        account={account}
        admin={admin}
      />
    )
  }
}

const mapStateToProps = state => ({
  account: state.landing.account,
});

const mapDispatchToProps = dispatch => ({
  setAccount: account => dispatch(landingActions.setAccount(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
