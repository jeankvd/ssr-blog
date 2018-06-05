import React, { Component } from 'react';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router-dom';


class Blog extends Component {
  static async getInitialProps() {
    // const request = await fetch('https://ssrblog.dev/wp-json/wp/v2/posts');
    // const data = await request.json();
    // console.log(`Show data fetched. Count: ${data.length}`);
    // return { posts: data };
    
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }

  }

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


export default Blog;
