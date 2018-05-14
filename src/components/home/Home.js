import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bgpreload from '../preload/Bgpreload';
import Imgpreload from '../preload/Imgpreload';

import Blogs from './blog/Blogs';
import Footer from '../footer/Footer';
import doctor from '../../assets/images/doctor.jpg';
import doctorsmall from '../../assets/images/doctorsmall.jpg';

// Section three images;
import doctorteam from '../../assets/images/doctor-team.jpg';
import doctorteamsmall from '../../assets/images/doctor-team-small.jpg';


// Icons
import doctoricon from '../../assets/images/doctor-icon.png';
import injectionicon from '../../assets/images/injection-icon.png';
import medkiticon from '../../assets/images/medkit-icon.png';
import heartbeaticon from '../../assets/images/heartbeat-icon.png';
import plusicon from '../../assets/images/plus-icon.png';

import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="home">
      <Bgpreload className="header" preloadimage={doctorsmall} hdimage={doctor}> 
      <div className="container">
            <div className="text-wrapper">
              <h1 className="animate">Medical Service that</h1>
              <h1 className="animate">You can Trust 100%</h1>
              <p className="animate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.</p>
            </div>
          </div>
      </Bgpreload>
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
                      <p>Monday</p>
                    </div>
                    <div className="time">
                      <p>7:00am - 12:00pm</p>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="day">
                      <p>Tue - Thur</p>
                    </div>
                    <div className="time">
                      <p>6:00am - 12:00pm</p>
                    </div>
                  </div>
                  <div className="wrapper">
                    <div className="day">
                      <p>Friday</p>
                    </div>
                    <div className="time">
                      <p>10:00am - 12:00pm</p>
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
                <Imgpreload preloadimage={doctorteamsmall} hdimage={doctorteam} />
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