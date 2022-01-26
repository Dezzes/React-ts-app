import styled from '@emotion/styled/types/base';
import { Box, AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {

    const buttonStyles = {
        mr: "24px"
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <Button sx={buttonStyles} color="inherit" component={RouterLink} to="/posts">Posts</Button>
                        <Button sx={buttonStyles} color="inherit" component={RouterLink} to="/todos">Todos</Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
