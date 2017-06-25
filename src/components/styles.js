import glamorous from 'glamorous';
import image from '../assets/image.jpg';

const imageUrl = `url('${image}')`;

export const PresentationContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 'x-large',
  backgroundColor: '#FCFBF9',
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
    }
  }
});

export const Name = glamorous.h1({
  '@media (max-width: 600px)': {
    fontSize: '1.5em',
  }
});

export const Role = glamorous.h4({
  fontWeight: 'normal'
});

export const AboutMeContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#547980',
  color: 'white',
  '@media (max-width: 1024px)': {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export const AboutMeTitle = glamorous.h1({
  fontWeight: 'normal'
});

export const AboutMeContent = glamorous.div({
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
});

export const AvatarWrapper = glamorous.div({
  height: 'inherit',
  display: 'flex',
  alignItems: 'center'
});

export const Avatar = glamorous.div({
  '@media (max-width: 599px)': {
    height: 150,
    width: 150,
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
  color: 'rgba(0, 0, 0, 0.87)',
  backgroundColor: 'rgb(255, 255, 255)',
  transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  boxSizing: 'border-box',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px',
  borderRadius: '50%'
});