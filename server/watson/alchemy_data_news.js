import watson from 'watson-developer-cloud';
import config from '../../config/';

const alchemy_data_news = watson.alchemy_data_news({
  api_key: config.ALCHEMY_API_KEY
});

const params = {
  start: 'now-1d',
  end: 'now'
};

const dataNews = () => {
  alchemy_data_news.getNews(params, (err, news) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(news, null, 2));
    }
  });
};

export default dataNews;
