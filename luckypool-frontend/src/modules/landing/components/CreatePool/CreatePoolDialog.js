import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import CreatePoolContainer from './CreatePoolContainer';
import { CREATE_POOL_DIALOG } from '../../../../shared/DialogNames';
import { closeDialog } from '../../redux/actions';
import { noop } from '../../../../utils';

const CreatePoolDialog = props => (
  <Dialog
    open={props.currentDialogNames.includes(CREATE_POOL_DIALOG)}
    onClose={() => props.closeDialog(CREATE_POOL_DIALOG)}
    className="custom-dialog custom-content-style"
  >
    <DialogTitle className="dialog-title">
      Create Pool
      <IconButton
        onClick={() => { props.closeDialog(CREATE_POOL_DIALOG); }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <CreatePoolContainer />
    </DialogContent>
  </Dialog>
);

CreatePoolDialog.propTypes = {
  currentDialogNames: PropTypes.arrayOf(PropTypes.string),
  closeDialog: PropTypes.func,
};

CreatePoolDialog.defaultProps = {
  currentDialogNames: [],
  closeDialog: noop,
};

const mapStateToProps = state => ({
  currentDialogNames: state.landing.currentDialogNames,
});

const mapDispatchToProps = dispatch => ({
  submit: formName => dispatch(submit(formName)),
  closeDialog: dialogName => dispatch(closeDialog(dialogName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoolDialog);
