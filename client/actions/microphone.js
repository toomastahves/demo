import { START_MICROPHONE, STOP_MICROPHONE, TEXT_RESULT } from '../constants/index';
import Microphone from '../utils/Microphone';
import store from '../store/';

const micOptions = {
  bufferSize: 8192
};
const mic = new Microphone(micOptions);

const textResult = (result) => {
  return {
    type: TEXT_RESULT,
    result
  };
};

export const startMicrophone = () => {
  let listening = false;
  const token = store.getState().tokenReducer.token;
  const message = {
    'action': 'start',
    'content-type': 'audio/l16;rate=16000',
    'interim_results': true,
    'continuous': true,
    'word_confidence': true,
    'timestamps': true,
    'max_alternatives': 3,
    'inactivity_timeout': 600
  };
  const url = `wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token='${token}'&model=en-US_BroadbandModel`;
  const socket = new WebSocket(url);

  socket.onopen = () => {
    listening = false;
    socket.send(JSON.stringify(message));
    mic.record();
  };

  socket.onmessage = function(evt) {
    const msg = JSON.parse(evt.data);
    if (msg.state === 'listening') {
      if (!listening) {
        mic.onAudio = function(blob) {
          if (socket.readyState < 2) {
            socket.send(blob);
          }
        };
        listening = true;
      } else {
        console.log('MICROPHONE: Closing socket.');
        socket.close();
      }
    }
    if (msg.results) {
      if(msg.results[0].final) {
        store.dispatch(textResult(msg.results[0].alternatives[0].transcript));
      }
    }
  };

  socket.onclose = function(evt) {
    mic.stop();
    console.log('closing socket', evt);
  };

  return {
    type: START_MICROPHONE
  };
};

export const stopMicrophone = () => {
  mic.stop();

  return {
    type: STOP_MICROPHONE
  };
};
