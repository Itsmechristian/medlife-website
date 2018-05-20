import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Services from '../services/Services';
import Blogs from '../blogs/Blogs';
import Notfound from '../notfound/Notfound';

const history = createHistory();

history.listen(() => {
  window.scroll(0, 0)
})

class Routing extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <Router history={history}>
          <div>
            <Navbar />
            <Route exact path="/" component={ Home }/ > 
            <Route path="/about" component={ About } />
            <Route path="/services" component={ Services } />
            <Route path="/blogs?page=*" render={props => <Blogs {...props}/>} />
            <Route exact path="*" component={ Notfound } />
          </div>
        </Router>
      )
    }
  };


export default Routing;