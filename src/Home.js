import React from 'react';
import { NavLink } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import Blog from './components/Blog'
import Footer from './components/Footer'


class Home extends React.Component {
  static async getInitialProps({ req, res, match }) {
    const hn = await fetch('http://demo.wp-api.org/wp-json/wp/v2/posts/');
    const stuff = await hn.json();
    return { stuff };
  }

  render() {
    return (
      <div className="dark">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/components/blog">Blog Example</NavLink>
        <div>
        <Blog blogs={this.props.stuff} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;