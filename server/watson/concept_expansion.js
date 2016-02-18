import watson from 'watson-developer-cloud';
import config from '../../config/';

const concept_expansion = watson.concept_expansion({
  username: config.USERNAME_CONCEPT_EXPANSION,
  password: config.PASSWORD_CONCEPT_EXPANSION,
  version: 'v1-beta'
});

const params = {
  seeds: ['nyc', 'dc', 'london', 'big cities'],
  label: 'cities'
};

const conceptExpansion = () => {
  concept_expansion.expand(params, (err, response) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  });
};

export default conceptExpansion;
