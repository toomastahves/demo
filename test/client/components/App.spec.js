import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { App } from 'client/components/App';
import Hello from 'client/components/Hello';

const setup = () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return { output };
};


describe('tests App component', () => {
  it('renders correctly', () => {
    const { output } = setup();

    expect(output.type).to.eql('div');
    expect(output.props.className).to.eql('center');
    expect(output.props.children.type).to.eql(Hello);
  });
});
