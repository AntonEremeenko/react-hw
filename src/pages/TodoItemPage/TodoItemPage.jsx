import React from 'react';
import TodoEditItem from "../../components/TodoEditItem";
import {Box} from "@mui/material";

const TodoItemPage = () => {

    return (
        <Box className={'todo-item-page'}>
            <TodoEditItem />
        </Box>
    );
};

export default TodoItemPage;