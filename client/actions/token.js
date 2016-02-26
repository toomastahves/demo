import { GET_TOKEN_SUCCESS, GET_TOKEN_ERROR } from '../constants/token';
import fetch from 'isomorphic-fetch';

export const getTokenSuccess = (token) => {
  return {
    type: GET_TOKEN_SUCCESS,
    token
  };
};

export const getTokenError = (error) => {
  return {
    type: GET_TOKEN_ERROR,
    error
  };
};

export const getToken = () => {
  return dispatch => {
    return fetch('http://localhost:3000/token', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(token => dispatch(getTokenSuccess(token)))
    .catch(error => dispatch(getTokenError(error)));
  };
};
