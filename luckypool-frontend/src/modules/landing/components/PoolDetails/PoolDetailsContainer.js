import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PoolDetails from './PoolDetails';
import { usdcContract, luckyPoolDeployedAddress, luckyPoolContract, signer } from '../../../../utils/ethersIndex';
// import * as landingActions from '../redux/actions';

class PoolDetailsContainer extends Component {

  onJoinClick = async () => {
    const { account } = this.props;
    console.log('onJoinClick======');
    const allowance = await usdcContract.allowance(account, luckyPoolDeployedAddress);
    console.log('allowance=======', Number(allowance));
    const approved = await usdcContract.approve(luckyPoolDeployedAddress, '100000000000000000000');
    console.log('approved======', approved);
    const joinedPool = await luckyPoolContract.joinPool(0);
    console.log('joinedPool=======', joinedPool);
  }

  onAnnounceWinnerClick = async () => {
    const announceWinner = await luckyPoolContract.announceWinnerByPool(0);
    console.log('announceWinner======', announceWinner);
    const winner = await luckyPoolContract.poolToWinner(0);
    console.log('winner======', winner);
  }

  onDistributePrizeClick = async () => {
    const prizeDistribute = await luckyPoolContract.prizeDistribute(0);
    console.log('prizeDistribute======', prizeDistribute);
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
