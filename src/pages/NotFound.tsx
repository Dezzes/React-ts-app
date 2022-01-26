import { Typography, Container } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';

const NotFound = () => {
    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
            <Typography>Page is not found</Typography>
        </Container>

    );
};

export default NotFound;
