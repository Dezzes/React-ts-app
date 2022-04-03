import { Box, Button, Checkbox, CircularProgress, Container, Pagination, Typography } from '@mui/material';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../components/hooks/TypedUseSelectorHook";
import ModalForm from "../components/Modal/Modal";
import PostFilter from "../components/post/PostFilter";
import PostForm from "../components/post/PostForm";
import { getPageCount } from "../components/utils/pagination";
import { fetchPosts } from "../store/reducers/action-creators/post";
import ItemList from '../components/ItemList';
import { Post } from '../store/reducers/Post/types';
import { usePosts } from '../components/hooks/usePost';
import PostItem from '../components/post/PostItem';

function Pages() {
    const { posts, error, loading, totalCount } = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    const [modal, setModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1)
    const [limit, setlimit] = useState(10)

    const searchedAndSortedPost = usePosts()

    useEffect(() => {
        dispatch(fetchPosts(page, limit))
    }, [page])

    return (
        <Container>
            <ModalForm isOpen={modal} setModal={setModal} title={"Create post"}>
                <PostForm setModal={setModal} />
            </ModalForm>

            <PostFilter />

            <Button onClick={() => setModal(true)} variant="contained" sx={{ mt: "16px" }}>Create post</Button>

            {error && <Box>{error}</Box>}

            {loading
                ? <Box sx={{ display: "flex" }}> <CircularProgress sx={{ justifyContent: "center" }} /></Box>
                : <ItemList items={searchedAndSortedPost} renderItem={(post: Post) => (
                    <PostItem key={post.id} post={post} />
                )} />
            }

            {!!posts.length || <Typography variant="h4" sx={{ display: "flex", justifyContent: "center" }}>Create your first post</Typography>}
            {!!posts.length &&
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
                    <Pagination
                        size="large"
                        onChange={(_, page) => setPage(page)}
                        count={getPageCount(totalCount, limit)}
                    />
                </Box>
            }
        </Container>
    );
}

export default Pages;
