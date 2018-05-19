import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
  import createBrowserHistory from 'history/createBrowserHistory'
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';

const history = createBrowserHistory()



class Routing extends React.Component {

  componentDidMount() {
    history.listen(() => {
      console.log(1)
      window.scrollTo(0, 0)
    });
  
  }

  render() {
    return (
      <Router>
        <div >
         <Navbar />
 
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    )
  }

  };


export default Routing;