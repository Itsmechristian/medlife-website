import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

//Icons
import facebook from "../../assets/images/facebook-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import pinterest from "../../assets/images/pinterest-icon.png";
import googleplus from "../../assets/images/googleplus-icon.png";
import instagram from "../../assets/images/instagram-icon.png";

import blogimage1 from "../../assets/images/blogimage1.jpg";
import blogimage2 from "../../assets/images/blogimage2.jpeg";
import blogimage3 from "../../assets/images/blogimage3.jpg";

class Footer extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="sections">
            <div className="section one">
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
              <div className="section two">
                <h1>Latest Blogs</h1>

                <div className="blog">
                  <div className="image-wrapper">
                      <img src={blogimage1} alt=""/>
                  </div>
                  <div className="info-wrapper">
                    <p>Ipsum lorem dolor sit amet molestias at nam.</p>
                    <small>January 27, 2017</small>
                  </div>
                </div>
                <div className="blog">
                  <div className="image-wrapper">
                      <img src={blogimage2} alt=""/>
                  </div>
                  <div className="info-wrapper">
                    <p>Sed ut perspiciatis unde omnis iste.</p>
                    <small>January 27, 2017</small>
                  </div>
                </div>
                <div className="blog">
                  <div className="image-wrapper">
                      <img src={blogimage3} alt=""/>
                  </div>
                  <div className="info-wrapper">
                    <p>Quis nostrum exercitationem.</p>
                    <small>January 27, 2017</small>
                  </div>
                </div>
              </div>
              <div className="section three">
                <h1>Contact Form</h1>
                <form>
                    <input type="text" placeholder="Name" autoComplete="name"/>
                    <input type="email" placeholder="Email" autoComplete="email"/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
              </div>
              <div className="section four">
                <h1>News Letter</h1>
                  <div className="wrapper">
                    <input type="email" name="email" autoComplete="email" placeholder="Email"/>
                    <button type="submit">Subscribe</button>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab, omnis ipsum consequuntur recusandae architecto impedit sapiente voluptatum. Sit dolore vitae quo totam earum esse hic atque aliquid, at autem.</p>
                  </div>
              </div>
          </div>
        <p>Copyright Kawewemed &copy; 2123</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
