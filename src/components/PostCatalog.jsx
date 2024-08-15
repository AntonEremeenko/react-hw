import React, { Component } from "react";

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.fetchPosts().catch(error => {
            console.error("Ошибка при загрузке постов:", error);
        });
    }

    async fetchPosts() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        this.setState({ posts: data });
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map(post => (
                        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostCatalog;