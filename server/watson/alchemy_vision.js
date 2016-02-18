import watson from 'watson-developer-cloud';
import config from '../../config/';
import fs from 'fs';

const alchemy_vision = watson.alchemy_vision({
  api_key: config.ALCHEMY_API_KEY
});

const params = {
  image: fs.createReadStream('public/files/car.jpg')
};

const vision = () => {
  alchemy_vision.getImageKeywords(params, (err, keywords) => {
    if(err) {
      console.log('error', err);
    } else {
      console.log(JSON.stringify(keywords, null, 2));
    }
  });
};

export default vision;
