import * as constants from '../constants/';

const initialState = {
  started: false,
  textResult: 'Start service and talk, text will appear here ...'
};

export const microphoneReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.START_MICROPHONE:
      return Object.assign({}, state, { started: true, textResult: '' });
    case constants.STOP_MICROPHONE:
      return Object.assign({}, state, { started: false });
    case constants.TEXT_RESULT:
      return Object.assign({}, state, { textResult: state.textResult + action.result });
    default:
      return state;
  }
};
