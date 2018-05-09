import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './navbar.scss'

class Navbar extends Component {
  constructor() {
    super();

    this.state = { 
      height: 100,
      background: 'rgb(0, 108, 255, 0.6)',
      containerPadding: '30px 0'
    }
    this.navbarAnimation = this.navbarAnimation.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarAnimation)

  }

  navbarAnimation(event) {

   let windowY = Number(window.pageYOffset.toFixed(0))

   if(windowY > 80) {
        this.setState({
          height: 80,
          background: 'rgba(8, 31, 62)',
          containerPadding: '15px 0'
        })
   }
   else{
      this.setState({
        height: 100,
        background: 'rgb(0, 108, 255, 0.6)',
        containerPadding: '30px 0'
      })
   }
  }

  render() {
    return (
      <nav style={{height: this.state.height, opacity: this.state.opacity, background: this.state.background}}>
        <div className="container" style={{padding: this.state.containerPadding}}>
          <div className="logo-wrapper">
          <Link to="/"><h1>Med<span>life</span></h1></Link>
          </div>
          <div className="links-wrapper">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">FOR EMERGENCY CLICK HERE</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;