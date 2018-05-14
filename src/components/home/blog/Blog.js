import React, { Component } from "react";
import Imgpreload from '../../preload/Imgpreload.js';

import { Link } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="blog">
        <div className="image-wrapper">
          <Imgpreload preloadimage={this.props.blogs.blogimagesmall} hdimage={this.props.blogs.blogimage} />
        </div>
        <div className="info-wrapper">
          <div
            className="img"
            style={{ backgroundImage: `url(${this.props.blogs.blogprofile})` }}
          />
          <div className="wrapper">
            <small>{this.props.blogs.author}</small>
            <small>{this.props.blogs.datecreated}</small>
          </div>
          <div className="text-wrapper">
            <h1>{this.props.blogs.title}</h1>
            <p>{this.props.blogs.text}</p>
            <hr />
          </div>
          <Link to="/test">3 comments</Link>
        </div>
      </div>
    );
  }
}

export default Blog;
