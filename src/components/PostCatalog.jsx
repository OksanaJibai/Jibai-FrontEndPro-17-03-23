import React from "react";

class PostCatalog extends React.Component{

    state = {posts : []};

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        this.setState({posts : [...posts]})
    }
    render(){
        const {posts} = this.state;
        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map(({id, title, body}) =>
                        <li className="posts_single-post" key={id}>
                          <h3 className="posts__post-title">{title}</h3>
                          <p className="posts__post-description">{body}</p>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default PostCatalog;
