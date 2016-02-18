import watson from 'watson-developer-cloud';
import config from '../../config/';

const language_translation = watson.language_translation({
  username: config.USERNAME_LANGUAGE_TRANSLATION,
  password: config.PASSWORD_LANGUAGE_TRANSLATION,
  version: 'v2'
});

language_translation.translate({ text: 'A sentence must have a verb', source: 'en', target: 'es' },
  (err, translation) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(translation, null, 2));
    }
  }
);

const langugageTranslation = () => {
  language_translation.identify({ text: 'The language translation service takes text input and identifies the language used.' },
    (err, language) => {
      if (err) {
        console.log('error:', err);
      } else {
        console.log(JSON.stringify(language, null, 2));
      }
    }
  );
};

export default langugageTranslation;
