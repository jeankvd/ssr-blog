import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogEntry from './BlogEntry';


class Blog extends Component {
  

  render() {
    return (
      <div className="blog">
        <BlogEntry entry={this.props.blogs[2]}/>
      </div>
    );
  }
}

export default Blog;
