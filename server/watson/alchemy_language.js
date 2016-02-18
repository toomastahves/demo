import watson from 'watson-developer-cloud';
import config from '../../config/';

const alchemy_language = watson.alchemy_language({
  api_key: config.ALCHEMY_API_KEY
});

const params = {
  text: 'this is happy test text'
};

const language = () => {
  alchemy_language.sentiment(params, (err, res) => {
    if(err) {
      console.log('error', err);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });
};

export default language;
