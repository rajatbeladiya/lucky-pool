import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PoolDetails from './PoolDetails';
import { usdcContract, luckyPoolDeployedAddress, luckyPoolContract } from '../../../../utils/ethersIndex';

class PoolDetailsContainer extends Component {

  onJoinClick = async () => {
    const { account } = this.props;
    await usdcContract.allowance(account, luckyPoolDeployedAddress);
    await usdcContract.approve(luckyPoolDeployedAddress, '100000000000000000000');
    await luckyPoolContract.joinPool(0);
  }

  onAnnounceWinnerClick = async () => {
    await luckyPoolContract.announceWinnerByPool(0);
    await luckyPoolContract.poolToWinner(0);
  }

  onDistributePrizeClick = async () => {
    await luckyPoolContract.prizeDistribute(0);
  }

  render() {
    const { poolDetails, poolParticipants, owner } = this.props;
    return (
      <PoolDetails
        poolDetails={poolDetails}
        poolParticipants={poolParticipants}
        onJoinClick={this.onJoinClick}
        onAnnounceWinnerClick={this.onAnnounceWinnerClick}
        onDistributePrizeClick={this.onDistributePrizeClick}
        owner={owner}
      />
    );
  }
}

PoolDetailsContainer.propTypes = {
  poolDetails: PropTypes.instanceOf(Array),
  account: PropTypes.string,
  owner: PropTypes.string,
};

PoolDetailsContainer.defaultProps = {
  poolDetails: [],
  account: '',
  owner: '',
};

const mapStateToProps = state => ({
  poolDetails: state.landing.poolDetails,
  poolParticipants: state.landing.poolParticipants,
  account: state.landing.account,
  owner: state.landing.owner,
});

const mapDispatchToProps = dispatch => ({
//   getData: data => dispatch(landingActions.getData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolDetailsContainer);
