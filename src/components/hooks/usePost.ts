import { useMemo } from "react";
import { useTypedSelector } from './TypedUseSelectorHook';
import { Post } from "../../store/reducers/Post/types";
import {PostFilter} from '../../store/reducers/Post/types';


export const useSortedPosts = (posts: Post[], sort: keyof PostFilter | "") => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        } 
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = () => {
    const {posts} = useTypedSelector(state => state.posts)
    const {query, sort} = useTypedSelector(state => state.filter)

    const sortedPosts = useSortedPosts(posts, sort)
    
    const searchedAndSortedPost = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(query)
        })
    }, [query, sortedPosts])
    
    return searchedAndSortedPost
}