import watson from 'watson-developer-cloud';
import config from '../../config/';

const personality_insights = watson.personality_insights({
  username: config.USERNAME_PERSONALITY_INSIGHTS,
  password: config.PASSWORD_PERSONALITY_INSIGHTS,
  version: 'v2'
});

const personalityInsights = () => {
  personality_insights.profile(
  { text: 'Evidence has been found of hunting and fishing communities existing around 6500 BC near the town of Kunda in northern Estonia. Bone and stone artefacts similar to those found at Kunda have been discovered elsewhere in Estonia, as well as in Latvia, northern Lithuania and in southern Finland. The Kunda culture belongs to the middle stone age, or Mesolithic period.The end of the Bronze Age and the early Iron Age were marked by great cultural changes. The most significant was the transition to farming, which has remained at the core of the economy and culture. Between the first and fifth centuries AD resident farming was widely established, the population grew, and settlement expanded. Cultural influences from the Roman Empire reached Estonia.In his book Germania, the Roman historian Tacitus (ca. AD 98) describes the Aesti tribe. Tacitus mentions their term for amber in an apparently Latinised form, glesum (cf. Latvian glīsas). This is the only word of their language recorded from antiquity. Due to this point, the Aestii are generally considered the ancestors of the later Baltic peoples.', language: 'en' },
  (err, response) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  });
};

export default personalityInsights;
