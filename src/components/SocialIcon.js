import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fa: {
    fontSize: '2em',
    margin: '15px',
    color: 'black'
  }
});

const SocialIcon = ({ link, iconClass }) => (
  <a href={link}>
    <i className={`fa ${iconClass} ${css(styles.fa)}`}></i>
  </a>
);

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default SocialIcon;
