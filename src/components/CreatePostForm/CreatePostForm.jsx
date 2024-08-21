import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {setModalCreateOpen} from "../../redux/slices/modalsSlice.js";
import React, {cloneElement} from "react";
import ModalTemplate from "../UI/ModalTemplate/index.js";
import {useFormik} from "formik";
import FormInput from "../UI/FormInput/index.js";
import validationSchema from "./validationSchema.js";
import TextArea from "antd/es/input/TextArea";
import Typography from "@mui/material/Typography";
import {useCreatePostMutation} from "../../redux/postsAPI/postsAPI.js";
import {Button} from "@mui/material";
import uniqid from 'uniqid';

const initialValues = {
    title: '',
    body: ''
}

const CreatePostForm = ({button, onCreate}) => {
    const {createPostOpen} = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const [createPost] = useCreatePostMutation();

    const handleCreatePost = async (title, body) => {
        try {
            const id = uniqid();
            await createPost({id, title, body}).unwrap();
            console.log('Post created successfully');
            dispatch(setModalCreateOpen());
            onCreate(title, body, id);
        } catch (err) {
            console.error('Failed to create the post:', err);
        }
    };

    const handleOpen = () => dispatch(setModalCreateOpen(true));
    const handleClose = () => dispatch(setModalCreateOpen(false));

    const buttonWithOnClick = cloneElement(button, {onClick: handleOpen});

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            await handleCreatePost(values.title, values.body);
        },
    });

    return (
        <ModalTemplate button={buttonWithOnClick} handleClose={handleClose} open={createPostOpen}>
            <Box sx={styles.container}>
                <Typography variant='h6'>
                    Create Post
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        onChange={formik.handleChange}
                        id={'title'}
                        name={'title'}
                        type={'text'}
                        label={'Title'}
                        value={formik.values.title}
                        error={formik.errors.title}
                        touched={formik.touched.title}
                    />
                    <TextArea
                        style={styles.textArea}
                        placeholder='Post description'
                        name='body'
                        id='body'
                        value={formik.values.body}
                        onChange={formik.handleChange}
                        autoSize={{minRows: 3, maxRows: 5}}
                        allowClear
                    />
                    <Button variant='contained' type='submit' sx={styles.button}>Create</Button>
                </form>
            </Box>
        </ModalTemplate>
    )
}

CreatePostForm.propTypes = {
    button: PropTypes.object.isRequired,
    onCreate: PropTypes.func.isRequired
};

export default CreatePostForm;