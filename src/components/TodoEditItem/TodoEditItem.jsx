import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Select,
    MenuItem,
    Button,
    Snackbar,
    Alert,
    InputLabel,
    OutlinedInput,
    FormControl
} from '@mui/material';
import {useParams, useNavigate, Link} from 'react-router-dom';
import storageService from "../../utils/StorageService.js";

const TodoEditItem = () => {
    const { id } = useParams();
    const initialStatus = 'not-completed';
    const [todo, setTodo] = useState({ title: '', description: '', completed: initialStatus });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const todos = await storageService.getData();
            const selectedTodo = todos.find(todo => todo.id === parseInt(id, 10));

            if (selectedTodo) {
                setTodo({
                    title: selectedTodo.title,
                    description: selectedTodo.description || '',
                    completed: selectedTodo.completed || initialStatus
                });
            }
        };

        fetchData();
    }, [id]);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    }, []);

    const handleSave = useCallback(async () => {
        const todos = await storageService.getData();
        const updatedTodos = todos.map(todoItem =>
            todoItem.id === parseInt(id, 10) ? { ...todoItem, ...todo } : todoItem
        );
        await storageService.rewriteStorageData(updatedTodos);
        setOpenSnackbar(true);
    }, [id, todo]);

    const handleDelete = useCallback(async () => {
        await storageService.deleteItem(parseInt(id, 10));
        navigate('/');
    }, [id, navigate]);

    const handleCloseSnackbar = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }, []);

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box>
                        <nav>
                            <Link to="/">Home Page</Link>
                        </nav>
                    </Box>
                    <Typography variant="h5" component="h2">
                        Edit Todo
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="title"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={todo.title}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={todo.description}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="status-select-label">Change state</InputLabel>
                        <Select
                            name="completed"
                            labelId="status-select-label"
                            input={<OutlinedInput label="Change state" />}
                            variant="outlined"
                            fullWidth
                            value={todo.completed}
                            onChange={handleChange}
                        >
                            <MenuItem value="completed">Completed</MenuItem>
                            <MenuItem value="not-completed">Not Completed</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
                        Save Changes
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" fullWidth onClick={handleDelete}>
                        Delete
                    </Button>
                </Grid>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Changes saved successfully!
                    </Alert>
                </Snackbar>
            </Grid>
        </Box>
    );
};

export default TodoEditItem;
