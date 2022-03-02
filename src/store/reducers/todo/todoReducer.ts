import { TodoAction, TodoActionTypes, TodoState } from './types';

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true, todos: []}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.UPDATE_TODO:
            return {...state, todos: [...state.todos].map((todo) => {
                if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })}
        case TodoActionTypes.DELETE_TODO:
            return {...state, todos: [...state.todos].filter((todo) => todo.id !== action.payload)}
        default:
            return state
    }
}