import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { styles } from './styles';
import { Link } from "react-router-dom";
import storageService from "../../utils/StorageService.js";

const TodoItem = ({ title, description, id, status: initialStatus = 'not-completed', onRemove, onStatusChange }) => {
    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {

        setStatus(initialStatus);
    }, [initialStatus]);

    const handleStatusChange = async (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);

        const updatedTodo = { id, title, description, completed: newStatus };
        onStatusChange(updatedTodo);

        // Обновляем статус в LocalStorage
        const data = await storageService.getData();
        const updatedData = data.map(item =>
            item.id === id ? { ...item, completed: newStatus } : item
        );
        await storageService.rewriteStorageData(updatedData);
    };

    return (
        <Card sx={styles.cardSize}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title + ' ' + id}
                </Typography>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={styles.selected}>
                <FormControl fullWidth>
                    <InputLabel id="status-select-label">Change state</InputLabel>
                    <Select
                        labelId="status-select-label"
                        id="status-select"
                        value={status}
                        input={<OutlinedInput label="Change state" />}
                        onChange={handleStatusChange}
                    >
                        <MenuItem value="completed">Completed</MenuItem>
                        <MenuItem value="not-completed">Not Completed</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    component={Link}
                    to={`/todo/${id}`}
                    variant="outlined"
                    color="primary"
                >
                    View
                </Button>
                <Button size="small" onClick={() => onRemove({ title, description, id })}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default TodoItem;
