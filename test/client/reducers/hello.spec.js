import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { helloReducer } from 'client/reducers/hello';
import { SAY_HELLO } from 'client/constants/hello';

describe('reducers', () => {
  let stateBefore = {};
  beforeEach(() => {
    stateBefore = {
      message: 'hello'
    };
  });

  describe('tests helloReducer', () => {
    it('SAY_HELLO', () => {
      const action = {
        type: SAY_HELLO,
        message: 'hello'
      };
      const stateAfter = {
        message: 'hello'
      };
      deepFreeze(action);
      deepFreeze(stateBefore);
      expect(helloReducer(stateBefore, action)).to.eql(stateAfter);
    });
  });

});
