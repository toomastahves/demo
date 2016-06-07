import { SERVER_URI } from '../../client/constants/';

export const fetch = ({ path, type, data }) => {
  const url = `${SERVER_URI}${path}`;
  console.log(`${type} ${url}`);
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(type, url, true);

    req.onload = function() {
      if(req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(req.response);
      }
    };
    req.onerror = function() {
      reject('Network error');
    };
    req.send(data);
  });
};

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};
