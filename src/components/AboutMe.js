import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Paper from 'material-ui/Paper';
import image from '../assets/image.jpg';

const imageUrl = `url('${image}')`;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    color: 'white',
    '@media (max-width: 1024px)': {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  content: {
    fontSize: 'large',
    display: 'flex',
    '@media (max-width: 1024px)': {
      alignItems: 'center',
      flexDirection: 'column',
      width: '80%',
    },
    '@media (min-width: 1024px)': {
      width: '60%',
    },
  },
  h1: {
    fontWeight: 'normal'
  },
  avatar: {
    '@media (max-width: 599px)': {
      height: 100,
      width: 100,
      margin: 10,
    },
    '@media (min-width: 600px)': {
      height: 150,
      width: 150,
      margin: '20px 40px 20px 20px',
    },
    flex: '1 0 auto',
    textAlign: 'center',
    backgroundImage: imageUrl,
    backgroundPosition: 'center',
  },
  avatarWrapper: {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center'
  },
});


const AboutMe = () => (
  <div className={css(styles.container)}>
    <h1 className={css(styles.h1)}>About Me</h1>
    <div className={css(styles.content)}>
      <div className={css(styles.avatarWrapper)}>
        <Paper className={css(styles.avatar)} zDepth={3} circle={true} />
      </div>
      <div>
        <p>
          Hi, I'm Gerardo. I'm a Software Engineer from Argentina graduated at UTN FRSF, also a frustrated gamer and a football fan.
          I love researching cutting edge technologies and playing around with them.
        </p>
        <p>
          I have experience in web development. I'm currently learning and gaining experience with React and its ecosystem.
          I develop great web applications writing elegant code, making focus on good UI/UX, performance, maintainability
          and working with tools that help me being productive.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
