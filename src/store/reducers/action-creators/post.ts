import { Post, PostActionTypes } from './../../../types/post';
import { PostAction } from '../../../types/post';
import { Dispatch } from 'redux';
import axios from 'axios';

export const addNewPostAction = (payload: Post) => {
    return {type: PostActionTypes.ADD_POST, payload}
}

export const removePostAction = (payload: Post) => {
    return {type: PostActionTypes.REMOVE_POST, payload}
}

export const fetchPosts = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POST})
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            dispatch({type: PostActionTypes.FETCH_TOTAL_PAGE_COUNT, payload: Number(response.headers["x-total-count"])})
            dispatch({type: PostActionTypes.FETCH_POST_SUCCESS, payload: response.data})
        } catch(e) {
            dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: "Something went wrong"})
        }
    } 
}
