import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Imgpreload from '../preload/Imgpreload.js';

import './blog.style.scss';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: ''
    };
  }

  componentWillMount() {
    let id = this.props.location.search.slice(4);

    fetch(`http://localhost:5002/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.id) {
          this.props.history.push('?id=1');
        } else {
          this.setState({ blog: data });
        }
      });
  }
  componentDidUpdate() {
    this.refs.text.innerHTML = this.state.blog.htmlbody;
  }

  render() {
    if (this.state.blog.length === 0) {
      return false;
    }
    return (
      <div className="blog">
        <div className="container">
          <div className="left-side">
            <div className="image-wrapper">
              <Imgpreload
                hdimage={this.state.blog.hdimage}
                alt={this.state.blog.hdimage}
                smallimage={this.state.blog.smallimage}
              />
            </div>
            <div className="text-wrapper" ref="text" />
          </div>
          <div className="right-side">
            <h1>Working</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
