import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import React, {cloneElement, useState} from "react";
import ModalTemplate from "../UI/ModalTemplate/index.js";
import {useFormik} from "formik";
import FormInput from "../UI/FormInput/index.js";
import TextArea from "antd/es/input/TextArea";
import validationSchema from "./validationSchema.js";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useUpdatePostMutation} from "../../redux/postsAPI/postsAPI.js";

const EditPostForm = ({button, title, body, onSubmit, postId}) => {

    const [open, setOpen] = useState(false);

    const [updatePost] = useUpdatePostMutation();

    const [titleEdit, setTitle] = useState(title);
    const [bodyEdit, setBody] = useState(body);

    const handleUpdate = async () => {
        try {
            await updatePost({id: postId, titleEdit, bodyEdit}).unwrap();
            console.log('Post updated successfully');
            handleClose();
        } catch (err) {
            console.error('Failed to update the post:', err);
        }
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const buttonWithOnClick = cloneElement(button, {onClick: handleOpen});

    const formik = useFormik({
        initialValues: {
            title,
            body
        },
        validationSchema,
        onSubmit: async (values) => {
            setTitle(values.title);
            setBody(values.body);
            await handleUpdate()
            onSubmit(values.title, values.body);
        }
    })

    return (
        <ModalTemplate button={buttonWithOnClick} handleClose={handleClose} open={open}>
            <Box sx={styles.container}>
                <Typography variant='h6'>
                    Edit Post
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        onChange={formik.handleChange}
                        id={'title'}
                        name={'title'}
                        type={'text'}
                        label={'title'}
                        value={formik.values.title}
                        error={formik.errors.title}
                        touched={formik.touched.title}
                    />

                    <TextArea
                        style={styles.textArea}
                        onChange={formik.handleChange}
                        placeholder='Post description'
                        name='body'
                        id='body'
                        value={formik.values.body}
                        error={formik.errors.body}
                        autoSize={{minRows: 3, maxRows: 5}}
                        allowClear
                    />

                    <Button variant='outlined' sx={styles.button} type={'submit'}>
                        Save changes
                    </Button>
                </form>
            </Box>
        </ModalTemplate>
    )
}

EditPostForm.propTypes = {
    button: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    postId: PropTypes.any.isRequired
}
export default EditPostForm;