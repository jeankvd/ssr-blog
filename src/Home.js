import React from 'react';
import { NavLink } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import Blog from './components/Blog'


class Home extends React.Component {
  static async getInitialProps({ req, res, match }) {
    const hn = await fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/');
    const stuff = await hn.json();
    return { stuff };
  }

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <h1>About</h1>
        <Blog blogs={this.props.stuff} />
      </div>
    );
  }
}

export default Home;