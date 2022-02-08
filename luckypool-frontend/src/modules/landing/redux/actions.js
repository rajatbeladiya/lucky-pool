import * as actionTypes from './actionTypes';

export const getData = (data) => ({
  type: actionTypes.GET_DATA,
  payload: data,
});

export const setAccount = (account) => ({
  type: actionTypes.SET_ACCOUNT,
  payload: account,
});

export const setOwner = (account) => ({
  type: actionTypes.SET_OWNER,
  payload: account,
});

export const setPoolDetails = (details) => ({
  type: actionTypes.SET_POOL_DETAILS,
  payload: details,
});

export const setPoolParticipants = (participants = []) => ({
  type: actionTypes.SET_POOL_PARTICIPANTS,
  payload: participants,
});

export const openDialog = dialogName => ({
  type: actionTypes.OPEN_DIALOG,
  payload: dialogName,
});

export const closeDialog = dialogName => ({
  type: actionTypes.CLOSE_DIALOG,
  payload: dialogName,
});
