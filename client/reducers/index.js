import { combineReducers } from 'redux';
import { tokenReducer } from './token';
import { microphoneReducer } from './microphone';

const reducers = combineReducers({
  tokenReducer, microphoneReducer
});

export default reducers;
