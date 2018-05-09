import React, { Component } from 'react';
import backgroundImage from '../../assets/images/doctor.jpg'
import './home.scss'

 class Home extends Component {
   render() {
     console.log(this.props)
     return (
       <div className="home">
          <header>
            <div className="container">
              <div className="text-wrapper">
                <h1 className="animate">Medical Service that</h1>
                <h1 className="animate">You can Trust 100%</h1>
                <p className="animate">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quis?</p>
              </div>
            </div>
          </header>
          <div className="body">
              <div className="section-one">
                  <div className="container">
                    <div className="left-side">
                      <h1>Pacients is our</h1>
                      <h1>First Priority</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, dolores dolor officiis eos quidem, eum debitis quas repellat nemo ad quia voluptatem laudantium excepturi repudiandae possimus? Fugiat architecto nemo reprehenderit.</p>
                    </div>
                    <div className="right-side">
                    <h1>test</h1>
                    </div>
                  </div>
              </div>
          </div>
       </div>
     )
   }
 }

 export default Home;