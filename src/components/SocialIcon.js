import React from 'react';

const SocialIcon = ({ link, icon }) => (
  <a href={link}>
    <svg  style={{margin: '13px'}} width="50" height="50" viewBox="0 0 512 512">
      <path d={icon} />
    </svg>
  </a>
);

export default SocialIcon;
