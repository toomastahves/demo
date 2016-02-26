import { expect } from 'chai';
import { sayHello } from 'client/actions/hello';
import { SAY_HELLO } from 'client/constants/hello';

describe('testing action', () => {
  it('say hello', () => {
    const message = { message: 'hello' };
    const expectedAction = {
      type: SAY_HELLO,
      message
    };
    expect(sayHello(message)).to.eql(expectedAction);
  });

});
