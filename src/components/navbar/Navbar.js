import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import logo from '../../assets/images/logo.png';
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
      menuHeight: '250px',
      menu: {
        state: 'hide',
        maxHeight: '0px',
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
          height: 70,
          background: '#081f3e',
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
    if(this.state.menu.state === 'hide') {
      this.setState({
        menu: {
          state: 'show',
          maxHeight: '250px',
        }
      })
    }
    else{
      this.setState({
        menu: {
          state: 'hide',
          maxHeight: '0px',
        }
      })
    }
  }

  render() {
    let { navbar } = this.state;
    let { menu } = this.state;


    return (
      <nav style={{
           height: navbar.height, opacity: navbar.opacity
           }}>
        <div className="container" style={{ padding: navbar.containerPadding }}>
          <div className="logo-wrapper">
            <Link to="/"><img src={logo} alt="logo"/></Link>
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
              height: this.state.menuHeight,
              maxHeight: menu.maxHeight,
            }}>
            <ul>
              <Link to="/"><li onClick={this.hamburgerState}>Home</li></Link>
              <Link to="/about"><li onClick={this.hamburgerState}>About Us</li></Link>
              <Link to="/services"><li onClick={this.hamburgerState}>Services</li></Link>
              <Link to="/blogs"><li onClick={this.hamburgerState}>Blogs</li></Link>
              <Link to="/contact"><li onClick={this.hamburgerState}>Contact</li></Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;