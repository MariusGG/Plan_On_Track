import 'react-native';
import React from 'react';
import Index from '../components/sessions/index.js';
import renderer from 'react-test-renderer';

describe('##Session Index##', () => {
  it('should display app name', async () => {
    expect(element(by.id('session.index.title'))).toBeVisible();
  });

});
