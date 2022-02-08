import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { closeDialog } from '../../redux/actions';

import CreatePool from './CreatePool';

class CreatePoolContainer extends Component {

  onCreatePool = () => {
    
  }

  render() {
    return (
      <CreatePool
        onCreatePool={this.onCreatePool}
        closeDialog={this.props.closeDialog} 
      />
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  closeDialog: dialogName => dispatch(closeDialog(dialogName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePoolContainer));
