import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Typography, Grid, Card, CardContent, Box, Button} from '@mui/material';
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
                <Box>
                    <nav>
                        <Link to="/">Home Page</Link>
                    </nav>
                </Box>
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
                                        {todo.description}
                                    </Typography>
                                </CardContent>
                                <Button
                                    component={Link}
                                    to={`/todo/${todo.id}`}
                                    variant="outlined"
                                    color="primary"
                                >
                                    View
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default AllTodosPage;
