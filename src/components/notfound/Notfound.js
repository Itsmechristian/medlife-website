import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notfound extends Component {
  render() {
    return (
      <div style={{ paddingTop: 90 }} className="notfound">
        <div className="container">
          <div className="text">
            <h1>404</h1>
            <h3>OOPS, SORRY WE CAN'T FIND THAT PAGE!</h3>
            <p>
              Either something went wrong or the page doesn't exist anymore.
            </p>
            <hr />
            <Link to="/">Home Page</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Notfound;
