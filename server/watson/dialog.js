import watson from 'watson-developer-cloud';
import config from '../../config/';

const dialog = watson.dialog({
  username: config.USERNAME_DIALOG,
  password: config.PASSWORD_DIALOG,
  version: 'v1'
});

const dialogTest = () => {
  dialog.getDialogs({}, (err, dialogs) => {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(dialogs, null, 2));
    }
  });
};

export default dialogTest;
