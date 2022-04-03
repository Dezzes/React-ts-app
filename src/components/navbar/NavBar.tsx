import { Box, AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthActionCreators } from '../../store/reducers/action-creators/auth';
import { useTypedSelector } from '../hooks/TypedUseSelectorHook';
import styles from "./NavBar.module.css"

const NavBar: React.FC = () => {

    const { isAuth } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        isAuth
            ?
            <Box component="nav" className={styles.navbar}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container>
                            <Button color="inherit" component={Link} to="react-ts-app/posts">Posts</Button>
                            <Button color="inherit" component={Link} to="react-ts-app/todos">Todos</Button>
                            <Button className={styles.logoutBtn} color="inherit" onClick={() => dispatch(AuthActionCreators.logout())}>Logout</Button>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
            :
            <Box component="nav" className={styles.navbar}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Container>
                            <Button className={styles.loginBtn} color="inherit" component={Link} to="/login">Войти</Button>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>

    );
};

export default NavBar;
