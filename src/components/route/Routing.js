import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Services from '../services/Services';

const history = createHistory();

history.listen(() => {
  window.scroll(0, 0)
})

const Routing = () => {

    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/services" component={ Services } />
        </div>
      </Router>
    )
  };


export default Routing;