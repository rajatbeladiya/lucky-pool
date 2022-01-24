import React, { Component } from 'react';
import { connect } from 'react-redux';

import PoolDetails from './PoolDetails';
// import * as landingActions from '../redux/actions';

class PoolDetailsContainer extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <PoolDetails />
    );
  }
}

PoolDetailsContainer.propTypes = {
};

PoolDetailsContainer.defaultProps = {
};

const mapStateToProps = state => ({
  data: state.landing.data,
});

const mapDispatchToProps = dispatch => ({
//   getData: data => dispatch(landingActions.getData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolDetailsContainer);
