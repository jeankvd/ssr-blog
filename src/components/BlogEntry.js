import React, { Component } from 'react';

class BlogEntry extends Component {

    render() {
        return(
            <div className="blog-entry">
                <h1>{this.props.entry.title.rendered}</h1>
                <p>{this.props.entry.content.rendered}</p>
            </div>
        )
    }
}

export default BlogEntry;