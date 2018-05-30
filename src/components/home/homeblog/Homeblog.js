import React, { Component } from 'react';
import Imgpreload from '../../preload/Imgpreload.js';

import { Link } from 'react-router-dom';

class Homeblog extends Component {
  constructor(props) {
    super();
  }

  render() {
    let blog = this.props.blog;
    return (
      <div className="homeblog">
        <div className="image-wrapper">
          <Link to={'/blog?id=' + blog.id}>
            <Imgpreload smallimage={blog.smallimage} hdimage={blog.hdimage} />
          </Link>
        </div>
        <div className="info-wrapper">
          <div
            className="img"
            style={{
              backgroundImage: `url(${blog.user.profileimage})`
            }}
          />
          <div className="wrapper">
            <small>{blog.user.name}</small>
            <small>
              {blog.fulldate.month} {blog.fulldate.date} {blog.fulldate.year}{' '}
            </small>
          </div>
          <div className="text-wrapper">
            <Link to={'/blog?id=' + blog.id}>
              <h1>{blog.title}</h1>
            </Link>
            <p>{blog.body}</p>
            <hr />
          </div>
          <Link to={'/blog?id=' + blog.id}>
            {blog.comments.length} Comments
          </Link>
        </div>
      </div>
    );
  }
}

export default Homeblog;
