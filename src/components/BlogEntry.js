import React, { Component } from 'react';

class BlogEntry extends Component {

    render() {
        return(
            <div className="blog-entry">
                <h1>{this.props.entry.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{"__html": this.props.entry.content.rendered}}></div>
            </div>
        )
    }
}

export default BlogEntry;