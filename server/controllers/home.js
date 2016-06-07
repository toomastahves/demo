import watson from 'watson-developer-cloud';
import config from '../config/';

export function* getHome() {
  console.log('Home content request');
  this.body = { message: 'Home content' };
}

const authorization = watson.authorization({
  username: config.USERNAME_SPEECH_TO_TEXT,
  password: config.PASSWORD_SPEECH_TO_TEXT,
  version: 'v1'
});
const params = {
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
};

function thunk(callback) {
  authorization.getToken(params, (err, token) => {
    callback(err, token);
  });
}

export function* getToken() {
  const token = yield thunk;
  this.body = { token };
}
