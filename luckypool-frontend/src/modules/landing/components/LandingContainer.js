import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Landing from './Landing';
import * as landingActions from '../redux/actions';

import { luckyPoolContract } from '../../../utils/ethersIndex';
import { noop } from '../../../utils';
import { uauth } from '../../../config';

class LandingContainer extends Component {

  async componentDidMount() {
    const { setPoolDetails, setPoolParticipants, setAccount } = this.props;
    uauth
      .user()
      .then(setUser => setAccount(setUser))
      .catch(() => {})
    
    console.log('luckyPoolContract dsf======', await luckyPoolContract.pools(0));
    const poolDetails = await luckyPoolContract.getPoolDetails(0);
    const poolParticipants = await luckyPoolContract.getPoolToParticipants(0);
    console.log('poolParticipants======', poolParticipants);
    setPoolDetails(poolDetails);
    setPoolParticipants(poolParticipants);
  }

  render() {
    return (
      <Landing />
    );
  }
}

LandingContainer.propTypes = {
  setPoolDetails: PropTypes.func,
};

LandingContainer.defaultProps = {
  setPoolDetails: noop,
};

const mapStateToProps = state => ({
  data: state.landing.data,
});

const mapDispatchToProps = dispatch => ({
  getData: data => dispatch(landingActions.getData(data)),
  setPoolDetails: details => dispatch(landingActions.setPoolDetails(details)),
  setPoolParticipants: participants => dispatch(landingActions.setPoolParticipants(participants)),
  setAccount: account => dispatch(landingActions.setAccount(account)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
