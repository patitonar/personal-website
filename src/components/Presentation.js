import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import SocialIcon from './SocialIcon';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-height : 480px)': {
      paddingTop: '20%',
      paddingBottom: '20%',
    },
    '@media (min-height : 481px)': {
      '@media (max-width : 500px)': {
        paddingTop: '40%',
        paddingBottom: '40%',
      },
      '@media (min-width : 500px)': {
        paddingTop: 170,
        paddingBottom: 170,
      },
    },
  },
  presentation: {
    textAlign: 'center',
    fontSize: 'x-large',
    backgroundColor: 'white'
  },
  h1: {
    '@media (max-width: 600px)': {
      fontSize: '1.5em',
    },
  },
  h4: {
    fontWeight: 'normal',
  }
});

const Presentation = () => (
  <div className={css(styles.presentation, styles.container)}>
    <div className={css(styles.presentation)}>
      <h1 className={css(styles.h1)}>Gerardo Nardelli</h1>
      <h4 className={css(styles.h4)}>Software Engineer</h4>
      <div>
        <SocialIcon
          link='https://github.com/patitonar'
          iconClass='fa-github'
        />
        <SocialIcon
          link='https://twitter.com/patitonar'
          iconClass='fa-twitter'
        />
        <SocialIcon
          link='https://www.linkedin.com/in/gerardonardelli'
          iconClass='fa-linkedin-square'
        />
        <SocialIcon
          link='mailto:patitonardelli@gmail.com'
          iconClass='fa-envelope'
        />
      </div>
    </div>
  </div>
);

export default Presentation;
