import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AboutMe from '../AboutMe';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test suite for AboutMe', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('AboutMe renders correctly', () => {
    expect(shallow(<AboutMe />).type()).toBe('div');
  });
});
