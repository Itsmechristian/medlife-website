import queryString from 'query-string';
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dividedBlogs: [],
    };
    this.divideBlogs = this.divideBlogs.bind(this);

    console.log(this.props)
  }
  componentWillMount() {
    this.divideBlogs();
  }
  divideBlogs() {
    let chunks = [];
    for (let i = 0; i < this.props.blogs.length; i += 2) {
      this.state.dividedBlogs.push(this.props.blogs.slice(i, i + 2));
    }
  }

  render() {
    return (
      <div className="blogs">
        
        {this.state.dividedBlogs.map((e, i) => (
          <div className="links" key={i + 1}>
          <Link to={{pathname: `/blogs`, query: {go: `${i+ 1}`}}}>{i + 1}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
