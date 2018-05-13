import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blogs from './blog/Blogs';
import Footer from '../footer/Footer';

import doctoricon from '../../assets/images/doctor-icon.png';
import injectionicon from '../../assets/images/injection-icon.png';
import medkiticon from '../../assets/images/medkit-icon.png';
import heartbeaticon from '../../assets/images/heartbeat-icon.png';
import plusicon from '../../assets/images/plus-icon.png';
import doctorteam from '../../assets/images/doctor-team-small.jpg';


import './home.scss';

class Home extends Component {
  constructor(props) {
    super();


  }

  render() {
    return (
      <div className="home">
        <header>
          <div className="container">
            <div className="text-wrapper">
              <h1 className="animate">Medical Service that</h1>
              <h1 className="animate">You can Trust 100%</h1>
              <p className="animate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quis</p>
            </div>
          </div>
        </header>
        <div className="body">
          <div className="container">
            <div className="section-one">
              <div className="header">
                <section>
                  <h1>TOP DOCTORS</h1>
                  <small>CARE SOLUTIONS</small>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia quaerat nobis aliquam nihil distinctio necessitatibus voluptatibus</p>
                  <Link to="/about">About</Link>
                </section>
                <section>
                  <h1>24 HOUR SERVICE</h1>
                  <small>SIT AMET</small>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia quaerat nobis aliquam nihil distinctio necessitatibus voluptatibus</p>
                  <Link to="/services">Learn More</Link>
                </section>
                <section>
                  <h1>OPENING HOURS</h1>
                  <div className="wrapper">
                    <div className="day">
                      <h2>Monday</h2>
                    </div>
                    <div className="time">
                      <h2>7:00am - 12:00pm</h2>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="day">
                      <h2>Tue - Thur</h2>
                    </div>
                    <div className="time">
                      <h2>6:00am - 12:00pm</h2>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="day">
                      <h2>Friday</h2>
                    </div>
                    <div className="time">
                      <h2>10:00am - 12:00pm</h2>
                    </div>
                  </div>
                  <Link to="/appointment">Request Appointment</Link>
                </section>
                <section>
                  <h1>BOOKING A VISIT</h1>
                  <small>Lorem, ipsum dolor.</small>
                  <h2>(192) 523-5452</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, sit</p>
                  <Link to="/contact">Contact Us</Link>
                </section>
              </div>
            </div>
            <div className="section-two">
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={doctoricon} alt="" />
                </div>
                <h1>50</h1>
                <h3>Doctors</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={heartbeaticon} alt="" />
                </div>
                <h1>1500</h1>
                <h3>Patients</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={medkiticon} alt="" />
                </div>
                <h1>200</h1>
                <h3>Donations</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={injectionicon} alt="" />
                </div>
                <h1>30</h1>
                <h3>Specialities</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus</p>
              </div>
            </div>
            <div className="section-three">
              <div className="left-side">
                <img src={doctorteam} alt="" />
              </div>
              <div className="right-side">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ipsam.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga mollitia laborum facilis veniam sint harum tempora veritatis est repellendus unde deleniti eveniet, aperiam soluta rerum officia, ipsa illo expedita neque officiis? Quod nam mollitia neque? Optio perspiciatis, illo incidunt asperiores, id fugiat in, adipisci quidem recusandae quas  fuga non!</p>
                <Link to="/services">
                  <div className="link">
                    <div className="para-wrapper">
                      <p>View the services</p>
                    </div>
                    <div className="image-wrapper">
                      <img src={plusicon} alt="" height="15" width="15" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="section-four">
             <Blogs />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;