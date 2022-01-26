
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PostFilter {
  title: string,
  body: string
} 

export enum PostActionTypes{
  ADD_POST = "ADD_NEW_POST",
  REMOVE_POST = "REMOVE_POST",
  FETCH_POST = "FETCH_POST",
  FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
  FETCH_POST_ERROR = "FETCH_POST_ERROR",
  FETCH_TOTAL_PAGE_COUNT = "FETCH_TOTAL_PAGE_COUNT",
}

interface addPostAction {
  type: PostActionTypes.ADD_POST,
  payload: Post
}

interface removePost {
  type: PostActionTypes.REMOVE_POST,
  payload: Post
}

interface fetchPostAction {
  type: PostActionTypes.FETCH_POST,
}

interface fetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR,
  payload: string
}

interface fetchTotalPageCount {
  type: PostActionTypes.FETCH_TOTAL_PAGE_COUNT,
  payload: number
}

interface fetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS,
  payload: Post[]
}

export type PostAction = addPostAction| removePost | fetchPostAction | fetchPostErrorAction | fetchPostSuccessAction | fetchTotalPageCount

export type PostState = {
  posts: Post[],
  loading: boolean,
  error: string | null
  totalCount: number
}

