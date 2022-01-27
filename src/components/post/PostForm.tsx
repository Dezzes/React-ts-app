import { TextField, Button, FormControl } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewPostAction } from '../../store/reducers/action-creators/post';
import { Post } from '../../types/post';

interface Props {
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PostForm: React.FC<Props> = ({ setModal }) => {
	const _ = require("lodash")

	const [post, setPost] = useState({ title: "", body: "" })
	const dispatch = useDispatch()

	function addNewPost(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		if (post.title === "" || post.body === "") return
		const newPost: Post = {
			...post,
			id: _.uniqueId(100),
			userId: 666
		}
		dispatch(addNewPostAction(newPost))
		setPost({ title: "", body: "" })
		setModal(false)
	}

	return (
		<FormControl fullWidth margin='normal'>
			<TextField
				margin='normal'
				id="outlined-basic"
				label="Post title"
				variant="outlined"
				fullWidth
				sx={{ background: "white" }}
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
			/>
			<TextField
				margin='normal'
				id="outlined-basic"
				label="Post description"
				variant="outlined"
				sx={{ background: "white" }}
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
			/>
			<Button
				sx={{ minWidth: "64px", mt: "15px" }}
				variant="contained"
				color="success"
				onClick={(e) => addNewPost(e)}
			>
				Create a post
			</Button>
		</FormControl>
	)
}

export default PostForm
