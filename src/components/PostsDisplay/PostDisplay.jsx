import React, {useEffect, useState} from "react";
import {Box, Button, Container} from "@mui/material";
import Post from "../UI/Post/Post.jsx";
import CreatePostForm from "../CreatePostForm/index.js";
import {useGetAllPostsQuery} from "../../redux/postsAPI/postsAPI.js";
import {styles} from "./styles.js";

const PostsDisplay = () => {
    const {data: posts = [], isLoading} = useGetAllPostsQuery();
    const [postList, setPostList] = useState(posts);

    useEffect(() => {
        if (!isLoading && posts.length > 0) {
            setPostList(posts);
        }
    }, [posts, isLoading]);

    const handleDelete = (id) => () => {
        setPostList(postList.filter(post => post.id !== id));
    };

    const handleEditPost = (title, body, id) => {
        setPostList(prevPostList => prevPostList.map(post =>
            post.id === id ? {...post, title, body} : post
        ));
    }

    const handleCreateNewPost = (title, body, id) => {
        setPostList(prevPostList => [{title, body, id}, ...prevPostList]);
    }

    return (
        <Container sx={styles.container}>
            <Box>
                <CreatePostForm
                    onCreate={handleCreateNewPost}
                    button={<Button variant='outlined' sx={styles.button}>Create a Post</Button>}
                />
            </Box>
            <hr/>
            <Box sx={styles.containerPosts}>
                {!isLoading && postList.map((post) => (
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        id={post.id}
                        onDelete={handleDelete(post.id)}
                        onEdit={handleEditPost}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default PostsDisplay;