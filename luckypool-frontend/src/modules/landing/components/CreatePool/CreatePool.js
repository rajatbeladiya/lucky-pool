import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import BlockUI from 'react-block-ui';
import { reduxForm, Form, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import { noop } from '../../../../utils';
import { CREATE_POOL_DIALOG } from '../../../../shared/DialogNames';

const CreatePool = ({ handleSubmit, onCreatePool, loading, closeDialog }) => (
    <Form onSubmit={handleSubmit(onCreatePool)} className="login-form">
      <div className="form-field">
        <Field
          className="input-field"
          name="poolName"
          component={TextField}
          placeholder="Pool Name"
          type="text"
        />
      </div>
      <div className="form-field">
        <Field
          className="input-field"
          name="ticketPrice"
          component={TextField}
          placeholder="Ticket Price"
          type="text"
        />
      </div>
      <div className="form-field">
        <Field
          className="input-field"
          name="confirmPassword"
          component={TextField}
          label="Time"
          type="text"
        />
      </div>
      <div className="login-button">
        <span />
        <div className="right-buttons">
          <Button
            type="button"
            className="link-button h-spacer-right"
            onClick={() => closeDialog(CREATE_POOL_DIALOG)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </div>
      </div>
    </Form>
);

CreatePool.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCreatePool: PropTypes.func,
  loading: PropTypes.bool,
  closeDialog: PropTypes.func,
};

CreatePool.defaultProps = {
  onCreatePool: noop,
  loading: false,
  closeDialog: noop,
};

export default reduxForm({ form: 'createPoolForm' })(withRouter(CreatePool));
