import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Blogwrapper from './Blogwrapper';
import { Link } from 'react-router-dom';

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
        <Footer />
      </div>
    );
  }
}

export default Blogs;
