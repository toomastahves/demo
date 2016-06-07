import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTokenRequest } from '../../actions/token';
import { startMicrophone, stopMicrophone } from '../../actions/microphone';
import Spinner from '../Parts/Spinner';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';

export const HomePage = ({ fetching, dispatch, started, textResult }) => {
  if(fetching) return <div className='spinner-location'><Spinner /></div>;
  const handleStartMicrophone = (e) => {
    e.preventDefault();
    dispatch(startMicrophone());
  };

  const handleStopMicrophone = (e) => {
    e.preventDefault();
    dispatch(stopMicrophone());
  };

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='microphone'>
          <div>
            {!started && <button className='mic-button mic-start' onClick={handleStartMicrophone}>{'Start'}</button>}
          </div>
          <div>
            {started && <button className='mic-button mic-stop' onClick={handleStopMicrophone}>{'Stop'}</button>}
          </div>
          <textarea readOnly id='result' value={textResult}></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  fetching: PropTypes.bool.isRequired,
  started: PropTypes.bool.isRequired,
  textResult: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    fetching: state.tokenReducer.fetching,
    started: state.microphoneReducer.started,
    textResult: state.microphoneReducer.textResult
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getTokenRequest());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
