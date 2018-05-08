import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';


const Routing = () => {
   return (
     <Router>
       <div>
        <Navbar />
          
         <Route exact path="/" component={ Home } />
         
       </div>
     </Router>
   )
};


export default Routing;