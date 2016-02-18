import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const document_conversion = watson.document_conversion({
  username: config.USERNAME_DOCUMENT_CONVERSION,
  password: config.PASSWORD_DOCUMENT_CONVERSION,
  version: 'v1',
  version_date: '2015-12-01'
});

const convertDocument = () => {
  document_conversion.convert({
    // (JSON) ANSWER_UNITS, NORMALIZED_HTML, or NORMALIZED_TEXT
    file: fs.createReadStream('public/documents/CV.pdf'),
    conversion_target: document_conversion.conversion_target.ANSWER_UNITS,
    // Add custom configuration properties or omit for defaults
    word: {
      heading: {
        fonts: [
          { level: 1, min_size: 24 },
          { level: 2, min_size: 16, max_size: 24 }
        ]
      }
    }
  }, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  });
};

export default convertDocument;
