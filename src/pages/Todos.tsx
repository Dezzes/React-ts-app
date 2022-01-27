import TodoList from '../components/todo/TodoList';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { fetchTodo } from '../store/reducers/action-creators/todo';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/todo/TodoForm';
import { useTypedSelector } from '../components/hooks/TypedUseSelectorHook';

const Todos = () => {
    const { todos, error, loading } = useTypedSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <Container>
            <TodoForm />
            {error && <Box>{error}</Box>}
            {loading
                ? <Box sx={{ display: "flex" }}> <CircularProgress sx={{ justifyContent: "center" }} /></Box>
                : !!todos.length && <TodoList />
            }
            {!!todos.length || <Typography variant="h4" sx={{ display: "flex", justifyContent: "center" }}>Create your first todo</Typography>}

        </Container>

    );
};

export default Todos;

