import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Imgpreload from '../preload/Imgpreload.js';
import Bgpreload from '../preload/Bgpreload.js';

import ambulanceCircle from '../../assets/images/ambulance-circle.png';
import doctorCircle from '../../assets/images/doctor-circle.png';
import medkitCircle from '../../assets/images/medkit-circle.png';
import staffCircle from '../../assets/images/staff-circle.png';
import stethoscopeCircle from '../../assets/images/stethoscope-circle.png';
import wheelchairCircle from '../../assets/images/wheelchair-circle.png';
import teamdoctor from '../../assets/images/teamdoctor.jpg';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="heading">
            <h1>About Us</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              reprehenderit voluptas dolore excepturi, a doloribum.
            </p>
          </div>
          <div className="section one">
            <div className="content">
              <img src={ambulanceCircle} alt={ambulanceCircle} />
              <div className="content-wrapper">
                <h2>Fast Ambulance Service</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
            <div className="content">
              <img src={doctorCircle} alt={doctorCircle} />
              <div className="content-wrapper">
                <h2>Our Best Doctor</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
            <div className="content">
              <img src={medkitCircle} alt={medkitCircle} />
              <div className="content-wrapper">
                <h2>Emergency Service</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
            <div className="content">
              <img src={staffCircle} alt={staffCircle} />
              <div className="content-wrapper">
                <h2>Qualified Staff</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
            <div className="content">
              <img src={stethoscopeCircle} alt={stethoscopeCircle} />
              <div className="content-wrapper">
                <h2>24/7 Service</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
            <div className="content">
              <img src={wheelchairCircle} alt={wheelchairCircle} />
              <div className="content-wrapper">
                <h2>Health Care</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat, odit!
                </p>
              </div>
            </div>
          </div>
          <div className="heading">
            <h1>Our Team</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              reprehenderit voluptas dolore excepturi, a doloribum.
            </p>
          </div>
          <div className="section two">
            <div className="content">
              <img src={teamdoctor} alt={teamdoctor} />
              <div className="text">
                <h1>
                  Always ensure to lay down in such a manner that tail can
                  lightly brush human's.
                </h1>
                <small>Step on your keyboard </small>
                <p>
                  Please stop looking at your phone and pet me relentlessly
                  pursues moth, vommit food and eat it again and eat a plant,
                  kill a hand, and catch mouse and gave it as a present pet my
                  belly, you know you want to; seize the hand and shred it!.{' '}
                </p>
                <Link to="/services">View Our Services</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
