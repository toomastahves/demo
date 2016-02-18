import watson from 'watson-developer-cloud';
import config from '../../config/';

const tone_analyzer = watson.tone_analyzer({
  username: config.USERNAME_TONE_ANALYZER,
  password: config.PASSWORD_TONE_ANALYZER,
  version: 'v3-beta',
  version_date: '2016-02-11'
});

const toneAnalyzer = () => {
  tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
  (err, tone) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(tone, null, 2));
    }
  });
};

export default toneAnalyzer;
