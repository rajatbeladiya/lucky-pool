import React, { Component } from 'react';

class PoolDetails extends Component {
  render() {
    return (
      <div className="pool-details-wrapper">
        <div className="pool-details">
          <div className='pool-name'>
              Pool Name
          </div>
          <div className='pool-info-wrapper'>
              <div className='pool-info'>
                  <div className='title'>Current reward</div>
                  <div className='value'>$7.123</div>
              </div>
              <div className='pool-info'>
                  <div className='title'>No. of players</div>
                  <div className='value'>3</div>
              </div>
              <div className='pool-info'>
                  <div className='title'>Total Stacked</div>
                  <div className='value'>$120</div>
              </div>
              <div className='pool-info'>
                  <div className='title'>Ticket Price</div>
                  <div className='value'>$100</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PoolDetails;
