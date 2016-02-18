import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const natural_language_classifier = watson.natural_language_classifier({
  url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
  username: config.USERNAME_LANGUAGE_CLASSIFIER,
  password: config.PASSWORD_LANGUAGE_CLASSIFIER,
  version: 'v1'
});

const params = {
  language: 'en',
  name: 'my-classifier',
  training_data: fs.createReadStream('public/files/weather.csv')
};

let classifier_id = '';
export const createClassifier = () => {
  natural_language_classifier.create(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      // copy the classifier_id from the response
      const res = JSON.stringify(response, null, 2);
      console.log(res);
      classifier_id = res.classifier_id;
    }
  });
};

export const useClassifier = () => {
  natural_language_classifier.classify({ text: 'Is it sunny?', classifier_id: 'c7e487x21-nlc-2172' },
    (err, response) => {
      if (err)
        console.log('error:', err);
      else
        console.log(JSON.stringify(response, null, 2));
    }
  );
};
