import React from 'react';
import { aboutMe } from '../constants';
import { AboutMeContainer, AboutMeTitle, AboutMeContent, AvatarWrapper, Avatar } from './styles';

const AboutMe = () => (
  <AboutMeContainer>
    <AboutMeTitle>About Me</AboutMeTitle>
    <AboutMeContent>
      <AvatarWrapper>
        <Avatar/>
      </AvatarWrapper>
      <div>
          {aboutMe.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </AboutMeContent>
  </AboutMeContainer>
);

export default AboutMe;
