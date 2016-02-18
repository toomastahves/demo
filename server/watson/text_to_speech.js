import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const text_to_speech = watson.text_to_speech({
  username: config.USERNAME_TEXT_TO_SPEECH,
  password: config.PASSWORD_TEXT_TO_SPEECH,
  version: 'v1'
});

const params = {
  text: 'Hello from IBM Watson',
  voice: 'en-US_AllisonVoice', // Optional voice
  accept: 'audio/wav'
};

const textToSpeech = () => {
  text_to_speech.synthesize(params).pipe(fs.createWriteStream('public/files/output.wav'));
};

export default textToSpeech;
