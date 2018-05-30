import React, { Component } from 'react';
import Footer from '../footer/Footer';
//Icons
import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';
import marker from '../../assets/images/map-marker.png';

class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="left-side">
            <h1>GET IN TOUCH</h1>
            <hr />
            <form>
              <div className="ctn">
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" type="text" autoComplete="given-name" />
              </div>
              <div className="ctn">
                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" type="text" autoComplete="family-name" />
              </div>
              <div className="ctn">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" autoComplete="email" />
              </div>
              <div className="ctn">
                <label htmlFor="phonenumber">Phone</label>
                <input
                  name="phonenumber"
                  type="number"
                  autoComplete="tel-national"
                />
              </div>
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="30" rows="10" />
              <button type="submit" disabled>
                Submit
              </button>
            </form>
          </div>
          <div className="right-side">
            <h1>ADDRESS</h1>
            <hr />
            <div className="address-wrapper">
              <section>
                <img src={marker} alt={marker} />
                <div className="text">
                  <p>84 Prince Consort Road, KELSTON</p>
                  <p>BA1 4XA</p>
                </div>
              </section>
              <section>
                <img src={mail} alt={mail} />
                <div className="text">
                  <p>contact@medlife.tk</p>
                </div>
              </section>
              <section>
                <img src={phone} alt={phone} />
                <div className="text">
                  <p>987 6543 210</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
