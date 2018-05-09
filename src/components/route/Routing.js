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

         <Route path="/about" component={ About } />
         <Route exact path="/" component={ Home } />
       </div>
     </Router>
   )
  };


export default Routing;