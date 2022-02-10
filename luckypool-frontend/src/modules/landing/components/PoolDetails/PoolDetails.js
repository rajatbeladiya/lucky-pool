import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { noop } from '../../../../utils';

const PoolDetails = ({
  poolDetails, poolParticipants, onJoinClick, onAnnounceWinnerClick,
  onDistributePrizeClick, owner,
}) => (
  <div className="pool-details-wrapper">
    <div className="pool-details">
      <div className='pool-name-wrapper'>
        <div className='pool-name'>
            {(poolDetails && poolDetails.poolName) || 'Pool Name'}
        </div>
        <div className='join-wrapper'>
          <Button
            type="button"
            className="join-btn"
            variant='contained'
            onClick={() => onJoinClick()}
          >
            Join
          </Button>
        </div>
        {
          owner === '' && (
            <>
              <div className='announce-winner-wrapper'>
                <Button
                  type="button"
                  className="announce-winner"
                  variant='contained'
                  onClick={() => onAnnounceWinnerClick()}
                >
                  Announce Winner
                </Button>
              </div>
              <div className='distribute-prize-wrapper'>
                <Button
                  type="button"
                  className="distribute-prize"
                  variant='contained'
                  onClick={() => onDistributePrizeClick()}
                >
                  Distribute Prize
                </Button>
              </div>
            </>
          )
        }
      </div>
      <div className='pool-info-wrapper'>
          <div className='pool-info'>
              <div className='title'>No. of players</div>
              <div className='value'>{poolParticipants.length}</div>
          </div>
          <div className='pool-info'>
              <div className='title'>Total Prize</div>
              <div className='value'>${poolParticipants.length * (poolDetails && poolDetails.ticketPrice && poolDetails.ticketPrice.toNumber())}</div>
          </div>
          <div className='pool-info'>
              <div className='title'>Ticket Price</div>
              <div className='value'>${poolDetails && poolDetails.ticketPrice && poolDetails.ticketPrice.toNumber()}</div>
          </div>
      </div>
    </div>
  </div>
);

PoolDetails.propTypes = {
  poolParticipants: PropTypes.instanceOf(Array),
  onJoinClick: PropTypes.func,
  onAnnounceWinnerClick: PropTypes.func,
  onDistributePrizeClick: PropTypes.func,
  owner: PropTypes.string,
}

PoolDetails.defaultProps = {
  poolParticipants: [],
  onJoinClick: noop,
  onAnnounceWinnerClick: noop,
  onDistributePrizeClick: noop,
  owner: '',
}



export default PoolDetails;
