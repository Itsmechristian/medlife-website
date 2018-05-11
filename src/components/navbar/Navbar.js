import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './navbar.scss'

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      navbar: {
        height: 90,
        background: 'rgba(0, 108, 255, 0.5)',
        containerPadding: '20px 0'
      },

      // Hamburger menu css elements
      menuHeight: '230px',
      menu: {
        state: 'hide',
        visibility: 'hidden',
        maxHeight: '0px',
        opacity: 0
      }
    }
    this.navbarAnimation = this.navbarAnimation.bind(this)
    this.hamburgerState = this.hamburgerState.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarAnimation)

  }

  // Navbar shirnk animation
  navbarAnimation(event) {

    let windowY = Number(window.pageYOffset.toFixed(0))

    if (windowY > 90) {
      this.setState({
        navbar: {
          height: 60,
          background: 'rgba(8, 31, 62)',
          containerPadding: '10px 0'
        }
      })
    }
    else {
      this.setState({
        navbar: {
          height: 90,
          background: 'rgba(0, 108, 255, 0.5)',
          containerPadding: '20px 0'
        }
      })
    }
  }


  // Hamburger menu handler
  hamburgerState() {
    this.state.menu.state === 'hide' ? this.setState({ menu: { state: 'show', maxHeight: '230px', opacity: 1 , visibility: 'visible'} }) : this.setState({
      menu: {
        state: 'hide', maxHeight: '0px', opacity: 0, visibility: 'hidden'
      }
    })

  }

  render() {
    let { navbar } = this.state;
    let { menu } = this.state;


    return (
      <nav style={{
           height: navbar.height, opacity: navbar.opacity, background: navbar.background 
           }}>
        <div className="container" style={{ padding: navbar.containerPadding }}>
          <div className="logo-wrapper">
            <Link to="/"><h1>Med<span>life</span></h1></Link>
          </div>
          <div className="hamburger-menu" onClick={this.hamburgerState}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="web-menu">
              <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About Us</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/news"><li>News</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              </ul>
          </div>
          <div className="menu-items"
            style={{
              visibility: menu.visibility,
              height: this.state.menuHeight,
              maxHeight: menu.maxHeight,
              opacity: menu.opacity
            }}>
            <ul>
              <Link to="/"><li onClick={this.hamburgerState}>Home</li></Link>
              <Link to="/about"><li onClick={this.hamburgerState}>About Us</li></Link>
              <Link to="/services"><li onClick={this.hamburgerState}>Services</li></Link>
              <Link to="/news"><li onClick={this.hamburgerState}>News</li></Link>
              <Link to="/contact"><li onClick={this.hamburgerState}>Contact</li></Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;