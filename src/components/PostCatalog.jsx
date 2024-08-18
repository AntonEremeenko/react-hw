import React from 'react';

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({ posts: data });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    render() {
        return (
            <div className="posts">
                <ul className="posts__list">
                    {this.state.posts.map(post => (
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
