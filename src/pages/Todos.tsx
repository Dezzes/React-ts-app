import { Box, CircularProgress, Container, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchTodo } from '../store/reducers/action-creators/todo';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/todo/TodoForm';
import { useTypedSelector } from '../components/hooks/TypedUseSelectorHook';
import ItemList from '../components/ItemList';
import TodoItem from '../components/todo/TodoItem';
import { Todo } from '../store/reducers/todo/types';
import Modal from '../components/Modal/Modal';

const Todos = () => {
    const { todos, error, loading } = useTypedSelector(state => state.todo)
    const dispatch = useDispatch()

    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <Container>
            <Modal isOpen={modal} setModal={setModal} title={"Create todo"}>
                <TodoForm setModal={setModal} />
            </Modal>
            <Button onClick={() => setModal(true)} variant="contained" sx={{ mt: "16px" }}>Create todo</Button>
            {error && <Box>{error}</Box>}
            {loading
                ? <Box sx={{ display: "flex" }}> <CircularProgress sx={{ justifyContent: "center" }} /></Box>
                : !!todos.length && <ItemList items={todos} renderItem={(todo: Todo) => <TodoItem todo={todo} key={todo.id} />} />
            }
            {!!todos.length || <Typography variant="h4" sx={{ display: "flex", justifyContent: "center" }}>Create your first todo</Typography>}

        </Container>

    );
};

export default Todos;

