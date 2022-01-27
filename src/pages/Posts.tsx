import { Box, Button, Checkbox, CircularProgress, Container, Pagination, } from "@mui/material"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../components/hooks/TypedUseSelectorHook";
import ModalForm from "../components/ModalForm";
import PostFilter from "../components/post/PostFilter";
import PostForm from "../components/post/PostForm";
import PostList from "../components/post/PostList";
import { getPageCount } from "../components/utils/pagination";
import { fetchPosts } from "../store/reducers/action-creators/post";

function Pages() {
    const posts = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    const [modal, setModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1)
    const [limit, setlimit] = useState(10)


    useEffect(() => {
        dispatch(fetchPosts(page, limit))
    }, [page])

    return (
        <Container>
            <ModalForm isOpen={modal} setModal={setModal}>
                <PostForm setModal={setModal} />
            </ModalForm>

            <PostFilter />

            <Button onClick={() => setModal(true)} variant="contained" sx={{ mt: "16px" }}>Create a post</Button>

            {posts.error && <Box>{posts.error}</Box>}
            {posts.loading
                ? <Box><CircularProgress /></Box>
                : <PostList />
            }
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                    size="large"
                    onChange={(_, page) => setPage(page)}
                    count={getPageCount(posts.totalCount, limit)}
                />
            </Box>
        </Container>
    );
}

export default Pages;
