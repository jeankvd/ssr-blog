import React from 'react';
import { NavLink } from 'react-router-dom';
import fetch from 'isomorphic-fetch';


class Home extends React.Component {
  static async getInitialProps({ req, res, match }) {
    const hn = await fetch('https://node-hnapi.herokuapp.com/news');
    const stuff = await hn.json();
    return { stuff };
  }

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <h1>About</h1>
        <pre>
          {this.props.stuff
            ? this.props.stuff.map(item => <p key={item.id}>{item.title}</p>)
            : 'Loading...'}
        </pre>
      </div>
    );
  }
}

export default Home;