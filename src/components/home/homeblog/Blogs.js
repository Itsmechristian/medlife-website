import React, { Component } from 'react';
import Blog from './Blog';
import './homeblog.scss';

// Blogs Images
import blogimage1 from '../../../assets/images/blogimage1.jpg';
import blogimage1small from '../../../assets/images/blogimage1small.jpg';
import blogprofile1 from '../../../assets/images/blogprofile1.jpg';

import blogimage2 from '../../../assets/images/blogimage2.jpeg';
import blogimage2small from '../../../assets/images/blogimage2small.jpg';
import blogprofile2 from '../../../assets/images/blogprofile2.jpg';

import blogimage3 from '../../../assets/images/blogimage3.jpg';
import blogimage3small from '../../../assets/images/blogimage3small.jpg';
import blogprofile3 from '../../../assets/images/blogprofile3.jpg';

class Blogs extends Component {
  constructor(props) {
    super();

    this.state = {
      blogs: [
        {
          id: 1,
          title: 'Ipsum lorem dolor sit amet molestias at nam.',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          author: 'John Doe',
          blogprofile: blogprofile1,
          blogimage: blogimage1,
          blogimagesmall: blogimage1small,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            2} - 10 mins ago`
        },
        {
          id: 2,
          title: 'Sed ut perspiciatis unde omnis iste.',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          author: 'John Doe',
          blogprofile: blogprofile2,
          blogimagesmall: blogimage2small,
          blogimage: blogimage2,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            2} - 2 days ago`
        },
        {
          id: 3,
          title: 'Quis nostrum exercitationem.',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!',
          author: 'John Doe',
          blogprofile: blogprofile3,
          blogimagesmall: blogimage3small,
          blogimage: blogimage3,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            4} - 4 days ago`
        }
      ]
    };

    this.getMonth = this.getMonth.bind(this);
  }

  getMonth() {
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December'
    ];

    let numberMonth = new Date().getMonth();

    return month[numberMonth];
  }

  render() {
    let blogs;

    if (this.state.blogs) {
      blogs = this.state.blogs.map(blog => {
        return <Blog blogs={blog} key={blog.id} />;
      });
    }

    return (
      <div className="blogs">
        <div className="blog-ctn">{blogs}</div>
      </div>
    );
  }
}

export default Blogs;
