import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWeb3 } from '../../../utils';
import { luckyPoolContract } from '../../../utils/ethersIndex';
import { CREATE_POOL_DIALOG } from '../../DialogNames';

import AppHeader from './AppHeader';
import * as landingActions from '../../../modules/landing/redux/actions';

class AppHeaderContainer extends Component {

  state = {
    admin: '',
  };

  async componentDidMount() {
    const { setAccount, setOwner } = this.props;
    const web3 = await getWeb3();
    const [account] = await web3.eth.getAccounts();
    setAccount(account);
    console.log('luckyPoolContract=====', luckyPoolContract);
    try {
      const admin = await luckyPoolContract.owner();
      console.log('admin======', admin);
      this.setState({
        admin
      });
      setOwner(admin);
    } catch (e) {
      console.log('error======', e);
    }
  }

  onConnectClick = async () => {
    await window.ethereum.enable();
  }

  onCreatePool = async () => {
    const { openDialog } = this.props;
    openDialog(CREATE_POOL_DIALOG);
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
  setAccount: account => dispatch(landingActions.setAccount(account)),
  setOwner: account => dispatch(landingActions.setOwner(account)),
  openDialog: dialogName => dispatch(landingActions.openDialog(dialogName))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
