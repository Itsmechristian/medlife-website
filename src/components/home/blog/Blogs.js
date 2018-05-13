import React, { Component } from "react";
import Blog from "./Blog";
import "./blog.scss";

// Blogs Images
import blogimage1 from "../../../assets/images/blogimage1.jpg";
import blogprofile1 from "../../../assets/images/blogprofile1.jpg";
import blogimage2 from "../../../assets/images/blogimage2.jpeg";
import blogprofile2 from "../../../assets/images/blogprofile2.jpg";
import blogimage3 from "../../../assets/images/blogimage3.jpg";
import blogprofile3 from "../../../assets/images/blogprofile3.jpg";

class Blogs extends Component {
  constructor(props) {
    super();

    this.state = {
      blogs: [
        {
          id: 1,
          title: "Ipsum lorem  dolor sit amet.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!",
          author: "John Doe",
          blogprofile: blogprofile1,
          blogimage: blogimage1,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            2} - 10 mins ago`
        },
        {
          id: 2,
          title: "Ipsum lorem  dolor sit amet.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!",
          author: "John Doe",
          blogprofile: blogprofile2,
          blogimage: blogimage2,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            2} - 2 days ago`
        },
        {
          id: 3,
          title: "Ipsum lorem  dolor sit amet.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias at nam blanditiis. Nam hic esse, repellendus harum necessitatibus corrupti!",
          author: "John Doe",
          blogprofile: blogprofile3,
          blogimage: blogimage3,
          datecreated: `${this.getMonth()} ${new Date().getDate() -
            4} - 4 days ago`
        }
      ]
    };

    this.getMonth = this.getMonth.bind(this);
  }

  getMonth() {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December"
    ];

    let numberMonth = new Date().getMonth();

    return month[numberMonth];
  }

  render() {
    let blogs;

    if (this.state.blogs) {
      blogs = this.state.blogs.map(blog => {
        return <Blog blogs={blog} key={blog.id} />;
      });
    }

    return (
      <div className="blogs">
        <div className="blog-ctn">{blogs}</div>
      </div>
    );
  }
}

export default Blogs;
