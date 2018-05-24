import React, { Component } from 'react';
import Blogwrapper from './Blogwrapper';
import { Link } from 'react-router-dom';
import './blogs.style.scss';

import blogimage1 from '../../assets/images/blogimage1.jpg';
import blogimage1small from '../../assets/images/blogimage1small.jpg';

import blogimage2 from '../../assets/images/blogimage2.jpeg';
import blogimage2small from '../../assets/images/blogimage2small.jpg';

import blogimage3 from '../../assets/images/blogimage3.jpg';
import blogimage3small from '../../assets/images/blogimage3small.jpg';

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5002/blogs')
      .then(res => res.json())
      .then(data => this.setState({ blogs: data }));
  }

  render() {
    if (this.state.blogs.length === 0) {
      return false;
    }
    return (
      <div className="blogs">
        <div className="container">
          <Blogwrapper
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
