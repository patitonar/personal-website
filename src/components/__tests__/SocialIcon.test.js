import React from 'react';
import SocialIcon from '../SocialIcon';
import renderer from 'react-test-renderer';
import {socialIcons} from '../../constants';

it('SocialIcon renders correctly', () => {
  const el = socialIcons[0];
  const tree = renderer.create(
    <SocialIcon
      link={el.link}
      icon={el.icon} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
