import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Imgpreload from '../preload/Imgpreload.js';
import leftQuote from '../../assets/images/left-quote.png';
import commentgrey from '../../assets/images/comments-grey.png';

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
          this.props.history.push('/404');
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
    let { blog } = this.state;
    return (
      <div className="blog">
        <div className="container">
          <div className="left-side">
            <div className="image-wrapper">
              <Imgpreload
                hdimage={blog.hdimage}
                alt={blog.hdimage}
                smallimage={blog.smallimage}
              />
            </div>
            <div className="info-wrapper">
              <div className="date">
                <img src={leftQuote} alt={leftQuote} />
                <p>
                  {blog.fulldate.month} {blog.fulldate.date}
                </p>
                <p>{blog.fulldate.year}</p>
                <p />
              </div>
              <div className="title">
                <h1>{blog.title}</h1>
                <div className="comment-wrapper">
                  <img src={commentgrey} alt={commentgrey} />
                  <small>{blog.comments.length} Comments</small>
                </div>
              </div>
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
