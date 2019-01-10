import React from 'react';
import {  App } from 'react-native';
import { shallow } from 'enzyme';

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallow(<Text>Hello, World!</Text>);
    expect(wrapper.app()).toEqual('Hello, World!');
  });
});
