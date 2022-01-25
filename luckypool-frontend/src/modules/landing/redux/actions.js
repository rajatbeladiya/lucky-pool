import * as actionTypes from './actionTypes';

export const getData = (data) => ({
  type: actionTypes.GET_DATA,
  payload: data,
});

export const setAccount = (account) => ({
  type: actionTypes.SET_ACCOUNT,
  payload: account,
});
