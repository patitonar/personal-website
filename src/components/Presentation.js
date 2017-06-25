import React from 'react';
import SocialIcon from './SocialIcon';
import { socialIcons } from '../constants';
import { PresentationContainer, Name, Role } from './styles';

const SocialIcons = () => (
  <div>
    {socialIcons.map((item, i) =>
      <SocialIcon
        key={i}
        link={item.link}
        icon={item.icon} />)}
  </div>
);

const Presentation = () => (
  <PresentationContainer>
    <div>
      <Name>Gerardo Nardelli</Name>
      <Role>Software Engineer</Role>
      <SocialIcons />
    </div>
  </PresentationContainer>
);

export default Presentation;
