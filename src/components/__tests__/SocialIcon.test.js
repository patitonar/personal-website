import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SocialIcon from '../SocialIcon';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test suite for Presentation', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const gitLink = 'https://github.com/patitonar';
  it('SocialIcon renders correctly', () => {
    expect(shallow(
      <SocialIcon
        link={gitLink}
        iconClass='fa-github' />).type()).toBe('a');
  });
});
