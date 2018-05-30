import React, { Component } from 'react';
import Homeblog from './Homeblog';

class Homeblogs extends Component {
  constructor(props) {
    super();

    this.state = {
      blogs: []
    };
  }

  componentWillMount() {
    fetch('https://blog.medlife.tk/blogs')
      .then(res => res.json())
      .then(data => this.setState({ blogs: data.slice(0, 3) }));
  }

  render() {
    let blogs;

    if (this.state.blogs) {
      blogs = this.state.blogs.map(blog => {
        return <Homeblog blog={blog} key={blog.id} />;
      });
    }

    return (
      <div className="homeblogs">
        <div className="container">{blogs}</div>
      </div>
    );
  }
}

export default Homeblogs;
