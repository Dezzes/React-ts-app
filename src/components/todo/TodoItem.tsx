import { ListItem, FormControlLabel, ListItemButton, ListItemText, Switch, Button, SxProps, Theme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Todo } from '../../types/todo';
import { useDispatch } from 'react-redux';
import { updateTodoAction, deleteTodoAction } from '../../store/reducers/action-creators/todo';


interface Props {
    todo: Todo,
}

const TodoItem: React.FC<Props> = React.memo(({ todo }) => {
    const labelId = `checkbox-list-secondary-label-${todo.id}`;
    const dispatch = useDispatch()

    const styles: Record<string, SxProps<Theme>> = {

        ListItemStyle: {
            marginTop: "15px",
        },
        ButtonStyle: {
            marginLeft: "10px",
            flexShrink: 0,
        },

        FormControlLabelStyle: {
            width: "150px",
            flexShrink: 0,
        }
    }

    return (
        <ListItem disablePadding sx={styles.ListItemStyle}>
            <Button sx={styles.ButtonStyle} onClick={() => dispatch(deleteTodoAction(todo.id))} size='small' variant="contained" color="error" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <ListItemButton sx={styles.ListItemButtonStyle}>
                <ListItemText id={labelId} primary={todo.title} />
            </ListItemButton>
            <FormControlLabel
                sx={styles.FormControlLabelStyle}
                control={<Switch name={`Todo${todo.id}`} checked={todo.completed} onChange={() => dispatch(updateTodoAction(todo.id))} />}
                label={todo.completed ? "Finished" : "In progress"}
            />
        </ListItem>
    );
});

export default TodoItem

