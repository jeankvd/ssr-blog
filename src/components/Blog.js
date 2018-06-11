import React, { Component } from 'react';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import fetch from 'isomorphic-unfetch';
import { Link } from 'react-router-dom';


class Blog extends Component {

  render() {
    return (
      <div className="Home">
      {/* <h1>{this.props.data ? this.props.data : 'Loadings...'}</h1> */}
      <h1>Batman TV Shows</h1>
    <ul>
      {this.props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
      </div>
    );
  }
}

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Blog;
