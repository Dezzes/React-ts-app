import { Button, Card, CardActions, CardContent, Typography, SxProps, Theme } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removePostAction } from '../../store/reducers/action-creators/post';
import { Post } from '../../types/post';

interface Props {
	post: Post
}

const PostItem: React.FC<Props> = React.memo(({ post }) => {

	const styles: Record<string, SxProps<Theme>> = {
		CardStyle: {
			display: "flex",
			flexDirection: { xs: 'column', sm: "row" },
			justifyContent: "space-between",
			marginTop: "15px"
		},
		ButtonStyle: {
			width: {
				xs: '100%', sm: "auto"
			}
		}
	}

	const dispatch = useDispatch()

	function removePost(post: Post) {
		dispatch(removePostAction(post))
	}

	return (
		<Card sx={styles.CardStyle}>
			<CardContent>
				<Typography variant='h6'>
					{post.id}. {post.title}
				</Typography>
				<Typography>
					{post.body}
				</Typography>
			</CardContent>
			<CardActions>
				<Button sx={styles.ButtonStyle} variant="contained" color="error" onClick={() => removePost(post)}>Delete</Button>
			</CardActions>
		</Card>
	)
})

export default PostItem
