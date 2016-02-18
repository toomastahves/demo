import watson from 'watson-developer-cloud';
import config from '../../config/';

const concept_insights = watson.concept_insights({
  username: config.USERNAME_CONCEPT_INSIGHTS,
  password: config.PASSWORD_CONCEPT_INSIGHTS,
  version: 'v2'
});

const params = {
  graph: '/graphs/wikipedia/en-20120601',
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

const conceptInsights = () => {
  concept_insights.graphs.annotateText(params, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(res, null, 2));
    }
  });
};

export default conceptInsights;
