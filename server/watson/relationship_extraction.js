import watson from 'watson-developer-cloud';
import config from '../../config/';

const relationship_extraction = watson.relationship_extraction({
  username: config.USERNAME_RELATIONSHIP_EXTRACTION,
  password: config.PASSWORD_RELATIONSHIP_EXTRACTION,
  version: 'v1-beta'
});

const relationshipExtraction = () => {
  relationship_extraction.extract({ text: 'IBM Watson developer cloud', dataset: 'ie-en-news' },
  (err, response) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  });
};

export default relationshipExtraction;
