import { PostState, PostAction, PostActionTypes, Post } from "./types"

const initialState: PostState = {
  posts: [],
  error: null,
  loading: false,
  totalCount: 0
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
      case PostActionTypes.ADD_POST:
        return {...state, posts: [...state.posts, action.payload]}
      case PostActionTypes.REMOVE_POST:
        return {...state, posts: [...state.posts].filter((post: Post) => (post.id !== action.payload.id))}
      case PostActionTypes.FETCH_POST:
        return {...state, loading: true}
      case PostActionTypes.FETCH_POST_SUCCESS:
        return {...state, loading: false, posts: action.payload}
      case PostActionTypes.FETCH_POST_ERROR:
        return {...state, loading: false, error: action.payload}
      case PostActionTypes.FETCH_TOTAL_PAGE_COUNT:
        return {...state, totalCount: action.payload}    
      default:
        return state
    }
} 