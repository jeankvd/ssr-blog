import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogEntry from './BlogEntry';


class Blog extends Component {


  render() {
    return (
      <div className="blog">
      <h1>Batman TV Shows</h1>
      <ul>
        <BlogEntry entry={this.props.blogs[2]}/>
      </ul>
      </div>
    );
  }
}

export default Blog;
