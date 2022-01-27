import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes, Todo } from '../../../types/todo';

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            // dispatch({type: PostActionTypes.FETCH_TOTAL_PAGE_COUNT, payload: Number(response.headers["x-total-count"])})
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        } catch(e) {
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: "Something went wrong"})
        }
    } 
}

export const updateTodoAction = (payload: number) => ({type: TodoActionTypes.UPDATE_TODO, payload})

export const deleteTodoAction = (payload: number) => ({type: TodoActionTypes.DELETE_TODO, payload})

export const addNewTodoAction = (payload: Todo) => ({type: TodoActionTypes.ADD_TODO, payload})