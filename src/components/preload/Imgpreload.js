import React, { Component } from 'react';
import './preload.scss';

class Imgpreload extends Component {
  constructor(props) {
    super(props);

    let hdimage = null;
  }

  componentWillMount() {
    let imageLoader = new Image();

    imageLoader.src = this.props.hdimage;

    imageLoader.onload = () => {
      this.hdimage.src = this.props.hdimage;
      this.hdimage.classList.remove('preload');
      this.hdimage.classList.add('loaded');
    };
  }
  componentDidUpdate() {
    let imageLoader = new Image();

    imageLoader.src = this.props.hdimage;

    imageLoader.onload = () => {
      this.hdimage.src = this.props.hdimage;
      this.hdimage.classList.remove('preload');
      this.hdimage.classList.add('loaded');
    };
  }

  render() {
    return (
      <img
        className={[this.props.className, 'preload'].join(' ')}
        height={this.props.height}
        width={this.props.width}
        src={this.props.smallimage}
        ref={e => (this.hdimage = e)}
      />
    );
  }
}

export default Imgpreload;
