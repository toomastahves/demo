import watson from 'watson-developer-cloud';
import config from '../config/';

const authorization = watson.authorization({
  username: config.USERNAME_SPEECH_TO_TEXT,
  password: config.PASSWORD_SPEECH_TO_TEXT,
  version: 'v1'
});
const params = {
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
};

export const getToken = (req, res) => {
  authorization.getToken(params, (err, token) => {
    if (!token) {
      res.send(err);
    } else {
      res.json(token);
    }
  });
};
