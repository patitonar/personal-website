import React, { Component } from 'react';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div>
        <Presentation />
        <AboutMe />
      </div>
    );
  }
}

export default App;
