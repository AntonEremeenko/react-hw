import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import storageService from "../../utils/StorageService.js";

const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        const fetchTodos = async () => {
            try {
                const storedTodos = await storageService.getData();
                setTodos(storedTodos);
            } catch (error) {
                console.error("Failed to fetch todos:", error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <Box className={'all-todos-page'}>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    All Todos
                </Typography>
                <Grid container spacing={3}>
                    {todos.map((todo) => (
                        <Grid item key={todo.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {todo.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {todo.body}
                                    </Typography>
                                </CardContent>
                                <Link to={`/todo/${todo.id}`}>
                                    View
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AllTodosPage;
