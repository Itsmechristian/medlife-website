import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bgpreload from '../preload/Bgpreload';
import Imgpreload from '../preload/Imgpreload';

import Blogs from './blog/Blogs';
import Footer from '../footer/Footer';
import dentistchair from '../../assets/images/dentist-chair.jpg';
import dentistchairmin from '../../assets/images/dentist-chair-min.jpg';

// Section three images;
import doctorteam from '../../assets/images/doctor-team.jpg';
import doctorteamsmall from '../../assets/images/doctor-team-small.jpg';


// Icons
import heartbeat from '../../assets/images/heartbeat.png';
import ambulance from "../../assets/images/ambulance.png";
import dna from '../../assets/images/dna.png';
import ear from '../../assets/images/ear.png';
import tooth from '../../assets/images/tooth.png';

import plusicon from '../../assets/images/plus-icon.png';

import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    let header = document.querySelector('.header');

   header.getAttribute('class').split(' ')
  }

  render() {
    return (
      <div className="home">
      <Bgpreload className="header" preloadimage={dentistchairmin} hdimage={dentistchair}> 
      <div className="container">
            <div className="text-wrapper" id="textwrapper">
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
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, sit Lorem, ipsum dolor.</p>
                  <Link to="/contact">Contact Us</Link>
                </section>
              </div>
            </div>
            <div className="section-two">
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={ambulance} alt={tooth} />
                </div>
                <h3>EMERGENCY</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={dna} alt={tooth} />
                </div>
                <h3>DNA TESTING</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={heartbeat} alt={tooth} />
                </div>
                <h3>Heart Surgery</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={dna} alt={tooth} />
                </div>
                <h3>EAR TREATMENT</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              <div className="logos">
                <div className="logo-wrapper">
                  <img src={tooth} alt={tooth} />
                </div>
                <h3>DENTAL CARE</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
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