import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  data: {},
  account: '',
  owner: '',
  currentDialogNames: [],
  poolDetails: [],
  poolParticipants: [],
};


export default (state = INITIAL_STATE, action) => { // eslint-disable-line
  switch (action.type) {
    case actionTypes.GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case actionTypes.SET_OWNER:
      return {
        ...state,
        owner: action.payload,
      };
    case actionTypes.SET_POOL_DETAILS:
      return {
        ...state,
        poolDetails: action.payload,
      };
    case actionTypes.SET_POOL_PARTICIPANTS:
      return {
        ...state,
        poolParticipants: action.payload,
      };
    case actionTypes.OPEN_DIALOG:
      return {
        ...state,
        currentDialogNames: [
          ...state.currentDialogNames,
          action.payload,
        ],
      };
    case actionTypes.CLOSE_DIALOG:
      return {
        ...state,
        currentDialogNames: state.currentDialogNames
          .filter(dialogName => dialogName !== action.payload),
        // selectedTab: {},
      };
    default:
      return state;
  }
};
