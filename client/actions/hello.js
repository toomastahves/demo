import { SAY_HELLO } from '../constants/hello';

export const sayHello = (message) => {
  return {
    type: SAY_HELLO,
    message
  };
};
