import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Imgpreload from '../preload/Imgpreload';

// Icon
import leftQuote from '../../assets/images/left-quote.png';
import tags from '../../assets/images/tags.png';
import comments from '../../assets/images/comments.png';
import commentsGrey from '../../assets/images/comments-grey.png';

class Blogwrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dividedBlogs: [],
      pageNumber: 1
    };

    this.checkQuery = this.checkQuery.bind(this);
    this.divideBlogs = this.divideBlogs.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentWillMount() {
    this.divideBlogs();

    if (!this.checkQuery()) {
      this.props.push(`/404`);
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
    for (let i = 0; i < this.props.blogs.length; i += 5) {
      this.state.dividedBlogs.push(this.props.blogs.slice(i, i + 5));
    }
  }

  navigateTo(e) {
    let numberAttr = e.target.getAttribute('data-num');
    this.state.pageNumber = numberAttr;
    this.props.push(`blogs?page=${numberAttr}`);
  }

  nextPage(e) {
    let numberAttr = e.target.getAttribute('data-number');

    if (numberAttr < this.state.dividedBlogs.length + 1) {
      this.state.pageNumber = numberAttr;
      this.props.push(`blogs?page=${numberAttr}`);
    } else {
      return false;
    }
  }
  render() {
    let { pageNumber } = this.state;
    return (
      <div className="blogwrapper">
        <div className="container">
          {this.state.dividedBlogs[pageNumber - 1].map(e => (
            <div className="blog-ctn" key={e.id}>
              <div className="left-side">
                <div className="section">
                  <img src={leftQuote} alt={leftQuote} />
                </div>
                <div className="section">
                  <p>
                    {e.fulldate.month} {e.fulldate.date}
                  </p>
                  <p>{e.fulldate.year}</p>
                </div>
                <div className="section">
                  <img src={comments} alt={comments} />
                  <small>{e.comments.length}</small>
                </div>
              </div>
              <div className="right-side">
                <Link to={'blog?id=' + e.id}>
                  <Imgpreload
                    hdimage={e.hdimage}
                    smallimage={e.smallimage}
                    alt={e.hdimage}
                  />
                </Link>
                <Link to={'blog?id=' + e.id}>
                  <h1>{e.title}</h1>
                </Link>
                <div className="body-wrapper">
                  <p>
                    {e.body.length > 150
                      ? e.body.slice(0, 150) + '...'
                      : e.body}
                  </p>
                </div>
                <div className="info-wrapper">
                  <p>
                    {e.fulldate.month} {e.fulldate.date} {e.fulldate.year}
                    <img src={commentsGrey} alt={commentsGrey} /> 2 Comments
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="links">
            {this.state.dividedBlogs.map((e, i) => (
              <a onClick={this.navigateTo} data-num={i + 1} key={i + 1}>
                {i + 1}
              </a>
            ))}
            <a onClick={this.nextPage} data-number={Number(pageNumber) + 1}>
              Next
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogwrapper;
