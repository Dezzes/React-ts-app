import PostItem from './PostItem'
import { Box } from '@mui/system';
import { Post } from '../../types/post';
import { usePosts } from '../hooks/usePost';

const PostList: React.FC = () => {

	const searchedAndSortedPost = usePosts()

	return (
		<Box>
			{searchedAndSortedPost.map((post, index) => (
				<PostItem key={post.id} post={post} index={index + 1} />
			))}
		</Box>
	)
}

export default PostList
