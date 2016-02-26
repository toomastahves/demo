import React from 'react';
import { connect } from 'react-redux';
import { startMicrophone, stopMicrophone } from '../actions/microphone';

export const App = ({ dispatch }) => {
  const handleStartMicrophone = (e) => {
    e.preventDefault();
    dispatch(startMicrophone());
  };
  const handleStopMicrophone = (e) => {
    e.preventDefault();
    dispatch(stopMicrophone());
  };
  return (
    <div className='center'>
      <button id='start' onClick={handleStartMicrophone}>{'Start'}</button>
      <button id='stop' onClick={handleStopMicrophone}>{'Stop'}</button>
      <br />
      <textarea id='result'></textarea>
    </div>
  );
};

export default connect()(App);
