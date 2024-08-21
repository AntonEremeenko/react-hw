import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    editPost: false,
    createPostOpen: false,
}

const modalsSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalEditOpen: state => {
            state.editPost = !state.editPost;
        },
        setModalCreateOpen: state => {
            state.createPostOpen = !state.createPostOpen;
        }
    }
})

export const {
    setModalEditOpen,
    setModalCreateOpen,
} = modalsSlice.actions;

export default modalsSlice.reducer