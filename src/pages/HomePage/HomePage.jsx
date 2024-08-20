import React, { useEffect, useState } from 'react';
import { Grid, Container, Box } from "@mui/material";
import TodoForm from "../../components/form/TodoForm";
import { cloneDeep } from "lodash";
import TodoItem from "../../components/TodoItem";
import storageService from "../../utils/StorageService.js";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [todos, setTodos] = useState([]);

    const saveTodo = async (data) => {
        try {
            const savedData = await storageService.saveItem(data);
            const todosCopy = cloneDeep(todos);
            todosCopy.push(savedData);
            setTodos(todosCopy);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemove = async ({ id: itemID }) => {
        const { id } = await storageService.deleteItem(itemID);
        const updatedData = todos.filter((item) => {
            return item.id !== id;
        });

        setTodos(updatedData);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await storageService.getData();
                setTodos(data);
            } catch (e) {
                console.log(e);
            }
        };

        getData();
    }, []);

    return (
        <Container maxWidth='1400px'>
            <Grid container spacing={5}>
                <Grid item xs={5} px={5}>
                    <Box>
                        <nav>
                            <Link to="/all-todos">All Todos Page</Link>
                        </nav>
                    </Box>
                    <TodoForm onSubmit={saveTodo} />
                </Grid>
                <Grid py={5} container xs={6} item spacing={2}>
                    {!!todos.length && todos.map(item => (
                        <Grid key={item.id} item xs={3}>
                            <TodoItem
                                title={item.title}
                                description={item.description}
                                id={item.id}
                                status={item.completed}
                                onRemove={handleRemove}
                                onStatusChange={(updatedTodo) => {
                                    const updatedTodos = todos.map(todo =>
                                        todo.id === updatedTodo.id ? updatedTodo : todo
                                    );
                                    setTodos(updatedTodos);
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;