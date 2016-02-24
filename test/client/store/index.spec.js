import { expect } from 'chai';
import store from 'client/store/';

describe('tests store', () => {
  it('hello initial state', () => {
    const initialState = {
      message: ''
    };
    const actualState = store.getState().helloReducer;
    expect(actualState).to.eql(initialState);
  });
});
