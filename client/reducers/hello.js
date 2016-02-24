import { SAY_HELLO } from '../constants/hello';

const initialState = {
  message: ''
};

export const helloReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAY_HELLO:
      return Object.assign({}, state, { message: action.message });
    default:
      return state;
  }
};
