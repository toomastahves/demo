import watson from 'watson-developer-cloud';
import config from '../../config/';

const authorization = watson.authorization({
  username: config.USERNAME_TEXT_TO_SPEECH,
  password: config.PASSWORD_TEXT_TO_SPEECH,
  version: 'v1'
});

const params = {
  // URL of the resource you wish to access
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
};

const authorizationTest = () => {
  authorization.getToken(params, (err, token) => {
    if (!token) {
      console.log('error:', err);
    } else {
      // Use your token here
      console.log('token', token);
    }
  });
};

export default authorizationTest;
