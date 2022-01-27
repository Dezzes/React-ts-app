import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { useTypedSelector } from '../hooks/TypedUseSelectorHook';

const TodoList: React.FC = () => {
    const { todos } = useTypedSelector((state) => state.todo)

    return (
        <List sx={{ margin: "24px auto", bgcolor: 'background.paper' }}>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </List>
    );
};

export default TodoList;
