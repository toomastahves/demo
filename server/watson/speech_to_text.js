import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const speech_to_text = watson.speech_to_text({
  username: config.USERNAME_SPEECH_TO_TEXT,
  password: config.PASSWORD_SPEECH_TO_TEXT,
  version: 'v1'
});

const params = {
  // From file
  audio: fs.createReadStream('public/files/speech.wav'),
  content_type: 'audio/l16; rate=44100'
};

const speechToText = () => {
  speech_to_text.recognize(params, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });
};

export default speechToText;
