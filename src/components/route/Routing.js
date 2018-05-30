import React from 'react';
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Services from '../services/Services';
import Blogs from '../blogs/Blogs';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Notfound from '../notfound/Notfound';

const history = createHistory();

history.listen(() => {
  window.scroll(0, 0);
});

class Routing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/blogs" render={props => <Blogs {...props} />} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
