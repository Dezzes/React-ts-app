import { Box } from '@mui/system';
import React from 'react'
import { useDispatch } from 'react-redux';
import SortSelect from './SortSelect';
import { useTypedSelector } from './hooks/TypedUseSelectorHook';
import { filterPostsWithInput, filterPostsWithSelect } from '../store/reducers/action-creators/filter';
import { TextField } from '@mui/material';

const PostFilter: React.FC = () => {
	const { sort } = useTypedSelector(state => state.filter)
	const dispatch = useDispatch()

	return (
		<Box>
			<Box>
				<TextField
					fullWidth
					sx={{ background: "white", mt: "10px" }}
					id="outlined-basic"
					label="Type to search by title"
					variant="outlined"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(filterPostsWithInput(e.target.value))}
				/>
			</Box>
			<SortSelect
				value={sort}
				options={[
					{ value: "title", name: "Title" },
					{ value: "body", name: "Description" }
				]}
				onChange={selectedSort => dispatch(filterPostsWithSelect(selectedSort))}
			/>
		</Box>
	)
}

export default PostFilter
