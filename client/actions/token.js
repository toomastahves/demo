import * as actions from '../constants/';

export const getTokenRequest = () => {
  return {
    type: actions.GET_TOKEN_REQUEST
  };
};

export const getTokenSuccess = (token) => {
  return {
    type: actions.GET_TOKEN_SUCCESS,
    token: token.token
  };
};

export const getTokenFailed = (error) => {
  return {
    type: actions.GET_TOKEN_FAILED,
    error
  };
};
