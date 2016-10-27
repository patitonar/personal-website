import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Presentation from '../Presentation';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test suite for Presentation', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Presentation renders correctly', () => {
    expect(shallow(<Presentation />).type()).toBe('div');
  });
});
