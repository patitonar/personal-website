import React from 'react';
import renderer from 'react-test-renderer';
import Presentation from '../Presentation';

it('Presentation renders correctly', () => {
  const tree = renderer.create(
    <Presentation />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
