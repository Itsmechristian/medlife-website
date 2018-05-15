import React, { Component } from 'react';
import Imgpreload from '../preload/Imgpreload.js';
import Bgpreload from '../preload/Bgpreload.js';

import building from '../../assets/images/building.jpg';
import buildingsmall from '../../assets/images/buildingsmall.jpg';


import './about.scss';


class About extends Component {
  render() {
    return (
      <div className="about">
        <Bgpreload className="header" preloadimage={buildingsmall} hdimage={building}>
          <div className="filter">
          </div>
            <div className="container">
              <div className="text-wrapper">
                <h1>About Us</h1>
              </div>
            </div>
        </Bgpreload>
      </div>
    )
  }
}

export default About;