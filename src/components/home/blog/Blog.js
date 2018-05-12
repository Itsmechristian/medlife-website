import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blog.scss';

// Blogs Images
import blogimage1 from '../../../assets/images/blogimage1.jpg';
import blogprofile1 from '../../../assets/images/blogprofile1.jpg';
import blogimage2 from '../../../assets/images/blogimage2.jpeg';
import blogprofile2 from '../../../assets/images/blogprofile2.jpg';
import blogimage3 from '../../../assets/images/blogimage3.jpg';
import blogprofile3 from '../../../assets/images/blogprofile3.jpg'



class Blog extends Component {
  constructor(props) {
    super()

    this.getMonth = this.getMonth.bind(this);
  }

  getMonth() {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

    let numberMonth = new Date().getMonth();

    return month[numberMonth]
  }

  render() {
 

    return (
      <div className="blogs">
        <div className="blog-ctn">
          <div className="blog">
            <div className="image-wrapper">
              <img src={blogimage1} alt="" />
            </div>
            <div className="info-wrapper">
              <div className="img" style={{ backgroundImage: `url(${blogprofile1})` }}>
              </div>
              <div className="wrapper">
                <small>John Doe</small>
                <small>{this.getMonth()} {new Date().getDate()} - 50 mins ago</small>
              </div>
              <div className="text-wrapper">
                <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolorem eligendi, consequuntur ex eaque magni.</p>
                <hr />
              </div>
              <Link to="/test">3 comments</Link>
            </div>
          </div>
          <div className="blog">
            <div className="image-wrapper">
              <img src={blogimage2} alt="" />
            </div>
            <div className="info-wrapper">
              <div className="img" style={{ backgroundImage: `url(${blogprofile2})` }}>
              </div>
              <div className="wrapper">
                <small>John Doe</small>
                <small>{this.getMonth()} {new Date().getDate() - 1} - 1 day ago</small>
              </div>
              <div className="text-wrapper">
                <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolorem eligendi, consequuntur ex eaque magni.</p>
                <hr />
              </div>
              <Link to="/test">3 comments</Link>
            </div>
          </div>
          <div className="blog">
            <div className="image-wrapper">
              <img src={blogimage3} alt="" />
            </div>
            <div className="info-wrapper">
              <div className="img" style={{ backgroundImage: `url(${blogprofile3})` }}>
              </div>
              <div className="wrapper">
                <small>John Doe</small>
                <small>{this.getMonth()} {new Date().getDate() - 2} - 2 days ago</small>
              </div>
              <div className="text-wrapper">
                <h1>Lorem ipsum dolor sit</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum dolorem eligendi, consequuntur ex eaque magni.</p>
                <hr />
              </div>
              <Link to="/test">3 comments</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Blog;
