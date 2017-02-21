import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    svg: {
        margin: '13px',
    }
});

const SocialIcon = ({ link, icon }) => (
  <a href={link}>
    <svg className={css(styles.svg)} width="50" height="50" viewBox="0 0 512 512">
      <path d={icon} />
    </svg>
  </a>
);

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialIcon;
