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
      blogs: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5002/blogs')
      .then(res => res.json())
      .then(data => this.setState({ blogs: data.slice(0, 3) }));
  }

  render() {
    let blogs;

    if (this.state.blogs) {
      blogs = this.state.blogs.map(blog => {
        return <Blog blog={blog} key={blog.id} />;
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
