import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogEntry from './BlogEntry';
import Sidebar from './Sidebar';


class Blog extends Component {
  

  render() {
    return (
      <div className="blog">
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <div className="blog-container">
        <Sidebar />
        <BlogEntry entry={this.props.blogs[2]}/>
      </div>
      </div>
    );
  }
}

export default Blog;
