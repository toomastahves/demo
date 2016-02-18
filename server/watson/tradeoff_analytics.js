import watson from 'watson-developer-cloud';
import config from '../../config/';

const tradeoff_analytics = watson.tradeoff_analytics({
  username: config.USERNAME_TRADE_ANALYTICS,
  password: config.PASSWORD_TRADE_ANALYTICS,
  version: 'v1'
});

const params = require('../../public/files/problem.json');

const tradeoffAnalytics = () => {
  tradeoff_analytics.dilemmas(params, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });
};

export default tradeoffAnalytics;
