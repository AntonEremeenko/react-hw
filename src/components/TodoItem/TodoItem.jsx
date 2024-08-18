import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const TodoItem = ({title, body, id, onRemove}) => {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title + ' ' + id}
                </Typography>
                <Typography variant="h5" component="div">
                    {body}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onRemove({title, body, id})}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default TodoItem;