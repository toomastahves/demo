import { GET_TOKEN_SUCCESS, GET_TOKEN_ERROR } from '../constants/token';

const initialState = {
  token: '',
  error: ''
};

export const tokenReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TOKEN_SUCCESS:
      return Object.assign({}, state, { token: action.token });
    case GET_TOKEN_ERROR:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
};
