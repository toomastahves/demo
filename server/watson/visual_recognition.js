import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const visual_recognition = watson.visual_recognition({
  username: config.USERNAME_VISUAL_RECOGNITION,
  password: config.PASSWORD_VISUAL_RECOGNITION,
  version: 'v2-beta',
  version_date: '2015-12-02'
});

const params = {
  images_file: fs.createReadStream('public/files/car.png')
};

const visualRecognition = () => {
  visual_recognition.classify(params, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });
};

export default visualRecognition;
