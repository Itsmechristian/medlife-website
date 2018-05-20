import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import './blogs.scss';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [
                {
                    title: 'test'
                },
                {
                    title: 'nottest'
                },
                {
                    title: 'hello world'
                },
                {
                    title: 'gay shit'
                },
            ]
        }
    }

    render() {
        return (
            <div className="blogs">
                <div className="container">
                    <Blog blogs={this.state.blogs} key={this.state.title} path={this.props.location.search} push={this.props.history.push} />
                </div>
            </div>
        )
    }
}

export default Blogs;