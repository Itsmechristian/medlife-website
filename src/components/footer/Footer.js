import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

//Icons
import facebook from "../../assets/images/facebook-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import pinterest from "../../assets/images/pinterest-icon.png";
import googleplus from "../../assets/images/googleplus-icon.png";
import instagram from "../../assets/images/instagram-icon.png";
import mapmarker from '../../assets/images/map-marker.png';
import mail from '../../assets/images/mail.png';
import phone from '../../assets/images/phone.png';

import logo from "../../assets/images/logo2.png";

class Footer extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="section one">
            <div className="icon-wrapper">
              <img src={logo} alt={logo}/>
            </div>
            <div className="links-wrapper">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </div>
            <div className="logo-wrapper">
              <div className="icon">
                <img src={facebook} alt={facebook}/>
              </div>
              <div className="icon">
                <img src={instagram} alt={instagram}/>
              </div>
              <div className="icon">
                <img src={googleplus} alt={googleplus}/>
              </div>
              <div className="icon">
                <img src={pinterest} alt={pinterest}/>
              </div>
              <div className="icon">
                <img src={twitter} alt={twitter}/>
              </div>
            </div>
          </div>
          <div className="section two">
            <h1>Contact Us</h1>
            <div className="info-ctn">
              <div className="icon-wrapper">
              <img src={mapmarker} alt={mapmarker}/>
              </div>
              <div className="text-wrapper">
              <p>62 Merthyr Road BURGH-CLERE</p>
              <p>RG20 6DS</p>
              </div>
            </div>
                       <div className="info-ctn">
              <div className="icon-wrapper">
              <img src={mail} alt={mail}/>
              </div>
              <div className="text-wrapper">
              <p>contact@medlife.tk</p>
              </div>
            </div>
            <div className="info-ctn">
              <div className="icon-wrapper">
              <img src={phone} alt={phone}/>
              </div>
              <div className="text-wrapper">
              <p>987 6543 210</p>
              </div>
            </div>
          </div>
          <div className="section three">
            <h1>Newsletter</h1>
            <form>
              <input type="text" name="name" placeholder="Name"/>
              <input type="email" name="email" placeholder="Email"/>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <p>Made by <a href="itsmechristian.co.uk">itsmechristian.co.uk</a></p>
      </footer>
    );
  }
}

export default Footer;
