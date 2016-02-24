import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Hello } from 'client/components/Hello';

const setup = () => {
  const props = {
    message: 'hello'
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<Hello {...props} />);
  const output = renderer.getRenderOutput();
  return { output };
};

describe('tests Hello component', () => {
  it('renders correctly', () => {
    const { output } = setup();

    expect(output.type).to.eql('div');
    expect(output.props.children).to.eql('hello');
  });
});
