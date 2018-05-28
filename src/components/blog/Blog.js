import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import Imgpreload from '../preload/Imgpreload.js';
import leftQuote from '../../assets/images/left-quote.png';
import commentgrey from '../../assets/images/comments-grey.png';
import facebooklogo from '../../assets/images/facebooklogo.png';
import twitterlogo from '../../assets/images/twitterlogo.png';
import googlelogo from '../../assets/images/googlelogo.png';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      blog: '',
      latestblog: [],
      photos: []
    };

    this.navigateTo = this.navigateTo.bind(this);
  }

  componentWillMount() {
    this.state.id = this.props.location.search.slice(4);

    fetch('http://localhost:5002/blogs')
      .then(res => res.json())
      .then(data => {
        this.setState({ blog: data.find(e => e.id == this.state.id) });
        this.setState({ latestblog: data.splice(0, 3) });
        this.setState({ photos: data.splice(0, 6) });
      });
  }

  componentDidUpdate() {
    this.refs.text.innerHTML = this.state.blog.htmlbody;
  }

  navigateTo(e) {
    let id = e.target.getAttribute('data-id');
    fetch('http://localhost:5002/blogs')
      .then(res => res.json())
      .then(data => {
        this.setState({ blog: data.find(e => e.id == id) });
      });
    this.state.id = id;
    this.props.history.push(`blog?id=${id}`);
  }

  render() {
    if (
      this.state.blog.length === 0 &&
      this.state.latestblog.length === 0 &&
      this.state.photos.length === 0
    ) {
      return false;
    }

    let { blog } = this.state;
    let { latestblog } = this.state;
    let { photos } = this.state;

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
            <div className="share-wrapper">
              <small>Share: </small>
              <div className="image-wrapper">
                <img src={facebooklogo} alt={facebooklogo} />
                <img src={twitterlogo} alt={twitterlogo} />
                <img src={googlelogo} alt={googlelogo} />
              </div>
            </div>
            <hr />
            <div className="comments">
              <h4>Comments:</h4>
              {blog.comments.map(e => (
                <div className="comment" key={e.id}>
                  <img src={e.profileimage} alt={e.profileimage} />
                  <div className="info">
                    <small>
                      <span>{e.name}</span> says:
                    </small>
                    <p>{e.date}</p>
                  </div>
                  <p>{e.comment}</p>
                </div>
              ))}
            </div>
            <div className="comment-form">
              <form>
                <h4>Leave a Comment</h4>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="email"
                  />
                  <input type="text" placeholder="Enter Whatever" />
                </div>

                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter Message"
                />
                <button type="submit" disabled>
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="right-side">
            <h4>Latest Blogs</h4>
            {latestblog.map(e => (
              <div className="latestblog" key={e.id}>
                <Imgpreload hdimage={e.hdimage} smallimage={e.smallimage} />

                <div className="text">
                  <h5 onClick={this.navigateTo} data-id={e.id}>
                    {e.title}
                  </h5>
                  <p>{e.body}</p>
                </div>
              </div>
            ))}
            <h4>Photos</h4>
            <div className="photos">
              {photos.map(e => (
                <Imgpreload
                  key={e.id}
                  hdimage={e.hdimage}
                  smallimage={e.smallimage}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
