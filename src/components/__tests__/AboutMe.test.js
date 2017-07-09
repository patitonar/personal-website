import React from 'react';
import renderer from 'react-test-renderer';
import AboutMe from '../AboutMe';

it('AboutMe renders correctly', () => {
  const tree = renderer.create(
    <AboutMe />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
