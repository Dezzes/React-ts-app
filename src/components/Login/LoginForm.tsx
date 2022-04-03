import React, { useEffect, useState } from 'react'
import { Button, Typography, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import styles from "./LoginForm.module.css"
import { useTypedSelector } from '../hooks/TypedUseSelectorHook';
import IUser from '../../types/IUser';
import { AuthActionCreators } from '../../store/reducers/action-creators/auth';


const LoginForm = () => {

    const { error } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    const [user, setUser] = useState<IUser>({
        username: "",
        password: ""
    })

    useEffect(() => {
        dispatch(AuthActionCreators.setError(""))
    }, [user.username, user.password]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(AuthActionCreators.login(user.username, user.password))
        setUser({ ...user, username: "", password: "" })
    }
    return (
        <Box className={styles.formCenter}>
            <Box className={styles.form} component="form" onSubmit={handleSubmit}>

                <Typography className={error ? styles.errorMsg : ""}>{error}</Typography>

                <Typography variant='h5'>Авторизация</Typography>
                <TextField
                    autoFocus
                    error={Boolean(error)}
                    margin="normal"
                    required
                    id="username"
                    label="Логин"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                />

                <TextField
                    error={Boolean(error)}
                    margin="normal"
                    required
                    id="password"
                    label="Пароль"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Button type='submit' variant="contained" className={styles.submitBtn}>Войти</Button>
            </Box>
        </Box>
    )
}

export default LoginForm