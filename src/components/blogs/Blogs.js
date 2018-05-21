import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import './blogs.scss';

import blogimage1 from '../../assets/images/blogimage1.jpg';
import blogimage1small from '../../assets/images/blogimage1small.jpg';

import blogimage2 from '../../assets/images/blogimage2.jpeg';
import blogimage2small from '../../assets/images/blogimage2small.jpeg';

import blogimage3 from '../../assets/images/blogimage3.jpg';
import blogimage3small from '../../assets/images/blogimage3small.jpg';

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [
        {
          id: 1,
          title: 'Ipsum lorem dolor sit amet molestias at nam.',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          img: [blogimage1, blogimage1small],
          month: this.getAbbreviatedMonth(new Date().getMonth()),
          date: new Date().getDate(),
          year: new Date().getFullYear()
        },
        {
          id: 2,
          title: 'Sed ut perspiciatis unde omnis iste.',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          img: [blogimage2, blogimage2small],
          month: this.getAbbreviatedMonth(new Date().getMonth()),
          date: new Date().getDate() - 1,
          year: new Date().getFullYear()
        },
        {
          id: 3,
          title: 'Quis nostrum exercitationem.',
          body:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          img: [blogimage3, blogimage3small],
          month: this.getAbbreviatedMonth(new Date().getMonth()),
          date: new Date().getDate() - 2,
          year: new Date().getFullYear()
        }
      ]
    };

    this.getAbbreviatedMonth = this.getAbbreviatedMonth.bind(this);
  }

  getAbbreviatedMonth(m) {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];

    return months[m];
  }
  render() {
    return (
      <div className="blogs">
        <div className="container">
          <Blog
            blogs={this.state.blogs}
            key={this.state.title}
            query={this.props.location.search}
            push={this.props.history.push}
          />
        </div>
      </div>
    );
  }
}

export default Blogs;
