import React from 'react';
import Footer from '../footer/Footer';

// Icons
import ambulance from '../../assets/images/ambulance.png';
import dna from '../../assets/images/dna.png';
import heartbeat from '../../assets/images/heartbeat.png';
import ear from '../../assets/images/ear.png';
import tooth from '../../assets/images/tooth.png';

// Doctor Images
import doctor1 from '../../assets/images/doctor1.jpg';
import doctor2 from '../../assets/images/doctor2.jpg';
import doctor3 from '../../assets/images/doctor3.jpg';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="heading">
          <h1>Our Services</h1>
          <hr />
        </div>
        <div className="section one">
          <div className="logos">
            <div className="logo-wrapper">
              <img src={ambulance} alt={ambulance} />
            </div>
            <h3>EMERGENCY</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="logos">
            <div className="logo-wrapper">
              <img src={dna} alt={dna} />
            </div>
            <h3>DNA TESTING</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="logos">
            <div className="logo-wrapper">
              <img src={heartbeat} alt={heartbeat} />
            </div>
            <h3>Heart Surgery</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="logos">
            <div className="logo-wrapper">
              <img src={ear} alt={ear} />
            </div>
            <h3>EAR TREATMENT</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="logos">
            <div className="logo-wrapper">
              <img src={tooth} alt={tooth} />
            </div>
            <h3>DENTAL CARE</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, doloribus Lorem ipsum dolor, sit amet consectetur
              adipisicing.
            </p>
          </div>
        </div>
        <div className="heading">
          <h1>Medlife Doctors</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            harum rerum saepe voluptates cumque alias nemo eveniet, repudiandae
            nam ullam.
          </p>
        </div>
        <div className="section two">
          <div className="boxes">
            <div className="box">
              <div className="image-wrapper">
                <img src={doctor1} alt={doctor1} />
              </div>
              <div className="info-wrapper">
                <h3>John Doe</h3>
                <p>Orthondontist</p>
              </div>
            </div>
            <div className="box">
              <div className="image-wrapper">
                <img src={doctor2} alt={doctor2} />
              </div>
              <div className="info-wrapper">
                <h3>Joseph Marky</h3>
                <p>Cardiology</p>
              </div>
            </div>
            <div className="box">
              <div className="image-wrapper">
                <img src={doctor3} alt={doctor3} />
              </div>
              <div className="info-wrapper">
                <h3>Jane Ziewur</h3>
                <p>Cardiology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
