import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      navbarClass: []
    }

    this.navbarAnimation = this.navbarAnimation.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarAnimation)
    
  }

  navbarAnimation(event) {

   let windowY = Number(window.pageYOffset.toFixed(0))

   if(windowY > 600) {
        this.state.navbarClass.push('show')
   }
   else{
     this.state.navbarClass.splice('show')
   }
  }

  checkArray(oldArr, newArr) {
    return oldArr.some(x => {
      return x.length == newArr.length && a.every(e => newArr.includes(e))
    })
  }

  render() {
    return (
      <nav className={this.state.navbarClass}>
        <div className="container">
          <div className="logo-wrapper">
          <Link to="/"><h1>Med<span>life</span></h1></Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;