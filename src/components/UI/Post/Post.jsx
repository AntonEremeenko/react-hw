import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import Button from "@mui/material/Button";
import EditPostForm from "../../ElitPostForm/index.js";
import {useDeletePostByIdMutation} from "../../../redux/postsAPI/postsAPI.js";
import React, {useEffect} from "react";

const Post = ({title, body, id, onDelete, onEdit}) => {
    const [deletePost, {isLoading, isSuccess, isError}] = useDeletePostByIdMutation();
    const handleDelete = () => {
        deletePost(id);
    };

    const handleSubmitForm = (title, body) => {
        onEdit(title, body, id)
    }

    useEffect(() => {
        if (isSuccess) {
            onDelete();
        } else if (isError) {
            console.error('Error deleting post');
        }
    }, [isSuccess, isError]);

    return (
        <Box sx={styles.container}>
            <Box sx={styles.containerText}>
                <Typography variant='h6' component='span' sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant='body1' component='span' sx={styles.body}>
                    {body}
                </Typography>
            </Box>

            <Box sx={styles.buttonGroup}>
                <EditPostForm
                    title={title}
                    body={body}
                    postId={id}
                    onSubmit={handleSubmitForm}
                    button={<Button variant='outlined' sx={styles.button}>Edit</Button>}/>
                <Button
                    variant='contained'
                    sx={styles.button}
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    {isLoading ? 'Deleting...' : 'Delete'}
                </Button>
            </Box>
        </Box>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Post;