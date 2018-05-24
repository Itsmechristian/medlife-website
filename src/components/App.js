import React, { Component } from 'react';
import Routing from './route/Routing';
import './Style.scss';

import Home from './home/Home';
import About from './about/About';

class App extends Component {
  render() {
    return <Routing />;
  }
}

export default App;
