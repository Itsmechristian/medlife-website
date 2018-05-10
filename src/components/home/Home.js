import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss'

class Home extends Component {
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
                        <Link to="/appointment">Request an Appointment</Link>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Home;