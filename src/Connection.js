var token = '';
var token = createToken(function(error, result) {
  token = result;
});

var initSocket = exports.initSocket = function(mic, callback) {
  var listening;

  var message = {
    'action': 'start',
    'content-type': 'audio/l16;rate=16000',
    'interim_results': true,
    'continuous': true,
    'word_confidence': true,
    'timestamps': true,
    'max_alternatives': 3,
    'inactivity_timeout': 600
  };

  var url = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize?watson-token=' + token + '&model=en-US_BroadbandModel';
  var socket = new WebSocket(url);

  socket.onopen = function() {
    listening = false;
    socket.send(JSON.stringify(message));
    onOpen(socket, callback);
  };

  socket.onmessage = function(evt) {
    var msg = JSON.parse(evt.data);
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
      const box = document.getElementById('resultsText');
      if(msg.results[0].final) {
        box.value = box.value + msg.results[0].alternatives[0].transcript;
      }
    }
  };

  socket.onclose = function(evt) {
    console.log('closing socket', evt);
  };
};

function onOpen(socket, callback) {
  console.log('Mic socket: opened');
  callback(null, socket);
}

function createToken(callback) {
  var url = '/api/token';
  var tokenRequest = new XMLHttpRequest();
  tokenRequest.open('POST', url, true);
  tokenRequest.onreadystatechange = function() {
    if (tokenRequest.readyState === 4) {
      if (tokenRequest.status === 200) {
        var token = tokenRequest.responseText;
        return callback(null, token);
      } else {
        var error = 'Cannot reach server';
        if (tokenRequest.responseText){
          try {
            error = JSON.parse(tokenRequest.responseText);
          } catch (e) {
            error = tokenRequest.responseText;
          }
        }
        return callback(error, null);
      }
    }
  };
  tokenRequest.send();
}
