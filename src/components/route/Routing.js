import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';


const Routing = () => {
  
   return (
     <Router>
       <div>
        <Navbar />

         <Route exact path="/" component={ Home } />
         <Route path="/about" component={ About } />
       </div>
     </Router>
   )
  };


export default Routing;