import TodoList from '../components/todo/TodoList';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { fetchTodo } from '../store/reducers/action-creators/todo';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/todo/TodoForm';

const Todos = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <Container>
            <TodoForm />
            <TodoList />
        </Container>

    );
};

export default Todos;

