var Microphone = require('./Microphone');
var initSocket = require('./Connection').initSocket;

var recordButton = document.getElementById('recordButton');
var running = false;
var micOptions = {
  bufferSize: 8192
};
var mic = new Microphone(micOptions);

recordButton.onclick = function() {
  return function(e) {
    e.preventDefault();
    if (!running) {
      console.log('Not running, handleMicrophone()');
      initSocket(mic, function(err) {
        recordButton.style.backgroundColor = '#d74108';
        console.log('starting mic');
        mic.record();
        running = true;
      });
    } else {
      console.log('Stopping microphone, sending stop action message');
      recordButton.style.backgroundColor = '';
      mic.stop();
      running = false;
    }
  };
}();
