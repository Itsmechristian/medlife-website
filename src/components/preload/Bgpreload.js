import React, { Component } from "react";
import "./preload.scss";

class Bgpreload extends Component {
  constructor(props) {
    super(props);
    this.hdimage = null;
  }

  componentDidMount() {
    let hdloader = new Image();

    hdloader.src = this.props.hdimage;
    hdloader.onload = () => {
      this.hdimage.setAttribute(
        "style",
        `background-image: url('${this.props.hdimage}')`
      );

      this.hdimage.classList.remove("preload");
      this.hdimage.classList.add("loaded");
    };
  }

  render() {
    return (
      <div
        className={[this.props.className, "preload"].join(" ")}
        style={{ backgroundImage: `url(${this.props.preloadimage})` }}
        ref={e => (this.hdimage = e)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Bgpreload;
