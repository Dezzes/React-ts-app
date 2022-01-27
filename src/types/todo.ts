export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export enum TodoActionTypes {
    ADD_TODO = "ADD_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "ADD_TODO_ERROR",
    FETCH_TODO = "FETCH_TODO",
    UPDATE_TODO = "UPDATE_TODO",
    DELETE_TODO = "DELETE_TODO"
}

interface fetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: Todo[]
}

interface fetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}

interface fetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}

interface addTodoAction {
    type: TodoActionTypes.ADD_TODO,
    payload: Todo
}

interface updateTodoAction {
    type: TodoActionTypes.UPDATE_TODO,
    payload: number
}

interface deleteTodoAction {
    type: TodoActionTypes.DELETE_TODO,
    payload: number
}

export type TodoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | addTodoAction | updateTodoAction | deleteTodoAction

export interface TodoState {
    todos: Todo[],
    loading: boolean,
    error: string | null
}
