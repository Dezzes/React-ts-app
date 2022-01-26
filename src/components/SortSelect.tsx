import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface Options {
	name: string,
	value: string
}

interface Props {
	options: Options[],
	value: string,
	onChange: (e: string) => void
}

const SortSelect: React.FC<Props> = ({ options, onChange, value }) => {

	const styles = {
		FormControlStyle: {
			mt: "10px",
			width: "200px",
			backgroundColor: "white"
		}
	}

	return (
		<FormControl sx={styles.FormControlStyle}>
			<InputLabel id="demo-simple-select-label">Sort by</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				label="Sort by"
				onChange={(e) => onChange(e.target.value)}
			>
				{options.map(option => (
					<MenuItem key={option.value} value={option.value}>
						{option.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default SortSelect
