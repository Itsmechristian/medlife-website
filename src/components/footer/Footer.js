import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

//Icons
import facebook from "../../assets/images/facebook-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import pinterest from "../../assets/images/pinterest-icon.png";
import googleplus from "../../assets/images/googleplus-icon.png";
import instagram from "../../assets/images/instagram-icon.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="sections">
            <div className="section">
              <div className="logo-wrapper">
                <Link to="/">
                  <h1>
                    Med<span>life</span>
                  </h1>
                </Link>
              </div>
              <div className="text-wrapper">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore in nobis quisquam. Dolor tempora pariatur, odit vel
                  perferendis non eaque fugiat at, molestiae ad placeat dolores
                  praesentium fugit harum tenetur?
                </p>
              </div>
              <div className="icon-wrapper">
                <img src={facebook} alt={facebook} height="30" width="30" />
                <img src={twitter} alt={twitter} height="30" width="30" />
                <img src={googleplus} alt={googleplus} height="30" width="30" />
                <img src={pinterest} alt={pinterest} height="30" width="30" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
