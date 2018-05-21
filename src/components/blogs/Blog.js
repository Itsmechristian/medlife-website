import queryString from 'query-string';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Imgpreload from '../preload/Imgpreload';

// Icon
import leftQuote from '../../assets/images/left-quote.png';
import tags from '../../assets/images/tags.png';
import comments from '../../assets/images/comments.png';
import commentsGrey from '../../assets/images/comments-grey.png';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dividedBlogs: [],
      pageNumber: 1
    };

    this.checkQuery = this.checkQuery.bind(this);
    this.divideBlogs = this.divideBlogs.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentWillMount() {
    this.divideBlogs();

    if (!this.checkQuery()) {
      this.props.push(`blogs?page=1`);
    } else {
      this.state.pageNumber = this.props.query.slice(
        6,
        this.props.query.length
      );
    }
  }

  checkQuery() {
    // Query Handler
    let results = [];

    this.state.dividedBlogs.forEach((e, i) => {
      results.push((this.props.query === `?page=${i + 1}`).toString());
    });

    return results.includes('true');
  }

  divideBlogs() {
    let chunks = [];
    for (let i = 0; i < this.props.blogs.length; i += 1) {
      this.state.dividedBlogs.push(this.props.blogs.slice(i, i + 1));
    }
  }

  navigateTo(e) {
    let numberAttr = e.target.getAttribute('data-num');
    this.state.pageNumber = numberAttr;
    this.props.push(`blogs?page=${numberAttr}`);
  }

  render() {
    let { pageNumber } = this.state;
    return (
      <div className="blogs">
        <div className="container">
          {this.state.dividedBlogs[pageNumber - 1].map(e => (
            <div className="blog" key={e.id}>
              <div className="left-side">
                <div className="section">
                  <img src={leftQuote} alt={leftQuote} />
                </div>
                <div className="section">
                  <p>
                    {e.month} {e.date}
                  </p>
                  <p>{e.year}</p>
                </div>
                <div className="section">
                  <img src={comments} alt={comments} />
                  <small>0</small>
                </div>
              </div>
              <div className="right-side">
                <Imgpreload
                  hdimage={e.img[0]}
                  preloadimage={e.img[1]}
                  alt={e.img}
                />
                <h1>{e.title}</h1>
                <div className="body-wrapper">
                  <p>
                    {e.body.length > 150
                      ? e.body.slice(0, 150) + '...'
                      : e.body}
                  </p>
                </div>
                <div className="info-wrapper">
                  <p>
                    {e.month} {e.date} {e.year}
                    <img src={commentsGrey} alt={commentsGrey} /> 2 Comments
                  </p>
                </div>
              </div>
            </div>
          ))}
          {this.state.dividedBlogs.map((e, i) => (
            <div className="links" key={i + 1}>
              <a onClick={this.navigateTo} data-num={i + 1}>
                {i + 1}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
