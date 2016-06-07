import * as constants from '../constants/';

const initialState = {
  fetching: false,
  token: {}
};

export const tokenReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.GET_TOKEN_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case constants.GET_TOKEN_SUCCESS:
      return Object.assign({}, state, { fetching: false, token: action.token });
    case constants.GET_TOKEN_ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });
    default:
      return state;
  }
};
