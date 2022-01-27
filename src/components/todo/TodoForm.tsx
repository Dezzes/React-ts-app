import { Todo } from '../../types/todo';
import { useDispatch } from 'react-redux';
import { FormControl, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { addNewTodoAction } from '../../store/reducers/action-creators/todo';

const TodoForm = () => {
    const _ = require("lodash")
    const dispatch = useDispatch()

    const [todo, setTodo] = useState({ title: "" })

    function addNewTodo(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (todo.title === "") return
        const newTodo: Todo = {
            ...todo,
            id: _.uniqueId(100),
            userId: 666,
            completed: false
        }
        dispatch(addNewTodoAction(newTodo))
        setTodo({ title: "" })
    }

    return (
        <FormControl fullWidth margin='normal'>
            <TextField
                margin='normal'
                id="outlined-basic"
                label="Todo description"
                variant="outlined"
                fullWidth
                sx={{ background: "white", wordWrap: "break-word" }}
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <Button
                sx={{ minWidth: "64px", mt: "15px", maxWidth: "fit-content" }}
                variant="contained"
                color="success"
                onClick={(e) => addNewTodo(e)}
            >
                Add todo
            </Button>
        </FormControl>
    );
};

export default TodoForm;
