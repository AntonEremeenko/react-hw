import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <Box className={'not-found-page'}>
            <Typography variant="h3" align="center" gutterBottom>
                Page Not Found
            </Typography>
        </Box>
    );
};

export default NotFoundPage;