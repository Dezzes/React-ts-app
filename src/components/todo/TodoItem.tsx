import { CardContent, FormControlLabel, Switch, Button, SxProps, Theme, Card, CardActions, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Todo } from '../../store/reducers/todo/types';
import { useDispatch } from 'react-redux';
import { updateTodoAction, deleteTodoAction } from '../../store/reducers/action-creators/todo';

interface Props {
    todo: Todo,
}

const TodoItem: React.FC<Props> = React.memo(({ todo }) => {
    const dispatch = useDispatch()

    const styles: Record<string, SxProps<Theme>> = {

        CardStyle: {
            marginTop: "15px",
            display: "flex",
            flexDirection: { xs: 'column', sm: "row" },
            justifyContent: "space-between",
            alignItems: "space-between"
        },

        CardActionsStyle: {
            display: "flex",
            flexShrink: 0,
            justifyContent: "space-between"
        },


    }

    return (
        <Card sx={styles.CardStyle}>
            <CardContent sx={styles.CardContentStyle}>
                <Typography variant='h6'>{todo.id}. {todo.title}</Typography>
            </CardContent>
            <CardActions sx={styles.CardActionsStyle}>
                <FormControlLabel
                    sx={styles.FormControlLabelStyle}
                    control={<Switch name={`Todo${todo.id}`} checked={todo.completed} onChange={() => dispatch(updateTodoAction(todo.id))} />}
                    label={todo.completed ? "Finished" : "In progress"}
                />
                <Button sx={styles.ButtonStyle} onClick={() => dispatch(deleteTodoAction(todo.id))} size='small' variant="contained" color="error"><DeleteIcon fontSize='small' /></Button>
            </CardActions>
        </Card>
    );
});

export default TodoItem

