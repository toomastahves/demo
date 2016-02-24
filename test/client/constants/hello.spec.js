import { expect } from 'chai';
import { SAY_HELLO } from 'client/constants/hello';

describe('constant test', () => {
  it('exports SAY_HELLO', () => {
    expect(SAY_HELLO).to.equal('SAY_HELLO');
  });
});
